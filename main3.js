Object.prototype.extend = function (extension) {
    var hasOwnProperty = Object.hasOwnProperty;
    var object = Object.create(this);
    
    for (var property in extension)
        if (hasOwnProperty.call(extension, property) || typeof object[property] === "undefined")
            object[property] = extension[property];
    
    return object;
}

Object.beget = function(obj){
    var fn = function(){}
    fn.prototype = obj;
    return new fn(); // now only its prototype is cloned.
}


function Rectangle () {
    
    var _ = Object.create(null);
    
    this.create = function (width, height) {
        _.height = height;
        _.width = width;
        
        return this;
    },
    this.area = function () {
        return _.width * _.height;
    }
    
    return this;
};

//function CreateRect (height, width) {
//    Rectangle.call(this);
//    this.create(width, height);
//    
//    CreateRect.prototype = Object.create(Rectangle);
//}

var CreateRect = {
    init: function(height, width) {
        Rectangle.call(this);
        this.create(width, height);
        
        CreateRect.prototype = Object.create(Rectangle);
        
        return this;
    }
    
}