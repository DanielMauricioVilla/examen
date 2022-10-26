function eje5 (params) {

    let min = 1;
    let max = 50;
    let number = 0;

    for (let i = 0; i < 20; i++) {
        
        number = Math.floor (Math.random ()*(max-min+1)+min);
        console.log(number);
        
    }

}

eje5 ();