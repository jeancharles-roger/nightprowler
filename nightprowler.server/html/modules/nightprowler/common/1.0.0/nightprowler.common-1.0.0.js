(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.json\/0.6.1","ceylon.language\/0.6.1"],"$mod-name":"nightprowler.common","$mod-version":"1.0.0","nightprowler.common":{"NotPlayedCharacter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"name"}],"satisfies":[{"$pk":"nightprowler.common","$nm":"ModelObject"}],"$mt":"cls","$an":{"shared":[]},"$m":{"accept":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Args"}],"$pk":"nightprowler.common","$nm":"Visitor"},"$mt":"prm","$nm":"visitor"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"$nm":"Args"}],"$an":{"shared":[],"actual":[]},"$nm":"accept"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Decription string."],"actual":[]},"$nm":"string"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"name"}},"$nm":"NotPlayedCharacter"},"Modificator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"attribute"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"current"}]],"$hdn":"1","$mt":"prm","$pt":"f","$an":{"shared":[]},"$nm":"modify"}],"satisfies":[{"$pk":"nightprowler.common","$nm":"Change"}],"$mt":"cls","$an":{"shared":[]},"$m":{"modify":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"current"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"modify"}},"$at":{"attribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"attribute"}},"$nm":"Modificator"},"Player":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Player's name."]},"$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Id used for login."]},"$nm":"login"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Password (hashed)"]},"$nm":"password"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Salt used to hash password, not used yet."]},"$nm":"salt"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Character"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The player's characters."],"variable":[]},"$nm":"characters"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Table"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Tables where the player is the master."],"variable":[]},"$nm":"masteredTables"}],"satisfies":[{"$pk":"nightprowler.common","$nm":"ModelObject"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a player. It posseses Characters."]},"$m":{"accept":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Args"}],"$pk":"nightprowler.common","$nm":"Visitor"},"$mt":"prm","$nm":"visitor"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"$nm":"Args"}],"$an":{"shared":[],"actual":[]},"$nm":"accept"}},"$at":{"masteredTables":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Table"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["Tables where the player is the master."],"variable":[]},"$nm":"masteredTables"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Decription string."],"actual":[]},"$nm":"string"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Player's name."]},"$nm":"name"},"login":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Id used for login."]},"$nm":"login"},"password":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Password (hashed)"]},"$nm":"password"},"characters":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Character"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The player's characters."],"variable":[]},"$nm":"characters"},"salt":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Salt used to hash password, not used yet."]},"$nm":"salt"}},"$nm":"Player"},"Change":{"$mt":"ifc","$an":{"shared":[]},"$at":{"attribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"attribute"}},"$nm":"Change"},"toJsonString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"ModelObject"},"$mt":"prm","$nm":"model"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toJsonString"},"typeSequenceFromJsonArray":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$nm":"Type"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$mt":"prm","$nm":"source"}]],"$mt":"mthd","$tp":[{"$nm":"Type"}],"$an":{"see":["typeFromJsonObject"],"doc":["Transforms a json Array into a sequence of Type."]},"$nm":"typeSequenceFromJsonArray"},"Table":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The master's player login."]},"$nm":"master"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The table name."]},"$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The player's characters played in the table."],"variable":[]},"$nm":"characters"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"NotPlayedCharacter"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The non player characters for table."],"variable":[]},"$nm":"npcs"}],"satisfies":[{"$pk":"nightprowler.common","$nm":"ModelObject"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a table, a group of Characters in a same game. A table is moderated by the master."]},"$m":{"accept":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Args"}],"$pk":"nightprowler.common","$nm":"Visitor"},"$mt":"prm","$nm":"visitor"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"$nm":"Args"}],"$an":{"shared":[],"actual":[]},"$nm":"accept"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Decription string."],"actual":[]},"$nm":"string"},"npcs":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"NotPlayedCharacter"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The non player characters for table."],"variable":[]},"$nm":"npcs"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The table name."]},"$nm":"name"},"characters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The player's characters played in the table."],"variable":[]},"$nm":"characters"},"master":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The master's player login."]},"$nm":"master"}},"$nm":"Table"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"run"},"Setter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"attribute"},{"$t":{"$nm":"Type"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"toSet"}],"satisfies":[{"$pk":"nightprowler.common","$nm":"Change"}],"$mt":"cls","$tp":[{"$nm":"Type"}],"$an":{"shared":[]},"$at":{"toSet":{"$t":{"$nm":"Type"},"$mt":"attr","$an":{"shared":[]},"$nm":"toSet"},"attribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"attribute"}},"$nm":"Setter"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"delta"}],[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"current"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"Character":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The player's login."]},"$nm":"player"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"name"}],"satisfies":[{"$pk":"nightprowler.common","$nm":"ModelObject"}],"$mt":"cls","$an":{"shared":[]},"$m":{"apply":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Change"},{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"group"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"apply"},"accept":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Args"}],"$pk":"nightprowler.common","$nm":"Visitor"},"$mt":"prm","$nm":"visitor"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"$nm":"Args"}],"$an":{"shared":[],"actual":[]},"$nm":"accept"},"getInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attribute"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getInteger"}},"$at":{"player":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The player's login."]},"$nm":"player"},"modifications":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Change"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"modifications"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Decription string."],"actual":[]},"$nm":"string"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"name"}},"$nm":"Character"},"$pkg-shared":"1","robin":{"$t":{"$pk":"nightprowler.common","$nm":"Player"},"$mt":"attr","$nm":"robin"},"typeFromJsonObject":{"$t":{"$nm":"Type"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"source"}]],"$mt":"mthd","$tp":[{"$nm":"Type"}],"$an":{"see":["fromJsonObject"],"doc":["Transforms a json Object into a instance of Type."]},"$nm":"typeFromJsonObject"},"Visitor":{"$mt":"ifc","$tp":[{"variance":"out","$nm":"Result"},{"variance":"in","$nm":"Args"}],"$an":{"shared":[],"doc":["Model visitor interface."]},"$m":{"visitNotPlayedCharacter":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"NotPlayedCharacter"},"$mt":"prm","$nm":"npc"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"visitNotPlayedCharacter"},"visitPlayer":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"Player"},"$mt":"prm","$nm":"player"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"visitPlayer"},"visitTable":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"Table"},"$mt":"prm","$nm":"table"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"visitTable"},"visitCharacter":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"Character"},"$mt":"prm","$nm":"character"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"visitCharacter"}},"$nm":"Visitor"},"toJsonArray":{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Array"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"ModelObject"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"source"}]],"$mt":"mthd","$nm":"toJsonArray"},"fromJsonObject":{"$t":{"$pk":"nightprowler.common","$nm":"ModelObject"},"$ps":[[{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$mt":"prm","$nm":"json"}]],"$mt":"mthd","$nm":"fromJsonObject"},"ModelObject":{"of":[{"$pk":"nightprowler.common","$nm":"Player"},{"$pk":"nightprowler.common","$nm":"Character"},{"$pk":"nightprowler.common","$nm":"Table"},{"$pk":"nightprowler.common","$nm":"NotPlayedCharacter"}],"$mt":"ifc","$an":{"shared":[],"doc":["Root interface for all model classes."]},"$m":{"accept":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Args"}],"$pk":"nightprowler.common","$nm":"Visitor"},"$mt":"prm","$nm":"visitor"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"$nm":"Args"}],"$an":{"shared":[],"formal":[]},"$nm":"accept"}},"$nm":"ModelObject"},"toJsonObject":{"$t":{"$md":"ceylon.json","$pk":"ceylon.json","$nm":"Object"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"ModelObject"},"$mt":"prm","$nm":"source"}]],"$mt":"mthd","$nm":"toJsonObject"},"fromJsonString":{"$t":{"$pk":"nightprowler.common","$nm":"ModelObject"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"source"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"fromJsonString"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl488=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl488.$addmod$($$$cl488,'ceylon.language/0.6.1');

//AttributeDeclaration robin at run.ceylon (2:0-9:1)
var robin$489;function $valinit$robin$489(){if (robin$489===undefined)robin$489=(login$490=$$$cl488.String("robin",5),password$491=$$$cl488.String("williams",8),name$492=$$$cl488.String("Robin",5),characters$493=[Character($$$cl488.String("robin",5),$$$cl488.String("Personnage de Robin",19))].reifyCeylonType({Absent:{t:$$$cl488.Nothing},Element:{t:Character}}),Player(name$492,login$490,password$491,undefined,characters$493,undefined));return robin$489;};$valinit$robin$489();
function getRobin(){return $valinit$robin$489();}
var $prop$getRobin={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Player},d:['nightprowler.common','robin']};}};
exports.$prop$getRobin=$prop$getRobin;
$prop$getRobin.get=function(){return robin$489};
var login$490,password$491,name$492,characters$493;

