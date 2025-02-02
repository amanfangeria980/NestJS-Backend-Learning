import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song.dto';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Get()
  findAll() {
    try {
      return this.songsService.findAll();
    } catch (error) {
      // console.log('I am in the catch block', error);
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
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
  create(@Body() createSongDto: CreateSongDto) {
    return this.songsService.create(createSongDto);
  }
}
