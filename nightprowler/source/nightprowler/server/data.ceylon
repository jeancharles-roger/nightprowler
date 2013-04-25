import nightprowler.common {
	NotPlayedCharacter, Character, Player, Table,
	toJsonString
}

doc "Path where to find data."
String dataPath = "data";

object data {

	// Robin
	Player robin = Player {
		login = "robin";
		password = "williams";
		name = "Robin";
		characters = { 
			Character("robin", "Personnage de Robin")
		};
	};
	
	// Mathieu
	Player mathieu = Player {
		login="mathieu";
		password="amalric";
		name = "Mathieu";
		characters = { 
			Character("mathieu", "Personnage de Mathieu")
	 	};
	};
	
	// Table de Saint Renan
	Table tableDeStRenan = Table {
		master = "jeancharles";
		name = "Table de Saint Renan";
		characters = { "robin.Personnage de Robin", "mathieu.Personnage de Mathieu" };
		npcs = { NotPlayedCharacter("La mouche") };
	};

	// Jean-Charles
	Player jeancharles = Player {
		login="charlie";
		password="sheen";
		name = "Jean-Charles";
		masteredTables = { tableDeStRenan };
	};

	doc "Players list."
	shared {Player*} players = { robin, mathieu, jeancharles };
}