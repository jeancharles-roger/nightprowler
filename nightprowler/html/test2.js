
require.config({baseUrl:'../modules'});

var commonModule;

function selectTab(event) {
	var target = event.target;
	var tab = target.parentNode.parentNode.parentNode;

	// unselects old header (if any)
	var old = tab.querySelector(".selected");
	if (old) {
		old.classList.remove("selected");
	}

	// selects clicked header
	target.classList.add("selected");

	// adds pending spinner
	var content = tab.querySelector(".content");
	content.innerHTML = "<p>Pending.</p>";

	// gets tab contents
	var url = target.id;
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);

	xhr.onload = function(e) {
  		if (this.status == 200) {
  			model = commonModule.fromJsonString(e.currentTarget.response);
  			content.innerHTML = model.string;
  			
  		} else {
  			content.innerHTML = "<p>Cannot retreive '"+ url +"' ("+ this.status +").";
  		}
  	};
  	xhr.send();
}


function prepareTabs() {
	var	tabs = document.querySelectorAll(".tab .page");
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", selectTab, false); 			
	}
}


function load() {
	// loads modules and prepare page when ready
	require(['nightprowler/common/1.0.0/nightprowler.common-1.0.0'], function(module) {
		// store common modul
		commonModule = module;
		// prepare tabs
		prepareTabs();
	});
	
} 