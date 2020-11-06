function Hero(name, profession, age, str, hp){
    this.name = name;
    this.profession = profession;
    this.age = age;
    this.str = str;
    this.hp = hp;
    this.printStats = ()=>{
        console.log(this.name);
        console.log(this.profession);
        console.log(this.age);
        console.log(this.str);
        console.log(this.hp);
    }
};

const steven = new Hero("Steven", "Butt Head", 12, 16, 55);
const lavern = new Hero("Lavern", "Looter", 67, 22, 28);

Hero.prototype.isAlive = function(){
    if(this.hp >= 0){
        console.log(this.name+" is alive");
        return true;
    }
    
    console.log(this.name+" is dead");
    return false;
};