/* Make a variable */
var carName = "Volkswagen";

/* Make a string */ 
"I love you"

/* Make an array */
[carName, "I love you", function() {}]

/* Make a function */
function myFunc() {
    // do stuff
}

var a = function(){
    // do stuff
};

/* Make a conditional */
if ("Tay".length ===3)
{
    console.log("that's correct!")
}

/* Make a function that takes some integers, adds them and stores the results
an array */

function myArray()
{
    var array = [2+3];
    return array;
}

// Arguments
var list = []

function phonebook(name,phone,database){
    if (name) {
        database.push(name)
    } else (phone) {
        database.push(phone)
    }
}

phonebook("Chris", "333-333-3333", list)

// Game


function CheckNums(num1,num2) { 

  if (num1 > num2){
    return 'true';
  } else if (num1 < num2) {
      return "false";
  } else {
      return "-1";
  }

    
}

// Problem details: reverse a string

// What string? Any.

var cat = "cat";

function reverseString(string){
    // Loop through the string?
    for(var i=cat.length-1; i => 0; i--){
        // make a variable with a new string
        var tac = "";
        // add new letter to string
        var tac += cat[i];
        // print string
        return tac;
    }
}

/*var lootTable = {
    name: "name",
    equipItem: true,
    stackable: false
};*/

var Animal = function(name) {
    this.name = name,
    this.type = "mammal",
    this.fur = true;
};

var rabbit = new Animal("vincent")
rabbit.name
rabbit.fur = false

Animal.prototype.says = function(sound) {
    return sound;
};

dog = new Animal("Benson");
dog.says("woof!");
console.log(dog);

rabbit.defineProperty(this,"name",{
    get: function () {
        return name;
    },
    
    set: function (value) {
        name = value;
    }
});

var inventory = []

function checkInventory(inventory) {
    // Inventories have a max length of 6
    // If inventory.length > 6
    // Do not insert item
    // Else insert item
}


if (inventory.length > 6)
{
    throw new Error ("Inventory is Full");
}

var Inventory = function() {
  this.data     = [];
  this.next     = null;
  this.previous = null;
  this.length   = 6;
}

var Animal = {
    name: "name",
    fur: true,
    teeth: false
};


inventory.push(rabbit)


var DatabaseItem = function(name, catagory){
	this.name = name;
	this.catagory = catagory;
	this.requiredLevel = 1;
	this.durability = 100;
	this.questItem = false;
};

function DatabaseItem (name, catagory){
	this.name = name;
	this.catagory = catagory;
	this.requiredLevel = 1;
	this.durability = 100;
	this.questItem = false;
}

//which one? or are they the same?
// They are the same XXXchris

//also, what's an elegant way to handle unique properties associated with
//the prototypes I make without having to pass in every property into the 
//argument? With this process, this property list is going to get stupid
// long :(. Below is with just 3 properties. 

var lootableItem = new DatabaseItem("Wooden Sword", "Weapon");
var lootableItem = new DatabaseItem("Cowhide Breastplate", "Armor");

DatabaseItem.prototype.repairItem = function(){
	if (this.durability === 1){
		return alert("Your " + lootableItem.name + " needs repair");
	}
};
lootableItem.durability = 1;
lootableItem.repairItem();

//this works with both of the above formats. *moar confuzzledom*

// yea.. i have a lot more questions 
// i'm having a hard time imagining this keeping good track
//of more than a handful of items. and definitely not if 
//there are more than one of any type


function Weapon (name){
	LootableItem.call(this); //what kind of weapon is it?
	this.ranged = Math.floor((Math.random() * 10) + 1);
	this.maxDamage = Math.floor((Math.random() * 10) + 1);
	this.melee = 2; //melee weapons
	this.item = function(){
		return this.ranged + this.maxDamage + this.melee;
	};
	
}

   // Connect with your script.
   button.onclick = function(){
   	var thunderfury = new Weapon("Thunderfury");
      results.innerHTML = thunderfury.item;
   }
     
}

var LootableItem = function() {
	
	var quality = ["Common", "Uncommon", "Rare", "Epic"];
	var itemType = ["Weapon", "Armor", "Rare", "Epic"];
	var questItem = false;
	var bound = false;
	var requiredLevel = 10;
	var durability = 100;
	
	this.rarity = quality[Math.floor(Math.random() * 4)];
	this.type = itemType[Math.floor(Math.random() * 1)]; //change * N.
	
	function itemGenerator() {
		this.item = function() {
			return ["Name: " + this.name, "Quality: " + this.rarity, "Damage: " + this.damage].join(', ');
		};
	}
	
});

LootableItem.prototype.weapon = {
		damage: function() {
			Math.floor((Math.random() * 10) + 1).toString();
		}, 
		
	};
	
	LootableItem.prototype.armor = {
	    protection: 15,
	}
	
///////////////////////////////////////////////////////////////////////////////

var a = document.querySelectAll('a');
var inventory = []

for(var i=0;i < a.length; i++){
    a[i].onclick = function(){
        inventory.push(a[i]);
    }
}

