const assert= require('chai').assert;
const myApp=require('../src/main.js');

describe('calculator',function () {

    describe('handle valid inputs',function(){
        it('should return 1993 as age of 24',function(){
            assert.equal(myApp.computcalculator(24), 1993);
        });
    })
    describe('handle invalid input', function () {
        it ('should return undefined', function(){
            assert.equal(myApp.computcalculator(-24), 'undefined');
        });

        it ('should return undefined', function(){
            assert.equal(myApp.computcalculator('word'), 'undefined');
        });
    } )
})        