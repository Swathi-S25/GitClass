class Father{
    constructor(bike){
        this.house="2bhk"
        this.bike=bike
    }
    get details(){
        console.log(`I have ${this.house}, ${this.bike}`)
    }
}
class Son extends Father{
    constructor(bike){
        super(bike)
        this.car="BMW"
    }
    get details(){
        console.log(`I have ${this.house}, ${this.bike} and ${this.car}`)
    }
}
let f1=new Father("Pulsor")
let s1=new Son()
s1.details
f1.details
