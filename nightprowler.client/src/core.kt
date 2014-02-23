/**
 * Created by charlie on 23/02/2014.
 */


import js.dom.html.HTMLDocument
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import js.dom.html.HTMLElement
import js.dom.html.HTMLCollection

public native fun HTMLDocument.querySelector(selector: String): HTMLElement? {
    // this function is native, it wont be called
    return null as HTMLElement?
}

public native fun HTMLDocument.querySelectorAll(selector: String): NodeList {
    // this function is native, it wont be called
    return null as NodeList
}

public native fun HTMLElement.querySelector(selector: String): HTMLElement? {
    // this function is native, it wont be called
    return null as HTMLElement?
}

public native fun HTMLElement.querySelectorAll(selector: String): NodeList {
    // this function is native, it wont be called
    return null as NodeList
}

public fun String.remove(fragment:String): String {
    val index = this.indexOf(fragment)
    if ( index < 0 ) return this;
    return this.substring(0, index) + this.substring(index+fragment.length)
}
