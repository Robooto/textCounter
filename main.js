'use strict';

var textCounter = {
    init: function(options) {
        this.defaults = {
            width: 300,
            side: "left"
        }
        this._options = $.extend( {}, this.defaults, options );
        this.$el = $('#' + options.elem).css("width", "100%");
        this.addContainer();
        this.addEvents();
        
        return this;
    },
    addEvents: function () {
        var self = this;
        this.$el.on('keyup', function (e) {
            if ($(this).val().length > self.count){
                $(this).val($(this).val().substr(0, self.count));
            }
            $(this).siblings('span').children('span').text(self.countLeft);
           
        });  
    },
    get count() {
        return this._options.count;
    },
    get textLength() {
        return Number(this.$el.val().length);
    },
    get countLeft() {
        return this.count - this.textLength;  
    },
    addContainer: function() {
        var div =  $('<div>', { class: 'areaContainer', style: 'width: ' + 300 + 'px;',});
        this.$el.wrap(div);
        this.$el.parent('div')
            .append($('<span>', 
                {  
                    class: 'areaCounter', 
                    text: ' Characters remain out of ' + this.count, 
                    style: 'display: block'
                })
            .prepend($('<span>', {id: 'remain', text: this.countLeft})));
    },
    validate: function() {
        this.$el.removeClass("ui-state-error");
        
        if(this.$el.val() > this.count) {
            this.$el.addClass("ui-state-error");
            return false;
        }
        
        return true;
    }
}