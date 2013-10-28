(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["nightprowler.common\/1.0.0","ceylon.language\/0.6.1"],"$mod-name":"nightprowler.client","$mod-version":"1.0.0","nightprowler.client":{"attributeNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"attributeNode"},"CharacterData":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$m":{"replaceData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"offset"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"count"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"arg"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"replaceData"},"deleteData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"offset"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"deleteData"},"insertData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"offset"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"arg"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"insertData"},"appendData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"arg"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"appendData"},"substringData":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"offset"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"count"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"substringData"}},"$at":{"length":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"length"},"data":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"data"}},"$nm":"CharacterData"},"documentFragmentNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentFragmentNode"},"Attr":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$at":{"specified":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"specified"},"ownerElement":{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"ownerElement"},"itsValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"itsValue"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"name"}},"$nm":"Attr"},"documentTypeNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentTypeNode"},"notationNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"notationNode"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"doc":["Run the module `nightprowler.client`."]},"$nm":"run"},"toHtml":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"nightprowler.common","$pk":"nightprowler.common","$nm":"ModelObject"},"$mt":"prm","$nm":"model"},{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$mt":"prm","$nm":"element"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toHtml"},"ToHtmlVisitor":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$pk":"nightprowler.client","$nm":"Document"},"$mt":"prm","$nm":"document"}],"satisfies":[{"$md":"nightprowler.common","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Anything"},{"$mt":"tpm","$pk":"nightprowler.client","$nm":"Element"}],"$pk":"nightprowler.common","$nm":"Visitor"}],"$mt":"cls","$m":{"visitNotPlayedCharacter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"nightprowler.common","$pk":"nightprowler.common","$nm":"NotPlayedCharacter"},"$mt":"prm","$nm":"toVisit"},{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$mt":"prm","$nm":"parent"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"visitNotPlayedCharacter"},"visitPlayer":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"nightprowler.common","$pk":"nightprowler.common","$nm":"Player"},"$mt":"prm","$nm":"toVisit"},{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$mt":"prm","$nm":"parent"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"visitPlayer"},"visitTable":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"nightprowler.common","$pk":"nightprowler.common","$nm":"Table"},"$mt":"prm","$nm":"toVisit"},{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$mt":"prm","$nm":"parent"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"visitTable"},"visitCharacter":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"nightprowler.common","$pk":"nightprowler.common","$nm":"Character"},"$mt":"prm","$nm":"toVisit"},{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$mt":"prm","$nm":"parent"}]],"$mt":"mthd","$an":{"shared":[],"actual":[]},"$nm":"visitCharacter"}},"$at":{"document":{"$t":{"$pk":"nightprowler.client","$nm":"Document"},"$mt":"attr","$nm":"document"}},"$nm":"ToHtmlVisitor"},"NamedNodeMap":{"$mt":"ifc","$an":{"shared":[]},"$m":{"getNamedItem":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getNamedItem"},"setNamedItemNS":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"prm","$nm":"arg"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"setNamedItemNS"},"removeNamedItemNS":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"localName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"removeNamedItemNS"},"getNamedItemNS":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"localName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getNamedItemNS"},"item":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"item"},"setNamedItem":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"prm","$nm":"arg"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"setNamedItem"},"removeNamedItem":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"removeNamedItem"}},"$at":{"length":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"length"}},"$nm":"NamedNodeMap"},"entityNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityNode"},"$pkg-shared":"1","textNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"textNode"},"DocumentType":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$at":{"internalSubset":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"internalSubset"},"notations":{"$t":{"$pk":"nightprowler.client","$nm":"NamedNodeMap"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"notations"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"name"},"publicId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"publicId"},"systemId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"systemId"},"entities":{"$t":{"$pk":"nightprowler.client","$nm":"NamedNodeMap"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"entities"}},"$nm":"DocumentType"},"cdataSectionNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"cdataSectionNode"},"EntityReference":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"EntityReference"},"Document":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$m":{"getElementById":{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"elementId"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getElementById"},"createEntityReference":{"$t":{"$pk":"nightprowler.client","$nm":"EntityReference"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createEntityReference"},"importNode":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"prm","$nm":"importedNode"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"deep"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"importNode"},"getElementsByTagNameNS":{"$t":{"$pk":"nightprowler.client","$nm":"NodeList"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"localName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getElementsByTagNameNS"},"createTextNode":{"$t":{"$pk":"nightprowler.client","$nm":"Text"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createTextNode"},"createElementNS":{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"qualifiedName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createElementNS"},"createDocumentFragment":{"$t":{"$pk":"nightprowler.client","$nm":"DocumentFragment"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createDocumentFragment"},"createComment":{"$t":{"$pk":"nightprowler.client","$nm":"Comment"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createComment"},"createAttributeNS":{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"qualifiedName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createAttributeNS"},"getElementsByTagName":{"$t":{"$pk":"nightprowler.client","$nm":"NodeList"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"tagname"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getElementsByTagName"},"createAttribute":{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createAttribute"},"createCDATASection":{"$t":{"$pk":"nightprowler.client","$nm":"CDATASection"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createCDATASection"},"createElement":{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"tagName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createElement"},"createProcessingInstruction":{"$t":{"$pk":"nightprowler.client","$nm":"ProcessingInstruction"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"target"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"data"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createProcessingInstruction"}},"$at":{"implementation":{"$t":{"$pk":"nightprowler.client","$nm":"DOM"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"implementation"},"doctype":{"$t":{"$pk":"nightprowler.client","$nm":"DocumentType"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"doctype"},"documentElement":{"$t":{"$pk":"nightprowler.client","$nm":"Element"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"documentElement"}},"$nm":"Document"},"entityReferenceNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"entityReferenceNode"},"DocumentFragment":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"DocumentFragment"},"Comment":{"satisfies":[{"$pk":"nightprowler.client","$nm":"CharacterData"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"Comment"},"Notation":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$at":{"publicId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"publicId"},"systemId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"systemId"}},"$nm":"Notation"},"elementNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"elementNode"},"CDATASection":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Text"}],"$mt":"ifc","$an":{"shared":[]},"$nm":"CDATASection"},"Text":{"satisfies":[{"$pk":"nightprowler.client","$nm":"CharacterData"}],"$mt":"ifc","$an":{"shared":[]},"$m":{"splitText":{"$t":{"$pk":"nightprowler.client","$nm":"Text"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"offset"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"splitText"}},"$nm":"Text"},"DOM":{"$mt":"ifc","$an":{"shared":[],"doc":["DOM root interface."]},"$m":{"createDocument":{"$t":{"$pk":"nightprowler.client","$nm":"Document"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"qualifiedName"},{"$t":{"$pk":"nightprowler.client","$nm":"DocumentType"},"$mt":"prm","$nm":"doctype"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createDocument"},"createDocumentType":{"$t":{"$pk":"nightprowler.client","$nm":"DocumentType"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"qualifiedName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"publicId"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"systemId"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"createDocumentType"},"hasFeature":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"feature"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"version"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"hasFeature"}},"$nm":"DOM"},"documentNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"documentNode"},"Node":{"$mt":"ifc","$an":{"shared":[],"doc":["Node interface."]},"$m":{"isSupported":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"feature"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"version"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"isSupported"},"normalize":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"normalize"},"removeChild":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"prm","$nm":"oldChild"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"removeChild"},"hasAttributes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"hasAttributes"},"insertBefore":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"prm","$nm":"newChild"},{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"prm","$nm":"refChild"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"insertBefore"},"hasChildNodes":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"hasChildNodes"},"appendChild":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"prm","$nm":"newChild"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"appendChild"},"replaceChild":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"prm","$nm":"newChild"},{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"prm","$nm":"oldChild"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"replaceChild"},"cloneNode":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$mt":"prm","$nm":"deep"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"cloneNode"}},"$at":{"localName":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"localName"},"nodeName":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"nodeName"},"firstChild":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"firstChild"},"childNodes":{"$t":{"$pk":"nightprowler.client","$nm":"NodeList"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"childNodes"},"ownerDocument":{"$t":{"$pk":"nightprowler.client","$nm":"Document"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"ownerDocument"},"lastChild":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"lastChild"},"previousSibling":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"previousSibling"},"namespaceURI":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"namespaceURI"},"parentNode":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"parentNode"},"prefix":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"prefix"},"nodeValue":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"nodeValue"},"attributes":{"$t":{"$pk":"nightprowler.client","$nm":"NamedNodeMap"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"attributes"},"nodeType":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"nodeType"},"nextSibling":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"nextSibling"}},"$nm":"Node"},"NodeType":{"abstract":"1","super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"of":[{"$pk":"nightprowler.client","$nm":"elementNode"},{"$pk":"nightprowler.client","$nm":"attributeNode"},{"$pk":"nightprowler.client","$nm":"textNode"},{"$pk":"nightprowler.client","$nm":"cdataSectionNode"},{"$pk":"nightprowler.client","$nm":"entityReferenceNode"},{"$pk":"nightprowler.client","$nm":"entityNode"},{"$pk":"nightprowler.client","$nm":"processingInstructionNode"},{"$pk":"nightprowler.client","$nm":"commentNode"},{"$pk":"nightprowler.client","$nm":"documentNode"},{"$pk":"nightprowler.client","$nm":"documentTypeNode"},{"$pk":"nightprowler.client","$nm":"documentFragmentNode"},{"$pk":"nightprowler.client","$nm":"notationNode"}],"$mt":"cls","$an":{"abstract":[],"shared":[],"doc":["Node type enum"]},"$nm":"NodeType"},"processingInstructionNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"processingInstructionNode"},"ProcessingInstruction":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$at":{"data":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"data"},"target":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"target"}},"$nm":"ProcessingInstruction"},"commentNode":{"super":{"$pk":"nightprowler.client","$nm":"NodeType"},"$mt":"obj","$an":{"shared":[]},"$nm":"commentNode"},"NodeList":{"$mt":"ifc","$an":{"shared":[]},"$m":{"item":{"$t":{"$pk":"nightprowler.client","$nm":"Node"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"index"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"item"}},"$at":{"length":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"length"}},"$nm":"NodeList"},"Element":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$m":{"hasAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"hasAttribute"},"getAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"localName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getAttributeNS"},"setAttributeNodeNS":{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$mt":"prm","$nm":"newAttr"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"setAttributeNodeNS"},"getElementsByTagNameNS":{"$t":{"$pk":"nightprowler.client","$nm":"NodeList"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"localName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getElementsByTagNameNS"},"removeAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"localName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"removeAttributeNS"},"setAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"qualifiedName"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"itsValue"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"setAttributeNS"},"setAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"itsValue"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"setAttribute"},"getAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getAttribute"},"removeAttributeNode":{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$mt":"prm","$nm":"oldAttr"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"removeAttributeNode"},"getElementsByTagName":{"$t":{"$pk":"nightprowler.client","$nm":"NodeList"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getElementsByTagName"},"getAttributeNode":{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getAttributeNode"},"setAttributeNode":{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$ps":[[{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$mt":"prm","$nm":"newAttr"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"setAttributeNode"},"removeAttribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"name"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"removeAttribute"},"hasAttributeNS":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Boolean"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"localName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"hasAttributeNS"},"getAttributeNodeNS":{"$t":{"$pk":"nightprowler.client","$nm":"Attr"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"namespaceURI"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"localName"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"getAttributeNodeNS"}},"$at":{"tagName":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"tagName"}},"$nm":"Element"},"Entity":{"satisfies":[{"$pk":"nightprowler.client","$nm":"Node"}],"$mt":"ifc","$an":{"shared":[]},"$at":{"publicId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"publicId"},"systemId":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"systemId"},"notationName":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"notationName"}},"$nm":"Entity"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl569=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl569.$addmod$($$$cl569,'ceylon.language/0.6.1');

//MethodDefinition run at run.ceylon (1:0-4:0)
function run(){
};run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.Anything},$ps:[],$an:function(){return[$$$cl569.doc($$$cl569.String("Run the module `nightprowler.client`.",37))];},d:['nightprowler.client','run']};};
exports.$pkg$ans$nightprowler$client=function(){return[$$$cl569.shared()];};
exports.$mod$ans$=[];
var $$$nc570=require('nightprowler/common/1.0.0/nightprowler.common-1.0.0');
$$$cl569.$addmod$($$$nc570,'nightprowler.common/1.0.0');

