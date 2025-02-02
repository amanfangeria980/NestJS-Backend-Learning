import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll() {
    return this.songsService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'Get one song by id endpoint';
  }
  @Put(':id')
  update() {
    return 'Update song by id endpoint';
  }
  @Delete(':id')
  delete() {
    return 'Delete a song by id endpoint';
  }
  @Post()
  create() {
    return this.songsService.create({
      title: 'Animals',
      artist: 'Martin Garrix',
    });
  }
}
