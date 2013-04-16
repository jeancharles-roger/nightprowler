import ceylon.json { Object, Array }

doc "Transforms a ModelType to a JSon string representation."
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
			"player" -> model.player.login,
			"name" -> model.name
		};
	}
	case (is NotPlayedCharacter) {
		return Object {
			"name" -> model.name
		};
	}
	case (is Table) {
		return Object {
			"name" -> model.name,
			"characters" -> Array { 
				for ( character in model.characters ) character.player.name + "." + character.name
			},
			"npcs" -> toJsonArray(model.npcs)
		};
	}
	case(is Player) {
		return Object {
			"name" -> model.name,
			"login" -> model.login,
			"salt" -> model.salt,
			"password" -> model.password,
			"characters" -> toJsonArray(model.characters),
			"tables" -> toJsonArray(model.masteredTables)
		};
	}
}