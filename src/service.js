// Szükséges modulok betöltése

const Database = require('./database')
const config = require("../dblogin.json")

/**
 * Üzleti funkciók.
 */

module.exports = class Service {

    /**
     * Authentikálja a megadott felhasználót a jelszava ellenében.
     * 
     * @param   {String}    uid         felhasználói azonosító
     * @param   {String}    password    felhasználó je;lszava
     * @returns {Promise}   promise     promise objektum
     */

    static async login(uid, password) {

        console.log(`Felhasználó authentikációja: ${uid}`)

        // Inicializálás

        const db = new Database(
            config.db.host,
            config.db.port,
            config.db.user,
            config.db.password,
            config.db.dbname
        )

        // Authentikáció

        const result = await db.run(`SELECT   USERNAME
                        FROM    USERS
                        WHERE   UID = "${uid}"
                                AND PWD = "${password}"`
                                )
        
        // Authentikáció sikerességének ellenőrzése

        if (result && result.length === 1 && result[0].USERNAME) {
            
            return result[0].USERNAME
        } else {
            return null
        }
    }


 /**
     * Betölti a tervek listáját.
     * 
     * @returns {Promise}   promise promise objektum
     */

    static async loadPlans() {

        console.log(`Tervek betöltése`)

        // Inicializálás

        const db = new Database(
            config.db.host,
            config.db.port,
            config.db.user,
            config.db.password,
            config.db.dbname
        )

        // Tervek betöltése

        const result = await db.run(`
            SELECT   PID,PLANNAME, DATE,DESCRIPTION
            FROM     PLANS
            ORDER BY PID
        `)
        

        // Tervek visszaadása 
        return result
    }


    /**
     * Törli a megadott Tervet.
     * 
     * @param   {Plans}    plan    törlendő terv
     * @returns {Promise}          promise Promise objektum
     */

    static async deletePlan(plan) {

        console.log(`Terv törlése`)

        // Inicializálás

        const db = new Database(
            config.db.host,
            config.db.port,
            config.db.user,
            config.db.password,
            config.db.dbname
        )

        await db.run(`
                DELETE FROM PLANS
                WHERE    PID = "${plan.PID}"
            `)
    }
}