import { IsEmail, IsNotEmpty, IsOptional, IsString, Length, Max, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsNotEmpty()
    surname: string;
    @IsNotEmpty()
    @MinLength(6)
    password: string;
    @IsNotEmpty()
    @Min(11)
    ruc:number;

}
