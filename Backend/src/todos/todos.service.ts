import { Injectable, NotFoundException } from '@nestjs/common';
import { db } from '../db/kysely.provider';

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  order: number;
}

@Injectable()
export class TodosService {
  async getAll() {
    return db.selectFrom('todos').selectAll().orderBy('order').execute();
  }

  async getOne(id: number) {
    return db.selectFrom('todos').selectAll().where('id', '=', id).executeTakeFirst();
  }

  async create(text: string) {
    const [todo] = await db
      .insertInto('todos')
      .values({ text, done: false, order: Date.now() })
      .returningAll()
      .execute();
    if (!todo) throw new Error('Failed to create todo');
    return todo;
  }

  async update(id: number, data: Partial<Omit<Todo, 'id'>>) {
    const [todo] = await db
      .updateTable('todos')
      .set(data)
      .where('id', '=', id)
      .returningAll()
      .execute();
    if (!todo) throw new NotFoundException(`Todo ${id} not found`);
    return todo;
  }

  async delete(id: number) {
    await db.deleteFrom('todos').where('id', '=', id).execute();
  }
}
