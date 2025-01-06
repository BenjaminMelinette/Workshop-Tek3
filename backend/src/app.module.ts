import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: "myuser",
    password: "mypassword",
    database: "mydatabase",
    autoLoadEntities: true,
    synchronize: false
  }),
  TypeOrmModule.forFeature([User]),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
