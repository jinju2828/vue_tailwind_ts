import { Kysely, PostgresDialect, Generated } from 'kysely';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();

export interface Database {
  todos: {
    id: Generated<number>;  // ✅ 자동 생성 필드임을 명시
    text: string;
    done: boolean;
    order: number;
  };
}

export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    }),
  }),
});
