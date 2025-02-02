import {
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  artists: string[];
  @IsNotEmpty()
  @IsDateString()
  releaseDate: Date;
  @IsNotEmpty()
  @IsMilitaryTime()
  duration: Date;
}
