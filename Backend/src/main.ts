// src/main.ts
import { db } from './db/kysely.provider';

async function bootstrap() {
  try {
    // 그냥 간단한 select 1로 연결 확인
    const result = await db
      .selectFrom('todos')
      .selectAll()
      .limit(1)
      .execute();

    console.log('✅ PostgreSQL connected successfully!');
    console.log('Sample data:', result);
  } catch (err) {
    console.error('❌ Database connection failed:', err);
  }
}

bootstrap();
