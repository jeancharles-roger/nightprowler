import ceylon.net.http.server { createServer, AsynchronousEndpoint, Response, Request, startsWith }
import ceylon.net.http.server.endpoints { serveStaticFile }
 
String html(String name, String sessionId) {
 	return
"
	<!doctype html>
	<html lang='en'>
	<head>
	  <meta charset='utf-8' />
	  <title>jQuery UI Button - Default functionality</title>
	  <link rel='stylesheet' href='jquery-ui-1.10.2/css/smoothness/jquery-ui-1.10.2.custom.min.css' />
	  <script src='jquery-ui-1.10.2/js/jquery-1.9.1.js'></script>
	  <script src='jquery-ui-1.10.2/js/jquery-ui.js'></script>
	  <script>
		$( document ).ready(function() {
			// prepares buttons
			$( '#button1' ).click(function (event) {
				alert('button1')
			});
		});
	  </script>
	</head>
	<body>
	<h2> `` name `` </h2>
	<b>`` sessionId ``</b></br>
	<a href='hello1' id='a1'>Hello 1</a><br/>
	<a href='hello2' id='a2'>Hello 2</a><br/>
	<a href='hello3' id='a3'>Hello 3</a><br/>
	<a href='hello4' id='a3'>Hello 4</a><br/>
	<a href='hello5' id='a3'>Hello 5</a><br/>
	</body>
	</html>
";}

void runServer() {
    //create a HTTP server
    value server = createServer {
         //an endpoint, on the path /hello
         AsynchronousEndpoint {
            path = startsWith("/index.html");
            void service(Request request, Response response, Callable<Anything, []> complete) {
                response.writeString(html(request.path, request.session.id));
                complete(); //async response complete
            }
        },
        AsynchronousEndpoint {
            path = startsWith("");
            service = serveStaticFile("./html");
        }
    };
 
    //start the server on port 8080
    server.start(8080);
}

doc "Run the module `nightprowler.server`."
void run() {
	runServer();
}
