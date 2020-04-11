var TimeTracker = function(title, dateTime) {
	this.dateTime = dateTime;
	this.title = title;
}

var getRoundedDiff = function(now, dt, prop) {
	return Math.round(now.diff(dt, prop, true) * 100 ) / 100;
}

TimeTracker.prototype.getDtDiff = function() {
	var dtNow = moment();
	return {
		years: getRoundedDiff(dtNow, this.dateTime, 'years'),
		months: getRoundedDiff(dtNow, this.dateTime, 'months'),
		days: getRoundedDiff(dtNow, this.dateTime, 'days')
	};
}

var getTimeTrackers = function() {
	return [
		new TimeTracker("wedding", "2008-06-14"),
		new TimeTracker("dating", "2005-04-01"),
		new TimeTracker("leo", "2015-10-25"),
        new TimeTracker("josephina", "2020-04-11")
	];
}

_.templateSettings.variable = "listItems";
var template = _.template($("script.template").html());
$("h1").after(template(getTimeTrackers()));
