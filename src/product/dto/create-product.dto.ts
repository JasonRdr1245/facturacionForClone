import { IsBoolean,IsNotEmpty, IsNumber, IsOptional, IsString,IsEnum } from "class-validator";
export enum Unit {
  Grueso = "grueso",
  Docena = "docena",
  Kg = "kg",
  Unidad = "unidad",
  Metro = "metro",
  Tonelada = "tonelada",
  Mediadocena = "mediadocena",
}

export enum TipoProducto {
  ProductoPrimeraNecesidad = "producto_primera_necesidad",
  MateriaPrima = "materia_prima",
  Consumible = "consumible",
  Tecnologia = "tecnologia",
  Electrodomestico = "electrodomestico",
  Ropa = "ropa",
}

export class CreateProductDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    @IsEnum(Unit)
    unit: string;
    
    @IsOptional()
    @IsString()
    img?: string;
    @IsNotEmpty()
    @IsNumber()
    unitPrice: number;
    @IsNotEmpty()
    @IsString()
    descripcion: string;
    @IsNotEmpty()
    @IsString()
    @IsEnum(TipoProducto)
    tipoProducto: string;
    @IsBoolean()
    @IsNotEmpty()
    igvIndicator: boolean;
    @IsNumber()
    @IsNotEmpty()
    igv: number;

}
