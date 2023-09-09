import { IsMongoId, IsNotEmpty, IsNumber } from "class-validator";

export class CreateDetailDto {
    @IsMongoId()
    @IsNotEmpty()
    product: string;
    @IsNotEmpty()
    @IsNumber()
    amount: number;
}
