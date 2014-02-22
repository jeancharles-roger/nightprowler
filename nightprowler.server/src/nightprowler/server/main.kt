package nightprowler.server

import javax.servlet.http.HttpServlet
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

public class Server : HttpServlet() {

    override fun doGet(req: HttpServletRequest?, resp: HttpServletResponse?) {
        if (req == null || resp == null) return

        val printWriter = resp.getWriter()
        printWriter?.append("<html><head></head><body><h2>Wakening to the World baby !!!</h2></body></html>");
        printWriter?.close();

        resp.setStatus(HttpServletResponse.SC_OK)
    }
}