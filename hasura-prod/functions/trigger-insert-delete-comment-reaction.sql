-- the function to call when the trigger is invoked
CREATE OR REPLACE FUNCTION trigger_on_insert_comment_reaction()
    RETURNS TRIGGER
    LANGUAGE PLPGSQL AS $BODY$
    declare r_id text;
    declare blc integer;
BEGIN
    -- increment the count of written comments
    IF NEW IS NOT NULL THEN
        r_id = NEW.reaction_id;
    ELSE
        r_id = OLD.reaction_id;
    END IF;

    SELECT balance INTO blc
        FROM reaction
        WHERE html_code = r_id;

    IF NEW IS NOT NULL THEN
        UPDATE "comment"
            SET reaction_balance = reaction_balance + blc
            WHERE id = NEW.comment_id;
        UPDATE "user"
            SET balance_comment_reaction = balance_comment_reaction + blc
            WHERE auth_id = NEW.author_id;
    ELSE
        UPDATE "comment"
            SET reaction_balance = reaction_balance - blc
            WHERE id = OLD.comment_id;
        UPDATE "user"
            SET balance_comment_reaction = balance_comment_reaction - blc
            WHERE auth_id = OLD.author_id;
    END IF;

    -- Return the NEW record so that update can carry on as usual
    RETURN NEW;
END;
$BODY$;

drop trigger if exists trigger_add_comment_reaction on comment_reaction;
-- create the trigger
CREATE TRIGGER trigger_add_comment_reaction
    AFTER INSERT OR DELETE
    ON comment_reaction
    FOR EACH ROW
EXECUTE PROCEDURE trigger_on_insert_comment_reaction();
