export class Carro{
    public id: string;
    public modelo: string;
    public placa: string;
    public cor: string;
    public foto: string;


    constructor(obj?: Partial<Carro>){
        if (obj){
            this.id =       obj.id
            this.modelo =     obj.modelo
            this.placa =     obj.placa
            this.cor =     obj.cor
            this.foto =     obj.foto
          
        }
    }

    toString(){
        const objeto=`{
            "id":       "${this.id}",
            "modelo":   "${this.modelo}",
            "placa":    "${this.placa}",
            "cor":      "${this.cor}",
            "foto":     "${this.foto}"
        }`
        return objeto
    }

    toFirestore(){
        const carro={
            id:       this.id,
            modelo:     this.modelo,
            placa:     this.placa,
            cor:     this.cor,
            foto: this.foto
    
        }
        return carro
    }
}