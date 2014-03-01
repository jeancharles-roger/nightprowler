package nightprowler.server

import com.mongodb.Mongo
import com.mongodb.DBObject
import com.mongodb.BasicDBObject
import com.mongodb.WriteConcern
import com.mongodb.DBCollection
import com.mongodb.DB
import com.mongodb.DBRef
import java.util.ArrayList
import org.bson.types.ObjectId

val CharacterCollection: String = "Character"
val PlayerCollection: String = "Player"
val TableCollection: String = "Player"

/**
 * Handles BD storage (read and write)
 */

fun bdobject(init: DBObject.() -> Unit): DBObject {
    val result = BasicDBObject()
    result.init();
    return result
}

fun Character.toBdObject(): DBObject {
    return bdobject {
        put("name", name)
        if ( aka != null ) put("aka", aka as String)
        if ( description != null ) put("description", description as String)

        put("attributes", bdobject {
            for (entry in attributes.entrySet()) {
                put(entry.getKey(), entry.getValue())
            }
        })
    }
}

fun DBObject.toCharacter() : Character? {
    val id = get("_id") as ObjectId
    val name = get("name")
    if ( name is String) {
        val result = Character(id.toString(), name)

        val aka = get("aka")
        if ( aka is String ) result.aka = aka

        val description = get("description")
        if ( description is String ) result.description = description

        val attributes = get("attributes")
        if ( attributes is BasicDBObject ) {
            for (entry in attributes.entrySet() ) {
                val value = entry.getValue()
                if ( value is Int ) {
                    result.attributes[entry.getKey()] = value
                }
            }
        }
        return result;
    } else {
        return null
    }
}

fun addCharacter(db: DB, character: Character) {
    var collection = db.getCollection(CharacterCollection)
    collection.insert(character.toBdObject(), WriteConcern.NORMAL)
}

fun getCharacter(db: DB, id: String): Character? {
    val found = DBRef(db, CharacterCollection, id).fetch()
    return found?.toCharacter()
}

fun listAllCharacter(db:DB): List<Character> {
    val cursor: Iterable<DBObject> = db.getCollection(CharacterCollection).find()
    return cursor.map { o -> o.toCharacter() }.filterNotNull()
}

// Some character examples
fun examples(): Array<Character> {
    val andre = Character("", "André Clément")
    andre.aka = "Le contrebandier quelconque"
    andre.description = "De prime abord, rien ne distingue André d'un quelconque employé de bureau..."
    andre.attributes["Acrobation"] = 4
    andre.attributes["Art(Estimation)"] = 12
    andre.attributes["Athlétisme"] = 4
    andre.attributes["Autorité"] = 2
    andre.attributes["Combat (Armes blanches)"] = 6
    andre.attributes["Connaissances (Loi)"] = 6
    andre.attributes["Connaissances (Marchés noirs)"] = 12

    val sylvie = Character("", "Sylvie Noche")
    sylvie.aka = "La journaliste trop curieuse"
    sylvie.description = "'Le baron de Neuville ? Vous ne trouvez pas qu'il passe beacoup de temps avec la préceptrice de ses enfants..."
    sylvie.attributes["Acrobation"] = 2
    sylvie.attributes["Art(Photographie)"] = 6
    sylvie.attributes["Athlétisme"] = 6
    sylvie.attributes["Autorité"] = 2
    sylvie.attributes["Combat (Armes blanches)"] = 8
    sylvie.attributes["Connaissances (Milieu journalistique)"] = 8
    sylvie.attributes["Connaissances (Milieu mondain)"] = 10

    val gaspard = Character("","Gaspard Amable")
    gaspard.aka = "Le caméléon"
    gaspard.description = "Certains se vantent d'avoir tout vu, tout vécu..."
    gaspard.attributes["Acrobation"] = 2
    gaspard.attributes["Art"] = 2
    gaspard.attributes["Athlétisme"] = 6
    gaspard.attributes["Autorité"] = 8
    gaspard.attributes["Combat (Main nues)"] = 8
    gaspard.attributes["Connaissances"] = 2
    gaspard.attributes["Défense"] = 7

    return array(andre, sylvie, gaspard)
}

fun main(args: Array<String>) {
    val client = Mongo("localhost")

    try {
        val db = client.getDB("jdr")

        for (c in listAllCharacter(db) ) {
            println(c.name)
        }
        /*
        for ( c in examples() ) {
            addCharacter(db, c)
        }
        */
    } finally {
       client.close();
    }
}

