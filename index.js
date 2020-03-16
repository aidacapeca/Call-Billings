const Client = require('./src/Client');
const Bill = require('./src/Bill');
const CallRegister = require('./src/CallRegister');
const DurationFormated = require('./src/DurationFormated');


const createClient = (name, category) => {
    return new Client(name, category)
}
const createFormatDuration = (duration) => {
    return new DurationFormated(duration);
}
const createCallRegister = (hour, period, day, duration, origin) => {
    return new CallRegister(hour, period, day, createFormatDuration(duration), origin);
}

const setCallHistory = (clientHistory) => {
    clientHistory.push(createCallRegister(10, 'A', '01', '00:01', 'L'));
    clientHistory.push(createCallRegister(10, 'A', '01', '01:00', 'L'));
    clientHistory.push(createCallRegister(11, 'A', '02', '02:00', 'L'));
}

function main() {
    let client = createClient('Aida Perez', 'EX');
    let callHistory = client.getCallHistory();
    setCallHistory(callHistory);
    let finalBill = new Bill(callHistory, client.getClientCategory())
    console.log("---------------------------------------");
    console.log("Hi, ", client.name);
    console.log("Your final call billing is: $", finalBill.calculateBilling());
    console.log("Thanks for using our services")
    console.log("---------------------------------------");
}
main();
