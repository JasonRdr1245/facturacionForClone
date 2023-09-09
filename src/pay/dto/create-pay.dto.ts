import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePayDto {
    @IsNotEmpty()
    @IsNumber()
    import:number;
}
