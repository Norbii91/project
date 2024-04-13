/**
 * Terv osztály.
 */

 class Plans {

    // Terv azonosító
    #PID

    // Terv neve
    #PLANNAME

    // Terv PIDeje,dátuma
    #DATE

    // Terv leírása
    #DESCRIPTION

    /**
     * Létrehoz egy új Plans objektumot és beállítja az attribútumait.
     * 
     * @param {Number} PID              Terv azonosító
     * @param {String} PLANNAME         Terv neve
     * @param {Date} DATE               Terv neve
     * @param {String} DESCRIPTION      Terv neve
     */

    constructor(PID,PLANNAME,DATE, DESCRIPTION) {
        this.#PID = PID
        this.#PLANNAME = PLANNAME
        this.#DATE = DATE
        this.#DESCRIPTION = DESCRIPTION
    }

    /**
     * Visszaadja a Terv azonosítóját.
     */

    get PID() {
        return this.#PID
    }

    /**
     * Beállítja a Terv azonosítóját.
     */

    set PID(PID) {
        this.#PID = PID
    }

    /**
     * Visszaadja a Terv nevét.
     */

    get PLANNAME() {
        return this.#PLANNAME
    }

    /**
     * Beállítja a Terv nevét.
     */

    set PLANNAME(PLANNAME) {
        this.#PLANNAME = PLANNAME
    }

    /**
     * Visszaadja a Terv dátumát.
     */

    get DATE() {
        return this.#DATE
    }

    /**
     * Beállítja a Terv dátumát.
     */

    set DATE(DATE) {
        this.#DATE = DATE
    }

    /**
     * Visszaadja a Terv leírását.
     */

    get DESCRIPTION() {
        return this.#DESCRIPTION
    }

    /**
     * Beállítja a Terv leírását.
     */

    set DESCRIPTION(DESCRIPTION) {
        this.#DESCRIPTION = DESCRIPTION
    }

    /**
     * Összehasonlítja a jelenlegi objektumot a megadottal és igazat ad
     * vissza, ha a két objektum egyforma és hamisat ha nem.
     * 
     * @param   {Any}       object  objektum, amivel össze kell hasonlítani
     * @returns {Boolean}   result  a két objektum egyforma vagy sem
     */

    equals(object) {
        try {

            // A két objektum azonos típusú és a Terv azonosítójuk
            // megegyezik?

            if (object && object instanceof Plan && object.PID === this.#PID) {

                // A két objektumot egyformának tekintjük

                return true
            }
        } catch(error) {
            // Nincs hibakezelés
        }

        return false
    }

    /**
     * Konvertálja a Plan objektumot JSON objetummá.
     * 
     * @returns     {Object}    json    Plan JSON verziója
     */

    toJSON() {
        return { 
            PID:             this.#PID,
            PLANNAME:    this.#PLANNAME,
            DATE:       this.#DATE,
            DESCRIPTION: this.#DESCRIPTION
        }
    }

    /**
     * Konvertálja a Plan objektumot string -é.
     * 
     * @returns     {String}    text    Plan string verziója
     */

    toString() {
        return `PID: ${this.#PID}, Név: ${this.#PLANNAME}, Dátum: ${this.#DATE}, Leírás: ${this.#DESCRIPTION}`
    }
}
