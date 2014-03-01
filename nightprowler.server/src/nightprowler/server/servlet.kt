package nightprowler.server

import javax.servlet.http.HttpServlet
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import com.google.gson.Gson
import com.google.gson.GsonBuilder
import com.mongodb.Mongo
import com.mongodb.DBRef
import org.bson.BSON
import org.bson.types.ObjectId

class CharacterServlet : HttpServlet() {

    override fun doGet(req: HttpServletRequest, resp: HttpServletResponse) {
        val client = Mongo("localhost")
        val uri = req.getRequestURI()
        val index = uri.lastIndexOf("/")
        val id = uri.substring(index+1)

        try {
            resp.setCharacterEncoding("UTF-8")

            val db = client.getDB("jdr")
            //val character = getCharacter(db, id)
            val found = DBRef(db, CharacterCollection, ObjectId(id)).fetch()
            if ( found != null ) {
                resp.setStatus(HttpServletResponse.SC_OK);
                resp.setCharacterEncoding("UTF-8")
                resp.setContentType("application/json")
                val writer = resp.getWriter()
                writer.append(found.toString())

            } else {
                resp.setStatus(HttpServletResponse.SC_NOT_FOUND);
            }
        } finally {
            client.close();
        }

        resp.setStatus(HttpServletResponse.SC_OK)
    }
}

class ListServlet : HttpServlet() {

    override fun doGet(req: HttpServletRequest, resp: HttpServletResponse) {
        val client = Mongo("localhost")

        try {
            resp.setCharacterEncoding("UTF-8")

            val db = client.getDB("jdr")
            val characters = listAllCharacter(db)

            val writer = resp.getWriter()
            writer.append(htmlStart("Personnages"))
            writer.append(
                content{
                    tabs(characters.map{c -> Pair(c.name, "/"+c.id) })
                }
            )
            writer.append(htmlEnd())
        } finally {
            client.close();
        }

        resp.setStatus(HttpServletResponse.SC_OK)
    }
}
