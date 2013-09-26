(function(define) { define(function(require, exports, module) {
var $$METAMODEL$$={"$mod-deps":["ceylon.language\/0.6.1"],"$mod-name":"nightprowler.common","$mod-version":"1.0.0","nightprowler.common":{"NotPlayedCharacter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"name"}],"$mt":"cls","$an":{"shared":[]},"$m":{"accept":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Args"}],"$pk":"nightprowler.common","$nm":"Visitor"},"$mt":"prm","$nm":"visitor"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"$nm":"Args"}],"$an":{"shared":[]},"$nm":"accept"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Decription string."],"actual":[]},"$nm":"string"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"name"}},"$nm":"NotPlayedCharacter"},"Modificator":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"attribute"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"current"}]],"$hdn":"1","$mt":"prm","$pt":"f","$an":{"shared":[]},"$nm":"modify"}],"satisfies":[{"$pk":"nightprowler.common","$nm":"Change"}],"$mt":"cls","$an":{"shared":[]},"$m":{"modify":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"current"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"modify"}},"$at":{"attribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"attribute"}},"$nm":"Modificator"},"Player":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Player's name."]},"$nm":"name"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Id used for login."]},"$nm":"login"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["Password (hashed)"]},"$nm":"password"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Salt used to hash password, not used yet."]},"$nm":"salt"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Character"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The player's characters."],"variable":[]},"$nm":"characters"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Table"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["Tables where the player is the master."],"variable":[]},"$nm":"masteredTables"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a player. It posseses Characters."]},"$m":{"accept":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Args"}],"$pk":"nightprowler.common","$nm":"Visitor"},"$mt":"prm","$nm":"visitor"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"$nm":"Args"}],"$an":{"shared":[]},"$nm":"accept"}},"$at":{"masteredTables":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Table"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["Tables where the player is the master."],"variable":[]},"$nm":"masteredTables"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Decription string."],"actual":[]},"$nm":"string"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Player's name."]},"$nm":"name"},"login":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Id used for login."]},"$nm":"login"},"password":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Password (hashed)"]},"$nm":"password"},"characters":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Character"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The player's characters."],"variable":[]},"$nm":"characters"},"salt":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Salt used to hash password, not used yet."]},"$nm":"salt"}},"$nm":"Player"},"Change":{"$mt":"ifc","$an":{"shared":[]},"$at":{"attribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"formal":[]},"$nm":"attribute"}},"$nm":"Change"},"toJsonString":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"ModelObject"},"$mt":"prm","$nm":"model"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"toJsonString"},"Table":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The master's player login."]},"$nm":"master"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The table name."]},"$nm":"name"},{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The player's characters played in the table."],"variable":[]},"$nm":"characters"},{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"NotPlayedCharacter"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"$hdn":"1","$mt":"prm","$def":"1","$an":{"shared":[],"doc":["The non player characters for table."],"variable":[]},"$nm":"npcs"}],"$mt":"cls","$an":{"shared":[],"doc":["Represents a table, a group of Characters in a same game. A table is moderated by the master."]},"$m":{"accept":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Args"}],"$pk":"nightprowler.common","$nm":"Visitor"},"$mt":"prm","$nm":"visitor"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"$nm":"Args"}],"$an":{"shared":[]},"$nm":"accept"}},"$at":{"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Decription string."],"actual":[]},"$nm":"string"},"npcs":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"NotPlayedCharacter"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The non player characters for table."],"variable":[]},"$nm":"npcs"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The table name."]},"$nm":"name"},"characters":{"$t":{"$md":"ceylon.language","$tp":[{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"String"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"doc":["The player's characters played in the table."],"variable":[]},"$nm":"characters"},"master":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The master's player login."]},"$nm":"master"}},"$nm":"Table"},"run":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$mt":"mthd","$nm":"run"},"Setter":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"actual":[]},"$nm":"attribute"},{"$t":{"$nm":"Type"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"toSet"}],"satisfies":[{"$pk":"nightprowler.common","$nm":"Change"}],"$mt":"cls","$tp":[{"$nm":"Type"}],"$an":{"shared":[]},"$at":{"toSet":{"$t":{"$nm":"Type"},"$mt":"attr","$an":{"shared":[]},"$nm":"toSet"},"attribute":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"actual":[]},"$nm":"attribute"}},"$nm":"Setter"},"add":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"delta"}],[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$mt":"prm","$nm":"current"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"add"},"Character":{"super":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Basic"},"$ps":[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[],"doc":["The player's login."]},"$nm":"player"},{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$hdn":"1","$mt":"prm","$an":{"shared":[]},"$nm":"name"}],"$mt":"cls","$an":{"shared":[]},"$m":{"apply":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Anything"},"$ps":[[{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Change"},{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Nothing"}],"$pk":"ceylon.language","$nm":"Iterable"},"$mt":"prm","$nm":"group"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"apply"},"accept":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$tp":[{"$mt":"tpm","$nm":"Result"},{"$mt":"tpm","$nm":"Args"}],"$pk":"nightprowler.common","$nm":"Visitor"},"$mt":"prm","$nm":"visitor"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$tp":[{"$nm":"Result"},{"$nm":"Args"}],"$an":{"shared":[]},"$nm":"accept"},"getInteger":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"Integer"},"$ps":[[{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"prm","$nm":"attribute"}]],"$mt":"mthd","$an":{"shared":[]},"$nm":"getInteger"}},"$at":{"player":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["The player's login."]},"$nm":"player"},"modifications":{"$t":{"$md":"ceylon.language","$tp":[{"$mt":"tpm","$pk":"nightprowler.common","$nm":"Change"},{"$md":"ceylon.language","$mt":"tpm","$pk":"ceylon.language","$nm":"Null"}],"$pk":"ceylon.language","$nm":"Iterable"},"var":"1","$mt":"attr","$an":{"shared":[],"actual":[],"variable":[]},"$nm":"modifications"},"string":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[],"doc":["Decription string."],"actual":[]},"$nm":"string"},"name":{"$t":{"$md":"ceylon.language","$pk":"ceylon.language","$nm":"String"},"$mt":"attr","$an":{"shared":[]},"$nm":"name"}},"$nm":"Character"},"$pkg-shared":"1","robin":{"$t":{"$pk":"nightprowler.common","$nm":"Player"},"$mt":"attr","$nm":"robin"},"Visitor":{"$mt":"ifc","$tp":[{"variance":"out","$nm":"Result"},{"variance":"in","$nm":"Args"}],"$an":{"shared":[],"doc":["Model visitor interface."]},"$m":{"visitNotPlayedCharacter":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"NotPlayedCharacter"},"$mt":"prm","$nm":"npc"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"visitNotPlayedCharacter"},"visitPlayer":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"Player"},"$mt":"prm","$nm":"player"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"visitPlayer"},"visitTable":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"Table"},"$mt":"prm","$nm":"table"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"visitTable"},"visitCharacter":{"$t":{"$nm":"Result"},"$ps":[[{"$t":{"$pk":"nightprowler.common","$nm":"Character"},"$mt":"prm","$nm":"character"},{"$t":{"$nm":"Args"},"$mt":"prm","$nm":"arguments"}]],"$mt":"mthd","$an":{"shared":[],"formal":[]},"$nm":"visitCharacter"}},"$nm":"Visitor"},"ModelObject":{"$mt":"als","$an":{"shared":[],"doc":["Alias for all model classes."]},"$alias":{"comp":"u","$ts":[{"$pk":"nightprowler.common","$nm":"NotPlayedCharacter"},{"$pk":"nightprowler.common","$nm":"Character"},{"$pk":"nightprowler.common","$nm":"Table"},{"$pk":"nightprowler.common","$nm":"Player"}]},"$nm":"ModelObject"}}};
exports.$$METAMODEL$$=function(){return $$METAMODEL$$;};
var $$$cl596=require('ceylon/language/0.6.1/ceylon.language-0.6.1');
$$$cl596.$addmod$($$$cl596,'ceylon.language/0.6.1');

