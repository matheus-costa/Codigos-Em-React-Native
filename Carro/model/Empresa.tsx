export class Empresa{
    public id: string;
    public cnpj: long;
    public nome: string;
    public endereco: string;


    constructor(obj?: Partial<Empresa>){
        if (obj){
            this.id =       obj.id
            this.cnpj =     obj.cnpj
            this.nome =     obj.nome
            this.endereco =     obj.endereco
          
        }
    }

    toString(){
        const objeto=`{
            "id":       "${this.id}",
            "cnpj":   "${this.cnpj}",
            "nome":    "${this.nome}",
            "endereco":      "${this.endereco}"
        }`
        return objeto
    }

    toFirestore(){
        const carro={
            id:       this.id,
            cnpj:     this.cnpj,
            nome:     this.nome,
            endereco:     this.endereco
    
        }
        return empresa
    }
}