//MethodDefinition run at run.ceylon (12:0-29:0)
function run(){
};run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Anything},$ps:[],d:['nightprowler.common','run']};};
exports.$pkg$ans$nightprowler$common=function(){return[$$$cl488.shared()];};
exports.$mod$ans$=[];

//InterfaceDefinition ModelObject at model.ceylon (2:0-7:0)
function ModelObject($$modelObject){
}
ModelObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl488.doc($$$cl488.String("Root interface for all model classes.",37)),$$$cl488.shared()];},d:['nightprowler.common','ModelObject']};};
exports.ModelObject=ModelObject;
function $init$ModelObject(){
    if (ModelObject.$$===undefined){
        $$$cl488.initTypeProto(ModelObject,'nightprowler.common::ModelObject');
        (function($$modelObject){
        })(ModelObject.$$.prototype);
    }
    return ModelObject;
}
exports.$init$ModelObject=$init$ModelObject;
$init$ModelObject();

//ClassDefinition Player at model.ceylon (9:0-37:0)
function Player(name, login, password, salt, characters, masteredTables, $$player){
    $init$Player();
    if ($$player===undefined)$$player=new Player.$$;
    if(salt===undefined){salt=$$$cl488.String("",0);}
    if(characters===undefined){characters=$$$cl488.getEmpty();}
    if(masteredTables===undefined){masteredTables=$$$cl488.getEmpty();}
    ModelObject($$player);
    
    //AttributeDeclaration name at model.ceylon (13:1-14:19)
    $$player.name$494_=name;
    $$player.$prop$getName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Player\'s name.",14)),$$$cl488.shared()];},d:['nightprowler.common','Player','$at','name']};}};
    $$player.$prop$getName.get=function(){return name};
    
    //AttributeDeclaration characters at model.ceylon (16:1-17:40)
    $$player.characters$495_=characters;
    $$player.$prop$getCharacters={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:Character}}},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("The player\'s characters.",24)),$$$cl488.shared(),$$$cl488.variable()];},d:['nightprowler.common','Player','$at','characters']};}};
    $$player.$prop$getCharacters.get=function(){return characters};
    
    //AttributeDeclaration masteredTables at model.ceylon (19:1-20:40)
    $$player.masteredTables$496_=masteredTables;
    $$player.$prop$getMasteredTables={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:Table}}},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Tables where the player is the master.",38)),$$$cl488.shared(),$$$cl488.variable()];},d:['nightprowler.common','Player','$at','masteredTables']};}};
    $$player.$prop$getMasteredTables.get=function(){return masteredTables};
    
    //AttributeDeclaration login at model.ceylon (22:1-23:20)
    $$player.login$497_=login;
    $$player.$prop$getLogin={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Id used for login.",18)),$$$cl488.shared()];},d:['nightprowler.common','Player','$at','login']};}};
    $$player.$prop$getLogin.get=function(){return login};
    
    //AttributeDeclaration salt at model.ceylon (25:1-26:19)
    $$player.salt$498_=salt;
    $$player.$prop$getSalt={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Salt used to hash password, not used yet.",41)),$$$cl488.shared()];},d:['nightprowler.common','Player','$at','salt']};}};
    $$player.$prop$getSalt.get=function(){return salt};
    
    //AttributeDeclaration password at model.ceylon (28:1-29:23)
    $$player.password$499_=password;
    $$player.$prop$getPassword={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Password (hashed)",17)),$$$cl488.shared()];},d:['nightprowler.common','Player','$at','password']};}};
    $$player.$prop$getPassword.get=function(){return password};
    
    //AttributeDeclaration string at model.ceylon (31:1-32:64)
    $$player.string$500_=$$$cl488.String("[Player] ",9).plus($$player.login).plus($$$cl488.String(", ",2)).plus($$player.name);
    $$player.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Decription string.",18)),$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','Player','$at','string']};}};
    $$player.$prop$getString.get=function(){return string};
    return $$player;
}
Player.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl488.Basic},satisfies:[{t:ModelObject}],$an:function(){return[$$$cl488.doc($$$cl488.String("Represents a player. It posseses Characters.",44)),$$$cl488.shared()];},d:['nightprowler.common','Player']};};
exports.Player=Player;
function $init$Player(){
    if (Player.$$===undefined){
        $$$cl488.initTypeProto(Player,'nightprowler.common::Player',$$$cl488.Basic,$init$ModelObject());
        (function($$player){
            
            //AttributeDeclaration name at model.ceylon (13:1-14:19)
            $$$cl488.defineAttr($$player,'name',function(){return this.name$494_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Player\'s name.",14)),$$$cl488.shared()];},d:['nightprowler.common','Player','$at','name']};});
            
            //AttributeDeclaration characters at model.ceylon (16:1-17:40)
            $$$cl488.defineAttr($$player,'characters',function(){return this.characters$495_;},function(characters$501){return this.characters$495_=characters$501;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:Character}}},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("The player\'s characters.",24)),$$$cl488.shared(),$$$cl488.variable()];},d:['nightprowler.common','Player','$at','characters']};});
            
            //AttributeDeclaration masteredTables at model.ceylon (19:1-20:40)
            $$$cl488.defineAttr($$player,'masteredTables',function(){return this.masteredTables$496_;},function(masteredTables$502){return this.masteredTables$496_=masteredTables$502;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:Table}}},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Tables where the player is the master.",38)),$$$cl488.shared(),$$$cl488.variable()];},d:['nightprowler.common','Player','$at','masteredTables']};});
            
            //AttributeDeclaration login at model.ceylon (22:1-23:20)
            $$$cl488.defineAttr($$player,'login',function(){return this.login$497_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Id used for login.",18)),$$$cl488.shared()];},d:['nightprowler.common','Player','$at','login']};});
            
            //AttributeDeclaration salt at model.ceylon (25:1-26:19)
            $$$cl488.defineAttr($$player,'salt',function(){return this.salt$498_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Salt used to hash password, not used yet.",41)),$$$cl488.shared()];},d:['nightprowler.common','Player','$at','salt']};});
            
            //AttributeDeclaration password at model.ceylon (28:1-29:23)
            $$$cl488.defineAttr($$player,'password',function(){return this.password$499_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Password (hashed)",17)),$$$cl488.shared()];},d:['nightprowler.common','Player','$at','password']};});
            
            //AttributeDeclaration string at model.ceylon (31:1-32:64)
            $$$cl488.defineAttr($$player,'string',function(){return this.string$500_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Player,$an:function(){return[$$$cl488.doc($$$cl488.String("Decription string.",18)),$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','Player','$at','string']};});
            
            //MethodDefinition accept at model.ceylon (34:1-36:1)
            $$player.accept=function accept(visitor$503,arguments$504,$$$mptypes){
                var $$player=this;
                return visitor$503.visitPlayer($$player,arguments$504);
            };$$player.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'visitor',$mt:'prm',$t:{t:Visitor,a:{Result:'Result',Args:'Args'}},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$t:'Args',$an:function(){return[];}}],$cont:Player,$tp:{Result:{},Args:{}},$an:function(){return[$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','Player','$m','accept']};};
        })(Player.$$.prototype);
    }
    return Player;
}
exports.$init$Player=$init$Player;
$init$Player();

//ClassDefinition Table at model.ceylon (39:0-63:0)
function Table(master, name, characters, npcs, $$table){
    $init$Table();
    if ($$table===undefined)$$table=new Table.$$;
    if(characters===undefined){characters=$$$cl488.getEmpty();}
    if(npcs===undefined){npcs=$$$cl488.getEmpty();}
    ModelObject($$table);
    
    //AttributeDeclaration master at model.ceylon (44:1-45:21)
    $$table.master$505_=master;
    $$table.$prop$getMaster={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Table,$an:function(){return[$$$cl488.doc($$$cl488.String("The master\'s player login.",26)),$$$cl488.shared()];},d:['nightprowler.common','Table','$at','master']};}};
    $$table.$prop$getMaster.get=function(){return master};
    
    //AttributeDeclaration name at model.ceylon (47:1-48:19)
    $$table.name$506_=name;
    $$table.$prop$getName.get=function(){return name};
    
    //AttributeDeclaration characters at model.ceylon (50:1-51:37)
    $$table.characters$507_=characters;
    $$table.$prop$getCharacters.get=function(){return characters};
    
    //AttributeDeclaration npcs at model.ceylon (53:1-54:43)
    $$table.npcs$508_=npcs;
    $$table.$prop$getNpcs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:NotPlayedCharacter}}},$cont:Table,$an:function(){return[$$$cl488.doc($$$cl488.String("The non player characters for table.",36)),$$$cl488.shared(),$$$cl488.variable()];},d:['nightprowler.common','Table','$at','npcs']};}};
    $$table.$prop$getNpcs.get=function(){return npcs};
    
    //AttributeDeclaration string at model.ceylon (56:1-57:76)
    $$table.string$509_=$$$cl488.String("[Table] ",8).plus($$table.name).plus($$$cl488.String(", mastered by ",14)).plus($$table.master);
    $$table.$prop$getString.get=function(){return string};
    return $$table;
}
Table.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl488.Basic},satisfies:[{t:ModelObject}],$an:function(){return[$$$cl488.doc($$$cl488.String("Represents a table, a group of Characters in a same game. A table is moderated by the master.",93)),$$$cl488.shared()];},d:['nightprowler.common','Table']};};
exports.Table=Table;
function $init$Table(){
    if (Table.$$===undefined){
        $$$cl488.initTypeProto(Table,'nightprowler.common::Table',$$$cl488.Basic,$init$ModelObject());
        (function($$table){
            
            //AttributeDeclaration master at model.ceylon (44:1-45:21)
            $$$cl488.defineAttr($$table,'master',function(){return this.master$505_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Table,$an:function(){return[$$$cl488.doc($$$cl488.String("The master\'s player login.",26)),$$$cl488.shared()];},d:['nightprowler.common','Table','$at','master']};});
            
            //AttributeDeclaration name at model.ceylon (47:1-48:19)
            $$$cl488.defineAttr($$table,'name',function(){return this.name$506_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Table,$an:function(){return[$$$cl488.doc($$$cl488.String("The table name.",15)),$$$cl488.shared()];},d:['nightprowler.common','Table','$at','name']};});
            
            //AttributeDeclaration characters at model.ceylon (50:1-51:37)
            $$$cl488.defineAttr($$table,'characters',function(){return this.characters$507_;},function(characters$510){return this.characters$507_=characters$510;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:$$$cl488.String}}},$cont:Table,$an:function(){return[$$$cl488.doc($$$cl488.String("The player\'s characters played in the table.",44)),$$$cl488.shared(),$$$cl488.variable()];},d:['nightprowler.common','Table','$at','characters']};});
            
            //AttributeDeclaration npcs at model.ceylon (53:1-54:43)
            $$$cl488.defineAttr($$table,'npcs',function(){return this.npcs$508_;},function(npcs$511){return this.npcs$508_=npcs$511;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:NotPlayedCharacter}}},$cont:Table,$an:function(){return[$$$cl488.doc($$$cl488.String("The non player characters for table.",36)),$$$cl488.shared(),$$$cl488.variable()];},d:['nightprowler.common','Table','$at','npcs']};});
            
            //AttributeDeclaration string at model.ceylon (56:1-57:76)
            $$$cl488.defineAttr($$table,'string',function(){return this.string$509_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Table,$an:function(){return[$$$cl488.doc($$$cl488.String("Decription string.",18)),$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','Table','$at','string']};});
            
            //MethodDefinition accept at model.ceylon (59:1-61:1)
            $$table.accept=function accept(visitor$512,arguments$513,$$$mptypes){
                var $$table=this;
                return visitor$512.visitTable($$table,arguments$513);
            };$$table.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'visitor',$mt:'prm',$t:{t:Visitor,a:{Result:'Result',Args:'Args'}},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$t:'Args',$an:function(){return[];}}],$cont:Table,$tp:{Result:{},Args:{}},$an:function(){return[$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','Table','$m','accept']};};
        })(Table.$$.prototype);
    }
    return Table;
}
exports.$init$Table=$init$Table;
$init$Table();

