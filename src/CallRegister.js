const weekDays = require('./constants_values/Week');
const periodTime = require('./constants_values/PeriodTime');
const costsValues = require('./constants_values/CallCosts');
const regularCost = costsValues.regularCost;
const nightCost = costsValues.nightCost;
const weekendCost = costsValues.weekendCost;
const generalTimeValues = require('./constants_values/GeneralTimeValues');
const nightRange = {
    morning: generalTimeValues.morningHour,
    night: generalTimeValues.nightHour
};

const categories = require('./constants_values/Categories');
const origin = require('./constants_values/Origin');


class CallRegister {
    constructor(hour, period, day, duration, origin) {
        this.hour = hour;
        this.period = period;
        this.day = day;
        this.origin = origin;
        this.durationRegister = duration;
    }

    earlyMorningRegister() {
        return (this.hour <= nightRange.morning && this.period === periodTime.AM);
    }
    lateNightRegister() {
        return (this.hour >= nightRange.night && this.period === periodTime.PM);
    }

    nightCostRegister() {
        return (this.lateNightRegister() || this.earlyMorningRegister());
    }

    categoryDiscount(category) {
        return ((category === categories.NEW) ? nightCost : regularCost);
    }

    dayHourCost(category) {
        switch (this.day) {
            case weekDays.SATURDAY: case weekDays.SUNDAY:
                return weekendCost;
            default:
                let auxiliarCost = this.categoryDiscount(category);
                return ((this.nightCostRegister()) ? nightCost : auxiliarCost);
        }
    }

    callOrigin() {
        return ((this.origin === origin.LOCAL) ? 1 : 2)
    }

    calculateCallCost(clientCategory) {
        let individualCost = this.callOrigin();
        individualCost = individualCost * this.dayHourCost(clientCategory);
        return individualCost;
    }
}
module.exports = CallRegister