//AttributeDeclaration robin at run.ceylon (2:0-9:1)
var robin$597;function $valinit$robin$597(){if (robin$597===undefined)robin$597=(login$598=$$$cl596.String("robin",5),password$599=$$$cl596.String("williams",8),name$600=$$$cl596.String("Robin",5),characters$601=[Character($$$cl596.String("robin",5),$$$cl596.String("Personnage de Robin",19))].reifyCeylonType({Absent:{t:$$$cl596.Nothing},Element:{t:Character}}),Player(name$600,login$598,password$599,undefined,characters$601,undefined));return robin$597;};$valinit$robin$597();
function getRobin(){return $valinit$robin$597();}
var $prop$getRobin={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:Player},d:['nightprowler.common','robin']};}};
exports.$prop$getRobin=$prop$getRobin;
$prop$getRobin.get=function(){return robin$597};
var login$598,password$599,name$600,characters$601;

//MethodDefinition run at run.ceylon (12:0-29:0)
function run(){
};run.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Anything},$ps:[],d:['nightprowler.common','run']};};
exports.$pkg$ans$nightprowler$common=function(){return[$$$cl596.shared()];};
exports.$mod$ans$=[];

//ClassDefinition Player at model.ceylon (5:0-32:0)
function Player(name, login, password, salt, characters, masteredTables, $$player){
    $init$Player();
    if ($$player===undefined)$$player=new Player.$$;
    if(salt===undefined){salt=$$$cl596.String("",0);}
    if(characters===undefined){characters=$$$cl596.getEmpty();}
    if(masteredTables===undefined){masteredTables=$$$cl596.getEmpty();}
    
    //AttributeDeclaration name at model.ceylon (8:1-9:19)
    $$player.name$602_=name;
    $$player.$prop$getName={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Player\'s name.",14)),$$$cl596.shared()];},d:['nightprowler.common','Player','$at','name']};}};
    $$player.$prop$getName.get=function(){return name};
    
    //AttributeDeclaration characters at model.ceylon (11:1-12:40)
    $$player.characters$603_=characters;
    $$player.$prop$getCharacters={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Null},Element:{t:Character}}},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("The player\'s characters.",24)),$$$cl596.shared(),$$$cl596.variable()];},d:['nightprowler.common','Player','$at','characters']};}};
    $$player.$prop$getCharacters.get=function(){return characters};
    
    //AttributeDeclaration masteredTables at model.ceylon (14:1-15:40)
    $$player.masteredTables$604_=masteredTables;
    $$player.$prop$getMasteredTables={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Null},Element:{t:Table}}},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Tables where the player is the master.",38)),$$$cl596.shared(),$$$cl596.variable()];},d:['nightprowler.common','Player','$at','masteredTables']};}};
    $$player.$prop$getMasteredTables.get=function(){return masteredTables};
    
    //AttributeDeclaration login at model.ceylon (17:1-18:20)
    $$player.login$605_=login;
    $$player.$prop$getLogin={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Id used for login.",18)),$$$cl596.shared()];},d:['nightprowler.common','Player','$at','login']};}};
    $$player.$prop$getLogin.get=function(){return login};
    
    //AttributeDeclaration salt at model.ceylon (20:1-21:19)
    $$player.salt$606_=salt;
    $$player.$prop$getSalt={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Salt used to hash password, not used yet.",41)),$$$cl596.shared()];},d:['nightprowler.common','Player','$at','salt']};}};
    $$player.$prop$getSalt.get=function(){return salt};
    
    //AttributeDeclaration password at model.ceylon (23:1-24:23)
    $$player.password$607_=password;
    $$player.$prop$getPassword={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Password (hashed)",17)),$$$cl596.shared()];},d:['nightprowler.common','Player','$at','password']};}};
    $$player.$prop$getPassword.get=function(){return password};
    
    //AttributeDeclaration string at model.ceylon (26:1-27:64)
    $$player.string$608_=$$$cl596.String("[Player] ",9).plus($$player.login).plus($$$cl596.String(", ",2)).plus($$player.name);
    $$player.$prop$getString={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Decription string.",18)),$$$cl596.shared(),$$$cl596.actual()];},d:['nightprowler.common','Player','$at','string']};}};
    $$player.$prop$getString.get=function(){return string};
    return $$player;
}
Player.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl596.Basic},satisfies:[],$an:function(){return[$$$cl596.doc($$$cl596.String("Represents a player. It posseses Characters.",44)),$$$cl596.shared()];},d:['nightprowler.common','Player']};};
exports.Player=Player;
function $init$Player(){
    if (Player.$$===undefined){
        $$$cl596.initTypeProto(Player,'nightprowler.common::Player',$$$cl596.Basic);
        (function($$player){
            
            //AttributeDeclaration name at model.ceylon (8:1-9:19)
            $$$cl596.defineAttr($$player,'name',function(){return this.name$602_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Player\'s name.",14)),$$$cl596.shared()];},d:['nightprowler.common','Player','$at','name']};});
            
            //AttributeDeclaration characters at model.ceylon (11:1-12:40)
            $$$cl596.defineAttr($$player,'characters',function(){return this.characters$603_;},function(characters$609){return this.characters$603_=characters$609;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Null},Element:{t:Character}}},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("The player\'s characters.",24)),$$$cl596.shared(),$$$cl596.variable()];},d:['nightprowler.common','Player','$at','characters']};});
            
            //AttributeDeclaration masteredTables at model.ceylon (14:1-15:40)
            $$$cl596.defineAttr($$player,'masteredTables',function(){return this.masteredTables$604_;},function(masteredTables$610){return this.masteredTables$604_=masteredTables$610;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Null},Element:{t:Table}}},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Tables where the player is the master.",38)),$$$cl596.shared(),$$$cl596.variable()];},d:['nightprowler.common','Player','$at','masteredTables']};});
            
            //AttributeDeclaration login at model.ceylon (17:1-18:20)
            $$$cl596.defineAttr($$player,'login',function(){return this.login$605_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Id used for login.",18)),$$$cl596.shared()];},d:['nightprowler.common','Player','$at','login']};});
            
            //AttributeDeclaration salt at model.ceylon (20:1-21:19)
            $$$cl596.defineAttr($$player,'salt',function(){return this.salt$606_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Salt used to hash password, not used yet.",41)),$$$cl596.shared()];},d:['nightprowler.common','Player','$at','salt']};});
            
            //AttributeDeclaration password at model.ceylon (23:1-24:23)
            $$$cl596.defineAttr($$player,'password',function(){return this.password$607_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Password (hashed)",17)),$$$cl596.shared()];},d:['nightprowler.common','Player','$at','password']};});
            
            //AttributeDeclaration string at model.ceylon (26:1-27:64)
            $$$cl596.defineAttr($$player,'string',function(){return this.string$608_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Player,$an:function(){return[$$$cl596.doc($$$cl596.String("Decription string.",18)),$$$cl596.shared(),$$$cl596.actual()];},d:['nightprowler.common','Player','$at','string']};});
            
            //MethodDefinition accept at model.ceylon (29:1-31:1)
            $$player.accept=function accept(visitor$611,arguments$612,$$$mptypes){
                var $$player=this;
                return visitor$611.visitPlayer($$player,arguments$612);
            };$$player.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'visitor',$mt:'prm',$t:{t:Visitor,a:{Result:'Result',Args:'Args'}},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$t:'Args',$an:function(){return[];}}],$cont:Player,$tp:{Result:{},Args:{}},$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Player','$m','accept']};};
        })(Player.$$.prototype);
    }
    return Player;
}
exports.$init$Player=$init$Player;
$init$Player();

