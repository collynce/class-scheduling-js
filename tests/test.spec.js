describe('Check if it the code works', function () {
    let schedule, Dom;
    beforeEach(function () {
        task = new Task();
        Dom = new ChangeDom();
    });
        it('Check if it can get a task', function () {

            expect(schedule.getItems().length).toBe(3);
        });

});

