export declare enum PayMethod {
    Credito = "credito",
    Contado = "contado"
}
export declare class CreateFactureDto {
    detail: string[];
    totalPayments: number;
    payMethod: string;
    ruc: number;
}