//ClassDefinition ToHtmlVisitor at html.ceylon (5:0-32:0)
function ToHtmlVisitor(document$571, $$toHtmlVisitor){
    $init$ToHtmlVisitor();
    if ($$toHtmlVisitor===undefined)$$toHtmlVisitor=new ToHtmlVisitor.$$;
    $$toHtmlVisitor.$$targs$$={Result:{t:$$$cl569.Anything},Args:{t:Element}};
    $$toHtmlVisitor.document$571_=document$571;
    $$$nc570.Visitor({Result:{t:$$$cl569.Anything},Args:{t:Element}},$$toHtmlVisitor);
    $$$cl569.add_type_arg($$toHtmlVisitor,'Result',{t:$$$cl569.Anything});
    $$$cl569.add_type_arg($$toHtmlVisitor,'Args',{t:Element});
    return $$toHtmlVisitor;
}
ToHtmlVisitor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl569.Basic},satisfies:[{t:$$$nc570.Visitor,a:{Result:{t:$$$cl569.Anything},Args:{t:Element}}}],d:['nightprowler.client','ToHtmlVisitor']};};
function $init$ToHtmlVisitor(){
    if (ToHtmlVisitor.$$===undefined){
        $$$cl569.initTypeProto(ToHtmlVisitor,'nightprowler.client::ToHtmlVisitor',$$$cl569.Basic,$$$nc570.Visitor);
        (function($$toHtmlVisitor){
            
            //MethodDefinition visitPlayer at html.ceylon (9:2-19:2)
            $$toHtmlVisitor.visitPlayer=function visitPlayer(toVisit$572,parent$573){
                var $$toHtmlVisitor=this;
                
                //AttributeDeclaration div at html.ceylon (10:3-10:44)
                var div$574=$$toHtmlVisitor.document$571.createElement($$$cl569.String("div",3));
                div$574.appendChild($$toHtmlVisitor.document$571.createTextNode($$$cl569.StringBuilder().appendAll([$$$cl569.String("Player \'",8),toVisit$572.name.string,$$$cl569.String("\'.",2)]).string));
                parent$573.appendChild(div$574);
                
                //AttributeDeclaration list at html.ceylon (14:3-14:44)
                var list$575=$$toHtmlVisitor.document$571.createElement($$$cl569.String("li",2));
                //'for' statement at html.ceylon (15:3-17:3)
                var it$576 = toVisit$572.characters.iterator();
                var character$577;while ((character$577=it$576.next())!==$$$cl569.getFinished()){
                    $$toHtmlVisitor.visitCharacter(character$577,list$575);
                }
                parent$573.appendChild(list$575);
            };$$toHtmlVisitor.visitPlayer.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.Anything},$ps:[{$nm:'toVisit',$mt:'prm',$t:{t:$$$nc570.Player},$an:function(){return[];}},{$nm:'parent',$mt:'prm',$t:{t:Element},$an:function(){return[];}}],$cont:ToHtmlVisitor,$an:function(){return[$$$cl569.shared(),$$$cl569.actual()];},d:['nightprowler.client','ToHtmlVisitor','$m','visitPlayer']};};
            
            //MethodDefinition visitTable at html.ceylon (21:2-22:2)
            $$toHtmlVisitor.visitTable=function visitTable(toVisit$578,parent$579){
                var $$toHtmlVisitor=this;
            };$$toHtmlVisitor.visitTable.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.Anything},$ps:[{$nm:'toVisit',$mt:'prm',$t:{t:$$$nc570.Table},$an:function(){return[];}},{$nm:'parent',$mt:'prm',$t:{t:Element},$an:function(){return[];}}],$cont:ToHtmlVisitor,$an:function(){return[$$$cl569.shared(),$$$cl569.actual()];},d:['nightprowler.client','ToHtmlVisitor','$m','visitTable']};};
            
            //MethodDefinition visitCharacter at html.ceylon (24:2-28:2)
            $$toHtmlVisitor.visitCharacter=function visitCharacter(toVisit$580,parent$581){
                var $$toHtmlVisitor=this;
                
                //AttributeDeclaration div at html.ceylon (25:3-25:44)
                var div$582=$$toHtmlVisitor.document$571.createElement($$$cl569.String("div",3));
                div$582.appendChild($$toHtmlVisitor.document$571.createTextNode($$$cl569.StringBuilder().appendAll([$$$cl569.String("Character \'",11),toVisit$580.name.string,$$$cl569.String("\'.",2)]).string));
                parent$581.appendChild(div$582);
            };$$toHtmlVisitor.visitCharacter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.Anything},$ps:[{$nm:'toVisit',$mt:'prm',$t:{t:$$$nc570.Character},$an:function(){return[];}},{$nm:'parent',$mt:'prm',$t:{t:Element},$an:function(){return[];}}],$cont:ToHtmlVisitor,$an:function(){return[$$$cl569.shared(),$$$cl569.actual()];},d:['nightprowler.client','ToHtmlVisitor','$m','visitCharacter']};};
            
            //MethodDefinition visitNotPlayedCharacter at html.ceylon (30:2-31:2)
            $$toHtmlVisitor.visitNotPlayedCharacter=function visitNotPlayedCharacter(toVisit$583,parent$584){
                var $$toHtmlVisitor=this;
            };$$toHtmlVisitor.visitNotPlayedCharacter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.Anything},$ps:[{$nm:'toVisit',$mt:'prm',$t:{t:$$$nc570.NotPlayedCharacter},$an:function(){return[];}},{$nm:'parent',$mt:'prm',$t:{t:Element},$an:function(){return[];}}],$cont:ToHtmlVisitor,$an:function(){return[$$$cl569.shared(),$$$cl569.actual()];},d:['nightprowler.client','ToHtmlVisitor','$m','visitNotPlayedCharacter']};};
            $$$cl569.defineAttr($$toHtmlVisitor,'document$571',function(){return this.document$571_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:Document},$cont:ToHtmlVisitor,d:['nightprowler.client','ToHtmlVisitor','$at','document']};});
        })(ToHtmlVisitor.$$.prototype);
    }
    return ToHtmlVisitor;
}
exports.$init$ToHtmlVisitor=$init$ToHtmlVisitor;
$init$ToHtmlVisitor();

