/**
 * Üzleti funkciók osztálya.
 */

class Service {

    /**
     * Bejelentkezteti a megadott felhasználói azonosítóval és jelszóval
     * a felhasználót és sikeresen authentikáció esetén visszaadja a
     * felhasználó nevét. Sikertelen bejelentkezéskor null értékkel tér
     * vissza.
     * 
     * @param   {String}    uid     felhasználói azonosító
     * @param   {String}    pwd     felhasználó jelszava
     * @returns {Promise}   promise Promise objektum
     */

    static login(uid, pwd) {

        // Promise objektum visszaadása

        return new Promise((resolve, reject) => {
            
            // Adatok előkészítése

            const data = JSON.stringify({ 
                action:         'login', 
                uid:            uid,
                password:       pwd
            })
        
            // POST kérés elküldése

            fetch('/api', { 
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json; charset=utf-8',
                    'Content-Length': data.length
                },
                body: data
            }).then(response => response.json()).then((data) => {

                // Eredmény visszaadása
                
                resolve(data)
            }).catch((error) => {

                // Hiba történt

                reject(error)
            })
        })
    }

    /**
     * Betölti a tantárgyak listáját.
     * 
     * @returns {Promise}   promise Promise objektum
     */

    static loadPlans() {

        // Promise objektum visszaadása

        return new Promise((resolve, reject) => {
            
            // Adatok előkészítése

            const data = JSON.stringify({ 
                action:         'loadplans'
            })
        
            // POST kérés elküldése

            fetch('/api', { 
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json; charset=utf-8',
                    'Content-Length': data.length
                },
                body: data
            }).then(response => response.json()).then((data) => {
                const plans = []

                
                console.log("valami tortenik")
                
                for (const d of data) {
                    plans.push(new Plans(d.PID, d.PLANNAME, d.DATE, d.DESCRIPTION))
                }
                
                // Eredmény visszaadása
                
                resolve(plans)
            }).catch((error) => {

                // Hiba történt

                reject(error)
            })
        })
    }
}
