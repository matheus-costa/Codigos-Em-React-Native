import * as SQLite from 'expo-sqlite'

interface Query {
    sql: string
    args?: (string | number)[]
}

const table = "produtos"

export class Database {
    static getConnection() {
        return SQLite.openDatabase("produtosapp.db")
    }

    static async initDb(syncDb?: boolean) {
        const db = this.getConnection()
        // console.log(db)
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, (err, data) => {
            console.log('Foreign keys ON')
        })

        if (syncDb || !(await this.isDbCreated())) {
            await this.dropDb()
            await this.createDb()
        }

    }

    static async ReinitDb(syncDb?: boolean) {
        const db = this.getConnection()

        // console.log(db)
        db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, (err, data) => {
            console.log('Foreign keys ON')
        })

        await this.dropDb()
        await this.createDb()

    }

    private static async isDbCreated() {
        try {
            await this.runQuery(`SELECT 1 FROM  ${table};`)
            return true
        } catch (e) {
            return false
        }
    }

    private static async dropDb() {
        const queries = [
            `DROP TABLE IF EXISTS 'produtos';`,
        ]
        await this.runQueries(queries.map(sql => ({ sql })))
    }



    private static async createDb() {
        const queries = [
            `create table if not exists produtos (
                id integer primary key autoincrement,
                descricao text,
                cor text,
                marca text,
                preco real              
                );`,
        ]
        await this.runQueries(queries.map(sql => ({ sql })))
    }

    private static async runQueries(queries: Query[]) {
        const db = this.getConnection()

        return new Promise<void>((resolve, reject) => {
            db.transaction(transaction => {
                for (const query of queries) {
                    transaction.executeSql(query.sql, query.args)
                }
            }, error => {
                console.error(`Error in transaction.`, error)
                reject(error)
            }, /* success */() => {
                // console.log(`Transaction completed`)
                resolve()
            })
        })
    }


    static async runQuery(sql: Query['sql'], args?: Query['args']) {
        const db = this.getConnection()

        return new Promise<SQLite.SQLResultSet>((resolve, reject) => {
            db.transaction(transaction => {
                transaction.executeSql(sql, args, (tx, result) => {
                    resolve(result)
                }, (tx, error) => {
                    reject(error)
                    return true
                })
            }, error => {
                // console.error(`Error in transaction.`, error)
                reject(error)
            }, /* success */() => {
                console.log(`Transaction completed`)
            })
        })
    }
}
