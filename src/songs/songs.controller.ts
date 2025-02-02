import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Get()
  findAll() {
    return 'Get All Songs endpoint';
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
    return 'add a new song';
  }
}
