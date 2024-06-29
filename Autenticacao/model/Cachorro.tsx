export class Cachorro{
    public id       : string;
    public nome     : string;
    public sexo     : string;
    public datanasc : string;
    public raca     : string;
    public urlfoto  : string;

    constructor(obj?: Partial<Cachorro>){
        if (obj){
            this.id         = obj.id
            this.nome       = obj.nome
            this.sexo       = obj.sexo
            this.datanasc   = obj.datanasc
            this.raca       = obj.raca
            this.urlfoto     = obj.urlfoto
        }
    }

    toFirestore(){
        const cachorro = {
            id      : this.id,
            nome    : this.nome,
            sexo    : this.sexo,
            datanasc: this.datanasc,
            raca    : this.raca,
            urlfoto : this.urlfoto

        }
        return cachorro;        
    }

    toString() {
        const objeto = `{
            "id"        : "${this.id}",
            "nome"      : "${this.nome}",
            "sexo"      : "${this.sexo}",
            "datanasc"  : "${this.datanasc}",
            "raca"      : "${this.raca}",
            "urlfoto"      : "${this.urlfoto}",
        }`
        return objeto;
    }
};