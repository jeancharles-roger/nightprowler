package nightprowler.server

import javax.servlet.http.HttpServlet
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import com.google.gson.Gson

public class CharacterServlet : HttpServlet() {

    override fun doGet(req: HttpServletRequest, resp: HttpServletResponse) {
        // defensive code
        val uri = req.getRequestURI()
        val index = uri.lastIndexOf('/')
        val character = Character(uri.substring(index+1));
        val json = Gson().toJson(character)

        val printWriter = resp.getWriter()
        printWriter?.append(json);
        printWriter?.close();

        resp.setStatus(HttpServletResponse.SC_OK)
    }
}