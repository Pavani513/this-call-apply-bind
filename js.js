let obj1={
    id:1,
    name:"Pavani",
    state:"ap",
    details:function(){
        console.log(`am a person with id no ${this.id} and name ${this.name} and from state ${this.state}`)
    }
}
console.log(obj1.details())

let obj2={
    id:2,
    name:"Jay",
    city:"guntur",
    details:function(){
        console.log(`am a person with id no ${this.id} and name ${this.name} and from city ${this.city}`)
    }
}
console.log(obj2.details())

let obj3={
    id:3,
    name:"Gopi",
    country:"USA",
    details:function(){
        console.log(`am a person with id no ${this.id} and name ${this.name} and from country ${this.country}`)
    }
}
console.log(obj3.details())

let obj4={
    id:4,
    name:"Chinni",
    state:"Telangana",
    details:function(){
        console.log(`am a person with id no ${this.id} and name ${this.name} and from state ${this.state}`)
    }
}
console.log(obj4.details())

let obj5={
    id:5,
    name:"Mahesh",
    country:"Uk",
    details:function(){
        console.log(`am a person with id no ${this.id} and name ${this.name} and from country ${this.country}`)
    }
}
console.log(obj5.details())

let obj6={
        id:6,
        name:"Pavani",
        state:"ap",
        siblings:true,
    }
    var details=function(p,j){
        console.log(`am a person with id no ${this.id} and name ${this.name} and from state ${this.state} and siblings ${this.siblings} ${p} ${j}`)
    }
    details.call(obj6,"hello pavani!! how are you",1234567890)
    details.apply(obj6,["hello pavani!! how are you",1234567890])
    const abc=details.bind(obj6,"hello pavani!! how are you",1234567890)
    console.log(abc())

    let obj7={
        id:7,
        name:"chinni",
        city:"guntur"
    }
    var details=function(p,k){
        console.log(`am a person with id no ${this.id} and name ${this.name} and from city ${this.city} and ${this.siblings} ${p} ${k}`)
    }
    details.call(obj7,"hello chinni!! how you're doing",12345)
    details.apply(obj7,["hello chinni!! how you're doing",12345])
    const pqrs=details.bind(obj7,"hello chinni!! how you're doing",12345)
    console.log(pqrs())

    let obj8={
        id:8,
        name:"Pav",
        city:"hyd",
        age:21
    }
    var details=function(c,a){
        console.log(`am a person with id no ${this.id} and name ${this.name} and from state ${this.state} and age ${this.siblings} ${c} ${a}`)
    }
    details.call(obj8,"hello pav!! how are you",13579)
    details.apply(obj8,["hello pav!! how are you",13579])
    const xyz=details.bind(obj8,["hello pav!! how are you",13579])
    console.log(xyz());
    