//ClassDefinition NotPlayedCharacter at model.ceylon (65:0-76:0)
function NotPlayedCharacter(name, $$notPlayedCharacter){
    $init$NotPlayedCharacter();
    if ($$notPlayedCharacter===undefined)$$notPlayedCharacter=new NotPlayedCharacter.$$;
    ModelObject($$notPlayedCharacter);
    
    //AttributeDeclaration name at model.ceylon (68:1-68:19)
    $$notPlayedCharacter.name$514_=name;
    $$notPlayedCharacter.$prop$getName.get=function(){return name};
    
    //AttributeDeclaration string at model.ceylon (70:1-71:46)
    $$notPlayedCharacter.string$515_=$$$cl488.String("[Npc] ",6).plus($$notPlayedCharacter.name);
    $$notPlayedCharacter.$prop$getString.get=function(){return string};
    return $$notPlayedCharacter;
}
NotPlayedCharacter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl488.Basic},satisfies:[{t:ModelObject}],$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','NotPlayedCharacter']};};
exports.NotPlayedCharacter=NotPlayedCharacter;
function $init$NotPlayedCharacter(){
    if (NotPlayedCharacter.$$===undefined){
        $$$cl488.initTypeProto(NotPlayedCharacter,'nightprowler.common::NotPlayedCharacter',$$$cl488.Basic,$init$ModelObject());
        (function($$notPlayedCharacter){
            
            //AttributeDeclaration name at model.ceylon (68:1-68:19)
            $$$cl488.defineAttr($$notPlayedCharacter,'name',function(){return this.name$514_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:NotPlayedCharacter,$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','NotPlayedCharacter','$at','name']};});
            
            //AttributeDeclaration string at model.ceylon (70:1-71:46)
            $$$cl488.defineAttr($$notPlayedCharacter,'string',function(){return this.string$515_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:NotPlayedCharacter,$an:function(){return[$$$cl488.doc($$$cl488.String("Decription string.",18)),$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','NotPlayedCharacter','$at','string']};});
            
            //MethodDefinition accept at model.ceylon (73:1-75:1)
            $$notPlayedCharacter.accept=function accept(visitor$516,arguments$517,$$$mptypes){
                var $$notPlayedCharacter=this;
                return visitor$516.visitNotPlayedCharacter($$notPlayedCharacter,arguments$517);
            };$$notPlayedCharacter.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'visitor',$mt:'prm',$t:{t:Visitor,a:{Result:'Result',Args:'Args'}},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$t:'Args',$an:function(){return[];}}],$cont:NotPlayedCharacter,$tp:{Result:{},Args:{}},$an:function(){return[$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','NotPlayedCharacter','$m','accept']};};
        })(NotPlayedCharacter.$$.prototype);
    }
    return NotPlayedCharacter;
}
exports.$init$NotPlayedCharacter=$init$NotPlayedCharacter;
$init$NotPlayedCharacter();

//ClassDefinition Character at model.ceylon (78:0-111:0)
function Character(player, name, $$character){
    $init$Character();
    if ($$character===undefined)$$character=new Character.$$;
    ModelObject($$character);
    
    //AttributeDeclaration player at model.ceylon (81:1-82:21)
    $$character.player$518_=player;
    $$character.$prop$getPlayer={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Character,$an:function(){return[$$$cl488.doc($$$cl488.String("The player\'s login.",19)),$$$cl488.shared()];},d:['nightprowler.common','Character','$at','player']};}};
    $$character.$prop$getPlayer.get=function(){return player};
    
    //AttributeDeclaration name at model.ceylon (84:1-84:19)
    $$character.name$519_=name;
    $$character.$prop$getName.get=function(){return name};
    
    //AttributeDeclaration string at model.ceylon (86:1-87:70)
    $$character.string$520_=$$$cl488.String("[Character] ",12).plus($$character.name).plus($$$cl488.String(" to ",4)).plus($$character.player);
    $$character.$prop$getString.get=function(){return string};
    
    //AttributeDeclaration modifications at model.ceylon (89:1-89:38)
    $$character.modifications$521_=$$$cl488.getEmpty();
    $$character.$prop$getModifications$521={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:Change}}},$cont:Character,$an:function(){return[$$$cl488.variable()];},d:['nightprowler.common','Character','$at','modifications']};}};
    $$character.$prop$getModifications$521.get=function(){return modifications$521};
    return $$character;
}
Character.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl488.Basic},satisfies:[{t:ModelObject}],$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','Character']};};
exports.Character=Character;
function $init$Character(){
    if (Character.$$===undefined){
        $$$cl488.initTypeProto(Character,'nightprowler.common::Character',$$$cl488.Basic,$init$ModelObject());
        (function($$character){
            
            //AttributeDeclaration player at model.ceylon (81:1-82:21)
            $$$cl488.defineAttr($$character,'player',function(){return this.player$518_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Character,$an:function(){return[$$$cl488.doc($$$cl488.String("The player\'s login.",19)),$$$cl488.shared()];},d:['nightprowler.common','Character','$at','player']};});
            
            //AttributeDeclaration name at model.ceylon (84:1-84:19)
            $$$cl488.defineAttr($$character,'name',function(){return this.name$519_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Character,$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','Character','$at','name']};});
            
            //AttributeDeclaration string at model.ceylon (86:1-87:70)
            $$$cl488.defineAttr($$character,'string',function(){return this.string$520_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Character,$an:function(){return[$$$cl488.doc($$$cl488.String("Decription string.",18)),$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','Character','$at','string']};});
            
            //AttributeDeclaration modifications at model.ceylon (89:1-89:38)
            $$$cl488.defineAttr($$character,'modifications$521',function(){return this.modifications$521_;},function(modifications$522){return this.modifications$521_=modifications$522;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:Change}}},$cont:Character,$an:function(){return[$$$cl488.variable()];},d:['nightprowler.common','Character','$at','modifications']};});
            
            //MethodDefinition apply at model.ceylon (91:1-93:1)
            $$character.$apply=function $apply(group$523){
                var $$character=this;
                $$character.modifications$521=$$character.modifications$521.chain(group$523,{Other:{t:Change},OtherAbsent:{t:$$$cl488.Nothing}});
            };$$character.$apply.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Anything},$ps:[{$nm:'group',$mt:'prm',$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Nothing},Element:{t:Change}}},$an:function(){return[];}}],$cont:Character,$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','Character','$m','apply']};};
            
            //MethodDefinition getInteger at model.ceylon (95:1-106:1)
            $$character.getInteger=function getInteger(attribute$524){
                var $$character=this;
                
                //AttributeDeclaration result at model.ceylon (97:2-97:29)
                var result$525=(0);
                function setResult$525(result$526){return result$525=result$526;};
                //'for' statement at model.ceylon (98:2-102:2)
                var it$527 = $$character.modifications$521.iterator();
                var modification$528;while ((modification$528=it$527.next())!==$$$cl488.getFinished()){
                    if(attribute$524.equals(modification$528.attribute)){}
                }
                return result$525;
            };$$character.getInteger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Integer},$ps:[{$nm:'attribute',$mt:'prm',$t:{t:$$$cl488.String},$an:function(){return[];}}],$cont:Character,$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','Character','$m','getInteger']};};
            
            //MethodDefinition accept at model.ceylon (108:1-110:1)
            $$character.accept=function accept(visitor$529,arguments$530,$$$mptypes){
                var $$character=this;
                return visitor$529.visitCharacter($$character,arguments$530);
            };$$character.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'visitor',$mt:'prm',$t:{t:Visitor,a:{Result:'Result',Args:'Args'}},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$t:'Args',$an:function(){return[];}}],$cont:Character,$tp:{Result:{},Args:{}},$an:function(){return[$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','Character','$m','accept']};};
        })(Character.$$.prototype);
    }
    return Character;
}
exports.$init$Character=$init$Character;
$init$Character();

