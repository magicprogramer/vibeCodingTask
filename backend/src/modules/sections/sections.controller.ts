import { Controller, Post, Body } from '@nestjs/common';
import { SectionsService } from './sections.service';

@Controller('sections')
export class SectionsController {
  constructor(private readonly service: SectionsService) {}

  @Post()
  async generate(@Body('prompt') prompt: string) {
    return this.service.create(prompt);
  }
}
