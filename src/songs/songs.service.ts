import { Injectable } from '@nestjs/common';

export interface Song {
  title: string;
  artist: string;
}

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];

  create(song: Song) {
    // save the song to db
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    // fetch all the songs from the DB
    return this.songs;
  }
}