//ClassDefinition Table at model.ceylon (34:0-57:0)
function Table(master, name, characters, npcs, $$table){
    $init$Table();
    if ($$table===undefined)$$table=new Table.$$;
    if(characters===undefined){characters=$$$cl596.getEmpty();}
    if(npcs===undefined){npcs=$$$cl596.getEmpty();}
    
    //AttributeDeclaration master at model.ceylon (38:1-39:21)
    $$table.master$613_=master;
    $$table.$prop$getMaster={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Table,$an:function(){return[$$$cl596.doc($$$cl596.String("The master\'s player login.",26)),$$$cl596.shared()];},d:['nightprowler.common','Table','$at','master']};}};
    $$table.$prop$getMaster.get=function(){return master};
    
    //AttributeDeclaration name at model.ceylon (41:1-42:19)
    $$table.name$614_=name;
    $$table.$prop$getName.get=function(){return name};
    
    //AttributeDeclaration characters at model.ceylon (44:1-45:37)
    $$table.characters$615_=characters;
    $$table.$prop$getCharacters.get=function(){return characters};
    
    //AttributeDeclaration npcs at model.ceylon (47:1-48:43)
    $$table.npcs$616_=npcs;
    $$table.$prop$getNpcs={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Null},Element:{t:NotPlayedCharacter}}},$cont:Table,$an:function(){return[$$$cl596.doc($$$cl596.String("The non player characters for table.",36)),$$$cl596.shared(),$$$cl596.variable()];},d:['nightprowler.common','Table','$at','npcs']};}};
    $$table.$prop$getNpcs.get=function(){return npcs};
    
    //AttributeDeclaration string at model.ceylon (50:1-51:76)
    $$table.string$617_=$$$cl596.String("[Table] ",8).plus($$table.name).plus($$$cl596.String(", mastered by ",14)).plus($$table.master);
    $$table.$prop$getString.get=function(){return string};
    return $$table;
}
Table.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl596.Basic},satisfies:[],$an:function(){return[$$$cl596.doc($$$cl596.String("Represents a table, a group of Characters in a same game. A table is moderated by the master.",93)),$$$cl596.shared()];},d:['nightprowler.common','Table']};};
exports.Table=Table;
function $init$Table(){
    if (Table.$$===undefined){
        $$$cl596.initTypeProto(Table,'nightprowler.common::Table',$$$cl596.Basic);
        (function($$table){
            
            //AttributeDeclaration master at model.ceylon (38:1-39:21)
            $$$cl596.defineAttr($$table,'master',function(){return this.master$613_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Table,$an:function(){return[$$$cl596.doc($$$cl596.String("The master\'s player login.",26)),$$$cl596.shared()];},d:['nightprowler.common','Table','$at','master']};});
            
            //AttributeDeclaration name at model.ceylon (41:1-42:19)
            $$$cl596.defineAttr($$table,'name',function(){return this.name$614_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Table,$an:function(){return[$$$cl596.doc($$$cl596.String("The table name.",15)),$$$cl596.shared()];},d:['nightprowler.common','Table','$at','name']};});
            
            //AttributeDeclaration characters at model.ceylon (44:1-45:37)
            $$$cl596.defineAttr($$table,'characters',function(){return this.characters$615_;},function(characters$618){return this.characters$615_=characters$618;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Null},Element:{t:$$$cl596.String}}},$cont:Table,$an:function(){return[$$$cl596.doc($$$cl596.String("The player\'s characters played in the table.",44)),$$$cl596.shared(),$$$cl596.variable()];},d:['nightprowler.common','Table','$at','characters']};});
            
            //AttributeDeclaration npcs at model.ceylon (47:1-48:43)
            $$$cl596.defineAttr($$table,'npcs',function(){return this.npcs$616_;},function(npcs$619){return this.npcs$616_=npcs$619;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Null},Element:{t:NotPlayedCharacter}}},$cont:Table,$an:function(){return[$$$cl596.doc($$$cl596.String("The non player characters for table.",36)),$$$cl596.shared(),$$$cl596.variable()];},d:['nightprowler.common','Table','$at','npcs']};});
            
            //AttributeDeclaration string at model.ceylon (50:1-51:76)
            $$$cl596.defineAttr($$table,'string',function(){return this.string$617_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Table,$an:function(){return[$$$cl596.doc($$$cl596.String("Decription string.",18)),$$$cl596.shared(),$$$cl596.actual()];},d:['nightprowler.common','Table','$at','string']};});
            
            //MethodDefinition accept at model.ceylon (53:1-55:1)
            $$table.accept=function accept(visitor$620,arguments$621,$$$mptypes){
                var $$table=this;
                return visitor$620.visitTable($$table,arguments$621);
            };$$table.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'visitor',$mt:'prm',$t:{t:Visitor,a:{Result:'Result',Args:'Args'}},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$t:'Args',$an:function(){return[];}}],$cont:Table,$tp:{Result:{},Args:{}},$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Table','$m','accept']};};
        })(Table.$$.prototype);
    }
    return Table;
}
exports.$init$Table=$init$Table;
$init$Table();

