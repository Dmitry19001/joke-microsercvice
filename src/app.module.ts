import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { JokesModule } from './jokes/jokes.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [TestModule, TypeOrmModule.forRoot(), JokesModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
