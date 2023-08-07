/*US2: As a user, I want to be able to see on my webpage the type of dice I am using.
// A dice is composed of many characteristics: number of sides, color, size (small, medium, big), usage (for example for a DnD game: combat, decision, exploration).
// Use a json object to describe a dice and print that into a new section of the page.
// Knowing that D6 is the 6-sides dice and D10 is the 10 one, when I choose D6, I should see the info of D6 inside a section of the page and when I choose the D10, D6's info should be replaced by D10.
 (check attached screenshot US1)
 */

 const D6 = {
    "sides": 6,
    "colour": "Red",
    "size": "Small",
    "usage": "Combat"
}

const D10 = {
    "sides": 10,
    "colour": "Blue",
    "size": "Medium",
    "usage": "Exploration"
}
value;

function diceInfo(sides) {
    if(sides==6) {
        // document.getElementById("selectedDice").innerHTML = "You have chosend a D6 dice which has the following attributes: ";
        document.getElementById("sides").innerHTML = "Sides: " +  D6.sides;
        document.getElementById("colour").innerHTML = "Colour: " + D6.colour;
        document.getElementById("size").innerHTML = "Size: " + D6.size;
        document.getElementById("usage").innerHTML = "Usage: " + D6.usage;
        this.value = 6
        console.log(this.value);
    }
    else if(sides==10) {
        // document.getElementById("selectedDice").innerHTML = "You have chosend a D10 dice which has the following attributes: ";
        document.getElementById("sides").innerHTML = "Sides: " +  D10.sides;
        document.getElementById("colour").innerHTML = "Colour: " + D10.colour;
        document.getElementById("size").innerHTML = "Size: " + D10.size;
        document.getElementById("usage").innerHTML = "Usage: " + D10.usage;
        this.value = 10;
    }
    else if(sides==20) {
        // document.getElementById("selectedDice").innerHTML = "You have chosend a D10 dice which has the following attributes: ";
        document.getElementById("sides").innerHTML = "Sides: " +  20;
        document.getElementById("colour").innerHTML = "Colour: " + "Red";
        document.getElementById("size").innerHTML = "Size: " + "Big";
        document.getElementById("usage").innerHTML = "Usage: " + "Combat";
        this.value = 20;
    }
    else if(sides==12) {
        // document.getElementById("selectedDice").innerHTML = "You have chosend a D10 dice which has the following attributes: ";
        document.getElementById("sides").innerHTML = "Sides: " +  12;
        document.getElementById("colour").innerHTML = "Colour: " + "Green";
        document.getElementById("size").innerHTML = "Size: " + "Medium";
        document.getElementById("usage").innerHTML = "Usage: " + "Decision";
        this.value = 12;
    }
    else if(sides==40) {
        // document.getElementById("selectedDice").innerHTML = "You have chosend a D10 dice which has the following attributes: ";
        document.getElementById("sides").innerHTML = "Sides: " +  40;
        document.getElementById("colour").innerHTML = "Colour: " + "Blue";
        document.getElementById("size").innerHTML = "Size: " + "Big";
        document.getElementById("usage").innerHTML = "Usage: " + "Exploratory";
        this.value = 40;
    }
}

function account(value) {
    if(value=='create'){
        document.getElementById("form").style.visibility = 'visible';
    }
    else if(value=='cancel') {
        document.getElementById("form").style.visibility = 'hidden';
    }   
}

function roll() {
    if (this.value==6) {
        document.getElementById("diceRoll").innerHTML = Math.floor(Math.random() * (6 - 1 + 1) + 1);
     }
    if (this.value==10) {
        document.getElementById("diceRoll").innerHTML = Math.floor(Math.random() * (10 - 1 + 1) + 1);
     }
     if (this.value==20) {
        document.getElementById("diceRoll").innerHTML = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        d20=false
     }

     if (this.value==12) {
        document.getElementById("diceRoll").innerHTML = Math.floor(Math.random() * (12 - 1 + 1) + 1);
     }

     if (      this.value==40) {
        document.getElementById("diceRoll").innerHTML = Math.floor(Math.random() * (40 - 1 + 1) + 1);
     }

    
}



    
    
