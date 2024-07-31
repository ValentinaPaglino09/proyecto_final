import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { Repository } from 'typeorm';
import { Review } from 'src/reviews/entities/review.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
    
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ){}

  async create(createMovieDto: CreateMovieDto) {
    return await this.movieRepository.save(createMovieDto);
  }

  async findAll() {
    const data = await this.movieRepository.find({
      order: { year: 'DESC'},
      //retaltion
      //relations: { reviews: true }
    })
    return data;
  }

  async findOne(id: string) {
    return await this.movieRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateMovieDto: UpdateMovieDto) {
    return await this.movieRepository.update({ id:id }, updateMovieDto);
  }

  async remove(id: string) {
    //consultar si quizas es mejor el soft
    return await this.movieRepository.delete({ id: id });
  }
}