//InterfaceDefinition Change at model.ceylon (114:0-116:0)
function Change($$change){
}
Change.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','Change']};};
exports.Change=Change;
function $init$Change(){
    if (Change.$$===undefined){
        $$$cl488.initTypeProto(Change,'nightprowler.common::Change');
        (function($$change){
            
            //AttributeDeclaration attribute at model.ceylon (115:1-115:31)
            $$change.$prop$getAttribute={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Change,$an:function(){return[$$$cl488.shared(),$$$cl488.formal()];},d:['nightprowler.common','Change','$at','attribute']};}};
        })(Change.$$.prototype);
    }
    return Change;
}
exports.$init$Change=$init$Change;
$init$Change();

//ClassDefinition Modificator at model.ceylon (118:0-122:0)
function Modificator(attribute, modify, $$modificator){
    $init$Modificator();
    if ($$modificator===undefined)$$modificator=new Modificator.$$;
    Change($$modificator);
    
    //AttributeDeclaration attribute at model.ceylon (119:1-119:31)
    $$modificator.attribute$531_=attribute;
    $$modificator.$prop$getAttribute.get=function(){return attribute};
    $$modificator.modify=modify;
    return $$modificator;
}
Modificator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl488.Basic},satisfies:[{t:Change}],$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','Modificator']};};
exports.Modificator=Modificator;
function $init$Modificator(){
    if (Modificator.$$===undefined){
        $$$cl488.initTypeProto(Modificator,'nightprowler.common::Modificator',$$$cl488.Basic,$init$Change());
        (function($$modificator){
            
            //AttributeDeclaration attribute at model.ceylon (119:1-119:31)
            $$$cl488.defineAttr($$modificator,'attribute',function(){return this.attribute$531_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Modificator,$an:function(){return[$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','Modificator','$at','attribute']};});
        })(Modificator.$$.prototype);
    }
    return Modificator;
}
exports.$init$Modificator=$init$Modificator;
$init$Modificator();

//ClassDefinition Setter at model.ceylon (124:0-127:0)
function Setter(attribute, toSet, $$targs$$,$$setter){
    $init$Setter();
    if ($$setter===undefined)$$setter=new Setter.$$;
    $$$cl488.set_type_args($$setter,$$targs$$);
    Change($$setter);
    
    //AttributeDeclaration attribute at model.ceylon (125:1-125:31)
    $$setter.attribute$532_=attribute;
    $$setter.$prop$getAttribute.get=function(){return attribute};
    
    //AttributeDeclaration toSet at model.ceylon (126:1-126:18)
    $$setter.toSet$533_=toSet;
    $$setter.$prop$getToSet={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Type',$cont:Setter,$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','Setter','$at','toSet']};}};
    $$setter.$prop$getToSet.get=function(){return toSet};
    return $$setter;
}
Setter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl488.Basic},$tp:{Type:{}},satisfies:[{t:Change}],$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','Setter']};};
exports.Setter=Setter;
function $init$Setter(){
    if (Setter.$$===undefined){
        $$$cl488.initTypeProto(Setter,'nightprowler.common::Setter',$$$cl488.Basic,$init$Change());
        (function($$setter){
            
            //AttributeDeclaration attribute at model.ceylon (125:1-125:31)
            $$$cl488.defineAttr($$setter,'attribute',function(){return this.attribute$532_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$cont:Setter,$an:function(){return[$$$cl488.shared(),$$$cl488.actual()];},d:['nightprowler.common','Setter','$at','attribute']};});
            
            //AttributeDeclaration toSet at model.ceylon (126:1-126:18)
            $$$cl488.defineAttr($$setter,'toSet',function(){return this.toSet$533_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'Type',$cont:Setter,$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','Setter','$at','toSet']};});
        })(Setter.$$.prototype);
    }
    return Setter;
}
exports.$init$Setter=$init$Setter;
$init$Setter();

//MethodDefinition add at model.ceylon (129:0-131:0)
function add(delta$534){
    return function(current$535){
        return current$535.plus(delta$534);
    }
}
exports.add=add;
add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Integer},$ps:[{$nm:'delta',$mt:'prm',$t:{t:$$$cl488.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','add']};};

//InterfaceDefinition Visitor at model.ceylon (133:0-139:0)
function Visitor($$targs$$,$$visitor){
    $$$cl488.set_type_args($$visitor,$$targs$$);
}
Visitor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Result:{'var':'out'},Args:{'var':'in'}},satisfies:[],$an:function(){return[$$$cl488.doc($$$cl488.String("Model visitor interface.",24)),$$$cl488.shared()];},d:['nightprowler.common','Visitor']};};
exports.Visitor=Visitor;
function $init$Visitor(){
    if (Visitor.$$===undefined){
        $$$cl488.initTypeProto(Visitor,'nightprowler.common::Visitor');
        (function($$visitor){
        })(Visitor.$$.prototype);
    }
    return Visitor;
}
exports.$init$Visitor=$init$Visitor;
$init$Visitor();
var $$$cj536=require('ceylon/json/0.6.1/ceylon.json-0.6.1');
$$$cl488.$addmod$($$$cj536,'ceylon.json/0.6.1');

