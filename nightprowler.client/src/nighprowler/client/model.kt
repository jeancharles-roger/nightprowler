package nightprowler.client

import java.util.HashMap

import js.debug.console;
import js.dom.html.HTMLElement

/**
 * Created by charlie on 23/02/2014.
 */

fun Json.getString(name: String):String {
    val result = this[name]
    if ( result !is String ) console.error("Property '${name}' is not a String.")
    return result as String
}

fun Json.getStringOrNull(name: String):String? {
    val result = this[name]
    return if (result is String ) result as String else null
}

fun Json.getInt(name: String):Int {
    val result = this[name]
    if ( result !is Int ) console.error("Property '${name}' is not a Int.")
    return result as Int
}


fun Json.getId():String {
    val result = this["_id"]
    if ( result !is Json ) console.error("Property '_id' is not a Json object.")
    return (result as Json).getString("\$oid")
}

public class Character(
        id: String, name: String,
        attributes : JsonArray<String,Int> = array()) {
    public val id: String = id;
    public var name: String = name;
    public var aka: String? = null;
    public var description : String? = null;

    public val attributes: JsonArray<String, Int> = attributes;


    public fun toJson():String = JSON.stringify(this)
}

public fun Character(json: String): Character {
    val obj: Json = js.JSON.parse(json)

    val id = (obj.get("_id") as Json).getString("\$oid")
    val attributes = obj.get("attributes") as JsonArray<String, Int>

    val character = Character(id, obj.getString("name"), attributes)
    character.aka = obj.getStringOrNull("aka")
    character.description = obj.getStringOrNull("description")

    /*
    val keys = Object.keys(attributes)
    keys.forEach { element, index ->
        console.log("${index} -> ${element}")
        character.attributes[element] = attributes.getInt(element)
    }

    console.log("Acrobatie -> ${character.attributes.get("Acrobation")}")
    */
    return character
}




// Some character examples
  /*
fun examples(): Array<Character> {
    val andre = Character("", "André Clément")
    andre.aka = "Le contrebandier quelconque"
    andre.description = "De prime abord, rien ne distingue André d'un quelconque employé de bureau..."
    andre.attributes["Acrobatie"] = 4
    andre.attributes["Art(Estimation)"] = 12
    andre.attributes["Athlétisme"] = 4
    andre.attributes["Autorité"] = 2
    andre.attributes["Combat (Armes blanches)"] = 6
    andre.attributes["Connaissances (Loi)"] = 6
    andre.attributes["Connaissances (Marchés noirs)"] = 12

    val sylvie = Character("", "Sylvie Noche")
    sylvie.aka = "La journaliste trop curieuse"
    sylvie.description = "'Le baron de Neuville ? Vous ne trouvez pas qu'il passe beacoup de temps avec la préceptrice de ses enfants..."
    sylvie.attributes["Acrobatie"] = 2
    sylvie.attributes["Art(Photographie)"] = 6
    sylvie.attributes["Athlétisme"] = 6
    sylvie.attributes["Autorité"] = 2
    sylvie.attributes["Combat (Armes blanches)"] = 8
    sylvie.attributes["Connaissances (Milieu journalistique)"] = 8
    sylvie.attributes["Connaissances (Milieu mondain)"] = 10

    val gaspard = Character("","Gaspard Amable")
    gaspard.aka = "Le caméléon"
    gaspard.description = "Certains se vantent d'avoir tout vu, tout vécu..."
    gaspard.attributes["Acrobatie"] = 2
    gaspard.attributes["Art"] = 2
    gaspard.attributes["Athlétisme"] = 6
    gaspard.attributes["Autorité"] = 8
    gaspard.attributes["Combat (Main nues)"] = 8
    gaspard.attributes["Connaissances"] = 2
    gaspard.attributes["Défense"] = 7

    return array(andre, sylvie, gaspard)
}
*/
