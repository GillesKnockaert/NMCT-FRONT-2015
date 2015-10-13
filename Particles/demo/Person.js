/**
 * Created by kevinderudder on 13/10/15.
 */
/*
var person = {
    "name": "Johan",
    "geslacht": "M"
};

var johan = Object.create(person, {});*/



//class Person{}

function Person(name, email){
    this.name = name;
    this.email = email;

    //this.toString = function(){return this.name;};
}

//Person.prototype.toString = function(){return this.name;};
//Person.prototype.getName = function(){return this.name};
//Person.prototype.setName = function(v){this.name = v;};
Person.prototype.sendEmail = function(txt){console.log(txt);};

Person.prototype = {
    getName: function(){return this.name;},
    setName: function(v){this.name = v;},
    //set Name(v){this.name = v;},
    toString: function(){return this.name;}
};

// <h1>{{getName()}}</h1>
// <h1>{{Name}}</h1>

var kevin = new Person("kevin", "");
kevin.setName("johan");
//kevin.Name = "johan";
var johan = new Person("johan");
