import nightprowler.common {
	Character, Player
}

String head = 
"
	<head>
	    <meta charset='utf-8'>
	    <title>Gestion de personnages Nightprowler</title>
	    <link rel='stylesheet' href='http://code.jquery.com/ui/1.10.2/themes/smoothness/jquery-ui.css' />
		<script src='http://code.jquery.com/jquery-1.9.1.js'></script>
  		<script src='http://code.jquery.com/ui/1.10.2/jquery-ui.js'></script>
  		<link rel='stylesheet' type='text/css' href='files/css/main.css'>
	</head>
";

String htmlStart = 
"<html>
 `` head `` 
 <body>
"
;
String htmlEnd= 
"
 </body>
 </html>
";


String notLoggedHeader= 
"
	<!-- header -->
	<div id='header'>
	    <a id='title' href='index.html'>Nightprowler</a>

		<form id='login' action='login.html' method='post' >
            <input id='username' type='text'     name='``usernameFormId``' autofocus required>   
            <input id='password' type='password' name='``passwordFormId``' required>
            <input id='submit' type='submit' value='Se connecter'>
		</form>
	</div>
";


String loggedHeader(Player player) {
	return
"
     <!-- header -->
    <div id='header'>
        <a id='title' href='index.html'>Nightprowler</a>

     	<form id='login' action='logout.html' >
        	Connecté en tant que '`` player.name ``'. 
        	<input id='submit'   type='submit'  value='Se déconnecter'>
    	</form>
    </div>
";
}

String menu({<String->String>*} menuItems = {}) {
return
"
 	<!-- menu -->
	<div id='menu'> 
"
	+
	"\n".join({
		for (menuItem in menuItems)
			"<div id='``menuItem.key``' class='page'>``menuItem.item``</div>"
	})
	+
"
	</div>
";
}

String content(String content) {
	return 
"
 	<!-- content -->
	<div id='content'>
	`` content ``
	</div>
";
}

String footer = 
"
 	<!-- footers -->
	<div id='footer'>
	Gestion de personnages Nighprowler.
	</div>
";

String script = 
"
 	<!-- Scripts -->
	<script>
	$(function() {
		$( '#tabs' ).tabs({
		  beforeLoad: function( event, ui ) {
		    ui.jqXHR.error(function() {
		      ui.panel.html(
		        'Couldn't load this tab. We'll try to fix this as soon as possible. ' +
		        'If this wouldn't be a demo.'' );
		    });
		  }
		});
	});

	$( document ).ready(function() {
	    // TODO
	});
	</script>
";

String playerStart(Player player) {
return 
"
	Bienvenue dans Nightprowler `` player.name ``.
";
}

"Joins a string sequence using given separator."
String join({String*} sequence, String separator="") {
	return sequence.fold("", 
		(String acc, String element) {
			return acc + separator + element;
		}
	);
}

shared String notLoggedPage(String innerHtml) {
 	return 
 		htmlStart + 
 		notLoggedHeader + 
 		menu() +
 		content(innerHtml) +
 		footer + 
 		script +
 		htmlEnd;
}
 
String loggedMenu(Player player) {
	value prefix = player.login + "/";
	return menu(
			{
				prefix + "characters" ->"Personnages",
				prefix + "tables" -> "Table"
			}
		);
}

shared String loggedPage(Player player, String innerHtml) {
 	return
		htmlStart + 
 		loggedHeader(player) + 
 		loggedMenu(player) +
 		content(innerHtml) +
 		footer +
 		script +
 		htmlEnd;
}

String htmlCharacter(Character character) {
	return character.name;
}

shared String htmlCharactersList({Character*} characters) {
	return 
		"<h3>Personnages:</h3>
		 <ul>
		" +
		"".join({ for (character in characters) "<li>" + htmlCharacter(character) + "</li>\n"}) +
		"</ul>
		";
}


shared String playerDescription(Player player) {
	return 
		playerStart(player)+
        htmlCharactersList(player.characters);
}
