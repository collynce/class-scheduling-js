describe('Check if it the code works', function () {
    let task, Dom;
    beforeEach(function () {
        // task = new Items();
        // Dom = new ChangeDom();
        // let Dom = new ChangeDom();

    });

    it('Check if it can initialise HTML', function () {
        const tbody = window.document.createElement("tbody");
        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild)
        }
        const teacher = window.document.createElement("td");
        const subject = window.document.createElement("td");

        teacher.textContent = items[rows].teacher;
        subject.textContent = items[rows].select;

        tr.appendChild(teacher);
        tr.appendChild(subject);
        tbody.appendChild(tr);
        expect(form).toEqual(form);
    });


    it('CHeck if it can create an task', function () {

    });


});
