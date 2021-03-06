function Inventory() {
	this.inventory = [];
	this.weapon = null;
	this.armor = null;
}

Inventory.prototype.add = function(item) {
	if(item.type == "weapon") {
		if(this.weapon == null) this.weapon = item;
		else this.inventory.push(item);
	} else if(item.type == "armor"){
		if(this.armor == null) this.armor = item;
		else this.inventory.push(item);
	} else {
		this.inventory.push(item);
	}
}

Inventory.prototype.remove = function(item){
	if(item == this.weapon) this.weapon = null;
	else if(item == this.armor) this.armor = null;
	else {
		var idx = this.inventory.indexOf(item);
		this.inventory.splice(idx,1);
	}
}

Inventory.prototype.GetWeaponDamage = function(baseDamage){
	return this.weapon ? this.weapon.damage : 0;
}

Inventory.prototype.GetArmorProtection = function(baseArmor) {
	return this.armor ? this.armor.protection : 0;
}

Inventory.prototype.getById = function(id) {
	for(var idx in this.inventory){
		var item = this.inventory[idx];
		if(item.itemID == id) return item;
	}
	
	return null;
}

Inventory.prototype.getByIdx = function(idx){
	return this.inventory[idx] ? this.inventory[idx] : null;
}

Inventory.prototype.changeWeapon = function(item) {
	if(item === this.weapon) return;
	
	this.inventory.push(this.weapon);
	this.weapon = item;
}

Inventory.prototype.changeArmor = function(item) {
	if(item === this.armor) return;
	
	this.inventory.push(this.armor);
	this.armor = item;
}










