

async function refreshSubjects() {
    if (mode === 'list') {
        document.getElementById('subject_search').value = ''
        window.subjects = await Service.loadSubjects()
        window.allsubjects = []
        for (const s of window.subjects) {
            window.allsubjects.push(new Subject(s.id, s.subjectname))
        }
        
        currentsubject = window.subjects[0]

        redrawSubjects()
    }
}

async function redrawSubjects() {
    const table = document.getElementById('subjecttable')

    while (true) {
        const trs = table.getElementsByTagName('tr')

        if (trs.length > 1) {
            trs[1].remove()
        } else {
            break
        }
    }

    for (const s of window.subjects) {
        const tr = document.createElement('tr')
        tr.addEventListener('click', () => {
            if (mode === 'list') {
                const rows = table.getElementsByTagName('tr')

                for (let i = 1; i < rows.length; i++) {
                    rows[i].style.backgroundColor = 'white'
                }

                tr.style.backgroundColor = 'lightgrey'
                currentsubject = s
                refreshSubjectDeleteButton()
            }
        })

        if (s.id === currentsubject.id) {
            tr.style.backgroundColor = 'lightgrey'
        }

        const td1 = document.createElement('td')
        td1.innerText = s.id
        tr.appendChild(td1)

        const td2 = document.createElement('td')
        td2.innerText = s.subjectname
        tr.appendChild(td2)

        table.appendChild(tr)
    }

    if (window.subjects.length > 0) {
        document.getElementById('modifysubject').removeAttribute('disabled')

        refreshSubjectDeleteButton()
    } else {
        document.getElementById('modifysubject').setAttribute('disabled', 'disabled')
        document.getElementById('deletesubject').setAttribute('disabled', 'disabled')
    }
}

function closeSubjectMaintenance() {
    document.getElementsByClassName('subjectmaintenance')[0].style.display = 'none'
}

function subjectsearch(event) {
    const f = event.target.value.toUpperCase()

    window.subjects = window.allsubjects.filter(
        item => item.subjectname.toUpperCase().includes(f)
    )
    currentsubject = window.subjects[0]
    redrawSubjects()
}

function refreshSubjectDeleteButton() {
    document.getElementById('deletesubject').removeAttribute('disabled')
}

async function deleteSubject() {
    if (confirm('Biztos, hogy törlöd a tantárgyat?')) {
        await Service.deleteSubject(currentsubject)
        await refreshSubjects()
    }
}

function newSubject() {
    mode = 'new'
    document.getElementById('newsubject').style.display = 'none'
    document.getElementById('modifysubject').style.display = 'none'
    document.getElementById('deletesubject').style.display = 'none'
    document.getElementById('savesubject').style.display = 'block'
    document.getElementById('cancelsubject').style.display = 'block'
    document.getElementById('subject_search').setAttribute('disabled', 'disabled')

    const table = document.getElementById('subjecttable')
    const tr = document.createElement('tr')

    const td1 = document.createElement('td')
    tr.appendChild(td1)

    const td2 = document.createElement('td')
    const input2 = document.createElement('input')
    input2.id = 'subjectname'
    td2.appendChild(input2)
    tr.appendChild(td2)

    table.appendChild(tr)

    setTimeout(() => {
        input1.focus()
    }, 20)
}

function modifySubject() {
    mode = 'modify'
    document.getElementById('newsubject').style.display = 'none'
    document.getElementById('modifysubject').style.display = 'none'
    document.getElementById('deletesubject').style.display = 'none'
    document.getElementById('savesubject').style.display = 'block'
    document.getElementById('cancelsubject').style.display = 'block'
    document.getElementById('subject_search').setAttribute('disabled', 'disabled')

    const table = document.getElementById('subjecttable')
    const trs = table.getElementsByTagName('tr')

    for (let i = 1; i < trs.length; i++) {
        if (trs[i].children[0].innerText == currentsubject.id) {
            const input = document.createElement('input')
            input.setAttribute('value', currentsubject.subjectname)
            input.id = 'subjectname'
            trs[i].children[1].innerHTML = ''
            trs[i].children[1].appendChild(input)

            break
        }
    }
}

async function saveSubject() {
    let sid = null

    if (mode!== 'new') {
        sid = currentsubject.id
    }

    mode = 'list'
    document.getElementById('newsubject').style.display = 'block'
    document.getElementById('modifysubject').style.display = 'block'
    document.getElementById('deletesubject').style.display = 'block'
    document.getElementById('savesubject').style.display = 'none'
    document.getElementById('cancelsubject').style.display = 'none'
    document.getElementById('subject_search').removeAttribute('disabled')

    await Service.saveSubject(new Subject(
        sid,
        document.getElementById('subjectname').value
    ))

    await refreshSubjects()
}

function cancelSubject() {
    mode = 'list'
    document.getElementById('newsubject').style.display = 'block'
    document.getElementById('modifysubject').style.display = 'block'
    document.getElementById('deletesubject').style.display = 'block'
    document.getElementById('savesubject').style.display = 'none'
    document.getElementById('cancelsubject').style.display = 'none'
    document.getElementById('subject_search').removeAttribute('disabled')

    redrawSubject()
}