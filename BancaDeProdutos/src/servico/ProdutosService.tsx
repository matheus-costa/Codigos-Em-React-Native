
import { Database } from "../database/Database.tsx"
import { Produtos } from "../model/Produtos"

export class ProdutosService {
    static readonly TABLE = `produtos`
    
    static async create(obj: Produtos) {
        const result = await Database.runQuery(`
        INSERT INTO ${this.TABLE} (
             descricao,
             marca,
             cor,
             valor) 
            VALUES (?,?,?,?)`, [           
                obj.descricao,
                obj.cor,
                obj.marca,
                obj.valor

        ])
        obj.id = result.insertId
        return obj
    }

    static async update(obj: Produtos) {
        const query = `UPDATE ${this.TABLE} 
        set cor =? ,   
        descricao =? ,  
        marca =? ,  
        valor=?   
        WHERE id = ?;`
        const result = await Database.runQuery(query, [
            obj.descricao,
            obj.cor,
            obj.marca,
            obj.valor,
            obj.id
        ])
        return result.rowsAffected > 0
    }

    static async delete(obj: Produtos) {

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
            throw new Error('Produtos não existem')
        }

        const raw = result.rows.item(0)
        const obj = new Produtos(raw)

        return obj
    }

    static async findAll() {
        const query = `SELECT * FROM ${this.TABLE};`
        const result = await Database.runQuery(query)
        return result.rows._array.map(row => new Produtos(row))
    }
 

}