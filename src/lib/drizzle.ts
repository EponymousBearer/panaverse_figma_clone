
import { InferModel, sql } from "drizzle-orm";
import {
    pgTable,
    serial,
    text,
    varchar,
    timestamp,
    boolean,
  } from "drizzle-orm/pg-core";

export const todoTable = pgTable("todo", {
    id: serial("id").primaryKey(),
    title: varchar("title", {
        length: 255
    }),
    description: varchar("description"),
    status: boolean("status").default(true).notNull()
  })

export type Todo = InferModel<typeof todoTable>;
export type NewTodo = InferModel<typeof todoTable, "insert">; // insert type

export const db = drizzle(sql);
function drizzle(any: typeof sql) {
    throw new Error("Function not implemented.");
}

