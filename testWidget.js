$.widget( "demo.colorbox", {
   options: {
       red: 128,
       green: 128,
       blue: 128
   },
    _create: function() {
        this._render();
        this.button = $("<button>", {
            text: "change"
        }).appendTo( this.element );
        this._on( this.button, {
            click: function() {
                this.random();
            }
        })
    },
    _setOptions: function(key, value) {
        $.Widget.prototype._setOptions.call(this, key, value);
        this._super( key, value);
        this._render();
    },
    _render: function() {
        var color = this.hex();
        
        this.element.css("backgroundColor", color);        
    },
    hex: function() {
       return "#" + 
            hex( this.options.red) + 
            hex( this.options.green) + 
            hex( this.options.blue); 
    },
    _destroy: function() {
        this.button.remove();
    }
});

$.widget("demo.colorbox", $.demo.colorbox, {
    random: function() {
        var colors = {
            red: Math.floor( Math.random() * 256),
            green: Math.floor( Math.random() * 256),
            blue: Math.floor( Math.random() * 256)
        };
        if( false === this._trigger( "onrandom", null, colors )) {
            return;
        }
        this.option( colors);
    }    
});