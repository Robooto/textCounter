    function Person( name ){
    
            var name = arguments[ 1 ];
            // Create a **PRIVATE** property for traits.
            var traits = {};
            // Create a method for accessing the name.
            //
            // NOTE: Since this method is this-scoped, each
            // *intialized* instance will get its own copy.
            this.getName = function(){
                return( name );
            };
            // Create a method for accessing / mutating the
            // traits collection.
            //
            this.trait = function( name, value ){
                // Check to see if we are getting or setting
                // the given trait for this person.
                if (arguments.length == 2){
                    // Set the trait.
                    traits[ name ] = value;
                    // Return this object.
                    return( this );
                } else {
                    // Return the given triat.
                    return( traits[ name ] );
                }
            };
            // Create a way to access the traits (
            this.getTraits = function(){
                return( traits );
            };
        }

        // I am the girl contructor.
        function Girl( name, age, weight ){
            // Call the super constructor to initiate base class.
            Person.call( this, name );
            // Store the additional properties.
            this.trait( "age", (age - 5) );
            this.trait( "weight", (weight - 10) );
        }
        // Extend the Person class.
       // Girl.prototype = new Person();
        Girl.prototype = Object.create(Person);
        // -------------------------------------------------- 
        // Create some girl instances.
        var sarah = new Girl( "Sarah", 32, 115 );
        var tricia = new Girl( "Tricia", 30, 125 );
        // Log the girls' traits.
        console.log( "Sarah:", sarah.getTraits() );
        console.log( "Tricia:", tricia.getTraits() );