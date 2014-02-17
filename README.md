#Mootools-Timer#

Class to execute some function (onTick) every interval time.
The logic behind is that it will take interval millisecond between every execution.
The timer is stop before fire onTick event and started again after onTick execution

##Constructor##
    Class Timer (interval, tickEvent)
    interval: a valid positive integer higher than zero, representing the unmber of milliseconds to run
    tickEvent: function to associate with the event onTick

##Methods##
    Start() - Setup the next execution, if running it will behave has a restart (stop and start)
    Stop() - Stop the current execution preventing to fire the event
    Run() - Executes the event and start again
    isTicking() - Returns the state of the Timer
    setInterval() - Sets the interval (if valid interval provided) and if isTicking then Start the timer again
    getInterval() - Returns the number of milliseconds configured on the interval

###Warning###
I'm using this code in two internal projects. These projects depends on Mootools and I need this functionality. I do not recommend to use it if you are starting a new project since I don't recommend using Mootools because it looks dead.
I will maintain this code until I migrate those projects to another JS framework.

