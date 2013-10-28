
"Root interface for all model classes."
shared interface ModelObject 
of Player | Character | Table | NotPlayedCharacter 
{
	shared formal Result accept<Result,Args>(Visitor<Result,Args> visitor, Args arguments);
}

"Represents a player. It posseses Characters."
shared class Player(name, login, password, salt = "", characters={}, masteredTables={}) 
	satisfies ModelObject
{
	"Player's name."
	shared String name;

	"The player's characters."
	shared variable {Character*} characters;

	"Tables where the player is the master."
	shared variable {Table*} masteredTables;

	"Id used for login."
	shared String login;

	"Salt used to hash password, not used yet."
	shared String salt;

	"Password (hashed)"
	shared String password;	

	"Decription string."
	shared actual String string = "[Player] " + login + ", " + name;

	shared actual Result accept<Result,Args>(Visitor<Result,Args> visitor, Args arguments) {
		return visitor.visitPlayer(this, arguments);
	}
}

"Represents a table, a group of Characters in a same game. A table is moderated by the master."
shared class Table(master, name, characters={}, npcs={})
	satisfies ModelObject
{
	
	"The master's player login."
	shared String master;

	"The table name."
	shared String name;
	
	"The player's characters played in the table." 
	shared variable {String*} characters;

	"The non player characters for table."
	shared variable {NotPlayedCharacter*} npcs;

	"Decription string."
	shared actual String string = "[Table] " + name + ", mastered by " + master;

	shared actual Result accept<Result,Args>(Visitor<Result,Args> visitor, Args arguments) {
		return visitor.visitTable(this, arguments);
	}

}

shared class NotPlayedCharacter(name) 
	satisfies ModelObject
{
	shared String name;

	"Decription string."
	shared actual String string = "[Npc] " + name;

	shared actual Result accept<Result,Args>(Visitor<Result,Args> visitor, Args arguments) {
		return visitor.visitNotPlayedCharacter(this, arguments);
	}
}

shared class Character(player, name)
	satisfies ModelObject
{	
	"The player's login."
	shared String player;

	shared String name;

	"Decription string."
	shared actual String string = "[Character] " + name + " to " + player;

	variable {Change*} modifications = []; 

	shared void apply({Change+} group) {
		modifications = modifications.chain(group);
	}

	shared Integer getInteger(String attribute) {
		// applies modifications for given attribute
		variable Integer result = 0;
		for ( modification in modifications ) {
			if ( attribute == modification.attribute ) {
				//result = modification.modify(result);	
			}
		}

		// returns result
		return result;
	}

	shared actual Result accept<Result,Args>(Visitor<Result,Args> visitor, Args arguments) {
		return visitor.visitCharacter(this, arguments);
	}
}


shared interface Change {
	shared formal String attribute;
}

shared class Modificator(attribute, modify) satisfies Change {
	shared actual String attribute;

	shared Integer modify(Integer current);
}

shared class Setter<Type>(attribute, toSet) satisfies Change {
	shared actual String attribute;
	shared Type toSet;
}

shared Integer add(Integer delta)(Integer current) {
	return current + delta;
}

"Model visitor interface."
shared interface Visitor<out Result, in Args> {
	shared formal Result visitPlayer(Player player, Args arguments);
	shared formal Result visitTable(Table table, Args arguments);
	shared formal Result visitNotPlayedCharacter(NotPlayedCharacter npc, Args arguments);
	shared formal Result visitCharacter(Character character, Args arguments);
}

