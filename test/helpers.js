var filterByEventName = function(logs, eventName) {
    return logs.filter(function(log) {
        return log.event === eventName;
    });
};

exports.filterByEventName = filterByEventName;
