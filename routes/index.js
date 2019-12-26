class ChangeDom {
    initialize(items){
        const tbody = window.document.querySelector("tbody");
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        for (const row in items) {
            const tr = window.document.createElement("tr");
            if (items.hasOwnProperty(row)) {
                const teacher = window.document.createElement("td");
                const subject = window.document.createElement("td");
                const venue = window.document.createElement("td");
                const date = window.document.createElement("td");

                teacher.textContent = items[row].teacher;
                subject.textContent = items[row].subject;
                venue.textContent = items[row].room;
                date.textContent = items[row].date;

                tr.appendChild(teacher);
                tr.appendChild(subject);
                tr.appendChild(venue);
                tr.appendChild(date);

                tbody.appendChild(tr);
            }
        }

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

let itemss = new Items();
itemss.getItems();


// domReady();

window.document.getElementById('button').addEventListener('click', function (e) {

});
if (window.document.readyState === 'complete' || 'interactive') {
    setInterval(function () {
        itemss.getItems();
    }, 1000);
}

window.document.getElementById('form').style.display = 'none';
window.document.getElementById('buttons').addEventListener('click', function (e) {
    window.document.getElementById('form').style.display = 'flex';
    window.document.getElementById('buttons').style.display = 'none';
    e.preventDefault();
});
window.document.getElementById('close').addEventListener('click', function (e) {
    window. document.getElementById('form').style.display = 'none';
    window.document.getElementById('buttons').style.display = 'flex';
    e.preventDefault();
});

