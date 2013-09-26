
"DOM root interface."
shared interface DOM {
  shared formal Boolean hasFeature(String feature, String version);
  shared formal DocumentType createDocumentType(String qualifiedName, String publicId, String systemId);
  shared formal Document createDocument(String namespaceURI, String qualifiedName, DocumentType doctype);
}


"Node type enum"
shared abstract class NodeType() of 
  elementNode | attributeNode | textNode | cdataSectionNode | entityReferenceNode |
  entityNode | processingInstructionNode | commentNode | documentNode | documentTypeNode |
  documentFragmentNode | notationNode {

}

shared object elementNode extends NodeType() {}
shared object attributeNode extends NodeType() {}
shared object textNode extends NodeType() {}
shared object cdataSectionNode extends NodeType() {}
shared object entityReferenceNode extends NodeType() {}
shared object entityNode extends NodeType() {}
shared object processingInstructionNode extends NodeType() {}
shared object commentNode extends NodeType() {}
shared object documentNode extends NodeType() {}
shared object documentTypeNode extends NodeType() {}
shared object documentFragmentNode extends NodeType() {}
shared object notationNode extends NodeType() {}

"Node interface."
shared interface Node {
  shared formal String nodeName;
  shared formal String nodeValue;
  shared formal String nodeType;  
  shared formal Node parentNode;
  shared formal NodeList childNodes;
  shared formal Node firstChild;
  shared formal Node lastChild;
  shared formal Node previousSibling;
  shared formal Node nextSibling;
  shared formal NamedNodeMap attributes;
  shared formal Document ownerDocument;
  shared formal String namespaceURI;
  shared formal String prefix;
  shared formal String localName;
  
  shared formal Node insertBefore(Node newChild, Node refChild);
  shared formal Node replaceChild(Node newChild, Node oldChild);
  shared formal Node removeChild(Node oldChild);
  shared formal Node appendChild(Node newChild);
  shared formal Boolean hasChildNodes();
  shared formal Node cloneNode(Boolean deep);
  shared formal void normalize();
  shared formal Boolean isSupported(String feature, String version);
  shared formal Boolean hasAttributes();
}

shared interface CharacterData satisfies Node {
  shared formal String data;
  shared formal Integer length;

  shared formal String substringData(Integer offset, Integer count);
  shared formal void appendData(String arg);
  shared formal void insertData(Integer offset, String arg);
  shared formal void deleteData(Integer offset, Integer count);
  shared formal void replaceData(Integer offset, Integer count, String arg);
}

shared interface Attr satisfies Node {
  shared formal String name;
  shared formal Boolean specified;
  shared formal String itsValue;
  shared formal Element ownerElement;
}

shared interface Element satisfies Node {
  shared formal String tagName;

  shared formal String getAttribute(String name);
  shared formal void setAttribute(String name, String itsValue);
  shared formal void removeAttribute(String name);
  shared formal Attr getAttributeNode(String name);
  shared formal Attr setAttributeNode(Attr newAttr);
  shared formal Attr removeAttributeNode(Attr oldAttr);
  shared formal NodeList getElementsByTagName(String name);
  shared formal String getAttributeNS(String namespaceURI, String localName);
  shared formal void setAttributeNS(String namespaceURI, String qualifiedName, String itsValue);
  shared formal void removeAttributeNS(String namespaceURI, String localName);
  shared formal Attr getAttributeNodeNS(String namespaceURI, String localName);
  shared formal Attr setAttributeNodeNS(Attr newAttr);
  shared formal NodeList getElementsByTagNameNS(String namespaceURI, String localName);
  shared formal Boolean hasAttribute(String name);
  shared formal Boolean hasAttributeNS(String namespaceURI, String localName);
}

shared interface Text satisfies CharacterData {
  shared formal Text splitText(Integer offset);
}

shared interface Comment satisfies CharacterData {
}

shared interface CDATASection satisfies Text {
}


shared interface NodeList {
  shared formal Integer length;

  shared formal Node item(Integer index);
}

shared interface NamedNodeMap {
  shared formal Integer length;

  shared formal Node getNamedItem(String name);
  shared formal Node setNamedItem(Node arg);
  shared formal Node removeNamedItem(String name);
  shared formal Node item(Integer index);
  shared formal Node getNamedItemNS(String namespaceURI, String localName);
  shared formal Node setNamedItemNS(Node arg);
  shared formal Node removeNamedItemNS(String namespaceURI, String localName);
}

shared interface DocumentType satisfies Node {
  shared formal String name;
  shared formal NamedNodeMap entities;
  shared formal NamedNodeMap notations;
  shared formal String publicId;
  shared formal String systemId;
  shared formal String internalSubset;
}

shared interface Notation satisfies Node {
  shared formal String publicId;
  shared formal String systemId;
}

shared interface Entity satisfies Node {
  shared formal String publicId;
  shared formal String systemId;
  shared formal String notationName;
}

shared interface EntityReference satisfies Node {
}

shared interface ProcessingInstruction satisfies Node {
  shared formal String target;
  shared formal String data;
}

shared interface DocumentFragment satisfies Node {
}

shared interface Document satisfies Node {
  shared formal DocumentType doctype;
  shared formal DOM implementation;
  shared formal Element documentElement;
  
  shared formal Element createElement(String tagName);
  shared formal DocumentFragment createDocumentFragment();
  shared formal Text createTextNode(String data);
  shared formal Comment createComment(String data);
  shared formal CDATASection createCDATASection(String data);
  shared formal ProcessingInstruction createProcessingInstruction(String target, String data);
  shared formal Attr createAttribute(String name);
  shared formal EntityReference createEntityReference(String name);
  shared formal NodeList getElementsByTagName(String tagname);
  shared formal Node importNode(Node importedNode, Boolean deep);
  shared formal Element createElementNS(String namespaceURI, String qualifiedName);
  shared formal Attr createAttributeNS(String namespaceURI, String qualifiedName);
  shared formal NodeList getElementsByTagNameNS(String namespaceURI, String localName);
  shared formal Element getElementById(String elementId);
}