//MethodDefinition toHtml at html.ceylon (34:0-36:0)
function toHtml(model$585,element$586){
    model$585.accept(ToHtmlVisitor(element$586.ownerDocument),element$586,{Result:{t:$$$cl569.Anything},Args:{t:Element}});
}
exports.toHtml=toHtml;
toHtml.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.Anything},$ps:[{$nm:'model',$mt:'prm',$t:{t:$$$nc570.ModelObject},$an:function(){return[];}},{$nm:'element',$mt:'prm',$t:{t:Element},$an:function(){return[];}}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','toHtml']};};

//InterfaceDefinition DOM at dom.ceylon (2:0-7:0)
function DOM($$dOM){
}
DOM.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl569.doc($$$cl569.String("DOM root interface.",19)),$$$cl569.shared()];},d:['nightprowler.client','DOM']};};
exports.DOM=DOM;
function $init$DOM(){
    if (DOM.$$===undefined){
        $$$cl569.initTypeProto(DOM,'nightprowler.client::DOM');
        (function($$dOM){
        })(DOM.$$.prototype);
    }
    return DOM;
}
exports.$init$DOM=$init$DOM;
$init$DOM();

//ClassDefinition NodeType at dom.ceylon (10:0-16:0)
function NodeType($$nodeType){
    $init$NodeType();
    if ($$nodeType===undefined)$$$cl569.throwexc($$$cl569.InvocationException$meta$model($$$cl569.String("Cannot instantiate abstract class")),'?','?')
    return $$nodeType;
}
NodeType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl569.Basic},satisfies:[],$an:function(){return[$$$cl569.doc($$$cl569.String("Node type enum",14)),$$$cl569.shared(),$$$cl569.abstract()];},d:['nightprowler.client','NodeType']};};
exports.NodeType=NodeType;
function $init$NodeType(){
    if (NodeType.$$===undefined){
        $$$cl569.initTypeProto(NodeType,'nightprowler.client::NodeType',$$$cl569.Basic);
    }
    return NodeType;
}
exports.$init$NodeType=$init$NodeType;
$init$NodeType();

