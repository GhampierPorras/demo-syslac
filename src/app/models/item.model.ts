class Item {

    id: number;
    codigo: number;
    descripcion: string;
    childrens?: Item[];
    seleccionado?: boolean;

    constructor() {
        this.id = 0;
        this.codigo = 0;
        this.descripcion = "";
    }

}

export default Item;