var pressed = true;
var pressed2 = true;
var pressed3 = true;


/* Képre kattintásnál a planner-re ugrik */
function btn1(){
    window.location.href = 'planner.html';
}

/* Kijelentkezés gomb, visszadob a bejelentkező képernyőre */
function logout(){
    if(confirm('Biztos, hogy kijelentkezik?')) {
    document.getElementById('logout').style.display='none';
    window.location.href = 'index.html';
}
}

/*A bejelentkező képernyőn helyet csinál a menü-nek telefonon*/
function makeSpace() {    
    const element = document.getElementById("space")
    if(pressed){
        element.style.marginTop = "250px" 
        pressed = false;
        console.log("Menü legördítve");
        return;
        
    }
    if (!pressed){
        element.style.marginTop = "75px" 
        pressed = true
        console.log("Menü visszacsusszantva'")
    }  

}

/*A fő képernyőn helyet csinál a menü-nek telefonon*/
function makeSpace2() {    
    const element = document.getElementById("space2")
    if(pressed2){
        element.style.marginTop = "275px" 
        pressed2 = false;
        console.log("Menü legördítve");
        return;
        
    }
    if (!pressed2){
        element.style.marginTop = "35px" 
        pressed2 = true
        console.log("Menü visszacsusszantva'")
    }  
}

/*A tervező és tervmegtekintő' képernyőn helyet csinál a menü-nek telefonon*/
function makeSpace3() {    
    const element = document.getElementById("space3")
    if(pressed3){
        element.style.marginTop = "235px" 
        pressed3 = false;
        console.log("Menü legördítve");
        return;
        
    }
    if (!pressed3){
        element.style.marginTop = "35px" 
        pressed3 = true
        console.log("Menü visszacsusszantva'")
    }  
}

function setDate(){
    const date = new Date();
    const year = date. getFullYear();
    const month = String(date. getMonth() + 1). padStart(2, '0');
    const day = String(date. getDate()). padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    document.getElementById('datePicker').value = formattedDate;
}
