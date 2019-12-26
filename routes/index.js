class ChangeDom {
    initialize(items){
        const tbody = document.querySelector("tbody");
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild);
        }
        for (const row in items) {
            const tr = document.createElement("tr");
            if (items.hasOwnProperty(row)) {
                const teacher = document.createElement("td");
                const subject = document.createElement("td");
                const venue = document.createElement("td");
                const date = document.createElement("td");

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

document.getElementById('button').addEventListener('click', function (e) {


        if (document.readyState === 'complete' || 'interactive') {
            setInterval(function () {
                itemss.getItems();
            }, 1000);
        }
        // } else {
        //     document.addEventListener('DOMContentLoaded', function (e) {
        //         itemss.getItems();
        //         e.preventDefault();
        //     });
        // }

    // e.preventDefault();
});


document.getElementById('form').style.display = 'none';
document.getElementById('buttons').addEventListener('click', function (e) {
    document.getElementById('form').style.display = 'flex';
    document.getElementById('buttons').style.display = 'none';
    // document.getElementById('form').className = 'grid-x';
    e.preventDefault();
});
document.getElementById('close').addEventListener('click', function (e) {
    document.getElementById('form').style.display = 'none';
    document.getElementById('buttons').style.display = 'flex';
    e.preventDefault();
});