//ObjectDefinition elementNode at dom.ceylon (18:0-18:46)
function elementNode$587(){
    var $$elementNode=new elementNode$587.$$;
    NodeType($$elementNode);
    return $$elementNode;
}
function $init$elementNode$587(){
    if (elementNode$587.$$===undefined){
        $$$cl569.initTypeProto(elementNode$587,'nightprowler.client::elementNode',$init$NodeType());
    }
    return elementNode$587;
}
exports.$init$elementNode$587=$init$elementNode$587;
$init$elementNode$587();
var elementNode$588;
function getElementNode(){
    if (elementNode$588===undefined)elementNode$588=$init$elementNode$587()();
    return elementNode$588;
}
exports.getElementNode=getElementNode;
getElementNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:elementNode$587},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','elementNode']};};
$prop$getElementNode={get:getElementNode,$$metamodel$$:getElementNode.$$metamodel$$};
exports.$prop$getElementNode=$prop$getElementNode;

//ObjectDefinition attributeNode at dom.ceylon (19:0-19:48)
function attributeNode$589(){
    var $$attributeNode=new attributeNode$589.$$;
    NodeType($$attributeNode);
    return $$attributeNode;
}
function $init$attributeNode$589(){
    if (attributeNode$589.$$===undefined){
        $$$cl569.initTypeProto(attributeNode$589,'nightprowler.client::attributeNode',$init$NodeType());
    }
    return attributeNode$589;
}
exports.$init$attributeNode$589=$init$attributeNode$589;
$init$attributeNode$589();
var attributeNode$590;
function getAttributeNode(){
    if (attributeNode$590===undefined)attributeNode$590=$init$attributeNode$589()();
    return attributeNode$590;
}
exports.getAttributeNode=getAttributeNode;
getAttributeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:attributeNode$589},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','attributeNode']};};
$prop$getAttributeNode={get:getAttributeNode,$$metamodel$$:getAttributeNode.$$metamodel$$};
exports.$prop$getAttributeNode=$prop$getAttributeNode;

//ObjectDefinition textNode at dom.ceylon (20:0-20:43)
function textNode$591(){
    var $$textNode=new textNode$591.$$;
    NodeType($$textNode);
    return $$textNode;
}
function $init$textNode$591(){
    if (textNode$591.$$===undefined){
        $$$cl569.initTypeProto(textNode$591,'nightprowler.client::textNode',$init$NodeType());
    }
    return textNode$591;
}
exports.$init$textNode$591=$init$textNode$591;
$init$textNode$591();
var textNode$592;
function getTextNode(){
    if (textNode$592===undefined)textNode$592=$init$textNode$591()();
    return textNode$592;
}
exports.getTextNode=getTextNode;
getTextNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:textNode$591},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','textNode']};};
$prop$getTextNode={get:getTextNode,$$metamodel$$:getTextNode.$$metamodel$$};
exports.$prop$getTextNode=$prop$getTextNode;

//ObjectDefinition cdataSectionNode at dom.ceylon (21:0-21:51)
function cdataSectionNode$593(){
    var $$cdataSectionNode=new cdataSectionNode$593.$$;
    NodeType($$cdataSectionNode);
    return $$cdataSectionNode;
}
function $init$cdataSectionNode$593(){
    if (cdataSectionNode$593.$$===undefined){
        $$$cl569.initTypeProto(cdataSectionNode$593,'nightprowler.client::cdataSectionNode',$init$NodeType());
    }
    return cdataSectionNode$593;
}
exports.$init$cdataSectionNode$593=$init$cdataSectionNode$593;
$init$cdataSectionNode$593();
var cdataSectionNode$594;
function getCdataSectionNode(){
    if (cdataSectionNode$594===undefined)cdataSectionNode$594=$init$cdataSectionNode$593()();
    return cdataSectionNode$594;
}
exports.getCdataSectionNode=getCdataSectionNode;
getCdataSectionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:cdataSectionNode$593},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','cdataSectionNode']};};
$prop$getCdataSectionNode={get:getCdataSectionNode,$$metamodel$$:getCdataSectionNode.$$metamodel$$};
exports.$prop$getCdataSectionNode=$prop$getCdataSectionNode;

