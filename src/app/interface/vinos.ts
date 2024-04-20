export interface IVinos {

    _id: string;
    codigo: string;
    nombre: string;
    marca: string;
    precioBotella: number;
    precioUnitario: number;
    nacionalidad: string;
    anio: number;
    restaurante: string;
    __v: number;
}

export interface IVinosUpdate {


    codigo: string;
    nombre: string;
    marca: string;
    precioBotella: number;
    precioUnitario: number;
    nacionalidad: string;
    anio: number;
    restaurante: string;
}


