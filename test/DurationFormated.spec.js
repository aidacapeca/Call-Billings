const DurationFormated = require('../src/DurationFormated');

describe("Format and get duration data", () => {
    const durationTest = "03:20";
    const minutesOutput = 20;
    const hoursOutput = 180;
    let durationFormated = new DurationFormated(durationTest);
    durationFormated.setDurationFormated();
    
    test("constructor(): This method instasiates the values from every new DurationFormated object", () => {
        const durationCaseTest = new DurationFormated(durationTest);
        expect(durationCaseTest.duration).toEqual("03:20");
    })
    test("constructor(): This method instasiates the values from every new DurationFormated object", () => {
        const durationCaseTest = new DurationFormated(durationTest);
        durationCaseTest.setDurationFormated();
        expect(durationCaseTest.durationFormat).toEqual(["03", "20"]);
    })
    test("getMinutes(): This method returns the minutes data associated with the duration given", () => {
        const minutes = durationFormated.getMinutes();
        expect(minutes).toEqual(minutesOutput);
    });
    test("getMinutes(): This method throws a TyperError exception when the duration atribute is undefined", () => {
        let durationFormatedCase2 = new DurationFormated("");
        durationFormatedCase2.duration = undefined;
        expect(() => {
            durationFormatedCase2.getMinutes();
        }).toThrow(TypeError);
    });
    test("getHours(): This method returns the hours data multiplicate for 60 to convert it into minutes", () => {
        const hoursToMinutes = durationFormated.getHoursToMinutes();
        expect(hoursToMinutes).toEqual(hoursOutput);
    });
});
