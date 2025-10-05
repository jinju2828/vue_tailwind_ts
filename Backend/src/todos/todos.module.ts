import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TodosService } from './todos.service';
import { AppModule } from '../app.module'; // db provider 가져오기 위해 import

@Module({
  imports: [AppModule],
  controllers: [TodosController],
  providers: [TodosService],
})
export class TodosModule {}
