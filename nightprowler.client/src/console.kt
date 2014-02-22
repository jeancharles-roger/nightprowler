
/**
 * Created by charlie on 22/02/2014.
 */

public native trait Console {
    public native fun log(message: String): Unit
}

native
public var console: Console = noImpl