//MethodDefinition fromJsonString at json.ceylon (4:0-6:0)
function fromJsonString(source$537){
    return fromJsonObject($$$cj536.parse(source$537));
}
exports.fromJsonString=fromJsonString;
fromJsonString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ModelObject},$ps:[{$nm:'source',$mt:'prm',$t:{t:$$$cl488.String},$an:function(){return[];}}],$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','fromJsonString']};};

//MethodDefinition fromJsonObject at json.ceylon (8:0-42:0)
function fromJsonObject(json$538){
    //Switch statement at json.ceylon (9:1-41:1)
    var case$539=json$538.get($$$cl488.String("type",4));
    if (case$539!==null&&case$539.equals($$$cl488.String("NotPlayedCharacter",18))) {
        return (name$540=json$538.getString($$$cl488.String("name",4)),NotPlayedCharacter(name$540));
        var name$540;
    }else if (case$539!==null&&case$539.equals($$$cl488.String("Character",9))) {
        return (player$541=json$538.getString($$$cl488.String("player",6)),name$542=json$538.getString($$$cl488.String("name",4)),Character(player$541,name$542));
        var player$541,name$542;
    }else if (case$539!==null&&case$539.equals($$$cl488.String("Player",6))) {
        return (name$543=json$538.getString($$$cl488.String("name",4)),login$544=json$538.getString($$$cl488.String("login",5)),password$545=json$538.getString($$$cl488.String("password",8)),salt$546=json$538.getString($$$cl488.String("salt",4)),characters$547=typeSequenceFromJsonArray(json$538.getArray($$$cl488.String("characters",10)),{Type:{t:$$$cl488.Nothing}}),masteredTables$548=typeSequenceFromJsonArray(json$538.getArray($$$cl488.String("tables",6)),{Type:{t:$$$cl488.Nothing}}),Player(name$543,login$544,password$545,salt$546,characters$547,masteredTables$548));
        var name$543,login$544,password$545,salt$546,characters$547,masteredTables$548;
    }else if (case$539!==null&&case$539.equals($$$cl488.String("Table",5))) {
        return (name$549=json$538.getString($$$cl488.String("name",4)),master$550=json$538.getString($$$cl488.String("master",6)),characters$551=typeSequenceFromJsonArray(json$538.getArray($$$cl488.String("characters",10)),{Type:{t:$$$cl488.Nothing}}),npcs$552=typeSequenceFromJsonArray(json$538.getArray($$$cl488.String("npcs",4)),{Type:{t:$$$cl488.Nothing}}),Table(master$550,name$549,characters$551,npcs$552));
        var name$549,master$550,characters$551,npcs$552;
    }else {
        throw $$$cl488.wrapexc($$$cl488.Exception($$$cl488.String("Can\'t translate: \'",18).plus(json$538.string).plus($$$cl488.String("\'.",2))),'40:2-40:58','nightprowler/common/json.ceylon');
    }//End switch statement at json.ceylon (9:1-41:1)
};fromJsonObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:ModelObject},$ps:[{$nm:'json',$mt:'prm',$t:{t:$$$cj536.Object},$an:function(){return[];}}],d:['nightprowler.common','fromJsonObject']};};

