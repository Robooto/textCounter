$.widget("oa.textCounter", {
    options: {
        width: 300,
        side: "left",
        count: 100
    },
    _create: function () {
        this.element.css("width", "100%");
        this._addContainer();
        this._on(this.element, {
            keyup: function () {
                this._updateControl();
            }
        });
    },
    _render: function() {
        this._updateControl();
    },
    _addContainer: function () {
        var div = $('<div>', {
            class: 'areaContainer',
            style: 'width:' + this.options.width + 'px'
        });
        this.element.wrap(div);
        this.element.parent('div')
            .append($('<span>', {
                    class: 'areaCounter',
                    text: ' Characters remain out of ' + this.options.count,
                    style: 'display: block;' + 'text-align: ' + this.options.side
                })
                .prepend($('<span>', {
                    id: 'remain',
                    text: this.countLeft()
                }))
            );
    },
    _updateControl: function() {
        if (this.element.val().length > this.options.count) {
            this.element.val(this.element.val().substr(0, this.options.count));
        }
        this.element.siblings('span').children('span').text(this.countLeft());
    },
    countLeft: function () {
        return this.options.count - parseInt(this.element.val().length, 10);
    }
})