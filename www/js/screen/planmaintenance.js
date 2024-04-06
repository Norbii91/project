/**
 * Tervek kirajzolása
 */


async function showPlans(event) {
        const hogyan = event.target;
        console.log(event.target)
        const table = document.getElementById('plantable');
        const msg = document.getElementById('absoluteMsg').style.display = "none"
        table.innerHTML = "";

        table.style.border="3px solid black"
        table.style.borderRadius="5px"
        table.style.borderSpacing="0px"
        table.style.width="auto"

        window.plans = await Service.loadPlans()

        window.allplans = []

        for (const p of window.plans) {
            window.allplans.push(new Plans(p.PID, p.PLANNAME, (p.DATE), p.DESCRIPTION))
        }
        currentplan = window.plans[0]

        for (const s of window.plans){
            tr = document.createElement('tr')

            tr.style.border="1px solid white"
            tr.style.background="lightblue"

            const td = document.createElement('td')
            td.innerText = s.PID
            td.style.border="1px solid white"
            td.style.width='auto'
            tr.appendChild(td)

            const td1 = document.createElement('td')
            td1.innerText = s.PLANNAME
            td1.style.border="1px solid white"

            tr.appendChild(td1)

            const td2 = document.createElement('td')
            td2.style.border="1px solid white"
            
            jsdate = s.DATE
            var myDate = new Date(jsdate.substring(0, 10));
            myDate.setDate(myDate.getDate() + 1);
            var myDateStr = myDate.toLocaleString('hu-HU', {timeZone: 'Europe/Budapest'}).substring(0, 12);
            td2.innerText = myDateStr
            td2.style.textAlign="center"
            tr.appendChild(td2)

            const td3 = document.createElement('td')
            td3.innerText = s.DESCRIPTION
            td3.style.border= "1px solid white"
            tr.appendChild(td3)
            
        
            table.appendChild(tr)
    }
    document.querySelectorAll('tr').forEach(function(tr) {
        tr.addEventListener('click', function() {
            
        });
    });
    
}
