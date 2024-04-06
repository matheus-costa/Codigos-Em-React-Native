export class Usuario{
   public id: string;
   public nome: string;
   public email: string;
   public senha: string;
   public dataNasc: string;

   constructor(obj?: Partial<Usuario>){
    if(obj){
        this.id =  obj.id
    }

   }

   toString(){
    const objeto=`{
        "id": "${this.id}",
        
        
        }`
        return objeto;
    }
    toFirebase(){
        const usuario={
            id: this.id,
        }
        return usuario
    }

}