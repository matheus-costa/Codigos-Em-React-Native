export class Animal {
    public id: number;
    public descricao: string;
    public tomDePelo: string;
    public raca: string;
    public peso: number;
  
    constructor(obj?: Partial<Animal>) {
        if (obj) {
            this.id = obj.id
            this.descricao = obj.descricao
            this.tomDePelo=obj.tomDePelo
            this.raca = obj.raca
            this.peso = obj.peso
        }
    }

    toString() {
        const fields = Object.values(this).join(', ')
        return `Animal [${fields}]`
    }

    toObjeto() {
        const Animal = {
            id: this.id,
            descricao: this.descricao,
            tomDePelo:this.tomDePelo,
            raca:this.raca,
            peso:this.peso
  
          
        }

        return Animal
    }
};