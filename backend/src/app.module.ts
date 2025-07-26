import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SectionsModule } from './modules/sections/sections.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/vibeCoding'),
    SectionsModule,
    ConfigModule.forRoot(
      {
        isGlobal: true
      }
    ),
  ],
})
export class AppModule {}
