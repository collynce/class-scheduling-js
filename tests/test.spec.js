describe('Check if it the code works', function () {
    let schedule, Dom;
    beforeEach(function () {
        schedule = new Items();
        Dom = new ChangeDom();
    });
        it('Check if it can get items', function () {

            expect(schedule.getItems().length).toBe(4);
        });

});

