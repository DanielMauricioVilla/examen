let age = [1,2,3,4,5,6,7,8,9,10];

function eje4 (params) {
    let arrayC = [];
    
    for (let i = 0; i < age.length; i++) {
        
        let result = age [i] * age [i];
        arrayC.push (result);

    }
    return arrayC;
    //console.log(arrayC);

}

console.log(eje4 ());