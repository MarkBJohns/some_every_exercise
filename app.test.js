describe('hasOddNumber()',function(){
    it('should return "true" if an array has a odd number or "false if it does not',function(){
        let testOne=[1,2,3];
        let testTwo=[2,4,6];
        expect(hasOddNumber(testOne)).toEqual(true);
        expect(hasOddNumber(testTwo)).toEqual(false);
    })
})

describe('hasAZero()',function(){
    it('should return "true" if the a number contains a 0 and "fasle if it does not',function(){
        let numOne=932943289;
        let numTwo=798470744;
        expect(hasAZero(numOne)).toEqual(false);
        expect(hasAZero(numTwo)).toEqual(true);
    })
})

describe('hasOnlyOddNumbers()',function(){
    it('should return "true" if an array has only odd numbers or "false" if it does not',function(){
        let testOne=[1,2,3];
        let testTwo=[1,3,5];
        expect(hasOnlyOddNumbers(testOne)).toEqual(false);
        expect(hasOnlyOddNumbers(testTwo)).toEqual(true);
    })
})

describe('hasNoDuplicates()',function(){
    it('should return "true" if an array has duplicates and "false" if it does not',function(){
        let testOne=[1,2,3];
        let testTwo=[2,2,2];
        expect(hasNoDuplicates(testOne)).toEqual(true);
        expect(hasNoDuplicates(testTwo)).toEqual(false);
    })
})

describe('hasCertainKey()',function(){
    it('should return "true" if every object has a certain key and "false" if it does not',function(){
        let testArr=[{key:'val',yes:'no',up:'down'},{key:'val',yes:'no'}];
        expect(hasCertainKey(testArr,'yes')).toEqual(true);
        expect(hasCertainKey(testArr,'up')).toEqual(false);
    })
})

describe('hasCertainValue()',function(){
    it('should return "true" if every key shares a value and "false" if it does not',function(){
        let testArr=[{key:'val',test:'pass'},{key:'val',test:'fail'}];
        expect(hasCertainValue(testArr,'key','val')).toEqual(true);
        expect(hasCertainValue(testArr,'test','pass')).toEqual(false);
    })
})