//ClassDefinition NotPlayedCharacter at model.ceylon (59:0-69:0)
function NotPlayedCharacter(name, $$notPlayedCharacter){
    $init$NotPlayedCharacter();
    if ($$notPlayedCharacter===undefined)$$notPlayedCharacter=new NotPlayedCharacter.$$;
    
    //AttributeDeclaration name at model.ceylon (61:1-61:19)
    $$notPlayedCharacter.name$622_=name;
    $$notPlayedCharacter.$prop$getName.get=function(){return name};
    
    //AttributeDeclaration string at model.ceylon (63:1-64:46)
    $$notPlayedCharacter.string$623_=$$$cl596.String("[Npc] ",6).plus($$notPlayedCharacter.name);
    $$notPlayedCharacter.$prop$getString.get=function(){return string};
    return $$notPlayedCharacter;
}
NotPlayedCharacter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl596.Basic},satisfies:[],$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','NotPlayedCharacter']};};
exports.NotPlayedCharacter=NotPlayedCharacter;
function $init$NotPlayedCharacter(){
    if (NotPlayedCharacter.$$===undefined){
        $$$cl596.initTypeProto(NotPlayedCharacter,'nightprowler.common::NotPlayedCharacter',$$$cl596.Basic);
        (function($$notPlayedCharacter){
            
            //AttributeDeclaration name at model.ceylon (61:1-61:19)
            $$$cl596.defineAttr($$notPlayedCharacter,'name',function(){return this.name$622_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:NotPlayedCharacter,$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','NotPlayedCharacter','$at','name']};});
            
            //AttributeDeclaration string at model.ceylon (63:1-64:46)
            $$$cl596.defineAttr($$notPlayedCharacter,'string',function(){return this.string$623_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:NotPlayedCharacter,$an:function(){return[$$$cl596.doc($$$cl596.String("Decription string.",18)),$$$cl596.shared(),$$$cl596.actual()];},d:['nightprowler.common','NotPlayedCharacter','$at','string']};});
            
            //MethodDefinition accept at model.ceylon (66:1-68:1)
            $$notPlayedCharacter.accept=function accept(visitor$624,arguments$625,$$$mptypes){
                var $$notPlayedCharacter=this;
                return visitor$624.visitNotPlayedCharacter($$notPlayedCharacter,arguments$625);
            };$$notPlayedCharacter.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'visitor',$mt:'prm',$t:{t:Visitor,a:{Result:'Result',Args:'Args'}},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$t:'Args',$an:function(){return[];}}],$cont:NotPlayedCharacter,$tp:{Result:{},Args:{}},$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','NotPlayedCharacter','$m','accept']};};
        })(NotPlayedCharacter.$$.prototype);
    }
    return NotPlayedCharacter;
}
exports.$init$NotPlayedCharacter=$init$NotPlayedCharacter;
$init$NotPlayedCharacter();

