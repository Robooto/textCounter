describe("textCounter", function () {
    
    var textCounter;
    
    it('should not create module without defined ele', function () {
        expect(function () {
            CreateTextCounter({
                element: 'none'
            });
        }).toThrowError("elem must be defined");
    });
    
    beforeEach(function () {
        $('#fixture')
            .html($('<textarea>', 
                {
                    id: "area",
                    val: "test"
                }
            )
        );
        
        textArea = CreateTextCounter({
            elem: "area",
            count: 10
        });
        

    });
        
    afterEach(function () {
        $('#fixture').hide();
    });
    
    describe("Initalization tests", function () {
        
        it('Should have added dom elements', function() {
            expect($('#remain').length).toEqual(1);
            expect($('.areaCounter').length).toEqual(1);
        });
        
        it('Should have a starting text of test', function() {
            expect($("#area").val()).toEqual("test");
        });
    });
    
    describe("text counter logic", function () {
        
        it('Should have a max count of 10', function() {
            expect(textArea.count()).toEqual(10);
        });
        
        it('Should have a count left of 6', function() {
            expect(textArea.countLeft()).toEqual(6);
        });
    
    });
    
    describe('Event Testing', function() {
        beforeEach(function() {
            $('#area').val("1234567890111");
            $('#area').trigger('keyup');
        });

        it('Should limit characters to 10', function() {             
            expect($("#area").val()).toEqual("1234567890");
        });       

    });

    describe('Validation Testing', function() {
        beforeEach(function() {
            $('#area').val('123123131313131313');
        });          

        it('should fail validation when more than 10 characters are in the field', function() {           
            expect(textArea.validate()).toBeFalsy();
        });      

    });

});