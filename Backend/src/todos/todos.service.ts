import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Kysely } from 'kysely';
import { Database } from '../db/kysely.provider';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  order: number;
}

@Injectable()
export class TodosService {
  constructor(@Inject('Kysely') private readonly db: Kysely<Database>) {}

  async getAll(): Promise<Todo[]> {
    return this.db.selectFrom('todos').selectAll().orderBy('order').execute();
  }

  async getOne(id: number): Promise<Todo> {
    const todo = await this.db
      .selectFrom('todos')
      .selectAll()
      .where('id', '=', id)
      .executeTakeFirst();

    if (!todo) throw new NotFoundException(`Todo ${id} not found`);
    return todo;
  }

  async create(text: string): Promise<Todo> {
    const [todo] = await this.db
      .insertInto('todos')
      .values({
        text,
        done: false,
        order: Date.now(),
      })
      .returningAll()
      .execute();

    if (!todo) throw new Error('Failed to create todo');
    return todo;
  }

  async update(id: number, data: Partial<Omit<Todo, 'id'>>): Promise<Todo> {
    const [todo] = await this.db
      .updateTable('todos')
      .set(data)
      .where('id', '=', id)
      .returningAll()
      .execute();

    if (!todo) throw new NotFoundException(`Todo ${id} not found`);
    return todo;
  }

  async delete(id: number): Promise<void> {
    await this.db.deleteFrom('todos').where('id', '=', id).execute();
  }
}
