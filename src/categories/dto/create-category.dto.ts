export class CreateCategoryDto {
    id?: number;

    name: string;
    description: string;

    created?: Date;
    modified?: Date;
    isActive?: boolean;
}