
String jsonCharacter1 = 
"
	{
	 \"salt\": \"\",
	 \"login\": \"charlie\",
	 \"characters\": [],
	 \"type\": \"Player\",
	 \"tables\": [
	  {
	   \"npcs\": [
	    {
	     \"type\": \"NotPlayedCharacter\",
	     \"name\": \"La mouche\"
	    }
	   ],
	   \"characters\": [
	    \"robin.Personnage de Robin\",
	    \"mathieu.Personnage de Mathieu\"
	   ],
	   \"type\": \"Table\",
	   \"name\": \"Table de Saint Renan\",
	   \"master\": \"jeancharles\"
	  }
	 ],
	 \"password\": \"sheen\",
	 \"name\": \"Jean-Charles\"
	}
";

void run() {
	// tests
	value parsed = playerFromJsonString(jsonCharacter1);
	for ( Table table in parsed.masteredTables) {
		print(table);
	}
}