function eje3(params) {
    
    let house = ["casa","pera","perro","casa","casa","casa"];
    let seeHouse = [];

    for (let i = 0; i < house.length; i++) {
        let d = house[i].includes ("casa");
        if (d === true){
            seeHouse.push ("casa")
        }
    }
    console.log(seeHouse);
}

eje3 ();