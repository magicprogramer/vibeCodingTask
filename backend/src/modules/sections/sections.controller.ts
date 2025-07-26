import { Controller, Post, Body, Get} from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly service: SectionsService) {}
  @Get('/old')
  async old() {
    return this.service.findAll();
  }
  @Post()
  async generate(@Body('prompt') prompt: string) {
    return this.service.create(prompt);
  }
}
