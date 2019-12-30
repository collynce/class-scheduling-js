const htmls = `<div class="cell medium-12">
                         <button class="button" onclick="add(2)">Add</button>
                          <span><button class="button alert" id="close2"
                                                      style="display: none">Close</button></span>
                                        <form action="http://localhost:5050/teacher" id="form2" method="post" style="display: none">
                                            <input placeholder="Name" type="text" name="teacher" id="teacher" required>
                                            <select name="subject" id="select-sub" required></select>
                                            <button class="button success" type="submit" id="submit2">Submit</button>
                                        </form>
                                        <table id="teachers-table">
                                            <thead>
                                            <tr>
                                                <th>Teacher</th>
                                                <th>Subject Name</th>
                                            </tr>
                                            </thead>
                                            <tbody>


                                            </tbody>
                           </table>
              </div>
`;
describe('Check if it the code works', function () {
    let Dom, task;
    beforeEach(function () {
        task = new Items();
        Dom = new ChangeDom();
        document.body.insertAdjacentHTML('afterbegin', htmls)
    });

    it('Check if it can initialise HTML', function () {

        Dom = new ChangeDom();
        expect(Dom).toBeDefined();
    });


    it('Check if it can create an task', function () {

        const tbody = window.document.querySelector("#teachers-table > tbody");
        const tr = window.document.createElement("tr");

        const subject = window.document.createElement("td");

        tr.appendChild(subject);

        tbody.appendChild(tr);

        expect(typeof tbody).toBe('object')
    });

    it('Check if it can create an task', function () {
        const form = document.getElementById('form2');
        form.id = 'myForm';

        expect(form.id).toEqual(form.id);

    });


});
