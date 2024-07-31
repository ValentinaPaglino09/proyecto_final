import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ){}


  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    const data = await this.userRepository.find({
      order: { lastName: 'ASC'},
      //relations: {reviews: true}
    })
    return data;
  }

  async findOne(id: string) {
    return await this.userRepository.findOne({
      where: { id: id },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update({ id: id }, updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepository.delete({ id: id });
  }
}
