
import nightprowler.common { ... }

class ToHtmlVisitor(Document document) 
	satisfies Visitor<Anything, Element> 
{
 	
 	shared actual void visitPlayer(Player toVisit, Element parent) {
 		value div = document.createElement("div");
 		div.appendChild(document.createTextNode("Player '``toVisit.name``'."));
 		parent.appendChild(div); 
 	}
 	
 	shared actual void visitTable(Table toVisit, Element parent) {
 	}
 	
 	shared actual void visitCharacter(Character toVisit, Element parent) {
 	}
 	
 	shared actual void visitNotPlayedCharacter(NotPlayedCharacter toVisit, Element parent) {
 	}

}

shared void toHtml(ModelObject model, Element element) {
	//model.accept(ToHtmlVisitor(element.ownerDocument),element);
}