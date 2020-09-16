CREATE OR REPLACE VIEW document_reaction_group AS
      SELECT reaction_id, document_id, count(id)
      FROM document_reaction
      GROUP BY document_id, reaction_id