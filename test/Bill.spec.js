const Client = require('../src/Client');
const DurationFormated = require('../src/DurationFormated');
const CallRegister = require('../src/CallRegister');
const Bill = require('../src/Bill');

describe("", () => {

    test("calculateBilling(): This method return the total cost of the calls ", () => {
        const clientCase1 = new Client("Manuel Irazabal", "EX");
        const callRegisterHistory = clientCase1.getCallHistory();
        const durationRegister1 = new DurationFormated('01:00');
        callRegisterHistory.push(new CallRegister(10, 'A', '01', durationRegister1, 'L'));
        const finalBillCase1 = new Bill(callRegisterHistory, clientCase1.getClientCategory())
        const totalHistoryCost = 3;
        expect(finalBillCase1.calculateBilling()).toEqual(totalHistoryCost);
    })

});
