// create a function that console logs any argument given
function display (content){
    console.log(content);
}

// create a function that takes a name(string) as a parameter
// and returns "hi my name is" paramter given
function name(HamsFake){
    return "Hi, My name is " + HamsFake + ".";
}

// create 3 functions that describe the powers of a ninja that you woud like to create
function name(Ninja){
    return "I have three powers. Sharinga, Katon, and Telekenesis."
}
function Sharinga(ability){
    return "Using " + ability + "Sharinga.";
}
function Katon(style){
    return "Katon " + style + "Jutsu.";
}
function Melee(move){
    return "Using my" + move + "to attack from close combat."
}

// display(name ("HamzFake"));
// display(Melee("Punch"));
// display(Katon("Fire"));
// display(Sharinga("Magenko"));


// OOP incapsulation: grouping all behavior inside an Object.
const ninja = {
    name(HamsFake){
        return "Hi, My name is " + HamsFake + ".";
    },

    name(Ninja){
        return "I have three powers. Sharinga, Katon, and Telekenesis."
    },

    Sharinga(ability){
        return "Using " + ability + "Sharinga.";
    },

    Katon(style){
        return "Katon " + style + " style Jutsu.";
    },

    Melee(move){;
        return "Using my" + move + "to attack from close combat.";
    }
}
// display(HamzFake.name("HamzFake"));
// display(HamzFake.Melee("Punch"));
// display(HamzFake.Jutsu("Fire"));
// display(HamzFake.Sharinga("Magenko"));


// create a class for instantiating ninja's
// OOP Absrtaction: hiding comnplexity
class ninjaGod {
    constructor ( name, ability, style, move){
    this.nameInsideninjaGod = name;
    this.ability            = ability;
    this.style              = style;
    this.move               = move;
    }

    name(){
        return "Hi, My name is " + this.nameInsideninjaGod + ".";  
    }

    Sharinga(){
        return "Using " + this.ability + "Sharinga.";
    }

    Jutsu(){
        return "Katon " + this.style + " style Jutsu.";
    }

    Melee(){
        return "Using my" + this.move + "to attack from close combat.";
    }

}
// OOP inheritance
let HamzFake = new ninjaGod("HamzFake", "Magenko ", "Fire", "Upside Down Knife Throw");

display(HamzFake.name());
display(HamzFake.Melee());
display(HamzFake.Jutsu());
display(HamzFake.Sharinga());
