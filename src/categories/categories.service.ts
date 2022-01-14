import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {

    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

    async handleCreateCategoryRequest(createCategoryDto: CreateCategoryDto) : Promise<Category> {
        const category = new Category();
        category.name = createCategoryDto.name;
        category.description = createCategoryDto.description;

        if (createCategoryDto.isActive) category.isActive = createCategoryDto.isActive;

        return await this.categoryRepository.save(category);
    }

    async handleGetCategoriesRequest() : Promise<Category[]> {
        return await this.categoryRepository.find();
    }

    async findCategoryByName(categoryName: string) : Promise<Category> {
        const category = this.categoryRepository.findOne({where: {name: categoryName}});
        return category;
    }

    async handleGetCategoryByIdRequest(categoryId: number) : Promise<Category> {
        const category = this.categoryRepository.findOne({where: {id: categoryId}});
        return category;
    }

    async handleDeleteCategoryRequest(categoryId : number) : Promise<Category> {
        const category = await this.categoryRepository.findOne({where: {id : categoryId}})

        if (category) await this.categoryRepository.delete(categoryId);
        
        return category;
    }
}
