package nightprowler.server

/**
 * Created by charlie on 23/02/2014.
 */

fun htmlStart(title: String): String  {
return """
<html>
<head>
  <meta charset="utf-8" />
  <title>${title}</title>
  <link rel="stylesheet" href="/css/main.css" />
</head>
<body>
"""
}



fun htmlEnd(): String {
    return """
        <script type="text/javascript" src="js/kotlin.js"></script>
        <script type="text/javascript" src="js/compiled/nightprowler.client.js"></script>
        </body>
        </html>
    """
}

fun menu(items: List<Pair<String, String>>): String {
    return  "<!-- menu -->\n<div id='menu'>" +
        items.map{ entry -> "<div id='${entry.second}`' class='page'>${entry.first}</div>" }.makeString("\n") +
        "</div>\n"
}

fun content(innerHtml :()->String): String {
    return "<div id='content'>\n${innerHtml()}\n</div>\n";
}

fun tabs(labels: List<Pair<String, String>>): String {
return """
<div id="tabs" class="tab">
    <div class="header" >
""" + labels.fold("", { prefix, label -> prefix +
    """
            <div id='${label.second}' class="page">
                ${label.first}
            </div>
    """
})+
"""
    </div>
    <div class="content" >
        <p>No page selected.</p>
    </div>
</div>
"""
}
