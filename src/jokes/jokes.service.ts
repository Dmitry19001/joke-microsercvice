import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './entities/joke.entity';
import { CategoriesService } from 'src/categories/categories.service'

@Injectable()
export class JokesService {

    constructor(
        @InjectRepository(Joke) private jokesRepository: Repository<Joke>,
        private categoriesService: CategoriesService,
    ) {}

    async handleGetJokesRequest() : Promise<Joke[]> {
        const jokes =  await this.jokesRepository.find();
        return jokes;
    }

    async handleGetJokeByIdRequest(jokeId : number) : Promise<Joke> {
        console.log(`[Handling] got request with param: ${jokeId}`);
        const joke =  await this.jokesRepository.findOne({where: {id : jokeId}});
        return joke;
    }

    async handleCreateJokeRequest(createJokeDto : CreateJokeDto) : Promise<Joke> {
        const joke = new Joke();
        joke.name = createJokeDto.name;
        joke.text = createJokeDto.text;
        joke.isActive = createJokeDto.isActive;

        if (createJokeDto.categoryId) {
            const category = await this.categoriesService.handleGetCategoryByIdRequest(createJokeDto.categoryId);

            if (category) joke.category = category;
        }

        return await this.jokesRepository.save(joke);
    }

    async handleGetJokesByCategoryRequest(id: number) : Promise<Joke[]>{
        console.log(`handleGetJokesByCategory with id: ${id}`);
        const category = await this.categoriesService.handleGetCategoryByIdRequest(id);
        let jokes = [];
        if (category) {
            jokes = await this.jokesRepository.find({where: {category : category}})
        }
        return jokes;
    }

    async handleDeleteJokeByIdRequest(jokeId : number) : Promise<Joke> {
        const joke = await this.jokesRepository.findOne({where: {id : jokeId}})

        if (joke) await this.jokesRepository.delete(jokeId);
        
        return joke;
    }
}