//ObjectDefinition entityReferenceNode at dom.ceylon (22:0-22:54)
function entityReferenceNode$595(){
    var $$entityReferenceNode=new entityReferenceNode$595.$$;
    NodeType($$entityReferenceNode);
    return $$entityReferenceNode;
}
function $init$entityReferenceNode$595(){
    if (entityReferenceNode$595.$$===undefined){
        $$$cl569.initTypeProto(entityReferenceNode$595,'nightprowler.client::entityReferenceNode',$init$NodeType());
    }
    return entityReferenceNode$595;
}
exports.$init$entityReferenceNode$595=$init$entityReferenceNode$595;
$init$entityReferenceNode$595();
var entityReferenceNode$596;
function getEntityReferenceNode(){
    if (entityReferenceNode$596===undefined)entityReferenceNode$596=$init$entityReferenceNode$595()();
    return entityReferenceNode$596;
}
exports.getEntityReferenceNode=getEntityReferenceNode;
getEntityReferenceNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityReferenceNode$595},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','entityReferenceNode']};};
$prop$getEntityReferenceNode={get:getEntityReferenceNode,$$metamodel$$:getEntityReferenceNode.$$metamodel$$};
exports.$prop$getEntityReferenceNode=$prop$getEntityReferenceNode;

//ObjectDefinition entityNode at dom.ceylon (23:0-23:45)
function entityNode$597(){
    var $$entityNode=new entityNode$597.$$;
    NodeType($$entityNode);
    return $$entityNode;
}
function $init$entityNode$597(){
    if (entityNode$597.$$===undefined){
        $$$cl569.initTypeProto(entityNode$597,'nightprowler.client::entityNode',$init$NodeType());
    }
    return entityNode$597;
}
exports.$init$entityNode$597=$init$entityNode$597;
$init$entityNode$597();
var entityNode$598;
function getEntityNode(){
    if (entityNode$598===undefined)entityNode$598=$init$entityNode$597()();
    return entityNode$598;
}
exports.getEntityNode=getEntityNode;
getEntityNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:entityNode$597},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','entityNode']};};
$prop$getEntityNode={get:getEntityNode,$$metamodel$$:getEntityNode.$$metamodel$$};
exports.$prop$getEntityNode=$prop$getEntityNode;

//ObjectDefinition processingInstructionNode at dom.ceylon (24:0-24:60)
function processingInstructionNode$599(){
    var $$processingInstructionNode=new processingInstructionNode$599.$$;
    NodeType($$processingInstructionNode);
    return $$processingInstructionNode;
}
function $init$processingInstructionNode$599(){
    if (processingInstructionNode$599.$$===undefined){
        $$$cl569.initTypeProto(processingInstructionNode$599,'nightprowler.client::processingInstructionNode',$init$NodeType());
    }
    return processingInstructionNode$599;
}
exports.$init$processingInstructionNode$599=$init$processingInstructionNode$599;
$init$processingInstructionNode$599();
var processingInstructionNode$600;
function getProcessingInstructionNode(){
    if (processingInstructionNode$600===undefined)processingInstructionNode$600=$init$processingInstructionNode$599()();
    return processingInstructionNode$600;
}
exports.getProcessingInstructionNode=getProcessingInstructionNode;
getProcessingInstructionNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:processingInstructionNode$599},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','processingInstructionNode']};};
$prop$getProcessingInstructionNode={get:getProcessingInstructionNode,$$metamodel$$:getProcessingInstructionNode.$$metamodel$$};
exports.$prop$getProcessingInstructionNode=$prop$getProcessingInstructionNode;

//ObjectDefinition commentNode at dom.ceylon (25:0-25:46)
function commentNode$601(){
    var $$commentNode=new commentNode$601.$$;
    NodeType($$commentNode);
    return $$commentNode;
}
function $init$commentNode$601(){
    if (commentNode$601.$$===undefined){
        $$$cl569.initTypeProto(commentNode$601,'nightprowler.client::commentNode',$init$NodeType());
    }
    return commentNode$601;
}
exports.$init$commentNode$601=$init$commentNode$601;
$init$commentNode$601();
var commentNode$602;
function getCommentNode(){
    if (commentNode$602===undefined)commentNode$602=$init$commentNode$601()();
    return commentNode$602;
}
exports.getCommentNode=getCommentNode;
getCommentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:commentNode$601},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','commentNode']};};
$prop$getCommentNode={get:getCommentNode,$$metamodel$$:getCommentNode.$$metamodel$$};
exports.$prop$getCommentNode=$prop$getCommentNode;

//ObjectDefinition documentNode at dom.ceylon (26:0-26:47)
function documentNode$603(){
    var $$documentNode=new documentNode$603.$$;
    NodeType($$documentNode);
    return $$documentNode;
}
function $init$documentNode$603(){
    if (documentNode$603.$$===undefined){
        $$$cl569.initTypeProto(documentNode$603,'nightprowler.client::documentNode',$init$NodeType());
    }
    return documentNode$603;
}
exports.$init$documentNode$603=$init$documentNode$603;
$init$documentNode$603();
var documentNode$604;
function getDocumentNode(){
    if (documentNode$604===undefined)documentNode$604=$init$documentNode$603()();
    return documentNode$604;
}
exports.getDocumentNode=getDocumentNode;
getDocumentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentNode$603},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','documentNode']};};
$prop$getDocumentNode={get:getDocumentNode,$$metamodel$$:getDocumentNode.$$metamodel$$};
exports.$prop$getDocumentNode=$prop$getDocumentNode;

