module.exports = function () {

	var timerLog = {};
	var start = process.hrtime();

	var tick = function (k, extraData) {
		var diff = process.hrtime(start);
		timerLog[k] = { k: k, t: diff[0] + diff[1] / 1e9 };
		if (extraData) timerLog[k].d = extraData;
		start = process.hrtime();
	};

	tick.log = timerLog;

	return tick;
};
