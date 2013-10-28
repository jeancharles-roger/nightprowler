import ceylon.net.http.server { 
	createServer, 
	AsynchronousEndpoint, Response, Request, 
	startsWith, isRoot, Matcher
}

import ceylon.file { Path, File, parsePath }
import ceylon.io { newOpenFile }
import ceylon.io.charset { utf8 }
import ceylon.io.buffer { ByteBuffer, newByteBuffer }
import ceylon.net.http { contentType, contentLength }

import nightprowler.common {
    Player, toJsonString
}

"User name id in HTML form."
String usernameFormId = "username";
"Password id in HTML form."
String passwordFormId = "password";
  
"User key in session store."
String playerSessionId = "player"; 

 
"Checks if a user is logged."
Boolean isLogged(Request request) {
	return request.session.defines(playerSessionId);
} 

"Gets user from request, user must be logged."
Player getUser(Request request) {
	value user = request.session.get(playerSessionId);
	assert (is Player user);
	return user;
}

Player? findPlayer(String login) {
    for (player in data.players ) {
        if (player.login == login ) {
            return player;
        }
    }
    return null;
}

Boolean checkPassword(Player player, String password) {
    return player.password == password;
}

String loginPage(Request request) {
    print("Method is " + request.method.string);
	value username = request.parameter(usernameFormId);
	value password = request.parameter(passwordFormId);
	if ( exists username, exists password ) {
        Player? player = findPlayer(username);
		if ( exists player, checkPassword(player, password) ) {
            // registers player to session
            request.session.put(playerSessionId, player);
            return rootLoggedPage(player);
		} else {
			return notLoggedPage("Login ou mot de passe incorrect, ré-essayez.");
		}
	} else {
		return notLoggedPage("Connectez vous en utilisant le formulaire de connection.");
 	}
 } 

String logoutPage(Request request) {
	request.session.remove(playerSessionId);
	return notLoggedPage("Vous êtes déconnecté.");
}


String rootLoggedPage(Player player) {
    value innerHtml = playerDescription(player);
    return loggedPage(player, innerHtml);
}

String rootNotLoggedPage() {
    return notLoggedPage("Bienvenue dans Nightprowler.");
}

"Matcher that searches for players login."
object playerMatcher extends Matcher() {
    shared actual Boolean matches(String path) {
        value login = path.trim("/".contains);
        value player = findPlayer(login);
        if (exists player) { return true; } else { return false; }
    }
    
    shared actual String relativePath(String requestPath) {
        return requestPath;
    }
}

"EndPoint that serves static files."
AsynchronousEndpoint serveStaticFileEndPoint(String requestPrefix, String serverPrefix) {
    return  AsynchronousEndpoint {
        path = startsWith(requestPrefix);
        void service(Request request, Response response, Callable<Anything, []> complete) {
            Path filePath = parsePath(serverPrefix + request.relativePath);
            print ("Serving '"+ request.path +"' using '"+ filePath.string +"' on file system.");
            if (is File file = filePath.resource) {
                value openFile = newOpenFile(file);
                try {
                    Integer available = file.size;
                    response.addHeader(contentLength(available.string));
                    if (is String cntType = file.contentType) {
                        response.addHeader(contentType(cntType));
                    }
                    ByteBuffer buffer = newByteBuffer(available);
                    openFile.read(buffer);
                    response.writeBytes(buffer.bytes());
                } finally {
                    openFile.close();
                }
            } else {
                response.responseStatus=404;
            }
            complete();
        }
    };
}


void runServer() {
    //create a HTTP server
    value server = createServer {
        AsynchronousEndpoint {
            path = isRoot().or( startsWith("/index.html") );
            void service(Request request, Response response, Callable<Anything, []> complete) {
                if ( isLogged(request) ) {
                    value player = getUser(request);
                    response.writeString(rootLoggedPage(player));
                } else {
                    response.writeString(rootNotLoggedPage());
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
            path = playerMatcher;
            void service(Request request, Response response, Callable<Anything, []> complete) {
                // TODO ensure login and rights.
                value login = request.relativePath.trim("/".contains);
                value player = findPlayer(login);
                if (exists player) {
                    response.addHeader(contentType("application/json", utf8));
                    //response.addHeader(contentType("text/html", utf8));
                    response.writeString(toJsonString(player));
                    response.writeString("\n");
                } else {
                    response.responseStatus=404;
                }
                complete();
            }
        },
        serveStaticFileEndPoint("/files/", "./html/"),
        serveStaticFileEndPoint("/modules/", "./html/modules/")
    };
    
    // starts with default values
    server.start();
}

"Run the module `nightprowler.server`."
shared void run() {
	runServer();
}

