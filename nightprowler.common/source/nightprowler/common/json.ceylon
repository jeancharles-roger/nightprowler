
import ceylon.json { parse, Object, Array }

shared ModelObject fromJsonString(String source) {
	return fromJsonObject(parse(source));
}

ModelObject fromJsonObject(Object json) {
	switch(json.get("type")) 
	case ("NotPlayedCharacter") {
		return NotPlayedCharacter{
			name = json.getString("name");
		};
	}
	case ("Character") {
		return Character{
			player = json.getString("player");
			name = json.getString("name");
		};
	}
	case ("Player") {
		return Player{
			name = json.getString("name");
			login =  json.getString("login");
			password = json.getString("password");
			salt = json.getString("salt");
			characters = typeSequenceFromJsonArray(json.getArray("characters"));
			masteredTables = typeSequenceFromJsonArray(json.getArray("tables"));
		};
	}
	case ("Table") {
		return Table{ 
			name = json.getString("name");
			master =  json.getString("master");
			characters = typeSequenceFromJsonArray(json.getArray("characters"));
			npcs = typeSequenceFromJsonArray(json.getArray("npcs"));
		};
	}
	else {
		throw Exception("Can't translate: '"+ json.string +"'.");
	}
}

doc ("Transforms a json Array into a sequence of Type.")
see (`function typeFromJsonObject`)
{Type*} typeSequenceFromJsonArray<Type>(Array source) 
// The restriction isn't usefull
//	given Type of NotPlayedCharacter|Character|Table|Player|String
{
	return {
		for ( oneSource in source ) 
			if (is Object oneObject = oneSource )	
				typeFromJsonObject(oneObject)
	};
}

doc ("Transforms a json Object into a instance of Type.")
see (`function fromJsonObject`)
Type typeFromJsonObject<Type>(Object source) 
// The restriction isn't usefull
//	given Type of NotPlayedCharacter|Character|Table|Player|String
{
	if ( is Type casted = fromJsonObject(source) ) {
		return casted;
	} else {
		throw Exception("Can't translate to "+ `Type`.string +" : '"+ source.string +"'.");
	}
}

Array toJsonArray({ModelObject*} source) {
	return Array(
		{
			for ( oneSource in source ) 
				toJsonObject(oneSource)
		}
	);
}

Object toJsonObject(ModelObject source) {
	switch (source) 
	case (is NotPlayedCharacter) {
		return Object(
			{ 
				"type" -> "NotPlayedCharacter", 
				"name" -> source.name 
			}
		);
	}
	case (is Character) {
		return Object(
			{ 
				"type" -> "Character", 
				"name" -> source.name,
				"player" -> source.player 
			}
		);
	}
	case (is Player) {
		return Object(
			{ 
				"type" -> "Player", 
				"name" -> source.name,
				"login" -> source.login,
				"password" -> source.password,
				"salt" -> source.salt,
				"characters" -> toJsonArray(source.characters),
				"tables" -> toJsonArray(source.masteredTables) 
			}
		);
	}
	case (is Table) {
		return Object(
			{ 
				"type" -> "Table", 
				"name" -> source.name,
				"master" -> source.master,
				"characters" -> Array(source.characters),
				"npcs" -> toJsonArray(source.npcs) 
			}
		);
	}
}

shared String toJsonString(ModelObject model) {
	return toJsonObject(model).string;
}