//ObjectDefinition documentTypeNode at dom.ceylon (27:0-27:51)
function documentTypeNode$605(){
    var $$documentTypeNode=new documentTypeNode$605.$$;
    NodeType($$documentTypeNode);
    return $$documentTypeNode;
}
function $init$documentTypeNode$605(){
    if (documentTypeNode$605.$$===undefined){
        $$$cl569.initTypeProto(documentTypeNode$605,'nightprowler.client::documentTypeNode',$init$NodeType());
    }
    return documentTypeNode$605;
}
exports.$init$documentTypeNode$605=$init$documentTypeNode$605;
$init$documentTypeNode$605();
var documentTypeNode$606;
function getDocumentTypeNode(){
    if (documentTypeNode$606===undefined)documentTypeNode$606=$init$documentTypeNode$605()();
    return documentTypeNode$606;
}
exports.getDocumentTypeNode=getDocumentTypeNode;
getDocumentTypeNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentTypeNode$605},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','documentTypeNode']};};
$prop$getDocumentTypeNode={get:getDocumentTypeNode,$$metamodel$$:getDocumentTypeNode.$$metamodel$$};
exports.$prop$getDocumentTypeNode=$prop$getDocumentTypeNode;

//ObjectDefinition documentFragmentNode at dom.ceylon (28:0-28:55)
function documentFragmentNode$607(){
    var $$documentFragmentNode=new documentFragmentNode$607.$$;
    NodeType($$documentFragmentNode);
    return $$documentFragmentNode;
}
function $init$documentFragmentNode$607(){
    if (documentFragmentNode$607.$$===undefined){
        $$$cl569.initTypeProto(documentFragmentNode$607,'nightprowler.client::documentFragmentNode',$init$NodeType());
    }
    return documentFragmentNode$607;
}
exports.$init$documentFragmentNode$607=$init$documentFragmentNode$607;
$init$documentFragmentNode$607();
var documentFragmentNode$608;
function getDocumentFragmentNode(){
    if (documentFragmentNode$608===undefined)documentFragmentNode$608=$init$documentFragmentNode$607()();
    return documentFragmentNode$608;
}
exports.getDocumentFragmentNode=getDocumentFragmentNode;
getDocumentFragmentNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:documentFragmentNode$607},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','documentFragmentNode']};};
$prop$getDocumentFragmentNode={get:getDocumentFragmentNode,$$metamodel$$:getDocumentFragmentNode.$$metamodel$$};
exports.$prop$getDocumentFragmentNode=$prop$getDocumentFragmentNode;

//ObjectDefinition notationNode at dom.ceylon (29:0-29:47)
function notationNode$609(){
    var $$notationNode=new notationNode$609.$$;
    NodeType($$notationNode);
    return $$notationNode;
}
function $init$notationNode$609(){
    if (notationNode$609.$$===undefined){
        $$$cl569.initTypeProto(notationNode$609,'nightprowler.client::notationNode',$init$NodeType());
    }
    return notationNode$609;
}
exports.$init$notationNode$609=$init$notationNode$609;
$init$notationNode$609();
var notationNode$610;
function getNotationNode(){
    if (notationNode$610===undefined)notationNode$610=$init$notationNode$609()();
    return notationNode$610;
}
exports.getNotationNode=getNotationNode;
getNotationNode.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:notationNode$609},$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','notationNode']};};
$prop$getNotationNode={get:getNotationNode,$$metamodel$$:getNotationNode.$$metamodel$$};
exports.$prop$getNotationNode=$prop$getNotationNode;

