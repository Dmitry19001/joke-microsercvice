export class CreateJokeDto {
    id?: number;

    name: string;
    text: string;

    rating?: number;
    unitprice?: number;

    created?: Date;
    modified?: Date;

    isActive: boolean;
    categoryId?: number;
}