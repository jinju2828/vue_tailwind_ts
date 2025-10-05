import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { TodosService, Todo } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(): Promise<Todo[]> {
    return this.todosService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: number): Promise<Todo> {
    const todo = await this.todosService.getOne(id);
    if (!todo) {
        throw new NotFoundException(`Todo with id ${id} not found`);
    }
    return todo;
}

  @Post()
  create(@Body('text') text: string): Promise<Todo> {
    return this.todosService.create(text);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<Omit<Todo, 'id'>>): Promise<Todo> {
    return this.todosService.update(Number(id), data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.todosService.delete(Number(id));
  }
}
