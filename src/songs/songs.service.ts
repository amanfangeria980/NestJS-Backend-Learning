import { Injectable } from '@nestjs/common';

export interface Song {
  title: string;
  artist: string;
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
