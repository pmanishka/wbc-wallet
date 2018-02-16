
var exec = require('cordova/exec');
/**
 * Constructor
 */
function DatePicker() {
    this._callback;
}

/**
 * show - true to show the ad, false to hide the ad
 */
DatePicker.prototype.show = function(dob, cb) {
    var padDate = function(date) {
      if (date.length == 1) {
        return ("0" + date);
      }
      return date;
    };

    var formatDate = function(date){
      date = date.getFullYear() 
            + "-" 
            + padDate(date.getMonth()+1) 
            + "-" 
            + padDate(date.getDate()) 
            + "T" 
            + padDate(date.getHours()) 
            + ":" 
            + padDate(date.getMinutes()) 
            + ":00Z";

      return date
    }

    if (dob.date) {
        dob.date = formatDate(dob.date);
    }

    if (dob.minDate) {
        dob.minDate = formatDate(dob.minDate);
    }

    if (dob.maxDate) {
        dob.maxDate = formatDate(dob.maxDate);
    }

    var defaults = {
        mode: 'date',
        date: new Date(),
        allowOldDates: true,
        allowFutureDates: true,
        minDate: '',
        maxDate: '',
        doneButtonLabel: 'Done',
        doneButtonColor: '#0000FF',
        cancelButtonLabel: 'Cancel',
        cancelButtonColor: '#000000',
        clearButtonLabel: 'Clear',
        clearButtonColor: '#FF0000',
        clearButton: false,
        x: '0',
        y: '0'
    };

    for (var key in defaults) {
        if (typeof dob[key] !== "undefined")
            defaults[key] = dob[key];
    }
    this._callback = cb;

    exec(null, 
      null, 
      "DatePicker", 
      "show",
      [defaults]
    );
};

DatePicker.prototype._dateSelected = function(date) {
    var d;
    if(date === "cancel" || date === "clear") {
        d = date;
    } else {
        d = new Date(parseFloat(date) * 1000);
    }
    if (this._callback)
        this._callback(d);
}

var datePicker = new DatePicker();
module.exports = datePicker;

// Make plugin work under window.plugins
if (!window.plugins) {
    window.plugins = {};
}
if (!window.plugins.datePicker) {
    window.plugins.datePicker = datePicker;
}