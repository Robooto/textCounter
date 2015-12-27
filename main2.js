'use strict';

// factory create textCounter w/Options
function CreateTextCounter(opts) {
    var createCounter = {
        init: function (opts) {
            textCounter.call(this);
            this.init(opts);

            createCounter.prototype = Object.create(textCounter);

            return this;
        }
    }
    if (!opts.hasOwnProperty("elem")) {
        throw new Error("elem must be defined");
    }
    //$.extend(createCounter, apiCall);
    return Object.create(createCounter).init(opts);
}

function textCounter() {

    // Private Vars
    var _ = {
        width: 300,
        side: "left",
        $el: null,
        count: 100
    };

    var self = this;

    //Private Functions
    function addEvents() {
        _.$el.on('keyup', function (e) {
            if ($(this).val().length > self.count()) {
                $(this).val($(this).val().substr(0, self.count()));
            }
            $(this).siblings('span').children('span').text(self.countLeft());

        });
    }

    function addContainer() {
        var div = $('<div>', {
            class: 'areaContainer',
            style: 'width: ' + _.width + 'px;',
        });
        _.$el.wrap(div);
        _.$el.parent('div')
            .append($('<span>', {
                    class: 'areaCounter',
                    text: ' Characters remain out of ' + _.count,
                    style: 'display: block'
                })
                .prepend($('<span>', {
                    id: 'remain',
                    text: self.countLeft()
                }))
            );
    }

    // public functions
    this.init = function (options) {
        _ = $.extend({}, _, options);
        _.$el = $('#' + options.elem).css("width", "100%");
        addContainer()
        addEvents();

        return this;
    };


    this.count = function () {
        return _.count;
    };

    this.textLength = function () {
        return Number(_.$el.val().length);
    };
    this.countLeft = function () {
        return _.count - this.textLength();
    };

    this.validate = function () {
        _.$el.removeClass("ui-state-error");

        if (_.$el.val() > _.count) {
            _.$el.addClass("ui-state-error");
            return false;
        }
        return true;
    }


    return this;
}


var apiCall = {
    getAPI: function (url, callback, data) {
        console.log("call to " + url + " successful");
        callback("you did it!");
    }
};