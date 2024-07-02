// import { IsNumber, IsOptional, Min } from 'class-validator';
// import { Transform } from 'class-transformer';

export class PaginationDto {
  //   @IsNumber()
  //   @IsOptional()
  //   @Min(0)
  //   @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  pageSize = 10;

  //   @IsNumber()
  //   @IsOptional()
  //   @Min(0)
  //   @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
  page = 1;
}