//ClassDefinition Character at model.ceylon (71:0-103:0)
function Character(player, name, $$character){
    $init$Character();
    if ($$character===undefined)$$character=new Character.$$;
    
    //AttributeDeclaration player at model.ceylon (73:1-74:21)
    $$character.player$626_=player;
    $$character.$prop$getPlayer={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Character,$an:function(){return[$$$cl596.doc($$$cl596.String("The player\'s login.",19)),$$$cl596.shared()];},d:['nightprowler.common','Character','$at','player']};}};
    $$character.$prop$getPlayer.get=function(){return player};
    
    //AttributeDeclaration name at model.ceylon (76:1-76:19)
    $$character.name$627_=name;
    $$character.$prop$getName.get=function(){return name};
    
    //AttributeDeclaration string at model.ceylon (78:1-79:70)
    $$character.string$628_=$$$cl596.String("[Character] ",12).plus($$character.name).plus($$$cl596.String(" to ",4)).plus($$character.player);
    $$character.$prop$getString.get=function(){return string};
    
    //AttributeDeclaration modifications at model.ceylon (81:1-81:38)
    $$character.modifications$629_=$$$cl596.getEmpty();
    $$character.$prop$getModifications$629={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Null},Element:{t:Change}}},$cont:Character,$an:function(){return[$$$cl596.variable()];},d:['nightprowler.common','Character','$at','modifications']};}};
    $$character.$prop$getModifications$629.get=function(){return modifications$629};
    return $$character;
}
Character.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl596.Basic},satisfies:[],$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Character']};};
exports.Character=Character;
function $init$Character(){
    if (Character.$$===undefined){
        $$$cl596.initTypeProto(Character,'nightprowler.common::Character',$$$cl596.Basic);
        (function($$character){
            
            //AttributeDeclaration player at model.ceylon (73:1-74:21)
            $$$cl596.defineAttr($$character,'player',function(){return this.player$626_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Character,$an:function(){return[$$$cl596.doc($$$cl596.String("The player\'s login.",19)),$$$cl596.shared()];},d:['nightprowler.common','Character','$at','player']};});
            
            //AttributeDeclaration name at model.ceylon (76:1-76:19)
            $$$cl596.defineAttr($$character,'name',function(){return this.name$627_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Character,$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Character','$at','name']};});
            
            //AttributeDeclaration string at model.ceylon (78:1-79:70)
            $$$cl596.defineAttr($$character,'string',function(){return this.string$628_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Character,$an:function(){return[$$$cl596.doc($$$cl596.String("Decription string.",18)),$$$cl596.shared(),$$$cl596.actual()];},d:['nightprowler.common','Character','$at','string']};});
            
            //AttributeDeclaration modifications at model.ceylon (81:1-81:38)
            $$$cl596.defineAttr($$character,'modifications$629',function(){return this.modifications$629_;},function(modifications$630){return this.modifications$629_=modifications$630;},function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Null},Element:{t:Change}}},$cont:Character,$an:function(){return[$$$cl596.variable()];},d:['nightprowler.common','Character','$at','modifications']};});
            
            //MethodDefinition apply at model.ceylon (83:1-85:1)
            $$character.$apply=function $apply(group$631){
                var $$character=this;
                $$character.modifications$629=$$character.modifications$629.chain(group$631,{Other:{t:Change},OtherAbsent:{t:$$$cl596.Nothing}});
            };$$character.$apply.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Anything},$ps:[{$nm:'group',$mt:'prm',$t:{t:$$$cl596.Iterable,a:{Absent:{t:$$$cl596.Nothing},Element:{t:Change}}},$an:function(){return[];}}],$cont:Character,$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Character','$m','apply']};};
            
            //MethodDefinition getInteger at model.ceylon (87:1-98:1)
            $$character.getInteger=function getInteger(attribute$632){
                var $$character=this;
                
                //AttributeDeclaration result at model.ceylon (89:2-89:29)
                var result$633=(0);
                function setResult$633(result$634){return result$633=result$634;};
                //'for' statement at model.ceylon (90:2-94:2)
                var it$635 = $$character.modifications$629.iterator();
                var modification$636;while ((modification$636=it$635.next())!==$$$cl596.getFinished()){
                    if(attribute$632.equals(modification$636.attribute)){}
                }
                return result$633;
            };$$character.getInteger.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Integer},$ps:[{$nm:'attribute',$mt:'prm',$t:{t:$$$cl596.String},$an:function(){return[];}}],$cont:Character,$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Character','$m','getInteger']};};
            
            //MethodDefinition accept at model.ceylon (100:1-102:1)
            $$character.accept=function accept(visitor$637,arguments$638,$$$mptypes){
                var $$character=this;
                return visitor$637.visitCharacter($$character,arguments$638);
            };$$character.accept.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:'Result',$ps:[{$nm:'visitor',$mt:'prm',$t:{t:Visitor,a:{Result:'Result',Args:'Args'}},$an:function(){return[];}},{$nm:'arguments',$mt:'prm',$t:'Args',$an:function(){return[];}}],$cont:Character,$tp:{Result:{},Args:{}},$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Character','$m','accept']};};
        })(Character.$$.prototype);
    }
    return Character;
}
exports.$init$Character=$init$Character;
$init$Character();

