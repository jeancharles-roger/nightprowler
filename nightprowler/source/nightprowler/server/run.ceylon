
import ceylon.net.http.server { 
	createServer, 
	AsynchronousEndpoint, Response, Request, 
	startsWith, isRoot
}

import ceylon.net.http.server.endpoints { serveStaticFile }
 
doc "State of the current session"
shared class User(name) 
{
	doc "User name"
	shared String name;
}

doc "User name id in HTML form."
String usernameFormId = "username";
doc "Password id in HTML form."
String passwordFormId = "password";
  
doc "User key in session store."
String userSessionId = "user"; 
 
doc "Checks if a user is logged."
Boolean isLogged(Request request) {
	return request.session.defines(userSessionId);
} 

doc "Gets user from request, user must be logged."
User getUser(Request request) {
	value user = request.session.get(userSessionId);
	assert (is User user);
	return user;
}

String head = 
"
	<head>
	    <meta charset='utf-8'>
	    <title>Gestion de personnages Nightprowler</title>
	    <link rel='stylesheet' type='text/css' href='css/main.css'>
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


String loggedHeader(User user) {
	return
"
     <!-- header -->
    <div id='header'>
        <a id='title' href='index.html'>Nightprowler</a>

     	<form id='login' action='logout.html' >
        	Connecté en tant que '`` user.name ``'. 
        	<input id='submit'   type='submit'  value='Se déconnecter'>
    	</form>
    </div>
";
}

String menu = 
"
 	<!-- menu -->
	<div id='menu'>
	    <a href='tables.html' id='menu-tables' class='menu-item'>Tables</a>
	    <a href='profil.html' id='menu-profil' class='menu-item'>Profil</a>
	</div>
";

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
	<script src='jquery-ui-1.10.2/js/jquery-1.9.1.js'></script>
	<script>
	$( document ).ready(function() {
	    // TODO
	});
	</script>
";

String notLoggedPage(String innerHtml) {
 	return 
 		htmlStart + 
 		notLoggedHeader + menu +
 		content(innerHtml) +
 		footer + 
 		script +
 		htmlEnd;
}
 
 
String loggedPage(User user, String innerHtml) {
 	return
		htmlStart + 
 		loggedHeader(user) + menu +
 		content(innerHtml) +
 		footer +
 		script +
 		htmlEnd;
}


Boolean checkUserAndPassword(String user, String password) {
	// TODO creates real user/pwd check
	return user == password;
}

String loginPage(Request request) {
	value username = request.parameter(usernameFormId);
	value password = request.parameter(passwordFormId);
	if ( exists username, exists password ) {
		if ( checkUserAndPassword(username, password) ) {
			// creates user and registers to session
			value user = User(username);
			request.session.put(userSessionId, user);
			return loggedPage(user, "Bienvenue '`` username ``'");
		} else {
			return notLoggedPage("Login ou mot de passe incorrect, ré-essayez.");
		}
	} else {
		return notLoggedPage("Connectez vous en utilisant le formulaire de connection.");
 	}
 } 

String logoutPage(Request request) {
	request.session.remove(userSessionId);
	return notLoggedPage("Vous êtes déconnecté.");
}

void runServer() {
    //create a HTTP server
    value server = createServer {
        AsynchronousEndpoint {
            path = isRoot().or( startsWith("/index.html") );
            void service(Request request, Response response, Callable<Anything, []> complete) {
                if ( isLogged(request) ) {
                    value user = getUser(request);
                    response.writeString(
                    	loggedPage(user, "Bienvenue dans Nightprowler `` user.name ``")
                    );
                } else {
                    response.writeString(notLoggedPage("Bienvenue dans Nightprowler."));
                }
                complete();
            }
        },
        AsynchronousEndpoint {
            path = startsWith("/login.html");
            void service(Request request, Response response, Callable<Anything, []> complete) {
                response.writeString(loginPage(request));
                complete();
            }
        },
        AsynchronousEndpoint {
            path = startsWith("/logout.html");
            void service(Request request, Response response, Callable<Anything, []> complete) {
                response.writeString(logoutPage(request));
                complete();
            }
        },
        AsynchronousEndpoint {
            path = startsWith("");
            service = serveStaticFile("./html");
        }

    };
    
    // starts with default values
    server.start();
}

doc "Run the module `nightprowler.server`."
void run() {
	runServer();
}
