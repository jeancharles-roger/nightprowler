import ceylon.json { Object, Array, parseJson = parse }

doc "Transforms a ModelType to a JSON string representation."
shared String toJsonString(ModelType model) {
	return toJsonObject(model).pretty;
}

doc "Transforms a ModelType sequence to a JSon Array."
Array toJsonArray({ModelType*} array) {
	return Array { for ( element in array ) toJsonObject(element) };
}

doc "Transforms a ModelType to a JSon Object."
Object toJsonObject(ModelType model) {
	switch (model)
	case (is Character) {
		return Object {
			"type" -> "Character",
			"player" -> model.player,
			"name" -> model.name
		};
	}
	case (is NotPlayedCharacter) {
		return Object {
			"type" -> "NotPlayedCharacter",
			"name" -> model.name
		};
	}
	case (is Table) {
		return Object {
			"type" -> "Table",
			"master" -> model.master,
			"name" -> model.name,
			"characters" -> Array (model.characters),
			"npcs" -> toJsonArray(model.npcs)
		};
	}
	case(is Player) {
		return Object {
			"type" -> "Player",
			"name" -> model.name,
			"login" -> model.login,
			"salt" -> model.salt,
			"password" -> model.password,
			"characters" -> toJsonArray(model.characters),
			"tables" -> toJsonArray(model.masteredTables)
		};
	}
}

doc "Transforms a JSON string to a ModelType."
shared ModelType fromJsonString(String json) {
	value parsed = parseJson(json);
	return fromJsonObject(parsed);
}

doc "Transform a JSON string to a Player."
shared Player playerFromJsonString(String json) {
	if ( is Player model = fromJsonString(json) ) {
		return model;
	} else {
		throw Exception("JSON isnot a Player: " + json.string);
	}
}


doc "Gets all Strings at Json array top level."
{String*} stringsFromJsonArray(Array json) {
	return {
		for ( oneJson in json ) 
			if (is String oneString = oneJson )	
				oneString
	};
}

doc "Gets all Character at Json array top level."
{Character*} charactersFromJsonArray(Array json) {
	return {
		for ( oneJson in json ) 
			if (is Object oneObject = oneJson )	
				if (is Character model = fromJsonObject(oneObject) ) model
	};
}

doc "Gets all Table at Json array top level."
{Table*} tablesFromJsonArray(Array json) {
	return {
		for ( oneJson in json ) 
			if (is Object oneObject = oneJson )	
				if (is Table model = fromJsonObject(oneObject) ) model
	};
}

doc "Gets all NotPlayedCharacter at Json array top level."
{NotPlayedCharacter*} npcsFromJsonArray(Array json) {
	return {
		for ( oneJson in json ) 
			if (is Object oneObject = oneJson )	
				if (is NotPlayedCharacter model = fromJsonObject(oneObject) ) model
	};
}

ModelType fromJsonObject(Object json) {
	value type = json.getString("type");
	if ( type == "Character" ) {
		return Character {
			player = json.getString("player");
			name = json.getString("name");
		};
	}
	else if ( type == "NotPlayedCharacter") {
		return NotPlayedCharacter {
			name = json.getString("name");
		};
	}
	else if ( type == "Table") {
		return Table {
			master = json.getString("master");
			name = json.getString("name");
			characters = stringsFromJsonArray(json.getArray("characters"));
			npcs = npcsFromJsonArray(json.getArray("npcs"));
		};
	}
	else if ( type == "Player") {
		return Player {
			name = json.getString("name");
			login = json.getString("login");
			salt = json.getString("salt");
			password = json.getString("password");
			characters = charactersFromJsonArray(json.getArray("characters"));
			masteredTables = tablesFromJsonArray(json.getArray("tables"));
		};
	}
	else {
		throw Exception("Unknown type '" + type + "'.");
	}
}



