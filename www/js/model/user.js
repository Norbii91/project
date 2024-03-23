/**
 * Felhasználó osztály.
 */

class User {

    // Felhasználói azonosító
    #uid

    // Felhasználó neve
    #username

    // Felhasználó jelszava
    #password


    /**
     * Létrehoz egy új User objektumot és beállítja az attribútumait.
     * 
     * @param {String} uid          felhasználói azonosító
     * @param {String} username     felhasználó neve
     * @param {String} password     felhasználó jelszava
     */

    constructor(uid, username, password) {
        this.#uid = uid
        this.#username = username
        this.#password = password

    }

    /**
     * Visszaadja a felhasználói azonosítóját.
     */

    get uid() {
        return this.#uid
    }

    /**
     * Beállítja a felhasználói azonosítóját.
     */

    set uid(uid) {
        this.#uid = uid
    }

    /**
     * Visszaadja a felhasználó nevét.
     */

    get username() {
        return this.#username
    }

    /**
     * Beállítja a felhasználó nevét.
     */

    set username(username) {
        this.#username = username
    }

    /**
     * Visszaadja a felhasználó jelszavát.
     */

    get password() {
        return this.#password
    }

    /**
     * Beállítja a felhasználó jelszavát.
     */

    set password(password) {
        this.#password = password
    }

    /**
     * Konvertálja a User objektumot JSON objetummá.
     * 
     * @returns     {Object}    json    User JSON verziója
     */

    toJSON() {
        return { 
            UID:        this.#uid,
            USERNAME:   this.#username,
            PWD:        this.#password
        }
    }

    /**
     * Konvertálja a User objektumot string -é.
     * 
     * @returns     {String}    text    User string verziója
     */

    toString() {
        return `UID: ${this.#uid}, Név: ${this.#username}`
    }
}