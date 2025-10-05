import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { db } from './db/kysely.provider';

@Module({
  imports: [TodosModule],
  providers: [
    {
      provide: 'Kysely',
      useValue: db, // ✅ Kysely 인스턴스를 NestJS에 주입
    },
  ],
  exports: ['Kysely'], // 다른 모듈에서도 쓸 수 있게 export
})
export class AppModule {}
