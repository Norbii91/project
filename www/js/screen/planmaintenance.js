/*Tervek kirajzolása, táblázat legenerálása az adatok mennyisége alapján*/
async function showPlans() {
        const table = document.getElementById('plantable');
        document.getElementById('absoluteMsg').style.display='none'
        table.innerHTML = "";
        table.style.background='lightblue'
        

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
            tr.addEventListener('click', (event) => {
                var targett = event.target.closest('tr');
                currentplan = s
                document.getElementById('btn-delete').disabled=false;
            })
            

            
            tr.style.border="1px solid white"
            tr.style.margin="2px"
            const td = document.createElement('td')
            td.innerText = s.PID
            td.style.border="1px solid white"
            td.style.width='auto'
            td.style.fontSize='bigger'
            td.style.textAlign='center'
            td.style.fontWeight='bold'
            td.style.padding='5px'
           
            tr.appendChild(td)

            const td1 = document.createElement('td')
            td1.innerText = s.PLANNAME
            td1.style.border="1px solid white"
            td1.style.textAlign='center'

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
    maintenanceTr = document.createElement('tr')
    maintenanceTr.id='maintenanceTr'

    maintenanceTd1 = document.createElement('td')
    maintenanceTr.appendChild(maintenanceTd1)

    var deleteButton = document.createElement('button');
    deleteButton.id='btn-delete'
    deleteButton.disabled=true;
    deleteButton.textContent = 'Delete';
    deleteButton.style.margin="5px";
    deleteButton.addEventListener('click', () => {
        deletePlan();
    })
    maintenanceTd1.appendChild(deleteButton);
    maintenanceTr.appendChild(maintenanceTd1)
    table.appendChild(maintenanceTr)


    
    var rows = document.querySelectorAll("#plantable tr");
    rows.forEach(function(row) {
        row.addEventListener("click", function() {
        rows.forEach(function(row) {
            row.classList.remove('selected');
        });
        row.classList.add('selected');
        });
    });


}
/*A kijelölt terv törlése*/
async function deletePlan() {
    if (confirm('Are you sure you want to delete this plan?')) {
        console.log(currentplan)
        await Service.deletePlan(currentplan)
        await showPlans()
    }
}