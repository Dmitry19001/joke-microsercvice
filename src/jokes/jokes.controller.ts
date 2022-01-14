import { Controller} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CreateJokeDto } from './dto/create-joke.dto';
import { Joke } from './entities/joke.entity';
import { JokesService } from './jokes.service';

@Controller('jokes')
export class JokesController {

    constructor(private jokesService: JokesService) {}

    @MessagePattern({cmd: 'create_joke_request'})
    async createJoke(data: CreateJokeDto) : Promise<Joke>{
        return await this.jokesService.handleCreateJokeRequest(data);
    }

    @MessagePattern({cmd: 'get_jokes_request'})
    async getJokes() : Promise<Joke[]>{
        return await this.jokesService.handleGetJokesRequest();
    }


    @MessagePattern({cmd: 'get_jokes_bycategoryid_request'})
    async getJokesByCateogryId( id : number ) : Promise<Joke[]>{
        return await this.jokesService.handleGetJokesByCategoryRequest(id);
    }

    @MessagePattern({cmd: 'get_joke_byid_request'})
    async getJokeById( id : number ) : Promise<Joke>{
        console.log(`[microservice controller] got request with param: ${id}`);
        return await this.jokesService.handleGetJokeByIdRequest(id);
    }

    @MessagePattern({cmd: 'delete_joke_byid_request'})
    async deleteJokeById( id : number ) : Promise<Joke>{
        return await this.jokesService.handleDeleteJokeByIdRequest(id);
    }
}
