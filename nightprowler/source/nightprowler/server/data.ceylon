doc "Path where to find data."
String dataPath = "data";

object data {

	// Robin
	Character robinCharacter = Character("Personnage de Robin");
	Player robin = Player {
		login = "robin";
		password = "williams";
		name = "Robin";
		characters = { robinCharacter };
	};
	robinCharacter.player = robin;

	// Mathieu
	Character mathieuCharacter = Character("Personnage de Mathieu");
	Player mathieu = Player {
		login="mathieu";
		password="amalric";
		name = "Mathieu";
		characters = { mathieuCharacter };
	};
	mathieuCharacter.player = mathieu;

	// Table de Saint Renan
	Table tableDeStRenan = Table {
		name = "Table de Saint Renan";
		characters = { robinCharacter, mathieuCharacter };
		npcs = { NotPlayedCharacter("La mouche") };
	};

		// Jean-Charles
	Player jeancharles = Player {
		login="charlie";
		password="sheen";
		name = "Jean-Charles";
		masteredTables = { tableDeStRenan };
	};
	tableDeStRenan.master = jeancharles;
	
	doc "Players list."
	shared {Player*} players = { robin, mathieu, jeancharles };
}