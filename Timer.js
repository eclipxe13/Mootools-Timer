/**
 *
 * Class Timer(interval, tickEvent)
 *
 * interval: a valid positive integer higher than zero, representing the unmber of milliseconds to run
 * tickEvent: function to associate with the event onTick
 *
 * Methods:
 * Start() - Setup the next execution, if running it will behave has a restart (stop and start)
 * Stop() - Stop the current execution preventing to fire the event
 * Run() - Executes the event and start again
 * isTicking() - Returns the state of the Timer
 * setInterval() - Sets the interval (if valid interval provided) and if isTicking then Start the timer again
 * getInterval() - Returns the number of milliseconds configured on the interval
 *
 * Class to execute some function (onTick) every interval time
 * The logic behind is that it will take interval millisecond between every execution.
 * The timer is stop before fire onTick event and started again after onTick execution
 *
 * Copyright: 2011 Carlos C Soto <csoto@sia-solutions.com>
 * Licence: LGPL version 3 http://www.gnu.org/licenses/lgpl.txt
 *
 */
var Timer = new Class({
    Implements: [Events],
    initialize: function(interval, tickEvent) {
        this.setInterval(interval);
        if (typeOf(tickEvent, 'function')) this.addEvent("tick", tickEvent);
    },
    Start: function () {
        if (this.isTicking()) {
            this.Stop();
            this.Start(); // recursive call
        } else {
            var interval = this.getInterval();
            if (interval > 0) {
                this._runid = setTimeout(this.Run.bind(this), interval);
            }
        }
    },
    Stop: function() {
        if (this.isTicking()) {
            clearInterval(this._runid);
            this._runid = null;
        }
    },
    Run: function() {
        this.Stop();
        this.fireEvent("tick");
        this.Start();
    },
    isTicking: function() {
        return (this._runid != null);
    },
    setInterval: function(interval) {
        interval = (isNaN(interval)) ? 0 : parseInt(interval, 10);
        if (interval > 0) {
            if(this.isTicking()) {
                this.Stop();
                this._interval = interval;
                this.Start();
            } else {
                this._interval = interval;
            }
        }
    },
    getInterval: function() {
        return Math.max(0, this._interval);
    },
    _interval: 1000,
    _runid: null
});