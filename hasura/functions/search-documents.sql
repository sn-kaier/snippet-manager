CREATE EXTENSION pg_trgm;
CREATE INDEX document_gin_idx ON document
    USING GIN ((description || ' ' || title) gin_trgm_ops);
CREATE FUNCTION search_document(search text)
    RETURNS SETOF document AS $$
SELECT *
FROM document
WHERE
        search <% (description || ' ' || title)
ORDER BY
    similarity(search, (description || ' ' || title)) DESC
LIMIT 25;
$$ LANGUAGE sql STABLE;
