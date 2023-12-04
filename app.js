// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      HAS ODD NUMBER

// --------------------------------------------------------------

const numArr=[1,2,3,4,5];
const evenArr=[2,4,6,8,10];

function hasOddNumber(arr){
    return arr.some(function(num){
        return num%2!==0;
    })
}
// --------------------------------------------------------------

const hasOddInputs=document.querySelectorAll('#hasodd input[type="number"]');
const hasOddBtn=document.querySelector('#hasodd button');
const hasOddAnswer=document.querySelector('#hasodd .answer');
hasOddInputs.forEach(limitCharAndMoveToNext);

// --------------------------------------------------------------

function limitCharAndMoveToNext(inptElmt){
    inptElmt.addEventListener('input',function(){
        let inputVal=this.value.toString();
        if(inputVal.length>=3){
            this.value=inputVal.slice(0,3);
            const nextInput=this.nextElementSibling;
            if(nextInput&&nextInput.tagName==='INPUT'){
                nextInput.focus();
            }
        }
    })
}

hasOddBtn.addEventListener('click',function(){
    const hasOddArr=Array.from(hasOddInputs).map(function(input){
        return parseInt(input.value, 10);
    })
    const hasOddResult=hasOddNumber(hasOddArr);
    hasOddAnswer.value=hasOddResult;
});

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      HAS A ZERO

// --------------------------------------------------------------

const firstBigNum=987239729;
const secondBigNum=983408794;

function hasAZero(number){
    return number.toString().split('').some(function(val){
        return val==='0';
    })
}

// --------------------------------------------------------------

const hasZeroInput=document.querySelector('#haszero input[type="number"]');
const hasZeroBtn=document.querySelector('#haszero button');
const hasZeroAnswer=document.querySelector('#haszero .answer')

// --------------------------------------------------------------

hasZeroBtn.addEventListener('click',function(){
    const hasZeroResult=hasAZero(hasZeroInput.value);
    hasZeroAnswer.value=hasZeroResult;
})

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      HAS ONLY ODD NUMBERS

// --------------------------------------------------------------

const arrWithOdd=[1,3,5,7,9];
const arrWithNoOdd=[1,3,5,7,10];

function hasOnlyOddNumbers(arr){
    return arr.every(function(num){
        return num%2!==0;
    })
}
// --------------------------------------------------------------

const onlyOddInputs=document.querySelectorAll('#onlyodd input[type="number"]');
const onlyOddBtn=document.querySelector('#onlyodd button');
const onlyOddAnswer=document.querySelector('#onlyodd .answer');
onlyOddInputs.forEach(limitCharAndMoveToNext);

// --------------------------------------------------------------

onlyOddBtn.addEventListener('click',function(){
    const onlyOddArr=Array.from(onlyOddInputs).map(function(input){
        return parseInt(input.value, 10);
    })
    const onlyOddResult=hasOnlyOddNumbers(onlyOddArr);
    onlyOddAnswer.value=onlyOddResult;
})

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      HAS NO DUPLICATES

// --------------------------------------------------------------

const arrWithDupes=[1,2,3,2,5];
const arrWithNoDupes=[5,6,7,8,9];

function hasNoDuplicates(arr){
    return arr.every(function(val,index){
        return arr.indexOf(val)===arr.lastIndexOf(val);
    })
}

// --------------------------------------------------------------

const noDupesInput=document.querySelectorAll('#nodupes input[type="number"]');
const noDupesBtn=document.querySelector('#nodupes button');
const noDupesAnswer=document.querySelector('#nodupes .answer');
noDupesInput.forEach(limitCharAndMoveToNext);

// --------------------------------------------------------------

noDupesBtn.addEventListener('click',function(){
    const noDupesArr=Array.from(noDupesInput).map(function(input){
        return parseInt(input.value, 10);
    })
    const noDupesResult=hasNoDuplicates(noDupesArr);
    noDupesAnswer.value=noDupesResult;
})

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      HAS CERTAIN KEY

// --------------------------------------------------------------

const peopleArr=[
    {
        name:       'Mark',
        human:      'yes'
    },
    {
        name:       'Siera',
        catOwner:   true,
        human:      'yes'
    }
]

function hasCertainKey(arr,key){
    return arr.every(function(val){
        return key in val;
    })
}

// --------------------------------------------------------------

const hasKeyText=document.querySelector('#haskey p');
const hasNameAnswer=document.querySelector('#namekey .answer');
const nameKeyBtn=document.querySelector('#namekey button');
const hasCatAnswer=document.querySelector('#catkey .answer');
const catKeyBtn=document.querySelector('#catkey button');

// --------------------------------------------------------------

hasKeyText.innerText=`${JSON.stringify(peopleArr)}`;
nameKeyBtn.addEventListener('click',function(){
    let hasKeyResult=hasCertainKey(peopleArr,'name');
    hasNameAnswer.value=hasKeyResult;
})
catKeyBtn.addEventListener('click',function(){
    let hasKeyResult=hasCertainKey(peopleArr,'catOwner');
    hasCatAnswer.value=hasKeyResult;
})

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      HAS CERTAIN VALUE

// --------------------------------------------------------------

function hasCertainValue(arr,key,searchVal){
    return arr.every(function(val){
        return val[key]===searchVal;
    })
}

// --------------------------------------------------------------

const hasValText=document.querySelector('#hasval p');
const nameTestBtn=document.querySelector('#nametest button');
const nameTestAnswer=document.querySelector('#nametest input');
const humanTestBtn=document.querySelector('#humantest button');
const humanTestAnswer=document.querySelector('#humantest input');

// --------------------------------------------------------------

hasValText.innerText=`${JSON.stringify(peopleArr)}`;
nameTestBtn.addEventListener('click',function(){
    let nameTestResult=hasCertainValue(peopleArr,'name','Mark');
    nameTestAnswer.value=nameTestResult;
})
humanTestBtn.addEventListener('click',function(){
    let humanTestResult=hasCertainValue(peopleArr,'human','yes');
        humanTestAnswer.value=humanTestResult;
})
