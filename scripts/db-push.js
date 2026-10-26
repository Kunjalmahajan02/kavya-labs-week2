// Creates/updates the tables before each build. Runs `prisma db push` against the "kavya"
// schema only, so tables belonging to other projects in the same database are never touched.
const { execSync } = require("child_process");
const { withSchema } = require("../lib/dbUrl");

if (!process.env.DATABASE_URL) {
  console.warn("[db-push] DATABASE_URL is not set, skipping database setup.");
  process.exit(0);
}

execSync("npx prisma db push --skip-generate", {
  stdio: "inherit",
  env: {
    ...process.env,
    DATABASE_URL: withSchema(process.env.DATABASE_URL),
    DIRECT_URL: withSchema(process.env.DIRECT_URL || process.env.DATABASE_URL),
  },
});
