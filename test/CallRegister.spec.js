const CallRegister = require('../src/CallRegister');
const costsValues = require('../src/constants_values/CallCosts');
const regularCost = costsValues.regularCost;
const nightCost = costsValues.nightCost;
const weekendCost = costsValues.weekendCost;


describe("Create and get the necesary data from each call", () => {
    const categoryClientCase1 = "NW";
    const categoryClientCase2 = "EX";
    let clientHistoryCase1 = new CallRegister(5, 'P', '01', "01:00", 'I');
    /*  5 : Hour the call was made          -   P : Period Indicator (PM)
        1 : Day the call was made (Monday)  -   01:00 : Duration the call had
        I : Origin of the call (International)  */
    let clientHistoryCase2 = new CallRegister(3, 'A', '03', "01:00", 'L');
    /*  3 : Hour the call was made              -   A : Period Indicator (AM)
        3 : Day the call was made (Wednesday)   -   01:00 : Duration the call had
        L : Origin of the call (Local)  */

    test("earlyMorningRegister(): This method returns true if the call was made between 00:00 to 04:00 AM", () => {
        expect(clientHistoryCase1.earlyMorningRegister()).toBeFalsy();
    });
    test("earlyMorningRegister(): This method returns true if the call was made between 00:00 to 04:00 AM", () => {
        expect(clientHistoryCase2.earlyMorningRegister()).toBeTruthy();
    });
    test("lateNightRegister(): This method returns true if the call was made between 10:00 to 11:59 PM", () => {
        expect(clientHistoryCase1.lateNightRegister()).toBeFalsy();
    });
    test("lateNightRegister(): This method returns true if the call was made between 10:00 to 11:59 PM", () => {
        expect(clientHistoryCase2.lateNightRegister()).toBeFalsy();
    });
    test("lateNightRegister(): This method returns true if the call was made between 10:00 to 11:59 PM", () => {
        let clientHistoryCase = new CallRegister(11, 'P', '03', "01:00", 'I');
        /*  11 : Hour the call was made              -   P : Period Indicator (PM)
            3 : Day the call was made (Wednesday)   -   01:00 : Duration the call had
            L : Origin of the call (Local)  */
        expect(clientHistoryCase.lateNightRegister()).toBeTruthy();
    });
    test("nightCostRegister(): This method returns the indicator if the call was made in the night period (between late night hours and early morning hours) so in this case the cost that apply to the call is the nightCost", () => {
        expect(clientHistoryCase1.nightCostRegister()).toBeFalsy();
    });
    test("nightCostRegister(): This method returns the indicator if the call was made in the night period (between late night hours and early morning hours) so in this case the cost that apply to the call is the nightCost", () => {
        expect(clientHistoryCase2.nightCostRegister()).toBeTruthy();
    });
    test("callOrigin(): This method returns either 1 or 2 according to the origin of the call.", () => {
        const callIncrease = 2;
        expect(clientHistoryCase1.callOrigin()).toEqual(callIncrease);
    });
    test("callOrigin(): This method returns either 1 or 2 according to the origin of the call.", () => {
        const callIncrease = 1;
        expect(clientHistoryCase2.callOrigin()).toEqual(callIncrease);
    });
    test("categoryDiscount(category): This method returns the cost for regular calls according to the client category", () => {
        expect(clientHistoryCase1.categoryDiscount(categoryClientCase1)).toEqual(nightCost);
    });
    test("categoryDiscount(category): This method returns the cost for regular calls according to the client category", () => {
        expect(clientHistoryCase2.categoryDiscount(categoryClientCase2)).toEqual(regularCost);
    });
    test("dayHourCost(category): This method returns the cost for a given call according to the day, category and hour", () => {
        let categoryClientCase = 'EX';
        let clientHistoryCase = new CallRegister(3, 'P', '06', "01:00", 'L');
        /*  3 : Hour the call was made              -   P : Period Indicator (PM)
            6 : Day the call was made (Saturday)    -   01:00 : Duration the call had
            L : Origin of the call (Local)  */

        expect(clientHistoryCase.dayHourCost(categoryClientCase)).toEqual(weekendCost);
    });
    test("dayHourCost(category): This method returns the cost for a given call according to the day, category and hour", () => {
        let categoryClientCase = 'EX';
        let clientHistoryCase = new CallRegister(11, 'A', '07', "01:00", 'L');
        /*  3 : Hour the call was made              -   P : Period Indicator (PM)
            6 : Day the call was made (Saturday)    -   01:00 : Duration the call had
            L : Origin of the call (Local)  */

        expect(clientHistoryCase.dayHourCost(categoryClientCase)).toEqual(weekendCost);
    });
    test("dayHourCost(category): This method returns the cost for a given call according to the day, category and hour", () => {
        let categoryClientCase = 'EX';
        let clientHistoryCase = new CallRegister(8, 'A', '01', "01:00", 'L');
        /*  8 : Hour the call was made              -   A : Period Indicator (AM)
            1 : Day the call was made (Monday)    -   01:00 : Duration the call had
            L : Origin of the call (Local)  */
        expect(clientHistoryCase.dayHourCost(categoryClientCase)).toEqual(regularCost);
    });

    test("dayHourCost(category): This method returns the cost for a given call according to the day, category and hour", () => {
        expect(clientHistoryCase1.dayHourCost(categoryClientCase1)).toEqual(nightCost);
    });

    test("dayHourCost(category): This method returns the cost for a given call according to the day, category and hour", () => {
        expect(clientHistoryCase2.dayHourCost(categoryClientCase2)).toEqual(nightCost);
    });
    test("calculateCallCost(clientCategory): This method return the final cost of a call", () => {
        let finalCost = 2 * nightCost;
        expect(clientHistoryCase1.calculateCallCost(categoryClientCase1)).toEqual(finalCost);
    });
    test("calculateCallCost(clientCategory): This method return the final cost of a call", () => {
        let finalCost = 1 * nightCost;
        expect(clientHistoryCase2.calculateCallCost(categoryClientCase2)).toEqual(finalCost);
    });

    test("calculateCallCost(clientCategory): This method return the final cost of a call", () => {
        let categoryClientCase = 'NW';
        let clientHistoryCase = new CallRegister(2, 'P', '06', "01:00", 'I');
        /*  2 : Hour the call was made              -   P : Period Indicator (PM)
            6 : Day the call was made (Saturday)    -   01:00 : Duration the call had
            I : Origin of the call (International)  */
        let finalCost = 2 * weekendCost;
        expect(clientHistoryCase.calculateCallCost(categoryClientCase)).toEqual(finalCost);
    });
});