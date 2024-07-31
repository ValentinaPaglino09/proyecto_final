import { IsString } from "class-validator";
import { Movie } from "src/movies/entities/movie.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('review')
export class Review {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    description: string;

    @Column('float')
    rating: number;



    //relaciones con movies y users?
    // @ManyToOne(() => Movie)
    // user: User[];

    //probar:
    // @ManyToOne(() => Movie, movie => movie.reviews)
    // movie: Movie;
  
    // @OneToMany(() => Comment, comment => comment.review)
    // comments: Comment[];
    
}