//InterfaceDefinition Change at model.ceylon (106:0-108:0)
function Change($$change){
}
Change.$$metamodel$$=function(){return{mod:$$METAMODEL$$,satisfies:[],$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Change']};};
exports.Change=Change;
function $init$Change(){
    if (Change.$$===undefined){
        $$$cl596.initTypeProto(Change,'nightprowler.common::Change');
        (function($$change){
            
            //AttributeDeclaration attribute at model.ceylon (107:1-107:31)
            $$change.$prop$getAttribute={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Change,$an:function(){return[$$$cl596.shared(),$$$cl596.formal()];},d:['nightprowler.common','Change','$at','attribute']};}};
        })(Change.$$.prototype);
    }
    return Change;
}
exports.$init$Change=$init$Change;
$init$Change();

//ClassDefinition Modificator at model.ceylon (110:0-114:0)
function Modificator(attribute, modify, $$modificator){
    $init$Modificator();
    if ($$modificator===undefined)$$modificator=new Modificator.$$;
    Change($$modificator);
    
    //AttributeDeclaration attribute at model.ceylon (111:1-111:31)
    $$modificator.attribute$639_=attribute;
    $$modificator.$prop$getAttribute.get=function(){return attribute};
    $$modificator.modify=modify;
    return $$modificator;
}
Modificator.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl596.Basic},satisfies:[{t:Change}],$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Modificator']};};
exports.Modificator=Modificator;
function $init$Modificator(){
    if (Modificator.$$===undefined){
        $$$cl596.initTypeProto(Modificator,'nightprowler.common::Modificator',$$$cl596.Basic,$init$Change());
        (function($$modificator){
            
            //AttributeDeclaration attribute at model.ceylon (111:1-111:31)
            $$$cl596.defineAttr($$modificator,'attribute',function(){return this.attribute$639_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Modificator,$an:function(){return[$$$cl596.shared(),$$$cl596.actual()];},d:['nightprowler.common','Modificator','$at','attribute']};});
        })(Modificator.$$.prototype);
    }
    return Modificator;
}
exports.$init$Modificator=$init$Modificator;
$init$Modificator();

