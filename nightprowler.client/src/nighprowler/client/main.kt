package nighprowler.client

import js.debug.console;

import js.dom.html.document;

import org.w3c.dom.NodeList
import org.w3c.dom.Node

import js.dom.html.HTMLElement
import js.dom.html.HTMLDocument
import js.core.http.XMLHttpRequest
import js.core.http.HttpResponseStatus
import nightprowler.client.Character
import nightprowler.client.examples

/**
 * Toggle given class for element.
 */
fun HTMLElement.toggleClass(toggleClassName: String) {
    if ( className.contains(toggleClassName) ) {
        // removes class
        className = className.remove(toggleClassName)
    } else {
        // adds class
        if ( className.size == 0 ) {
            className = toggleClassName
        } else {
            className += " " + toggleClassName
        }
    }
}


/**
 * Selects given tab in tabs container.
 */
fun selectTab(tabs: HTMLElement, tab: HTMLElement) {
    val old = tabs.querySelector(".selected")

    // deselects old header (if any)
    old?.toggleClass("selected")

    // selects clicked header
    tab.toggleClass("selected")

    // adds pending spinner
    val content = tabs.querySelector(".content")
    if ( content == null ) return;

    content.innerHTML = "<p>Pending.</p>"

    val url = "character" + tab.id

    val request = XMLHttpRequest();
    request.open("GET", url, true)

    request.onload = {
        val response = request.response
        console.log("Request status ${request.status} and response ${response}")
        if ( request.status == HttpResponseStatus.OK && response != null ) {
            val character = Character(response)

            val contentBuilder = StringBuilder()
            contentBuilder.append("<b>${character.name}</b>")
            contentBuilder.append("<p>${character.description}</p>")
            contentBuilder.append("<table>")
            character.attributes.forEach {  element, index ->
                contentBuilder.append("<tr><td>${element}</td><td>${index}</td></tr>")
            }
            contentBuilder.append("</table>")

            content.innerHTML = contentBuilder.toString()
        } else {
            content.innerHTML = "Failed to request '${url}'."
        }
    }
    request.send()
}

fun main(args: Array<String>) {
    // Load tabs
    console.log("Arguments: ${args}")

    val tabs = document.querySelector("#tabs")
    if ( tabs != null ) {
        val tabList = document.querySelectorAll(".tab .page")
        for (i in 0..tabList.length-1) {
            val tab = tabList.item(i)
            if ( tab is HTMLElement ) {
                tab.onclick = { selectTab(tabs, tab) }
            }
        }
    }

    /*
    for ( character in examples() ) {
        console.log("--")
        console.log(character)
        val json = character.toJson()
        console.log(json)
        val parsed: MutableMap<String, Int> = js.JSON.parse(json)
        console.log(parsed)
    }
    */
}