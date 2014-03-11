/**
 * Created by charlie on 23/02/2014.
 */


import js.dom.html.HTMLDocument
import org.w3c.dom.Node
import org.w3c.dom.NodeList
import js.dom.html.HTMLElement
import js.dom.html.HTMLCollection

native fun HTMLDocument.querySelector(selector: String): HTMLElement? = js.noImpl
native fun HTMLDocument.querySelectorAll(selector: String): NodeList = js.noImpl

native fun HTMLElement.querySelector(selector: String): HTMLElement? = js.noImpl
native fun HTMLElement.querySelectorAll(selector: String): NodeList = js.noImpl

fun String.remove(fragment:String): String {
    val index = this.indexOf(fragment)
    if ( index < 0 ) return this;
    return this.substring(0, index) + this.substring(index+fragment.length)
}

native trait JsonArray<K,V>:Iterable<V> {
    val length:Int
    fun get(index: K):V
    fun set(index: K):V

    fun forEach(block:(element:V, index:K)->Unit)
    fun every(block:(element:V, index:K)->Boolean)

    fun find(block:(element:V, index:K)->Boolean):V
    fun findIndex(block:(element:V, index:K)->Boolean):K

    fun map<T>(block: (element:V, index:K)->T): JsonArray<K,T>

    fun sort(compare:(one:V, other:V)->Int)
}

native object Object {
    fun keys(obj: Any?): JsonArray<Int, String> = noImpl
}

