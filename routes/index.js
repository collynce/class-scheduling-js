class ChangeDom {
    initialize(items, cdata) {
        const tbody = window.document.querySelector("#subjects-table > tbody");
        cdata = function childData() {
            while (tbody.lastChild) {
                tbody.removeChild(tbody.lastChild)
            }
        };
        if (window.document.readyState === 'complete' || 'interactive') {
            cdata();
        }
        for (const row in items) {

            const tr = window.document.createElement("tr");

            if (items.hasOwnProperty(row)) {

                const subject = window.document.createElement("td");

                subject.textContent = items[row].subject;

                tr.appendChild(subject);

                tbody.appendChild(tr);

            }
        }
        // return cdata
    }
}

let Dom = new ChangeDom();

class Items {
    getItems() {
        const res = fetch('http://localhost:5050/add');
        res.then(res => {
            return res.json();
        }).then(items => {

            Dom.initialize(items);
        })
    }
}

class appendItems {
    append(status) {
        status = false;
        const res = fetch('http://localhost:5050/add');
        res.then(res => {
            return res.json();
        }).then(items => {
            const select = window.document.querySelector("select");
            while (select.firstChild) {
                select.removeChild(select.firstChild)
            }
            for (const rows in items) {
                if (items.hasOwnProperty(rows)) {
                    const option = window.document.createElement("option");
                    // option.name = 'subject';
                    option.textContent = items[rows].subject;

                    select.appendChild(option);

                }
            }
            return status = true;

        })
    }
}

class Teacher {
    add() {
        const res = fetch('http://localhost:5050/teacher');
        res.then(res => {
            return res.json();
        }).then(items => {
            const tbody = window.document.querySelector("#teachers-table > tbody");
            while (tbody.firstChild) {
                tbody.removeChild(tbody.firstChild)
            }
            for (const rows in items) {
                const tr = window.document.createElement("tr");

                if (items.hasOwnProperty(rows)) {
                    // const select = window.document.querySelector("#select > option");
                    const teacher = window.document.createElement("td");
                    const subject = window.document.createElement("td");

                    teacher.textContent = items[rows].teacher;
                    subject.textContent = items[rows].select;

                    tr.appendChild(teacher);
                    tr.appendChild(subject);
                    tbody.appendChild(tr);

                }
            }
        })
    }
}

let teacher = new Teacher();
// teacher.add();
let appends = new appendItems();
// appends.append();

let itemss = new Items();


//Execute Script when the Dom is loaded
initScript = () => {
    // itemss.getItems();
   // const initss = Dom.initialize();
    if (window.document.readyState === 'complete' || 'interactive') {

        itemss.getItems();
        appends.append();
        teacher.add();

    }

    window.document.getElementById('form').style.display = 'none';
    // window.document.getElementById('buttons').addEventListener('click', function (e) {
    //     window.document.getElementById('form').style.display = 'flex';
    //     window.document.getElementById('buttons').style.display = 'none';
    //     e.preventDefault();
    // });
    window.document.getElementById('close1').addEventListener('click', function (e) {
        window.document.getElementById('form').style.display = 'none';
        window.document.getElementById('buttons').style.display = 'flex';
        e.preventDefault();
    });
    add = (a) => {
        if (a === 1) {
            document.getElementById('form').style.display = 'block';

        } else {
            document.getElementById('form2').style.display = 'block';
            document.getElementById('close2').style.display = 'block';


        }
    };
    closeBtn = (a) => {
        if (a === 1) {
            document.getElementById('form1').style.display = 'none';
            document.getElementById('close').style.display = 'none';
        } else {
            document.getElementById('form2').style.display = 'none';
            document.getElementById('close2').style.display = 'none';
        }

    };

};




