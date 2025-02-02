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
    // some error happens while fetching Data from DB
    throw new Error('Error in DB while fetching records');
    return this.songs;
  }
}