//MethodDefinition typeSequenceFromJsonArray at json.ceylon (44:0-55:0)
function typeSequenceFromJsonArray(source$553,$$$mptypes){
    return $$$cl488.Comprehension(function(){
        //Comprehension at json.ceylon (51:2-53:32)
        var oneObject$556;
        var it$554=source$553.iterator();
        var oneSource$555=$$$cl488.getFinished();
        var oneObject$556;
        var next$oneSource$555=function(){
            while((oneSource$555=it$554.next())!==$$$cl488.getFinished()){
                if($$$cl488.isOfType((oneObject$556=oneSource$555),{t:$$$cj536.Object})){
                    return oneSource$555;
                }
            }
            return $$$cl488.getFinished();
        }
        next$oneSource$555();
        return function(){
            if(oneSource$555!==$$$cl488.getFinished()){
                var oneSource$555$557=oneSource$555;
                var tmpvar$558=typeFromJsonObject(oneObject$556,{Type:{t:$$$cl488.Nothing}});
                next$oneSource$555();
                return tmpvar$558;
            }
            return $$$cl488.getFinished();
        }
    },{Absent:{t:$$$cl488.Null},Element:{t:$$$cl488.Nothing}});
};typeSequenceFromJsonArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:'Type'}},$ps:[{$nm:'source',$mt:'prm',$t:{t:$$$cj536.Array},$an:function(){return[];}}],$tp:{Type:{}},$an:function(){return[$$$cl488.doc($$$cl488.String("Transforms a json Array into a sequence of Type.",48)),$$$cl488.see([$$$cl488.$init$OpenFunction()($$$cl488.getModules$meta().find('nightprowler.common','1.0.0').findPackage('nightprowler.common'),typeFromJsonObject)].reifyCeylonType({Absent:{t:$$$cl488.Null},Element:{t:$$$cl488.FunctionDeclaration$meta$declaration}}))];},d:['nightprowler.common','typeSequenceFromJsonArray']};};

