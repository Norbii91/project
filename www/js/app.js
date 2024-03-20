/**
 * Belépő fő függvény.
 */

function start() {
    document.getElementById('uid').focus()
}

/**
 * Ellenőri, hogy a leütött billentyű az ENTER -e és ha igen,
 * akkor a következő mezőre navigál.
 * 
 * @param {Event}   event   esemény objektum
 */

function onENTER(event, field) {

    // ENTER billentyűt nyomtunk?

    if (event.keyCode === 13) {

        // Ugrás a megadott mezőre

        if (field) {
            document.getElementById(field).focus()
        } else {

            // Bejelentkezés
            
            login()
        }
    }
}

/**
 * Esemény, ami akkor fut le, ha a bejelentkező képernyőn a BELÉP gombot
 * megnyomták.
 */

async function login() {

    // Felhasználó authentikációja

    const user = await Service.login(
        document.getElementById('uid').value,
        document.getElementById('pwd').value
    )

    // Authentikáció sikerességének ellenőrzése
 
    if (user.name) {

        window.location.href = 'main.html';
        alert("Sikeres bejelentkezés")
        
        
    } else {
        alert('Hibás felhasználói név vagy jelszó')
    }

}