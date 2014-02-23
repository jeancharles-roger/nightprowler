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

/**
 * Created by charlie on 22/02/2014.
 */

fun characterFromJson(json: String): Character {
    val character:Character = js.JSON.parse(json)
    return character
}


/**
 * Selects given tab in tabs container.
 */
fun selectTab(tabs: HTMLElement, tab: HTMLElement) {
    val old = tabs.querySelector(".selected")

    console.log("Selected '${tab.id}' (old ${old}).")

    // deselects old header (if any)
    if ( old != null ) {
        console.log("Class name is ${old.className}.")
        old.className = old.className.remove("selected")
        console.log("Class name is now ${old.className}.")
    }

    // selects clicked header
    if ( tab.className.size > 0 ) {
        tab.className += " selected"
    } else {
        tab.className = "selected"
    }

    // adds pending spinner
    val content = tabs.querySelector(".content")
    if ( content == null ) return;

    console.log("Current content ${content}")

    content.innerHTML = "<p>Pending.</p>"

    val url = "character" + tab.id
    console.log("Query address '${url}")

    val request = XMLHttpRequest();
    request.open("GET", url, true)

    request.onload = {
        val response = request.response
        console.log("Request status ${request.status} and response ${response}")
        if ( request.status == HttpResponseStatus.OK && response != null ) {
            val character = characterFromJson(response)
            content.innerHTML = """
                <b>${character.name}</b>: ${character.description}
            """
        } else {
            content.innerHTML = "Failed to request '${url}'."
        }
    }
    request.send()
}

fun main(args: Array<String>) {
    // Load tabs
    val tabs = document.querySelector("#tabs")
    if ( tabs != null ) {
        val tabList = document.querySelectorAll(".tab .page")
        for (i in 0..tabList.length-1) {
            val tab = tabList.item(i)
            if ( tab is HTMLElement ) {
                console.log("Tab is a HTMLElement.")
                tab.onclick = { selectTab(tabs, tab) }
            }
        }
    }
}