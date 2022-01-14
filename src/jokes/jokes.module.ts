import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesModule } from 'src/categories/categories.module';
import { Joke } from './entities/joke.entity';
import { JokesController } from './jokes.controller';
import { JokesService } from './jokes.service';

@Module({
    imports: [ TypeOrmModule.forFeature([Joke]), CategoriesModule],
    controllers: [JokesController],
    providers: [JokesService],
    exports: [JokesService]
})
export class JokesModule {}
