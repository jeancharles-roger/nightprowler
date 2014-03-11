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
import com.mongodb.util.JSON

val CharacterCollection: String = "Character"
val PlayerCollection: String = "Player"
val TableCollection: String = "Player"

/**
 * Handles BD storage (read and write)
 */


class CharacterDescription(id:String, name: String) {
    val id: String = id
    val name: String = name

    val string = "${id} -> ${name}"
}

fun addCharacter(db: DB, character: String) {
    var collection = db.getCollection(CharacterCollection)
    val result = JSON.parse(character)
    if ( result is DBObject ) {
        collection.insert(result, WriteConcern.NORMAL)
    }
}

fun getCharacter(db: DB, id: String): String? {
    val found = DBRef(db, CharacterCollection, id).fetch()
    return JSON.serialize(found)
}

fun listAllCharacter(db:DB): List<CharacterDescription> {
    val cursor: Iterable<DBObject> = db.getCollection(CharacterCollection).find()
    return cursor.map { o ->
        val id = (o.get("_id") as ObjectId).toString()
        val name = o.get("name") as String
        CharacterDescription(id, name)
    }
}

fun main(args: Array<String>) {
    val client = Mongo("localhost")

    try {
        val db = client.getDB("jdr")

        for( desc in listAllCharacter(db) ) {
            println(desc.string)
        }

    } finally {
       client.close();
    }
}

