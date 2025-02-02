import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';

@Injectable()
export class SongsService {
  private readonly songs: CreateSongDto[] = [];

  create(song: CreateSongDto) {
    // save the song to db
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch all the songs from the DB
    return this.songs;
  }
}
