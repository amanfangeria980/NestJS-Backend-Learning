import { Injectable } from '@nestjs/common';

export interface Song {
  title: string;
  artist: string;
  // add other properties as needed
}

@Injectable()
export class SongsService {
  private readonly songs: Song[] = [];

  create(song: Song) {
    this.songs.push(song);
    return this.songs;
  }

  findAll() {
    return this.songs;
  }
}
