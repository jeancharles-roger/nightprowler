
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

Boolean isLogin(Request request) {
	value username = request.parameter(usernameFormId);
	if ( username exists ) { 
		print("-> IsLogin: username exists.");
	} else {
		print("-> IsLogin: username DOESN'T exist.");
	}
	return 
		username exists && 
		request.parameter(passwordFormId) exists;
}

String notLoggedPage() {
 	return
"
    <html>
    <head>
        <meta charset='utf-8'>
        <title>Gestion de personnages Nightprowler</title>
        <link rel='stylesheet' type='text/css' href='css/main.css'>
    </head>
    <body>
        <!-- header -->
        <div id='header'>
            <a id='title' href='index.html'>Nightprowler</a>

           <form id='login' action='login.html' method='post' >
                <input id='username' type='text'     name='``usernameFormId``' autofocus required>   
                <input id='password' type='password' name='``passwordFormId``' required>
                <input id='submit' type='submit' value='Se connecter'>
            </form>
        </div>

        <!-- menu -->
        <div id='menu'>
            <a href='tables.html' id='menu-tables' class='menu-item'>Tables</a>
            <a href='profil.html' id='menu-profil' class='menu-item'>Profil</a>
        </div>

        <!-- content -->
        <div id='content'>
            Bienvenue dans Nightprowler.
        </div>

        <!-- footers -->
        <div id='footer'>
        Gestion de personnages Nighprowler.
        </div>
    </body>
    </html>
";
}
 
 
String mainPage(User user) {
 	return
"
    <html>
    <head>
        <meta charset='utf-8'>
        <title>Gestion de personnages Nightprowler</title>
        <link rel='stylesheet' type='text/css' href='css/main.css'>
    </head>
    <body>
        <!-- header -->
        <div id='header'>
            <a id='title' href='index.html'>Nightprowler</a>

         	<div id='login'>
            	Connecté en tant que 'Jean-Charles'. 
            	<input id='submit'   type='submit'   value='Se déconnecter'>
        	</div>
        </div>

        <!-- menu -->
        <div id='menu'>
            <a href='tables.html' id='menu-tables' class='menu-item'>Tables</a>
            <a href='profil.html' id='menu-profil' class='menu-item'>Profil</a>
        </div>

        <!-- content -->
        <div id='content'>
            Bienvenue dans Nightprowler `` user.name ``.
        </div>

        <!-- footers -->
        <div id='footer'>
        Gestion de personnages Nighprowler.
        </div>

        <!-- Scripts -->
        <script src='jquery-ui-1.10.2/js/jquery-1.9.1.js'></script>
        <script>
        $( document ).ready(function() {
            // TODO
        });
        </script>
    </body>
    </html>
";
}

String doLoginPage(Request request) {
	print("[doLoginPage]");
	print("Method: " + request.method);
	print(request.parameters(usernameFormId));
	print(request.parameter(usernameFormId));
 	return
"
    <html>
    <head>
        <meta charset='utf-8'>
        <title>Gestion de personnages Nightprowler</title>
        <link rel='stylesheet' type='text/css' href='css/main.css'>
    </head>
    <body>
        <!-- header -->
        <div id='header'>
            <a id='title' href='index.html'>Nightprowler</a>

           <form id='login'>
                <input id='username' type='text'     name='``usernameFormId``' autofocus required>   
                <input id='password' type='password' name='``usernameFormId``' required>
                <input id='submit'   type='submit'   value='Se connecter'>
            </form>
        </div>

        <!-- menu -->
        <div id='menu'>
            <a href='tables.html' id='menu-tables' class='menu-item'>Tables</a>
            <a href='profil.html' id='menu-profil' class='menu-item'>Profil</a>
        </div>

        <!-- content -->
        <div id='content'>
            <h2>La connection a échoué, essayez encore.</h2>
        </div>

        <!-- footers -->
        <div id='footer'>
        Gestion de personnages Nighprowler.
        </div>
    </body>
    </html>
";	
}

void runServer() {
    //create a HTTP server
    value server = createServer {
        AsynchronousEndpoint {
            path = isRoot().or( startsWith("/index.html") );
            void service(Request request, Response response, Callable<Anything, []> complete) {
                print("------------------------------");
                print("Root request: " + request.path);
                if ( isLogged(request) ) {
                    print("* Logged");
                    response.writeString(mainPage(getUser(request)));
                } else if ( isLogin(request)) {
                    print("* Login");
                    response.writeString(doLoginPage(request));
                } else {
                    print("* Not logged");
                    response.writeString(notLoggedPage());
                }
                complete(); //async response complete
            }
        },
        AsynchronousEndpoint {
            path = startsWith("/login.html");
            void service(Request request, Response response, Callable<Anything, []> complete) {
                print("------------------------------");
                print("Login request: " + request.path);
                print("* Login");
                response.writeString(doLoginPage(request));
                complete(); //async response complete
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
