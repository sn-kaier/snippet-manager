-- the function to call when the trigger is invoked
CREATE OR REPLACE FUNCTION trigger_on_insert_public_document()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL AS $BODY$
BEGIN
  -- increment the count of written documents
      IF NEW IS NOT NULL THEN
        IF NEW.is_public is FALSE THEN
            UPDATE "user"
            SET count_private_docs = count_private_docs + 1
            WHERE auth_id = NEW.author_id;
        END IF;
      ELSE
          IF OLD.is_public is FALSE THEN
            UPDATE "user"
            SET count_private_docs = count_private_docs - 1
            WHERE auth_id = OLD.author_id;
          END IF;
      END IF;
      -- Return the NEW record so that update can carry on as usual
  RETURN NEW;
END;
$BODY$;

drop trigger if exists trigger_add_private_document on document;
-- create the trigger
CREATE TRIGGER trigger_add_private_document
  AFTER INSERT OR DELETE
  ON document
  FOR EACH ROW
    EXECUTE PROCEDURE trigger_on_insert_public_document();