//ClassDefinition Setter at model.ceylon (116:0-119:0)
function Setter(attribute, toSet, $$targs$$,$$setter){
    $init$Setter();
    if ($$setter===undefined)$$setter=new Setter.$$;
    $$$cl596.set_type_args($$setter,$$targs$$);
    Change($$setter);
    
    //AttributeDeclaration attribute at model.ceylon (117:1-117:31)
    $$setter.attribute$640_=attribute;
    $$setter.$prop$getAttribute.get=function(){return attribute};
    
    //AttributeDeclaration toSet at model.ceylon (118:1-118:18)
    $$setter.toSet$641_=toSet;
    $$setter.$prop$getToSet={$$metamodel$$:function(){return{mod:$$METAMODEL$$,$t:'Type',$cont:Setter,$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Setter','$at','toSet']};}};
    $$setter.$prop$getToSet.get=function(){return toSet};
    return $$setter;
}
Setter.$$metamodel$$=function(){return{mod:$$METAMODEL$$,'super':{t:$$$cl596.Basic},$tp:{Type:{}},satisfies:[{t:Change}],$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Setter']};};
exports.Setter=Setter;
function $init$Setter(){
    if (Setter.$$===undefined){
        $$$cl596.initTypeProto(Setter,'nightprowler.common::Setter',$$$cl596.Basic,$init$Change());
        (function($$setter){
            
            //AttributeDeclaration attribute at model.ceylon (117:1-117:31)
            $$$cl596.defineAttr($$setter,'attribute',function(){return this.attribute$640_;},undefined,function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$cont:Setter,$an:function(){return[$$$cl596.shared(),$$$cl596.actual()];},d:['nightprowler.common','Setter','$at','attribute']};});
            
            //AttributeDeclaration toSet at model.ceylon (118:1-118:18)
            $$$cl596.defineAttr($$setter,'toSet',function(){return this.toSet$641_;},undefined,function(){return{mod:$$METAMODEL$$,$t:'Type',$cont:Setter,$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','Setter','$at','toSet']};});
        })(Setter.$$.prototype);
    }
    return Setter;
}
exports.$init$Setter=$init$Setter;
$init$Setter();

//MethodDefinition add at model.ceylon (121:0-123:0)
function add(delta$642){
    return function(current$643){
        return current$643.plus(delta$642);
    }
}
exports.add=add;
add.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.Integer},$ps:[{$nm:'delta',$mt:'prm',$t:{t:$$$cl596.Integer},$an:function(){return[];}}],$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','add']};};

//InterfaceDefinition Visitor at model.ceylon (125:0-131:0)
function Visitor($$targs$$,$$visitor){
    $$$cl596.set_type_args($$visitor,$$targs$$);
}
Visitor.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$tp:{Result:{'var':'out'},Args:{'var':'in'}},satisfies:[],$an:function(){return[$$$cl596.doc($$$cl596.String("Model visitor interface.",24)),$$$cl596.shared()];},d:['nightprowler.common','Visitor']};};
exports.Visitor=Visitor;
function $init$Visitor(){
    if (Visitor.$$===undefined){
        $$$cl596.initTypeProto(Visitor,'nightprowler.common::Visitor');
        (function($$visitor){
        })(Visitor.$$.prototype);
    }
    return Visitor;
}
exports.$init$Visitor=$init$Visitor;
$init$Visitor();

//MethodDefinition toJsonString at model.ceylon (133:0-135:0)
function toJsonString(model$644){
    return $$$cl596.String("JSON String",11);
}
exports.toJsonString=toJsonString;
toJsonString.$$metamodel$$=function(){return{mod:$$METAMODEL$$,$t:{t:$$$cl596.String},$ps:[{$nm:'model',$mt:'prm',$t:{t:{ t:'u', l:[{t:$$$nc645.NotPlayedCharacter},{t:$$$nc645.Character},{t:$$$nc645.Table},{t:$$$nc645.Player}]}},$an:function(){return[];}}],$an:function(){return[$$$cl596.shared()];},d:['nightprowler.common','toJsonString']};};
});
}(typeof define==='function' && define.amd ? define : function (factory) {
if (typeof exports!=='undefined') { factory(require, exports, module);
} else { throw 'no module loader'; }
}));
