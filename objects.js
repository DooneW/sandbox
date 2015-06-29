/*
Loot
 |        1hand
            |
 Weapon -----
            |
          2hand
*/

function LootableItem (name){
	this.name = name;
	this.rarity = ["Common", "Uncommon", "Rare", "Epic"];
	this.questItem = false;
}

function Weapon (name){
	LootableItem.call(this); 
	this.ranged = 10; //ranged weapons
	this.melee = 2; //melee weapons
	this.maxDamage = 10;
}

function Sword(){
	Weapon.call(this),
	this.dualWield = true
}

var thunderfury = new Weapon("Thunderfury")