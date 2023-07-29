function diceRoll ( dice ) {
    if (dice==6) {
       return Math.floor(Math.random() * (6 - 1 + 1) + 1)
    }
        if (dice==10) {
       return Math.floor(Math.random() * (10 - 1 + 1) + 1)
    }
}


function testRoll () {
    console.log('TESTING DICE: D6')
    for (let i = 0; i <=10; i++ ){
        console.log(diceRoll(6))
    }
    console.log('TESTING DICE: D10')
    for (let i = 0; i <=10; i++ ){
        console.log(diceRoll(10))
    }
    
}

testRoll();