//MethodDefinition typeFromJsonObject at json.ceylon (57:0-68:0)
function typeFromJsonObject(source$559,$$$mptypes){
    var casted$560;
    if($$$cl488.isOfType((casted$560=fromJsonObject(source$559)),$$$mptypes.Type)){
        return casted$560;
    }else {
        throw $$$cl488.wrapexc($$$cl488.Exception($$$cl488.String("Can\'t translate to ",19).plus($$$cl488./*TODO closed type literalcom.redhat.ceylon.compiler.typechecker.tree.Tree$TypeLiteral*/typeLiteral$meta({Type:$$$mptypes.Type}).string).plus($$$cl488.String(" : \'",4)).plus(source$559.string).plus($$$cl488.String("\'.",2))),'66:2-66:84','nightprowler/common/json.ceylon');
    }
};typeFromJsonObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Type',$ps:[{$nm:'source',$mt:'prm',$t:{t:$$$cj536.Object},$an:function(){return[];}}],$tp:{Type:{}},$an:function(){return[$$$cl488.doc($$$cl488.String("Transforms a json Object into a instance of Type.",49)),$$$cl488.see([$$$cl488.$init$OpenFunction()($$$cl488.getModules$meta().find('nightprowler.common','1.0.0').findPackage('nightprowler.common'),fromJsonObject)].reifyCeylonType({Absent:{t:$$$cl488.Null},Element:{t:$$$cl488.FunctionDeclaration$meta$declaration}}))];},d:['nightprowler.common','typeFromJsonObject']};};

