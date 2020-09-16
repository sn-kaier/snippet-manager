CREATE OR REPLACE VIEW "public"."comment_reactions_group" AS
    SELECT comment_reaction.reaction_id AS reactionId,
           comment_reaction.comment_id AS commentId,    count(comment_reaction.id) AS count
    FROM comment_reaction
      GROUP BY comment_reaction.comment_id, comment_reaction.reaction_id;