import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;


    @Column('text')
    name: string;

    @Column('text')
    lastName: string;

    @Column('text')
    email: string;

    @Column('text')
    password: string;

    @Column('bool')
    isBanned: boolean;

    //relaciones con rol y review


}
