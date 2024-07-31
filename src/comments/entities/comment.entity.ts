import { Column } from "typeorm";

export class Comment {

    @Column('text')
    content: string;
    
    // una vez seteado puede ser opcion:
    // @ManyToOne(() => Review, review => review.comments)
    // review: Review;
}
