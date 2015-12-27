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
            .append($('<textarea>', 
                {
                    id: "area"
                }
            )
        );
        textCounter = CreateTextCounter({
            elem: "area",
            count: 10
        });
    });
    
    afterEach(function () {
        $('#fixture').remove();
    });
    
    describe("text counter logic", function () {
    
        it('should have a max count of 10', function() {
            expect(textCounter.count).toEqual(10);
        });
    
    })

});