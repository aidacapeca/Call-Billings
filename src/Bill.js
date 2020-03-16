class Bill {
    constructor(callHistory, categoryClient) {
        this.callHistory = callHistory;
        this.categoryClient = categoryClient;
        this.totalBilling = 0;
    }

    calculateBilling() {
        this.callHistory.forEach(element => {
            let costPerCall = element.calculateCallCost(this.categoryClient);
            this.totalBilling = this.totalBilling + (costPerCall * (element.durationRegister.getMinutes() + element.durationRegister.getHoursToMinutes()));
        });
        return this.totalBilling;
    }
}
module.exports = Bill