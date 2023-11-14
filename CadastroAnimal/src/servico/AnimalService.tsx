
import { Database } from "../database/Database.tsx"
import { Animal } from "../model/Animal"

export class AnimalService {
    static readonly TABLE = `animal`
    
    static async create(obj: Animal) {
        const result = await Database.runQuery(`
        INSERT INTO ${this.TABLE} (
             descricao,
             tomDePelo,
             raca,
            peso) 
            VALUES (?,?,?,?)`, [           
                obj.descricao,
                obj.tomDePelo,
                obj.raca,
                obj.peso

        ])
        obj.id = result.insertId
        return obj
    }

    static async update(obj: Animal) {
        const query = `UPDATE ${this.TABLE} 
        set tomDePelo =? ,   
        descricao =? ,  
        raca =? ,  
        peso=?   
        WHERE id = ?;`
        const result = await Database.runQuery(query, [
            obj.descricao,
            obj.tomDePelo,
            obj.raca,     
            obj.id
        ])
        return result.rowsAffected > 0
    }

    static async delete(obj: Animal) {

        const query = `DELETE FROM ${this.TABLE} WHERE id = ?;`
        const result = await Database.runQuery(query, [obj.id])

        return result.rowsAffected > 0
    }

    static async tryRemoveImage(id: number) {
       
    }

    static async findById(id: number) {
        const query = `SELECT * FROM ${this.TABLE} WHERE id = ?;`
        const result = await Database.runQuery(query, [id])

        if (result.rows.length != 1) {
            throw new Error('Animal não existe')
        }

        const raw = result.rows.item(0)
        const obj = new Animal(raw)

        return obj
    }

    static async findAll() {
        const query = `SELECT * FROM ${this.TABLE};`
        const result = await Database.runQuery(query)
        return result.rows._array.map(row => new Animal(row))
    }
 

}