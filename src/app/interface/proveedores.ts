export interface IProveedores {
    _id: string;
    codigo: string;
    nombre: string;
    ingreso: string;
    correo: string;
    telefono: number;
    direccion: string;
    __v: number;
}


export interface IProveedoresUpdate {

    codigo: string;
    nombre: string;
    ingreso: string;
    correo: string;
    telefono: number;
    direccion: string;
}

