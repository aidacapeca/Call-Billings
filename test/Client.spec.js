const Client = require('../src/Client');
const DurationFormated = require('../src/DurationFormated');
const CallRegister = require('../src/CallRegister');

describe("Set and return the principal data from client", () => {
    const clientCase1 = new Client("Manuel Irazabal", "NW");
    const clientCase2 = new Client("Aida Perez", "EX");

    test("constructor(): This method instasiates the values from every new Client object. This test, check the name atribute", () => {
        const client = new Client("Pedro Perez", "EX");
        expect(client.name).toEqual("Pedro Perez");
    })
    test("constructor(): This method instasiates the values from every new Client object. This test, check the category atribute", () => {
        const client = new Client("Pedro Perez", "NW");
        expect(client.category).toEqual("NW");
    })
    test("getClientCategory(): This method returns the category associated to the client", () => {
        expect(clientCase1.getClientCategory()).toEqual("NW");
    })
    test("getClientCategory(): This method returns the category associated to the client", () => {
        expect(clientCase2.getClientCategory()).toEqual("EX");
    })
    test("getCallHistory(): This method returns the call history register to the client", () => {
        expect(clientCase1.getCallHistory()).toEqual([]);
    })
    test("getCallHistory(): This method returns the call history register to the client", () => {
        let callRegisterHistory = clientCase1.getCallHistory();
        let durationRegister1 = new DurationFormated('00:65');
        callRegisterHistory.push(new CallRegister(10, 'A', '01', durationRegister1, 'I'));
        expect(clientCase1.getCallHistory()).toEqual(callRegisterHistory);
    })
});
