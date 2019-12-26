describe('Check if it the code works', function () {
    let task, task1, task2, task3, Dom;
    beforeEach(function () {
        task = new Items();
        // Dom = new ChangeDom();
        task1 = {
            id: 1,
            name: 'Task One',
            doneTask: false
        };
        task2 = {
            id: 2,
            name: 'Task Two',
            doneTask: false
        };
        task3 = {
            id: 3,
            name: 'Task Three',
            doneTask: false
        }
    });

    it('Check if it can get a task', function () {
        task.addTask(task1);
        task.addTask(task2);
        task.addTask(task3);
        expect(task.getTasks().length).toBe(3);
    });

    it('Check if it can mark task as completed', function () {
        task.addTask(task1);
        task.addTask(task2);
        task.addTask(task3);
        task.doneTask(1);
        expect(task.getTasks().find(newTask => newTask.id === 1).doneTask).toBe(true);
    });

    it('Check if it can delete a task', function () {
        task.addTask(task1);
        task.addTask(task2);
        task.addTask(task3);
        task.delete(3);
        expect(task.getTasks()[task.getTasks().length - 1].id).toBe(2);
    });


    it('Check if it can initialise HTML', function () {
        const form = document.createElement('form');
        const input = document.createElement('input');
        const ul = document.createElement('ul');
        input.id = "TaskInputId";
        form.id = "TaskFormId";
        form.appendChild(input);
        expect(Dom.initialise().form).toEqual(form);
        expect(Dom.initialise().ul).toEqual(ul)
    });


    it('CHeck if it can create an task', function () {
        const elem = Dom.showTask(task);
        const res = document.createElement('li');
        res.innerText = task.name;
        expect(elem).toEqual(res)
    });


});
