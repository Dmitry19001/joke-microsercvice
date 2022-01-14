import { Joke } from "src/jokes/entities/joke.entity";
import {Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column()
    description: string;

    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    modified: Date;

    @Column({default: 1})
    isActive: boolean;

    @OneToMany(()=> Joke, (joke) => joke.category)
    jokes: Joke[];
}