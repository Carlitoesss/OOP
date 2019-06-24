function display(content){
    console.log(content)
}
// define functions
function name(Carlos){
    return "Hi, My name is " + Carlos
}
// define parents
display(lilly.alwaysscreamsatmefornoreason());
display(ito.getsmefoodwheneveriask());

// child class
// instantiate yourself from the child class
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
}