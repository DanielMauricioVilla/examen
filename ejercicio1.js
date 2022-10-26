let age = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;

function eje1 (params) {
    
    for (let i = 0; i < age.length; i++) {
        sum += age[i];
        
    }

    let average1 = sum / age.length;
    console.log (average1);
}

eje1 ();