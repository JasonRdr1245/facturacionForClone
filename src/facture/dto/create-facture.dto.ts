import { ArrayMinSize, IsArray, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, Min } from "class-validator";

export enum PayMethod{
    Credito='credito',
    Contado='contado'
}


export class CreateFactureDto {
    @IsMongoId({each:true})
    @ArrayMinSize(1)
    @IsNotEmpty()
    detail:string[]
    @IsOptional()
    @IsNumber()
    totalPayments:number
    @IsOptional()
    @IsEnum(PayMethod)
    payMethod:string
    @IsNotEmpty()
    @Min(11)
    ruc:number;
}

//primero crea los detail al poner el botond e generar factura
//luego se mandan sus id como parametro en el body para crear la factura
//se genera la factura