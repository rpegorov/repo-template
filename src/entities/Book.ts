import {BaseEntity, Column, Entity, PrimaryColumn} from "typeorm";
import {v4 as uuid4} from "uuid";
@Entity()
export class Book extends BaseEntity {

    @PrimaryColumn("uuid")
    id: string = uuid4();

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    description: string;
}
