// Kavya Labs keeps its tables in their own Postgres schema ("kavya") so it can share
// a Supabase database with other projects without touching their tables.
// Users paste the normal Supabase URLs; this adds ?schema=kavya for Prisma.
const SCHEMA = "kavya";

function withSchema(url) {
  if (!url || /[?&]schema=/.test(url)) return url;
  return `${url}${url.includes("?") ? "&" : "?"}schema=${SCHEMA}`;
}

module.exports = { withSchema, SCHEMA };
