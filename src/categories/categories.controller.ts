import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Controller('categories')
export class CategoriesController {

    constructor(private categoriesService: CategoriesService) {}

    @MessagePattern({cmd: 'create_category_request'})
    async createCategory(data: CreateCategoryDto) : Promise<Category>{
        return await this.categoriesService.handleCreateCategoryRequest(data);
    }

    @MessagePattern({cmd: 'get_categories_request'})
    async getCategories() : Promise<Category[]>{
        return await this.categoriesService.handleGetCategoriesRequest();
    }
}
