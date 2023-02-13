const rewire = require('rewire');

describe('`my_Clock` function', () => {
    test("Should return the current local time", () => {
        const indexFile = rewire('../index');
        const my_Clock = indexFile.__get__('my_Clock');
        /* 
        doesn't check if clock is continuously printing the time
        */
        const localHour = new Date().getHours();
        const localMinute = new Date().getMinutes();
        const localSecond = new Date().getSeconds();
        const testClock = new my_Clock();
        expect(testClock.hours).toBe(localHour);
        expect(testClock.minutes).toBe(localMinute);
        expect(testClock.seconds).toBe(localSecond);
    });
})