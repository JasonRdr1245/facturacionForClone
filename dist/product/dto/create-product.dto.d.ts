export declare enum Unit {
    Grueso = "grueso",
    Docena = "docena",
    Kg = "kg",
    Unidad = "unidad",
    Metro = "metro",
    Tonelada = "tonelada",
    Mediadocena = "mediadocena"
}
export declare enum TipoProducto {
    ProductoPrimeraNecesidad = "producto_primera_necesidad",
    MateriaPrima = "materia_prima",
    Consumible = "consumible",
    Tecnologia = "tecnologia",
    Electrodomestico = "electrodomestico",
    Ropa = "ropa"
}
export declare class CreateProductDto {
    name: string;
    unit: string;
    img?: string;
    unitPrice: number;
    descripcion: string;
    tipoProducto: string;
    igvIndicator: boolean;
    igv: number;
}
