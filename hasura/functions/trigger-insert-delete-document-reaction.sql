CREATE OR REPLACE FUNCTION trigger_on_insert_document_reaction() returns trigger
    language plpgsql
as
$$
declare
    r_id        text;
    blc         integer;
    persist_id  integer;
    react_count integer;
BEGIN
    -- increment the count of written documents
    IF NEW IS NOT NULL THEN
        r_id = NEW.reaction_id;
    ELSE
        r_id = OLD.reaction_id;
    END IF;

    SELECT balance
    INTO blc
    FROM reaction
    WHERE html_code = r_id;

    IF NEW IS NOT NULL THEN
        UPDATE "document"
        SET reaction_balance = reaction_balance + blc
        WHERE id = NEW.document_id;
        UPDATE "user"
        SET balance_document_reaction = balance_document_reaction + blc
        WHERE auth_id = NEW.author_id;
        -- add add the reaction to the reaction group
        INSERT INTO document_reaction_group_persisted (document_id, reaction_id)
        VALUES (NEW.document_id, NEW.reaction_id)
        ON CONFLICT (document_id, reaction_id) DO UPDATE SET count = document_reaction_group_persisted.count + 1;
    ELSE
        UPDATE "document"
        SET reaction_balance = reaction_balance - blc
        WHERE id = OLD.document_id;
        UPDATE "user"
        SET balance_document_reaction = balance_document_reaction - blc
        WHERE auth_id = OLD.author_id;

        -- update document_reaction_group_persisted. decrement count. delete if count = 0
        UPDATE "document_reaction_group_persisted" dp
        SET count = dp.count - 1
        WHERE document_id = OLD.document_id
          AND reaction_id = OLD.reaction_id
        RETURNING count, id into react_count, persist_id;
        IF react_count <= 0 THEN
            DELETE
            FROM "document_reaction_group_persisted" dp
            WHERE id = persist_id;
        END IF;
    END IF;

    -- Return the NEW record so that update can carry on as usual
    RETURN NEW;
END;
$$;

drop trigger if exists trigger_add_document_reaction on document_reaction;
-- create the trigger
CREATE TRIGGER trigger_add_document_reaction
    AFTER INSERT OR DELETE
    ON document_reaction
    FOR EACH ROW
EXECUTE PROCEDURE trigger_on_insert_document_reaction();
