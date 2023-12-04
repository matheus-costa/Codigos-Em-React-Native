export class Produtos {
    public id: number;
    public descricao: string;
    public marca: string;
    public cor: string;
    public valor: number;
  
    constructor(obj?: Partial<Produtos>) {
        if (obj) {
            this.id = obj.id
            this.descricao = obj.descricao
            this.cor = obj.cor
            this.marca = obj.marca
            this.valor = obj.valor
        }
    }

    toString() {
        const fields = Object.values(this).join(', ')
        return `produtos [${fields}]`
    }

    toObjeto() {
        const produtos = {
            id: this.id,
            descricao: this.descricao,
            cor:this.cor,
            marca:this.marca,
            valor:this.valor
  
          
        }

        return produtos
    }
};