class Client {
    constructor(name, category) {
        this.name = name;
        this.category = category;
        this.callHistory = [];
    }
    getCallHistory() {
        return this.callHistory;
    }
    getClientCategory() {
        return this.category;
    }
}
module.exports = Client