//MethodDefinition toJsonArray at json.ceylon (70:0-77:0)
function toJsonArray(source$561){
    return $$$cj536.Array($$$cl488.Comprehension(function(){
        //Comprehension at json.ceylon (73:3-74:26)
        var it$562=source$561.iterator();
        var oneSource$563=$$$cl488.getFinished();
        var next$oneSource$563=function(){return oneSource$563=it$562.next();}
        next$oneSource$563();
        return function(){
            if(oneSource$563!==$$$cl488.getFinished()){
                var oneSource$563$564=oneSource$563;
                var tmpvar$565=toJsonObject(oneSource$563$564);
                next$oneSource$563();
                return tmpvar$565;
            }
            return $$$cl488.getFinished();
        }
    },{Absent:{t:$$$cl488.Null},Element:{t:$$$cj536.Object}}));
};toJsonArray.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cj536.Array},$ps:[{$nm:'source',$mt:'prm',$t:{t:$$$cl488.Iterable,a:{Absent:{t:$$$cl488.Null},Element:{t:ModelObject}}},$an:function(){return[];}}],d:['nightprowler.common','toJsonArray']};};

//MethodDefinition toJsonObject at json.ceylon (79:0-122:0)
function toJsonObject(source$566){
    //Switch statement at json.ceylon (80:1-121:1)
    var case$567=source$566;
    if ($$$cl488.isOfType(source$566,{t:NotPlayedCharacter})) {
        return $$$cj536.Object([$$$cl488.Entry($$$cl488.String("type",4),$$$cl488.String("NotPlayedCharacter",18),{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("name",4),case$567.name,{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}})].reifyCeylonType({Absent:{t:$$$cl488.Nothing},Element:{t:$$$cl488.Entry,a:{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}}}));
    }else if ($$$cl488.isOfType(source$566,{t:Character})) {
        return $$$cj536.Object([$$$cl488.Entry($$$cl488.String("type",4),$$$cl488.String("Character",9),{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("name",4),case$567.name,{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("player",6),case$567.player,{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}})].reifyCeylonType({Absent:{t:$$$cl488.Nothing},Element:{t:$$$cl488.Entry,a:{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}}}));
    }else if ($$$cl488.isOfType(source$566,{t:Player})) {
        return $$$cj536.Object([$$$cl488.Entry($$$cl488.String("type",4),$$$cl488.String("Player",6),{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("name",4),case$567.name,{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("login",5),case$567.login,{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("password",8),case$567.password,{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("salt",4),case$567.salt,{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("characters",10),toJsonArray(case$567.characters),{Key:{t:$$$cl488.String},Item:{t:$$$cj536.Array}}),$$$cl488.Entry($$$cl488.String("tables",6),toJsonArray(case$567.masteredTables),{Key:{t:$$$cl488.String},Item:{t:$$$cj536.Array}})].reifyCeylonType({Absent:{t:$$$cl488.Nothing},Element:{ t:'u', l:[{t:$$$cl488.Entry,a:{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}},{t:$$$cl488.Entry,a:{Key:{t:$$$cl488.String},Item:{t:$$$cj536.Array}}}]}}));
    }else if ($$$cl488.isOfType(source$566,{t:Table})) {
        return $$$cj536.Object([$$$cl488.Entry($$$cl488.String("type",4),$$$cl488.String("Table",5),{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("name",4),case$567.name,{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("master",6),case$567.master,{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}),$$$cl488.Entry($$$cl488.String("characters",10),$$$cj536.Array(case$567.characters),{Key:{t:$$$cl488.String},Item:{t:$$$cj536.Array}}),$$$cl488.Entry($$$cl488.String("npcs",4),toJsonArray(case$567.npcs),{Key:{t:$$$cl488.String},Item:{t:$$$cj536.Array}})].reifyCeylonType({Absent:{t:$$$cl488.Nothing},Element:{ t:'u', l:[{t:$$$cl488.Entry,a:{Key:{t:$$$cl488.String},Item:{t:$$$cl488.String}}},{t:$$$cl488.Entry,a:{Key:{t:$$$cl488.String},Item:{t:$$$cj536.Array}}}]}}));
    }//End switch statement at json.ceylon (80:1-121:1)
};toJsonObject.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cj536.Object},$ps:[{$nm:'source',$mt:'prm',$t:{t:ModelObject},$an:function(){return[];}}],d:['nightprowler.common','toJsonObject']};};

//MethodDefinition toJsonString at json.ceylon (124:0-126:0)
function toJsonString(model$568){
    return toJsonObject(model$568).string;
}
exports.toJsonString=toJsonString;
toJsonString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl488.String},$ps:[{$nm:'model',$mt:'prm',$t:{t:ModelObject},$an:function(){return[];}}],$an:function(){return[$$$cl488.shared()];},d:['nightprowler.common','toJsonString']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
