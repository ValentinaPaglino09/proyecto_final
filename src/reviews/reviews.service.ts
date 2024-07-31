import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ){}


  async create(createReviewDto: CreateReviewDto) {
    return await this.reviewRepository.save(createReviewDto);
  }

  async findAll() {
    const data = await this.reviewRepository.find({
      order: { rating: 'DESC'},
      //relations: { movies: true, users: tue},
      
    })
    return data;
  }

  async findOne(id: string) {
    return await this.reviewRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    return await this.reviewRepository.update({ id: id }, updateReviewDto);
  }

  async remove(id: string) {
    return await this.reviewRepository.delete({ id: id});
  }
}
