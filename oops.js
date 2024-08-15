// let obj = {
//     a: 1,
//     b: "Sujal"
// }
// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit._proto_ = animal; //setting prototype


class Animal{
    constructor(name){
        this.name = name
        console.log("Object is created...."); 
    }
    eats(){
        console.log("kha raha hoon");
    }
    jumps(){
        console.log("kood raha hoon");
    }
}


class Lion extends Animal{
    roars(){
        console.log('Roarrrrr');
    }
}
let a = new Animal("Bunny");
let l = new Lion("Shera")
console.log(a)
a.jumps()
a.eats()
// a.name()
console.log(l);

// class User {
//     constructor(name){
//         this.name = name
// }
// get name(){
//     return this._name;
// }
// set name(value){
//     if(value.length < 4){
//         alert("Name is too  short.")
//         return;
//     }
// }
// }
// let user = new UserActivation("John")
// console.log(user.name);
// user.name = "Harry"

// console.log(user.name);
// l instanceof Lion