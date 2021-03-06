-- the function to call when the trigger is invoked
CREATE OR REPLACE FUNCTION trigger_on_insert_comment()
    RETURNS TRIGGER
    LANGUAGE PLPGSQL AS
$BODY$
BEGIN
    -- increment the count of written comments
    IF NEW IS NULL THEN
        -- update user.count_written_comments
        UPDATE "user"
        SET count_written_comments = count_written_comments - 1
        WHERE auth_id = OLD.author_id;
        -- update document.count_comments
        update "document"
        set count_comments = document.count_comments - 1
        where id = OLD.document_id;
    ELSE
        -- update user.count_written_comments
        UPDATE "user"
        SET count_written_comments = count_written_comments + 1
        WHERE auth_id = NEW.author_id;
        -- update document.count_comments
        update "document"
        set count_comments = document.count_comments + 1
        where id = NEW.document_id;
    END IF;
    -- Return the NEW record so that update can carry on as usual
    RETURN NEW;
END;
$BODY$;

drop trigger if exists trigger_add_comment_reaction on comment;
-- create the trigger
CREATE TRIGGER trigger_add_comment_reaction
    AFTER INSERT OR DELETE
    ON comment
    FOR EACH ROW
EXECUTE PROCEDURE trigger_on_insert_comment();
