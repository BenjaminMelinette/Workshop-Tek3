import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';


@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  getData(){
    return this.userRepository.find();
  }
  
  addUser(name: string, email: string){
    const user = this.userRepository.create({email, name});
    return this.userRepository.save(user);
  }

  deleteUser(id: number){
    return this.userRepository.delete(id);
  }

  async editUser(id: number, name: string, email: string){
    const user = await this.userRepository.findOne({where : {id}});
    user.email = email;
    user.name = name;
    return this.userRepository.save(user);
  }
}
