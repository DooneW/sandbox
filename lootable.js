window.onload = function(){
		
	var button  		= document.getElementById('clickMe');
	var results 		= document.getElementById('results');
	var inventoryView = document.getElementById('inventory');
	var inventory 		= [];
		 
	function LootableItem(name){
		var quality = ["Common", "Uncommon", "Rare", "Epic"];
		this.rarity = quality[Math.floor(Math.random() * 4)];
		this.name = name;
		this.item = function(){
			return [this.type, "Quality: " + this.rarity].join(', ');
		};
	}
Weapon.
	function Weapon(){	
		LootableItem.call(this);
		var itemType = ["Dagger", "1_H Sword", "Wand", "Polearm"];
		this.type = itemType[Math.floor(Math.random() * 4)]; 
	}
   
   // Connect with your script.
   button.onclick = function(){
   	for (var i = 0; i < 5; i++){
   		var weapon = new Weapon("Crazy Horse");
      	results.innerHTML += "<a href='#'>" + weapon.item() + "</a>";
   	}
   };
   
   // Create a click function to add item to inventory.
   results.onclick = function(){
   	for (var i=0;) {
   		var result = results.innerHTML;
   		var a = document.querySelectAll('a');
   		inventory.push(result);
   		results.innerHTML = "";
   		viewInventory();
   	}
   	viewInventory();
   }
   
   function viewInventory(){
   	if (inventory.length > 0){
   		inventoryView.innerHTML = inventory;
   	}
   }
};
//<a href"#"></a>