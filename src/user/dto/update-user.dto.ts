import { IsString, MinLength } from 'class-validator';

export class UpdateUserDto   {
    @IsString()
    email?: string;
    @IsString()
    name?: string;
    @IsString()
    surname?: string;
    @MinLength(6)
    password?: string;
}
