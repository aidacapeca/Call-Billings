const minutesInHour = require('./constants_values/GeneralTimeValues').minutesInHour;

class DurationFormated {
    constructor(duration) {
        this.duration = duration;
        this.durationFormat = [];
    }
    setDurationFormated() {
        this.durationFormat = this.duration.split(":");
    }
    getMinutes() {
        this.setDurationFormated();
        return parseInt(this.durationFormat[1]);
    }
    getHoursToMinutes() {
        this.setDurationFormated();
        return (parseInt(this.durationFormat[0]) * minutesInHour);
    }

}
module.exports = DurationFormated