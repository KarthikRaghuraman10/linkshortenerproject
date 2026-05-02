import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
  id: integer().generatedAlwaysAsIdentity().primaryKey(),
  shortCode: text().notNull().unique(),
  url: text().notNull(),
  userId: text().notNull(),
  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
});

export type InsertLink = typeof links.$inferInsert;
export type SelectLink = typeof links.$inferSelect;
