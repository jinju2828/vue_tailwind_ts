import { db } from "./kysely.provider";

async function migrate() {
  try {
    await db.schema
      .createTable("todos")
      .ifNotExists()
      .addColumn("id", "serial", (col) => col.primaryKey())
      .addColumn("text", "text", (col) => col.notNull())
      .addColumn("done", "boolean", (col) => col.notNull().defaultTo(false))
      .addColumn("order", "integer", (col) => col.notNull())
      .execute();

    console.log("✅ Migration completed: 'todos' table created!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Migration failed:", err);
    process.exit(1);
  }
}

migrate();