//InterfaceDefinition Node at dom.ceylon (31:0-57:0)
function Node($$node){
}
Node.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl569.doc($$$cl569.String("Node interface.",15)),$$$cl569.shared()];},d:['nightprowler.client','Node']};};
exports.Node=Node;
function $init$Node(){
    if (Node.$$===undefined){
        $$$cl569.initTypeProto(Node,'nightprowler.client::Node');
        (function($$node){
            
            //AttributeDeclaration nodeName at dom.ceylon (33:2-33:31)
            $$node.$prop$getNodeName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','nodeName']};}};
            
            //AttributeDeclaration nodeValue at dom.ceylon (34:2-34:32)
            $$node.$prop$getNodeValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','nodeValue']};}};
            
            //AttributeDeclaration nodeType at dom.ceylon (35:2-35:31)
            $$node.$prop$getNodeType={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','nodeType']};}};
            
            //AttributeDeclaration parentNode at dom.ceylon (36:2-36:31)
            $$node.$prop$getParentNode={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Node},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','parentNode']};}};
            
            //AttributeDeclaration childNodes at dom.ceylon (37:2-37:35)
            $$node.$prop$getChildNodes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:NodeList},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','childNodes']};}};
            
            //AttributeDeclaration firstChild at dom.ceylon (38:2-38:31)
            $$node.$prop$getFirstChild={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Node},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','firstChild']};}};
            
            //AttributeDeclaration lastChild at dom.ceylon (39:2-39:30)
            $$node.$prop$getLastChild={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Node},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','lastChild']};}};
            
            //AttributeDeclaration previousSibling at dom.ceylon (40:2-40:36)
            $$node.$prop$getPreviousSibling={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Node},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','previousSibling']};}};
            
            //AttributeDeclaration nextSibling at dom.ceylon (41:2-41:32)
            $$node.$prop$getNextSibling={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Node},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','nextSibling']};}};
            
            //AttributeDeclaration attributes at dom.ceylon (42:2-42:39)
            $$node.$prop$getAttributes={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:NamedNodeMap},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','attributes']};}};
            
            //AttributeDeclaration ownerDocument at dom.ceylon (43:2-43:38)
            $$node.$prop$getOwnerDocument={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Document},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','ownerDocument']};}};
            
            //AttributeDeclaration namespaceURI at dom.ceylon (44:2-44:35)
            $$node.$prop$getNamespaceURI={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','namespaceURI']};}};
            
            //AttributeDeclaration prefix at dom.ceylon (45:2-45:29)
            $$node.$prop$getPrefix={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','prefix']};}};
            
            //AttributeDeclaration localName at dom.ceylon (46:2-46:32)
            $$node.$prop$getLocalName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Node,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Node','$at','localName']};}};
        })(Node.$$.prototype);
    }
    return Node;
}
exports.$init$Node=$init$Node;
$init$Node();

//InterfaceDefinition CharacterData at dom.ceylon (59:0-68:0)
function CharacterData($$characterData){
    Node($$characterData);
}
CharacterData.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','CharacterData']};};
exports.CharacterData=CharacterData;
function $init$CharacterData(){
    if (CharacterData.$$===undefined){
        $$$cl569.initTypeProto(CharacterData,'nightprowler.client::CharacterData',$init$Node());
        (function($$characterData){
            
            //AttributeDeclaration data at dom.ceylon (60:2-60:27)
            $$characterData.$prop$getData={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:CharacterData,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','CharacterData','$at','data']};}};
            
            //AttributeDeclaration length at dom.ceylon (61:2-61:30)
            $$characterData.$prop$getLength={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.Integer},$cont:CharacterData,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','CharacterData','$at','length']};}};
        })(CharacterData.$$.prototype);
    }
    return CharacterData;
}
exports.$init$CharacterData=$init$CharacterData;
$init$CharacterData();

//InterfaceDefinition Attr at dom.ceylon (70:0-75:0)
function Attr($$attr){
    Node($$attr);
}
Attr.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','Attr']};};
exports.Attr=Attr;
function $init$Attr(){
    if (Attr.$$===undefined){
        $$$cl569.initTypeProto(Attr,'nightprowler.client::Attr',$init$Node());
        (function($$attr){
            
            //AttributeDeclaration name at dom.ceylon (71:2-71:27)
            $$attr.$prop$getName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Attr,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Attr','$at','name']};}};
            
            //AttributeDeclaration specified at dom.ceylon (72:2-72:33)
            $$attr.$prop$getSpecified={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.Boolean},$cont:Attr,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Attr','$at','specified']};}};
            
            //AttributeDeclaration itsValue at dom.ceylon (73:2-73:31)
            $$attr.$prop$getItsValue={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Attr,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Attr','$at','itsValue']};}};
            
            //AttributeDeclaration ownerElement at dom.ceylon (74:2-74:36)
            $$attr.$prop$getOwnerElement={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Element},$cont:Attr,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Attr','$at','ownerElement']};}};
        })(Attr.$$.prototype);
    }
    return Attr;
}
exports.$init$Attr=$init$Attr;
$init$Attr();

//InterfaceDefinition Element at dom.ceylon (77:0-95:0)
function Element($$element){
    Node($$element);
}
Element.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','Element']};};
exports.Element=Element;
function $init$Element(){
    if (Element.$$===undefined){
        $$$cl569.initTypeProto(Element,'nightprowler.client::Element',$init$Node());
        (function($$element){
            
            //AttributeDeclaration tagName at dom.ceylon (78:2-78:30)
            $$element.$prop$getTagName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Element,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Element','$at','tagName']};}};
        })(Element.$$.prototype);
    }
    return Element;
}
exports.$init$Element=$init$Element;
$init$Element();

//InterfaceDefinition Text at dom.ceylon (97:0-99:0)
function Text($$text){
    CharacterData($$text);
}
Text.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:CharacterData}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','Text']};};
exports.Text=Text;
function $init$Text(){
    if (Text.$$===undefined){
        $$$cl569.initTypeProto(Text,'nightprowler.client::Text',$init$CharacterData());
        (function($$text){
        })(Text.$$.prototype);
    }
    return Text;
}
exports.$init$Text=$init$Text;
$init$Text();

//InterfaceDefinition Comment at dom.ceylon (101:0-102:0)
function Comment($$comment){
    CharacterData($$comment);
}
Comment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:CharacterData}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','Comment']};};
exports.Comment=Comment;
function $init$Comment(){
    if (Comment.$$===undefined){
        $$$cl569.initTypeProto(Comment,'nightprowler.client::Comment',$init$CharacterData());
    }
    return Comment;
}
exports.$init$Comment=$init$Comment;
$init$Comment();

//InterfaceDefinition CDATASection at dom.ceylon (104:0-105:0)
function CDATASection($$cDATASection){
    Text($$cDATASection);
}
CDATASection.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Text}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','CDATASection']};};
exports.CDATASection=CDATASection;
function $init$CDATASection(){
    if (CDATASection.$$===undefined){
        $$$cl569.initTypeProto(CDATASection,'nightprowler.client::CDATASection',$init$Text());
    }
    return CDATASection;
}
exports.$init$CDATASection=$init$CDATASection;
$init$CDATASection();

//InterfaceDefinition NodeList at dom.ceylon (108:0-112:0)
function NodeList($$nodeList){
}
NodeList.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','NodeList']};};
exports.NodeList=NodeList;
function $init$NodeList(){
    if (NodeList.$$===undefined){
        $$$cl569.initTypeProto(NodeList,'nightprowler.client::NodeList');
        (function($$nodeList){
            
            //AttributeDeclaration length at dom.ceylon (109:2-109:30)
        })(NodeList.$$.prototype);
    }
    return NodeList;
}
exports.$init$NodeList=$init$NodeList;
$init$NodeList();

//InterfaceDefinition NamedNodeMap at dom.ceylon (114:0-124:0)
function NamedNodeMap($$namedNodeMap){
}
NamedNodeMap.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','NamedNodeMap']};};
exports.NamedNodeMap=NamedNodeMap;
function $init$NamedNodeMap(){
    if (NamedNodeMap.$$===undefined){
        $$$cl569.initTypeProto(NamedNodeMap,'nightprowler.client::NamedNodeMap');
        (function($$namedNodeMap){
            
            //AttributeDeclaration length at dom.ceylon (115:2-115:30)
        })(NamedNodeMap.$$.prototype);
    }
    return NamedNodeMap;
}
exports.$init$NamedNodeMap=$init$NamedNodeMap;
$init$NamedNodeMap();

//InterfaceDefinition DocumentType at dom.ceylon (126:0-133:0)
function DocumentType($$documentType){
    Node($$documentType);
}
DocumentType.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','DocumentType']};};
exports.DocumentType=DocumentType;
function $init$DocumentType(){
    if (DocumentType.$$===undefined){
        $$$cl569.initTypeProto(DocumentType,'nightprowler.client::DocumentType',$init$Node());
        (function($$documentType){
            
            //AttributeDeclaration name at dom.ceylon (127:2-127:27)
            
            //AttributeDeclaration entities at dom.ceylon (128:2-128:37)
            $$documentType.$prop$getEntities={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:NamedNodeMap},$cont:DocumentType,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','DocumentType','$at','entities']};}};
            
            //AttributeDeclaration notations at dom.ceylon (129:2-129:38)
            $$documentType.$prop$getNotations={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:NamedNodeMap},$cont:DocumentType,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','DocumentType','$at','notations']};}};
            
            //AttributeDeclaration publicId at dom.ceylon (130:2-130:31)
            $$documentType.$prop$getPublicId={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:DocumentType,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','DocumentType','$at','publicId']};}};
            
            //AttributeDeclaration systemId at dom.ceylon (131:2-131:31)
            $$documentType.$prop$getSystemId={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:DocumentType,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','DocumentType','$at','systemId']};}};
            
            //AttributeDeclaration internalSubset at dom.ceylon (132:2-132:37)
            $$documentType.$prop$getInternalSubset={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:DocumentType,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','DocumentType','$at','internalSubset']};}};
        })(DocumentType.$$.prototype);
    }
    return DocumentType;
}
exports.$init$DocumentType=$init$DocumentType;
$init$DocumentType();

//InterfaceDefinition Notation at dom.ceylon (135:0-138:0)
function Notation($$notation){
    Node($$notation);
}
Notation.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','Notation']};};
exports.Notation=Notation;
function $init$Notation(){
    if (Notation.$$===undefined){
        $$$cl569.initTypeProto(Notation,'nightprowler.client::Notation',$init$Node());
        (function($$notation){
            
            //AttributeDeclaration publicId at dom.ceylon (136:2-136:31)
            
            //AttributeDeclaration systemId at dom.ceylon (137:2-137:31)
        })(Notation.$$.prototype);
    }
    return Notation;
}
exports.$init$Notation=$init$Notation;
$init$Notation();

//InterfaceDefinition Entity at dom.ceylon (140:0-144:0)
function Entity($$entity){
    Node($$entity);
}
Entity.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','Entity']};};
exports.Entity=Entity;
function $init$Entity(){
    if (Entity.$$===undefined){
        $$$cl569.initTypeProto(Entity,'nightprowler.client::Entity',$init$Node());
        (function($$entity){
            
            //AttributeDeclaration publicId at dom.ceylon (141:2-141:31)
            
            //AttributeDeclaration systemId at dom.ceylon (142:2-142:31)
            
            //AttributeDeclaration notationName at dom.ceylon (143:2-143:35)
            $$entity.$prop$getNotationName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:Entity,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Entity','$at','notationName']};}};
        })(Entity.$$.prototype);
    }
    return Entity;
}
exports.$init$Entity=$init$Entity;
$init$Entity();

//InterfaceDefinition EntityReference at dom.ceylon (146:0-147:0)
function EntityReference($$entityReference){
    Node($$entityReference);
}
EntityReference.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','EntityReference']};};
exports.EntityReference=EntityReference;
function $init$EntityReference(){
    if (EntityReference.$$===undefined){
        $$$cl569.initTypeProto(EntityReference,'nightprowler.client::EntityReference',$init$Node());
    }
    return EntityReference;
}
exports.$init$EntityReference=$init$EntityReference;
$init$EntityReference();

//InterfaceDefinition ProcessingInstruction at dom.ceylon (149:0-152:0)
function ProcessingInstruction($$processingInstruction){
    Node($$processingInstruction);
}
ProcessingInstruction.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','ProcessingInstruction']};};
exports.ProcessingInstruction=ProcessingInstruction;
function $init$ProcessingInstruction(){
    if (ProcessingInstruction.$$===undefined){
        $$$cl569.initTypeProto(ProcessingInstruction,'nightprowler.client::ProcessingInstruction',$init$Node());
        (function($$processingInstruction){
            
            //AttributeDeclaration target at dom.ceylon (150:2-150:29)
            $$processingInstruction.$prop$getTarget={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl569.String},$cont:ProcessingInstruction,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','ProcessingInstruction','$at','target']};}};
            
            //AttributeDeclaration data at dom.ceylon (151:2-151:27)
        })(ProcessingInstruction.$$.prototype);
    }
    return ProcessingInstruction;
}
exports.$init$ProcessingInstruction=$init$ProcessingInstruction;
$init$ProcessingInstruction();

//InterfaceDefinition DocumentFragment at dom.ceylon (154:0-155:0)
function DocumentFragment($$documentFragment){
    Node($$documentFragment);
}
DocumentFragment.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','DocumentFragment']};};
exports.DocumentFragment=DocumentFragment;
function $init$DocumentFragment(){
    if (DocumentFragment.$$===undefined){
        $$$cl569.initTypeProto(DocumentFragment,'nightprowler.client::DocumentFragment',$init$Node());
    }
    return DocumentFragment;
}
exports.$init$DocumentFragment=$init$DocumentFragment;
$init$DocumentFragment();

//InterfaceDefinition Document at dom.ceylon (157:0-176:0)
function Document($$document){
    Node($$document);
}
Document.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[{t:Node}],$an:function(){return[$$$cl569.shared()];},d:['nightprowler.client','Document']};};
exports.Document=Document;
function $init$Document(){
    if (Document.$$===undefined){
        $$$cl569.initTypeProto(Document,'nightprowler.client::Document',$init$Node());
        (function($$document){
            
            //AttributeDeclaration doctype at dom.ceylon (158:2-158:36)
            $$document.$prop$getDoctype={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DocumentType},$cont:Document,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Document','$at','doctype']};}};
            
            //AttributeDeclaration implementation at dom.ceylon (159:2-159:34)
            $$document.$prop$getImplementation={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:DOM},$cont:Document,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Document','$at','implementation']};}};
            
            //AttributeDeclaration documentElement at dom.ceylon (160:2-160:39)
            $$document.$prop$getDocumentElement={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Element},$cont:Document,$an:function(){return[$$$cl569.shared(),$$$cl569.formal()];},d:['nightprowler.client','Document','$at','documentElement']};}};
        })(Document.$$.prototype);
    }
    return Document;
}
exports.$init$Document=$init$Document;
$init$Document();
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
