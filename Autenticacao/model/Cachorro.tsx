export class Cachorro{
    public id: string;
    public nome : string;
    public sexo : string;
    public datanasc : string;
    public raca: string;

    constructor(obj?:Cachorro) {
       if(obj){
          this.id = obj.id;
          this.nome = obj.nome;
          this.sexo = obj.sexo;
          this.datanasc = obj.datanasc;
          this.raca = obj.raca;
       }
    }

    toFirestore(){
        const cachorro = {
           id : this.id,
           nome: this.nome,
           sexo: this.sexo,
           datanasc: this.datanasc,
           raca: this.raca

        }
      return cachorro
    }
    toString(){ 
        const Objeto =`{
            "id"        : "${this.id}",
            "nome"      :      "${this.nome}",
            "sexo"      : "${this.sexo}",,
            "datanasc"  : "${this.datanasc}",
            "raca"      : "${this.raca}",
        }`
        return Objeto

    }  
}