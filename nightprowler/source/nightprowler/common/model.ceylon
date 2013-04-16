
doc "Type alias containing all model types."
shared alias ModelType => NotPlayedCharacter|Character|Table|Player; 

doc "Represents a player. It posseses Characters."
shared class Player(name, login, password, characters={}, masteredTables={}) {
	
	doc "Player's name."
	shared String name;

	doc "The player's characters."
	shared variable {Character*} characters;

	doc "Tables where the player is the master."
	shared variable {Table*} masteredTables;

	doc "Id used for login."
	shared String login;

	doc "Salt used to hash password, not used yet."
	shared String salt = "";

	doc "Password (hashed)"
	shared String password;	
}

doc "Represents a table, a group of Characters in a same game. A table is moderated by the master."
shared class Table(name, characters={}, npcs={}) {
	
	doc "The master player."
	shared late Player master;

	doc "The table name."
	shared String name;
	
	doc "The player's characters played in the table." 
	shared variable {Character*} characters;

	doc "The non player characters for table."
	shared variable {NotPlayedCharacter*} npcs;
}

shared class NotPlayedCharacter(name) {
	shared String name;
}

shared class Character(name){	
	shared String name;
	shared late Player player;
}
