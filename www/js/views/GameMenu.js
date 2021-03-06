/*
 * TO ADD NEW VIEW:
 * a) create view in gimp (background, buttons, etc)
 * b) add boolean to parent menu(e.g -> GameMenu: parent of all) 'newMenuOpened' = false
 * c) add newImage and newImageSelected to parent menu; load those images
 * d) add LOGIC to parent.Draw() to draw right image (selected or not) -> for button
 * e) add LOGIC to parent.Draw() to draw newMenu if opened (clicked on btn before)
 * f) add NewMenu class to views folder (implement Draw(ctx) method)
 * g) add NewMenuStateView to FSM (ViewMachine) :: create refrences to container, etc...
 * h) implement click funcionality 
 */

function GameMenu() {
	this.MENU_START_Y = 450;
	
	this.statsMenuOpened = false;
	this.questsMenuOpened = false;
	this.worldMenuOpened = false;
	this.inventoryMenuOpened = false;
	this.npcMenuOpened = false;
	this.preCombatMenuOpened = false;
	this.itemPickMenuOpened = false;
	
	this.questsSelected = false;
	this.statsSelected = false;
	this.isMouseOverWorldBtn = false;
	this.isMouseOverInventoryBtn = false;
	
	this.statsImg = new Image();
	this.stats_selected = new Image();
	
	this.statsImg.src = "img/game_menu/stats.png";
	this.stats_selected.src = "img/game_menu/stats_selected.png";
	
	this.questsImg = new Image();
	this.quests_selected = new Image();
	
	this.questsImg.src = "img/game_menu/quests.png";
	this.quests_selected.src = "img/game_menu/quests_selected.png";
	
	this.worldBtnImg = new Image();
	this.worldBtnSelectedImg = new Image();
	
	this.worldBtnImg.src = "img/game_menu/world_btn.png";
	this.worldBtnSelectedImg.src = "img/game_menu/world_btn_selected.png";
	
	this.inventoryBtnImg = new Image();
	this.inventoryBtnSelectedImg = new Image();
	
	this.inventoryBtnImg.src = "img/game_menu/inventory_btn.png";
	this.inventoryBtnSelectedImg.src = "img/game_menu/inventory_btn_selected.png";
	
	this.statsMenu = new StatsMenu();
	this.questsMenu = new QuestsMenu();
	this.questsMenu.Load();
	
	this.worldMenu = new WorldMenu();
	this.inventoryMenu = new InventoryMenu();
	this.npcMenu = new NpcMenu();
	this.preCombatMenu = new PreCombatMenu();
	this.playerGui = new PlayerGui();
	this.itemPickMenu = new ItemPickedUpMenu();
}

GameMenu.prototype.UpdatePlayerRef = function(player) {
	this.statsMenu.SetUpPlayer(player);
	this.playerGui.SetUpPlayer(player);
	this.inventoryMenu.SetUpPlayer(player);
}

GameMenu.prototype.Draw = function(ctx){
	if(this.statsMenuOpened) {
		this.statsMenu.Draw(ctx);
		return;
	} else if(this.questsMenuOpened){
		this.questsMenu.Draw(ctx);
		return;
	} else if(this.worldMenuOpened){
		this.worldMenu.Draw(ctx);
		return;
	} else if(this.inventoryMenuOpened) {
		this.inventoryMenu.Draw(ctx);
		return;
	} else if(this.npcMenuOpened){
		this.npcMenu.Draw(ctx);
		return;
	} else if(this.preCombatMenuOpened){
		this.preCombatMenu.Draw(ctx);
		return;
	} else if(this.itemPickMenuOpened){
		this.itemPickMenu.Draw(ctx);
		return;
	}
	
	this.playerGui.Draw(ctx);
		
	if(this.statsSelected) ctx.drawImage(this.stats_selected,0,this.MENU_START_Y);
	else ctx.drawImage(this.statsImg,0,this.MENU_START_Y);
	
	if(this.questsSelected) ctx.drawImage(this.quests_selected,100,this.MENU_START_Y);
	else ctx.drawImage(this.questsImg,100,this.MENU_START_Y);
	
	if(this.isMouseOverWorldBtn) ctx.drawImage(this.worldBtnSelectedImg,200,this.MENU_START_Y);
	else ctx.drawImage(this.worldBtnImg,200,this.MENU_START_Y);
	
	if(this.isMouseOverInventoryBtn) ctx.drawImage(this.inventoryBtnSelectedImg,300,this.MENU_START_Y);
	else ctx.drawImage(this.inventoryBtnImg,300,this.MENU_START_Y);
}


GameMenu.prototype.deselectAllMenus = function() {
	this.statsMenuOpened = false;
	this.questsMenuOpened = false;
	this.worldMenuOpened = false;
	this.inventoryMenuOpened = false;
	this.npcMenuOpened = false;
	this.preCombatMenuOpened = false;
	this.itemPickMenuOpened = false;
}

GameMenu.prototype.deselectAllBtns = function() {
	this.questsSelected = false;
	this.statsSelected = false;
	this.isMouseOverWorldBtn = false;
	this.isMouseOverInventoryBtn = false;
}