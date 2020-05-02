class TimeTracker {
    constructor(title, dateTime) {
        this.dateTime = dateTime;
        this.title = title;
    }

    getDtDiff() {
        const dtNow = moment();
        return {
            years: getRoundedDiff(dtNow, this.dateTime, 'years'),
            months: getRoundedDiff(dtNow, this.dateTime, 'months'),
            weeks: getRoundedDiff(dtNow, this.dateTime, 'weeks'),
            days: getRoundedDiff(dtNow, this.dateTime, 'days')
        };
    }
}

const getRoundedDiff = (now, dt, prop) => Math.round(now.diff(dt, prop, true) * 100 ) / 100;

const getTimeTrackers = () => {
	return [
		new TimeTracker("Wedding", "2008-06-14"),
		new TimeTracker("Dating", "2005-04-01"),
		new TimeTracker("Leo", "2015-10-25"),
        new TimeTracker("Josephina", "2020-04-11")
	];
}

const dwmy = _.template($("#dwmy").html());
const template = _.template($("#template").html());
$("h1").after(template({listItems:getTimeTrackers(),dwmy:dwmy}));
