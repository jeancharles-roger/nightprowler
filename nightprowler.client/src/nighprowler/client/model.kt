package nightprowler.client

import java.util.HashMap

/**
 * Created by charlie on 23/02/2014.
 */

public class Character(id: String, name: String) {
    public val id: String = id;
    public var name: String = name;
    public var aka: String? = null;
    public var description : String? = null;

    public val attributes: MutableMap<String, Int> = HashMap<String, Int>();

}
