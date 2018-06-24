//General functions, soon to be methods?

function LeaveLandingPage(){
	startDivsContainer.setAttribute('style', 'display:none;');
	graphFrame.setAttribute('style', 'display: none');
	fromBlogToProject.setAttribute('style', 'display: none');
	toOverview.setAttribute('style', 'display: none');
	overview.setAttribute('style', 'display:block;');
}

function TestEmail(email){
    var reg = new RegExp('^[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|\.|-]{1}[a-z0-9]+)*[\.]{1}[a-z]{2,6}$', 'i');
    if(reg.test(email)){return(true);}
    else{return(false);}
}

function DeleteActiveDescription(){
	var activeDescriptionDivs = document.getElementsByClassName('descriptionDiv');
	for (var i = 0, len = activeDescriptionDivs.length; i<len; i++){
		activeDescriptionDivs[i].parentNode.removeChild(activeDescriptionDivs[i]);
	}
}

function SelectBar(bar, i, iteration, x, y){
	addButtonFrame.setAttribute('style', 'display:none;');
	activePreview.setAttribute('style', 'display:none;');
	elementForm.setAttribute('style', 'display:none;');
	compForm.setAttribute('style', 'display:none;');
	selectedPlayerNumber = 0;
	indexOfSelectedElement = i;
	//ici il faudrait ne pas refaire tout le graph, mais plutôt changer la classe de la bar sélectionnée
	iteration.PrintElements(null, i, true);
	iteration.PrintCompetitors();

	if(iteration.name != "How Nintendo's wii took over the console market"){
		var controlPopUpX = x - 145;
		controlPopUpDiv.setAttribute('style', 'margin-left:' + controlPopUpX + 'px');
		toElementFormButton.setAttribute('style', 'display:inline-block;');
		controlPopUpDiv.style.visibility = 'visible';
	}
}

function InsertMailIntoList(mail){
	var li = document.createElement('li'),
		sp = document.createElement('span'),
		ban = document.createElement('i');

	ban.className = "fa fa-ban";
	ban.ariaHidden = true;

	sp.appendChild(document.createTextNode(mail));
	li.appendChild(sp);
	li.appendChild(ban);
	memberList.appendChild(li);

	ban.addEventListener('click', function(){
		var participantEmail = this.previousElementSibling.innerHTML,
			JSONtoSend = JSON.stringify([participantEmail, activeProject.id]),
			xhr = new XMLHttpRequest(),
			app_url = location.protocol + '//' + location.host + '/deleteParticipant.php';
		xhr.open('POST', app_url);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.addEventListener('readystatechange', function(){
			if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
				console.log(xhr.responseText);
				var liToDelete = ban.parentNode;
				liToDelete.parentNode.removeChild(liToDelete);
				activeProject.participants.splice(activeProject.participants.indexOf(participantEmail), 1);
			}
		});
		xhr.send(JSONtoSend);
	});
}

function SwitchActivePreview(newPreview){
	activePreview.setAttribute('style', 'display:none;');
	activePreview = document.getElementById(newPreview + 'Preview');
	activePreview.setAttribute('style', 'display:inline-block;');
	elementForm.setAttribute('style', 'display:none;');
	compForm.setAttribute('style', 'display:none;');
}

function GetIndex(list, name){
	for (var i = 0, l = list.length; i < l; i++) {
		if (name == list[i].name) {
			return i;
		}
	}
	return -1;
}

function DeleteChildren(node){
	while (node.firstChild) {
		node.removeChild(node.firstChild);
	}
}

function DisplayNone(array){
	for (i = 0; i < array.length ; i++ ) {
		array[i].setAttribute('style', 'display: none;');
	}
}

function Majus(someString){
	var rslt = someString.substr(0,1).toUpperCase() + someString.substr(1, someString.length - 1);
	return rslt;
}

function PrintRangeEquiv(category, forceRange, rangeEquiv){
	//surement possible de remplacer en utilisant call
	var forceInt = parseInt(forceRange.value),
		elementConstructor = eval(Majus(category) + 'Element'),
		newElement = new elementConstructor("temp", forceInt, "");
	rangeEquiv.innerHTML = newElement.returnImportance(forceInt);
}

//DOM elements

var overview = document.getElementById('overview'),
	teamForm = document.getElementById('teamForm'),
	teamValid = document.getElementById('teamValid'),
	settings = document.getElementById('settings'),
	changePassword = document.getElementById('changePassword'),
	changePasswordForm = document.getElementById('changePasswordForm'),
	changePasswordValid = document.getElementById('changePasswordValid'),
	forgottenPassword = document.getElementById('forgottenPassword'),
	forgottenPasswordForm = document.getElementById('forgottenPasswordForm'),
	forgottenPasswordValid = document.getElementById('forgottenPasswordValid');

var addFrameInfo = document.getElementById('addFrameInfo');

var projectsDiv = document.getElementById('projectsDiv');

var conceptExplanations = document.getElementsByClassName('conceptExplanations'),
	conceptExplanationsArrow = document.getElementsByClassName('conceptExplanationsArrow');

var barG = document.getElementById("barG"),
	graph = document.getElementById("graph"),
	controlPopUpDiv = document.getElementById("controlPopUpDiv"),
	toElementFormButton = document.getElementById("toElementFormButton");

var projectForm = document.getElementById("projectForm");

var competitorNames = document.getElementById('competitorNames');

var withdrawButton = document.getElementById("withdrawButton"),
	increaseForceButton = document.getElementById("increaseForceButton"),
	decreaseForceButton = document.getElementById("decreaseForceButton");

var compForm = document.getElementById('compForm'),
	compTitle = document.getElementById('compTitle'),
	compValid = document.getElementById('compValid');

var addTrigger = document.getElementById("addTrigger");

var projectValid = document.getElementById('projectValid'),
	projectEditValid = document.getElementById('projectEditValid');

var activeProject = '';

var home = document.getElementById('home');

var addButtonFrame = document.getElementById('addButtonFrame');

var forceRange = document.getElementById('forceRange'),
	rangeEquiv = document.getElementById("rangeEquiv"),
	forceEditRange = document.getElementById('forceEditRange'),
	rangeEditEquiv = document.getElementById("rangeEditEquiv");

var barClick = document.getElementById('barClick'),
	compClick = document.getElementById('compClick');

var addButton = document.getElementsByClassName('addButton'),
	direct = document.getElementById('direct'),
	elementForm = document.getElementById('elementForm'),
	elementEditForm = document.getElementById('elementEditForm'),
	elementValid = document.getElementById('elementValid'),
	elementEditValid = document.getElementById('elementEditValid'),
	otherElement = document.getElementById('otherElement'),
	editQuestions = document.getElementsByClassName('editQuestions');

var activePreview = document.getElementById('customersPreview');

var headTitle = document.getElementById('headTitle');

var bkgd = document.getElementsByClassName('bkgd');

var pivotForm = document.getElementById('pivotForm'),
	pivotValid = document.getElementById('pivotValid'),
	pivotNav = document.getElementById('pivotNav'),
	pivotBasis = document.getElementById('pivotBasis');

var memberList = document.getElementById('memberList');

var circleRadioDetail = document.getElementById('circleRadioDetail');

var landingLogin = document.getElementById('landingLogin'),
	landingSignup = document.getElementById('landingSignup');

var loginForm = document.getElementById('loginForm'),
	loginValid = document.getElementById('loginValid'),
	signupForm = document.getElementById('signupForm'),
	signupValid = document.getElementById('signupValid');

var caseStudy = document.getElementById('caseStudy'),
	caseStudy2 = document.getElementById('caseStudy2');

var fromBlogToProject = document.getElementById('fromBlogToProject');

// GRAPH AXIS VARIABLES
var pivotModel = "";

var evalMode = false,
	addOtherElement = false;

var canvasBottomY = 505,
	rectWidth = 86,
	circleR = 8.5;

var categoryGroupsSpacing = 30,
	nbUsedCategories = 0,
	categoryCenteringOffset = 0;

var	forceHeightRatio = 43;


// Functional variables
//main iteration ne semble pas indispensable, une sorte de doublon avec displayed player en fait

var displayedIteration = "",
	activeProject = "";

var forces = [];

var userEmail = "",
	selectedPlayerNumber = 0,
	indexOfSelectedElement = 0,
	categories = ["customers", "products", "resources", "monetization", "price", "distribution", "communication", "production"],
	categoryOfNewElement = categories[0];

//Objects

var projects = [];
function Project(id, name, description, creatorStatus, participants) {
	this.id = id;
	this.name = name;
	this.description = description;
	this.creatorStatus = creatorStatus;
	this.participants = participants;
	this.iterations = [];

	projects.push(this);

	this.tasks = [];
	var taskTitles = ['Define customer segments', 'Build an offer', 'Evaluate competitors'];
	for (var i = 0, len = taskTitles.length; i<len; i++){
		//instanciation of a task saved in an array
		var newTask = new Task(i, taskTitles[i].innerHTML);
		this.tasks.push(newTask);
	}

	//il serait mieux d'avoir des taches in progress que des current, répéré via les testTasks ou autrement

	//unlock() is called by task.prototype.complete() and is a void method of task.prototype that is here supercharged
	this.tasks[0].reward = function(){
		var blockB = ['products', 'distribution', 'price', 'monetization', 'communication', 'resources', 'production'];
		for (var i = 0, len = blockB.length; i < len; i++){
			document.getElementById(blockB[i]).setAttribute('class', 'addButton greenB');
		}
	};
	this.tasks[1].reward = function(){
		direct.setAttribute('class', 'compAddButton greenB');
	};
	this.tasks[2].reward = function(){

	};
}

Project.prototype.testTasks = function(){
	var iter = this.iterations[0],
		nbCustomersSegments = 0;

	for (var i = 0, len = iter.elements.length; i<len; i++){
		if(iter.elements[i].category === "customers"){
			nbCustomersSegments++;
		}
	}
	if (nbCustomersSegments > 0){
		this.tasks[0].complete();
	}

	if(iter.elements.length > 1){
		this.tasks[1].complete();
	}

	if(iter.competitors.length > 0){
		this.tasks[2].complete();
	}
};

Project.prototype.giveRewards = function(){
	for (var i = 0, len = this.tasks.length; i<len; i++){
		if (this.tasks[i].completed){
			this.tasks[i].reward();
		}
	}
}

Project.prototype.createOverview = function(){

	//creates a page with an overview for each project, with a distinction between own projects and invitations

	var projectSection = document.createElement('div');
	projectSection.className = 'projectSection';

	var pjtTitle = document.createElement('h1');
	pjtTitle.className = 'projectTitle projectElementShape';

	var titleSpan = document.createElement('span'),
		name = this.name;
	titleSpan.innerHTML = name;
	titleSpan.id = 'project' + this.id;

	pjtTitle.appendChild(titleSpan);
	projectSection.appendChild(pjtTitle);

	var description = document.createElement('div');
	description.className = "description projectElementShape inblock";
	description.innerHTML = this.description;
	projectSection.appendChild(description);

	var controls = document.createElement('div');
	controls.className = 'controlDiv projectElementShape';

	var edit = document.createElement('i');
	edit.className = 'fa fa-pencil-square-o fa-2x grey';
	edit.ariaHidden = true;

	edit.addEventListener('click', function(){
		projectForm.setAttribute('style', 'display:none;');
		projectEditForm.setAttribute('style', 'display:block;');
		activeProject = projects[GetIndex(projects, name)];
		projectEditForm.elements.projectEditTitle.value = activeProject.name;
		projectEditForm.elements.projectEditDescription.value = activeProject.description;
	});
	controls.appendChild(edit);


	if(this.creatorStatus){
		var teamTrigger = document.createElement('i');
		teamTrigger.className = "fa fa-users fa-2x grey";
		teamTrigger.setAttribute('ariaHidden' ,'true');
		controls.appendChild(teamTrigger);

		teamTrigger.addEventListener('click', function(){
			DeleteChildren(memberList);
			projectForm.setAttribute('style', 'display:none;');
			activeProject = projects[GetIndex(projects, name)];
			for (var i = 0, len = activeProject.participants.length; i<len; i++){
				InsertMailIntoList(activeProject.participants[i]);
			}
			teamForm.elements.memberName.value = "";
			teamForm.elements.memberEmail.value = "";
			teamForm.setAttribute('style', 'display:block;');
		});

		var deleteProject = document.createElement('i');
		deleteProject.className = "fa fa-trash fa-2x grey";
		deleteProject.setAttribute('ariaHidden' ,'true');
		controls.appendChild(deleteProject);

		deleteProject.addEventListener('click', function(){
			var activeProject = projects[GetIndex(projects, name)];
				withdraw = confirm("Do you really want to delete that project "+ activeProject.id +"?");
			if (!withdraw) {
				return;
			} else {
				var JSONtoSend = JSON.stringify([activeProject.id]),
					xhr = new XMLHttpRequest(),
					app_url = location.protocol + '//' + location.host + '/projectDelete.php';
				xhr.open('POST', app_url);
				xhr.setRequestHeader("Content-type", "application/json");
				xhr.addEventListener('readystatechange', function(){
					if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {
						alert('Project deleted!')
					}
				});
				xhr.send(JSONtoSend);
			}
		});

		projectSection.appendChild(controls)
	}

	projectsDiv.appendChild(projectSection);

	//to open a project:
	pjtTitle.addEventListener('click', function(){
		activeProject = projects[GetIndex(projects, name)];
		activeProject.openGraph();
	});
}

Project.prototype.openGraph = function(){
	//turning the page
	while(pivotNav.firstChild != null){
		pivotNav.removeChild(pivotNav.firstChild);
	}
	overview.setAttribute('style', 'display:none;');
	graphFrame.setAttribute('style', 'display:block;');
	toOverview.setAttribute('style', 'display:block;');
	addTrigger.setAttribute('style', 'display:block;');

	//Creating a tab per iteration
	for (var i = 0, len = this.iterations.length; i<len; i++){
		var iter = this.iterations[i];
		//In the future there will be several examples so the condition will have to generalized
		iter.createTab();

		//l'active tab doit être la mainIteration
		if (iter.rank == 0){
			//la mainIteration sert de référence au testTasks
			displayedIteration = iter;
			iter.orderElements();
			iter.PrintElements();
			iter.PrintCompetitors();
			//du coup progress devrait être une méthode de mainIteration
			this.testTasks();
			//give rewards is necessary because testTask doesn't give reward for tasks that are already completed
			this.giveRewards();
		}
	}
	var activeTab = document.getElementsByClassName('pivotTab active');
	if(activeTab.length){
		activeTab[0].className = 'pivotTab inactive';
		document.getElementById(displayedIteration.name).className = 'pivotTab active';
		if(displayedIteration.creator !== userEmail){
			graphHeader.setAttribute('style', 'display:none;');
		}else{
			graphHeader.setAttribute('style', 'display:flex;');
		}
	}
}

//pas encore d'héritage des méthodes depuis un prototype
function Task(nb, name){
	this.nb = nb;
	this.name = name;
	this.test = false;
	this.completed = false;
}

Task.prototype.isCurrentTask = function(){
	if(this.name == activeProject.currentTask.name){
		return true;
	} else{
		return false;
	}
};

Task.prototype.complete = function(){


	this.completed = true;

	this.reward();
};

Task.prototype.reward = function(){return;};

var compColors = ['#d69936', '#5e3fcc', 'fireBrick', 'blue', 'grey'];
function Player(name, number, elements) {
	this.name = name;
	this.number = number;
	if (number == -1 || number > 4) {this.color = 'grey'}
	else {this.color = compColors[number];}
	this.elements = elements;
}

function Iteration(name, number, elements, rank, creator){
	Player.call(this, name, number, elements);
	this.rank = rank;
	this.value = "";
	this.creator = creator;
	this.competitors = [];
	this.categoriesCount = [0, 0, 0, 0, 0, 0, 0, 0];
	this.adjustX = 0;
	this.mRectWidth = 0;
	this.spaceBetweenRectCenters = 0;
}

Iteration.prototype.validElement = function(){
	var newName = Majus(elementForm.elements.elementTitle.value),
		newForce = parseInt(forceRange.value),
		comps = this.competitors,
		iter = this;

	while(newName[newName.length-1] === " "){
		newName = newName.substr(0, newName.length-2);
	}

	//faire des modules qui contrôlent!!
	if(newName.length > 35) {alert ("Sorry, we limit the name to 35 characters to ensure proper readability. Please use the description section for necessary details."); return;}
	if(newName === "") {alert ("Hum... Your element has no name?"); return;}

	var categoryIndex = categories.indexOf(categoryOfNewElement);
	if (GetIndex(this.elements, newName) != -1) {alert ("Oupsi... It seems like you have already added that element!"); return;}
	var JSONtoSend = JSON.stringify([categoryIndex, newName, newForce, "", this.name, activeProject.id]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/elementInsert.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {
			displayedIteration.addElement(categoryOfNewElement, newName, newForce, "");
			displayedIteration.orderElements();
			indexOfSelectedElement = GetIndex(displayedIteration.elements, newName);
			//leave blank space where the new element will be placed
			displayedIteration.PrintElements(indexOfSelectedElement);
			displayedIteration.PrintCompetitors();
			controlPopUpDiv.style.visibility = 'hidden';
			if (displayedIteration.elements.length < 4){
				barClick.setAttribute('style', 'display: block;');
				setTimeout(function(){barClick.setAttribute('style', 'display: none;');}, 3000)
			}

			//the new element fills the blank space and is highlight
			setTimeout(function(){displayedIteration.PrintElements(); displayedIteration.PrintCompetitors();}, 400);
			activeProject.testTasks();
			elementForm.elements.elementTitle.value = "";
			forceRange.value = 1;
			if(!addOtherElement){
				elementForm.setAttribute('style', 'display:none;');
				addButtonFrame.setAttribute('style', 'display:none');
			}
		}
	});
	xhr.send(JSONtoSend);
}

Iteration.prototype.editElement = function(){
	var newName = Majus(elementEditForm.elements.elementEditTitle.value),
		newDescription = Majus(elementEditForm.elements.elementEditDescription.value),
		newForce = parseInt(forceEditRange.value),
		comps = this.competitors,
		iter = this;

	while(newName[newName.length-1] === " "){
		newName = newName.substr(0, newName.length-2);
	}

	//faire des modules qui contrôlent!!
	if(newName.length > 35) {alert ("Sorry, we limit the name to 35 characters to ensure proper readability. Please use the description section for necessary details."); return;}
	if(newName === "") {alert ("Hum... Your element has no name?"); return;}
	if(newDescription.length > 400) {alert ("Sorry, we limit the description to 400 characters. Please be more concise."); return;}

	elmt = this.elements[indexOfSelectedElement];

	if (newName === elmt.name && newDescription === elmt.description && newForce === elmt.force) {
		elementEditForm.setAttribute('style', 'display:none;');
		return;
	}
	for (var i = 0, len = this.elements.length; i<len; i++){
		if(this.elements[i].name === newName && i !== indexOfSelectedElement){
			alert ("Oupsi... It seems like this name is already taken by another element.");
			return;
		}
	}

	var JSONtoSend = JSON.stringify([elmt.name, newName, newForce, newDescription, this.name, this.rank, activeProject.id]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/updateElement.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {
			elmt.name = newName;
			elmt.description = newDescription;
			elmt.force = newForce;
			for (var j = 0, cL = comps.length; j < cL; j++) {
				comps[j].elements[indexOfSelectedElement].name = newName;
			}
			iter.PrintElements(null, indexOfSelectedElement, true);
			iter.PrintCompetitors();
			elementEditForm.setAttribute('style', 'display: none;');
		}
	});
	xhr.send(JSONtoSend);
}

//Competitors elements are not created through this method, and they don't have categories...
Iteration.prototype.addElement = function(category, name, force, description){
	var elementConstructor = eval(Majus(category) + 'Element'),
		newElement = new elementConstructor(name, parseInt(force), description),
		competitorElement = new Element(name, 1);
	this.elements.push(newElement);
	for (var i = 0, len = this.competitors.length; i < len; i++) {
		this.competitors[i].elements.push(competitorElement);
	}
	this.updateCategories();
	selectedPlayerNumber = 0;
}

Iteration.prototype.validCompetitor = function(){
	activePreview.setAttribute('style', 'display:none;');
	controlPopUpDiv.style.visibility = 'hidden';
	compForm.setAttribute('style', 'display:none;');

	var name = compTitle.value;
	if(name.length === 0){alert("Oups, you didn't give a name to your competitor..."); return;}
	for (var h = 0, lgth = this.competitors.length; h < lgth; h ++) {
		if (name == this.competitors[h].name) {
			alert ("Wait... Didn't you already added that one?");
			return;
		}
	}
	if(name.length > 30){alert("Arff... this name is too long. Please try to make it shorter."); return;}

	//un moyen d'eviter une variable globale c'est de passer le paramètre à chaque fois
	evalMode = true;
	this.PrintElements();
	var group = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
		categoryOffset = 0;
	for (var i = 0, len = this.elements.length; i < len; i++) {
		var	circleX = canvasCenterX - this.adjustX + i * this.spaceBetweenRectCenters;
		for (var frc = 1; frc < 6; frc++){
			var cX =  circleX + categoryOffset + categoryCenteringOffset,
				circleY = canvasBottomY - frc * forceHeightRatio,
				circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
			circle.setAttributeNS(null, 'id', "circleRadio" + frc + String(i));
			circle.setAttributeNS(null, 'class', 'circleRadio');
			circle.setAttributeNS(null, 'cx', cX);
			circle.setAttributeNS(null, 'cy', circleY);
			circle.setAttributeNS(null, 'r', circleR + 6);
			circle.setAttributeNS(null, 'fill', 'white');
			circle.setAttributeNS(null, 'stroke', compColors[this.competitors.length]);

			(function(i, cX, circleY, frc){
				circle.addEventListener('mouseover', function(){
					circleRadioDetail.innerHTML = displayedIteration.elements[i].returnImportance(frc);
					//on pourrait utiliser ::afterpour éviter le calcul de position et les compensations aléatoires...
					circleRadioDetail.setAttribute('style', 'display:block;');
					circleRadioDetail.style.top = 50 + circleY + 'px';
					circleRadioDetail.style.left = 50 + cX + 'px';
				});
				circle.addEventListener('mouseout', function(){
					circleRadioDetail.setAttribute('style', 'display:none;');
				});
				circle.addEventListener('click', function(){
					//if there is a modification the formerly selected circle is reset to white
					if (forces[i] != "null"){
						document.getElementById('circleRadio' + forces[i] + i).setAttributeNS(null, 'fill', 'white');
					}
					//the new force is pushed in the global array "forces"
					this.setAttributeNS(null, 'fill', compColors[displayedIteration.competitors.length]);
					forces[i] = frc;
					//if every element is valued, the valid button is displayed
					if (forces.indexOf("null") === -1) {
						displayedIteration.addCompetitor(compTitle.value, "", forces, true);
						var JSONtoSend = JSON.stringify([displayedIteration.competitors[displayedIteration.competitors.length-1], displayedIteration.rank, activeProject.id]),
							xhr = new XMLHttpRequest(),
							app_url = location.protocol + '//' + location.host + '/insertCompetitor.php';
						xhr.open('POST', app_url);
						xhr.setRequestHeader("Content-type", "application/json");
						xhr.addEventListener('readystatechange', function(){
							if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
								evalMode = false;
								selectedPlayerNumber = displayedIteration.competitors.length;
								var competitorNumber = selectedPlayerNumber-1;
								displayedIteration.PrintElements();
								displayedIteration.PrintCompetitors(competitorNumber);
								addTrigger.setAttribute('style', 'display:block;');
								circleRadioDetail.setAttribute('style', 'display:none;');
								activeProject.testTasks();
								compClick.setAttribute('style', 'display:block;');
								setTimeout(function(){compClick.setAttribute('style', 'display:none;');},9000);
								addButtonFrame.setAttribute('style', 'display:none;');
							}
						});
						xhr.send(JSONtoSend);
					}
				});
			})(i, cX, circleY, frc);

			group.appendChild(circle);
		}
		if (i < this.elements.length-1 && this.elements[i].category != this.elements[i+1].category) {
			categoryOffset += categoryGroupsSpacing;
		}
	}
	barG.appendChild(group);
	forces = [];
	for (var i = 0, len = this.elements.length; i < len; i++){
		forces.push("null");
	}
	addTrigger.setAttribute('style', 'display:none;');
	addButtonFrame.setAttribute('style', 'display:none;');
	circleRadioDetail.innerHTML = "";
	circleRadioDetail.setAttribute('style', 'display:block;');
}

Iteration.prototype.addCompetitor = function(name, description, forces) {
	var elements = [];
	for (var i = 0, len = this.elements.length; i < len; i++) {
		var elmt = new Element(this.elements[i].name, forces[i]);
		elements.push(elmt);
	}
	competitor = new Competitor(name, description, this.competitors.length, elements);
	this.competitors.push(competitor);
}

Iteration.prototype.PrintElements = function(indexOfMovingElement, indexOfElementToHighlight, grey){

	//if defined, the moving element is not shown directly but after a short instant
	//when active's value is false, the whole graph appears in grey so competitors can be highlighted
	//indexOfElementToHighlight is used to put the selected element in a special color

	this.updateCategories();

	DeleteActiveDescription();

	var nbElmts = this.elements.length,
		group = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
		categoryOffset = 0;

	//the rectWidth is reduced when the number of elements is high. It impacts spaceBetweenRectCenters
	if (nbElmts > 9) {
		this.mRectWidth = rectWidth * 9 / nbElmts;
	} else {this.mRectWidth = rectWidth;}
	this.spaceBetweenRectCenters = this.mRectWidth * 1.17;
	//adjustX corrects the centering for the existence of space between the bars
	this.adjustX = (nbElmts - 1) * this.spaceBetweenRectCenters / 2;
	canvasCenterX = window.innerWidth/2;
	this.rectStartingX = canvasCenterX - this.mRectWidth * 0.5 - this.adjustX;
	this.rectStartingX += categoryCenteringOffset;

	this.distinction();
	DeleteChildren(barG);
	DeleteChildren(competitorNames);

	//surement possible de mettre des variales en commun pour user.PrintCompetitors
	for (var i = 0; i < nbElmts; i++) {
		var elmt = this.elements[i],
			x = this.rectStartingX + i * this.spaceBetweenRectCenters + categoryOffset,
			y = canvasBottomY - elmt.force * forceHeightRatio,
			fontweight = "normal",
			nbPrintedComps = 0;
		for(var q=0, qLen=this.competitors.length; q<qLen; q++){
			if(this.competitors[q].print === true){
				nbPrintedComps++;
			}
		}
		if(grey){
			var barColor = "LightGrey",
				barOpacity = 1;
		} else if (nbPrintedComps){
			if(elmt.distinction >= 2.7){
				var barColor = "#55c178",
					barOpacity = 0.6 + (elmt.distinction - 2) * 0.2;
			} else if (elmt.distinction < 2.7 && elmt.distinction > 1.3){
				var barColor = "LightGrey",
					barOpacity = 1;
			} else {
				var barColor = "#c15e55",
					barOpacity = 0.65 - elmt.distinction * 0.2;
			}
		} else {
			var barColor = "#55c178";
			barOpacity = 0.6 + Math.abs(elmt.force - 3) * 0.20;
		}
		//doesn't show the moving element, which has to be added just an instant later for transition purposes with a new call on PrintElements
		if ((typeof indexOfMovingElement == "undefined" || indexOfMovingElement === null) || indexOfMovingElement != i){

			//the category name appears each time the category of the element is different from the previous
			if (i === 0 || this.elements[i-1].category != elmt.category){
				//we need to know how many elements compose this category
				var cCount = this.categoriesCount[categories.indexOf(elmt.category)],
					categoryLengthX = cCount * this.mRectWidth + (cCount-1) * (this.spaceBetweenRectCenters-this.mRectWidth),
					categoryR = document.createElementNS('http://www.w3.org/2000/svg', 'text');
				categoryR.setAttributeNS(null, 'class', 'categoryR');
				//the position on the x axis is the same as the first element of the category
				categoryR.setAttributeNS(null, 'x', x + categoryLengthX/2);
				categoryR.setAttributeNS(null, 'y', canvasBottomY + 40);
				categoryR.textContent = Majus(elmt.category);
				group.appendChild(categoryR);
			}

			//transformation of spaces within the element name into returns to avoid long one line strings
			var positionOfSpaces = [0],
				offsetNameY = 0;
			for (var k = 0, leng = elmt.name.length; k < leng; k++){
				var stringLen = 1 + k - positionOfSpaces[positionOfSpaces.length-1];
				if (elmt.name[k] == " " && stringLen > 5){
					positionOfSpaces.push(k);
				}
			}
			positionOfSpaces.push(elmt.name.length);

			if (i === indexOfElementToHighlight) {
				var descriptionDiv = document.createElement('p'),
					descriptionText = elmt.description? elmt.description : editQuestions[categories.indexOf(elmt.category)].innerHTML;
				descriptionDiv.id = elmt.name + 'DescriptionDiv';
				descriptionDiv.className = 'descriptionDiv';
				descriptionDiv.appendChild(document.createTextNode(descriptionText));
				leftX = x + this.mRectWidth/2 - 145;
				descriptionDiv.style.left = leftX +'px';
				setTimeout(function(){
					descriptionDiv.setAttribute('style', 'margin-top:5px; left:'+ leftX +'px;');
					descriptionDiv.style.opacity = 1;
				},10);

				if (nbPrintedComps){
					if(elmt.distinction >= 2.9){
						var barColor = "#55c178",
							barOpacity = 0.55 + (elmt.distinction - 2) * 0.2;
					} else if (elmt.distinction < 2.9 && elmt.distinction > 1.3){
						var barColor = "#b2b2b2",
							barOpacity = 1;
					} else {
						var barColor = "#c15e55",
							barOpacity = 0.6 - elmt.distinction * 0.2;
					}
				} else {
					var barColor = "#55c178";
					barOpacity = 0.6 + Math.abs(elmt.force - 3) * 0.20;
				}

				(function(descriptionDiv, elmt, leftX){
					descriptionDiv.addEventListener('click', function(){
						this.setAttribute('style', 'display:none;');
						controlPopUpDiv.setAttribute('style', 'display:none;');
						for (var q=0, lenQ = editQuestions.length; q<lenQ; q++){
							editQuestions[q].setAttribute('style', 'display:none;');
						}
						elementEditForm.elements.elementEditTitle.value = elmt.name;
						document.getElementById(elmt.category + 'EditQuestion').setAttribute('style', 'display:inline');
						elementEditForm.elements.elementEditDescription.value = elmt.description;
						forceEditRange.value = elmt.force;
						PrintRangeEquiv(elmt.category, forceEditRange, rangeEditEquiv);
						elementEditForm.setAttribute('style', 'display:block;');
					});
					toElementFormButton.addEventListener('click', function(){
						var elmt = displayedIteration.elements[indexOfSelectedElement];
						elementEditForm.elements.elementEditTitle.value = elmt.name;
						if (elmt.description){
							elementEditForm.elements.elementEditDescription.value = elmt.description;
						} else {
							var elementConstructor = eval(Majus(elmt.category) + 'Element'),
								temp = new elementConstructor("temp", 1, "");
							elementEditForm.elements.elementEditDescription.placeholder = temp.descriptionPlaceholders[0];
						}
						forceRange.value = elmt.force;
						PrintRangeEquiv(elmt.category, forceEditRange, rangeEditEquiv);
						elementEditForm.setAttribute('style', 'display:block;');
					});
				})(descriptionDiv, elmt, leftX);

				graph.insertBefore(descriptionDiv, competitorNames);

				offsetNameY = 20;

				fontweight = "bold";

				var imp = elmt.returnImportance(elmt.force),
					importanceText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
				importanceText.setAttributeNS(null, 'class', 'importanceText');
				importanceText.setAttributeNS(null, 'x', x + this.mRectWidth/2);
				importanceText.setAttributeNS(null, 'y', y - 25);
				importanceText.textContent = imp;
				group.appendChild(importanceText);
			}

			for (var f = 0, len = positionOfSpaces.length - 1; f < len; f++){
				var wordLength = positionOfSpaces[f+1] - positionOfSpaces[f],
					barName = document.createElementNS('http://www.w3.org/2000/svg', 'text');
				if(nbElmts<11){
					barName.setAttributeNS(null, 'class', 'barNames barNamesBig');
				} else {
					barName.setAttributeNS(null, 'class', 'barNames barNamesSmall');
				}
				barName.setAttributeNS(null, 'x', x + this.mRectWidth / 2 - 3);
				barName.setAttributeNS(null, 'y', y - offsetNameY - 25 - (len - 1 - f)*17);
				barName.setAttributeNS(null, 'font-weight', fontweight);
				barName.textContent = elmt.name.substr(positionOfSpaces[f], wordLength);
				group.appendChild(barName);
				if(!evalMode){
					(function(bar, barName, i, player, x, y){
						if(i === indexOfElementToHighlight){
							barName.addEventListener('click', function(){
								player.PrintElements();
								player.PrintCompetitors();
								controlPopUpDiv.style.visibility = 'hidden';
								elementEditForm.setAttribute('style', 'display:none');
							});
						}else{
							//doublon du code
							barName.addEventListener('click', function(){
								SelectBar(bar, i, player, x, y);
								elementEditForm.setAttribute('style', 'display:none');
							});
						}
					})(bar, barName, i, this, x, y);
				}
			}

			var bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			bar.setAttributeNS(null, 'class', 'bar');
			bar.setAttributeNS(null, 'x', x);
			bar.setAttributeNS(null, 'y', y);
			bar.setAttributeNS(null, 'width', this.mRectWidth);
			bar.setAttributeNS(null, 'height', elmt.force * forceHeightRatio);
			bar.setAttributeNS(null, 'opacity', barOpacity);
			bar.setAttributeNS(null, 'fill', barColor);

			if(!evalMode){
				(function(bar, i, categoryOffset, player, x, y){
					if(i === indexOfElementToHighlight){
						bar.addEventListener('click', function(){
							descriptionDiv.setAttribute('style', 'margin-top:150px; left:' + leftX +'px;');
							descriptionDiv.style.opacity = 0.1;
							setTimeout(function(){
									player.PrintElements();
									player.PrintCompetitors();
									controlPopUpDiv.style.visibility = 'hidden';
									elementEditForm.setAttribute('style', 'display:none');
								},150);
						});
					}else{
						bar.addEventListener('click', function(){
							SelectBar(bar, i, player, x, y);
							elementEditForm.setAttribute('style', 'display:none');
						});
					}
				})(bar, i, categoryOffset, this, x, y);
			}

			group.appendChild(bar);

			if (i < nbElmts-1 && this.elements[i+1].category != elmt.category) {
				categoryOffset += categoryGroupsSpacing;
			}
		}
	}

	barG.appendChild(group);
}

Iteration.prototype.PrintCompetitors = function (highlightCompIndex) {
	var nbOfElmts = this.elements.length,
		group = document.createElementNS('http://www.w3.org/2000/svg', 'g'),
		circleX = canvasCenterX - this.adjustX + categoryCenteringOffset;

	//principe qui pourrait être utilisé pour PrintElements
	function AppendLine(compNb, elementNb, c, x1, spaceBetweenRectCenters, tempCategoryOffset, y1, y2, color){
		var x2 = x1 + tempCategoryOffset + spaceBetweenRectCenters,
			diameter = 13;
		if(y2 === y1){
			var x1Bis = x1 + diameter,
				x2Bis = x2 - diameter,
				y1Bis = y1,
				y2Bis = y2;
		} else {
			var	coeff = -(y2-y1)/(x2-x1),
				ab = diameter * Math.cos(Math.atan(Math.abs(coeff))),
				x1Bis = x1 + ab,
				x2Bis = x2 - ab,
				bc = (diameter^2 - ab^2)^(1/2),
				y1Bis = coeff >= 0 ? y1 + bc : y1 - bc,
				y2Bis = coeff >= 0 ? y2 - bc : y2 + bc;
		}
		var competitorLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
		competitorLine.setAttributeNS(null, 'class', c);
		competitorLine.setAttributeNS(null, 'x1', x1Bis);
		competitorLine.setAttributeNS(null, 'x2', x2Bis);
		competitorLine.setAttributeNS(null, 'y1', y1Bis);
		competitorLine.setAttributeNS(null, 'y2', y2Bis);
		competitorLine.setAttributeNS(null, 'stroke', color);
		group.appendChild(competitorLine);
	}
	function AppendCircle(compNb, elementNb, x, y, color, circleClass){
		var competitorCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		competitorCircle.setAttributeNS(null, 'class', circleClass);
		competitorCircle.setAttributeNS(null, 'cx', x);
		competitorCircle.setAttributeNS(null, 'cy', y);
		competitorCircle.setAttributeNS(null, 'r', circleR);
		competitorCircle.setAttributeNS(null, 'fill', 'white');
		competitorCircle.setAttributeNS(null, 'stroke', color);

		(function(compNb, elementNb, x, y){
			competitorCircle.addEventListener('click', function(){
				selectedPlayerNumber = compNb+1;
				indexOfSelectedElement = elementNb;
				var controlPopUpX = x,
					controlPopUpY = y;
				displayedIteration.PrintElements(null, null, true);
				displayedIteration.PrintCompetitors(compNb);
				if(displayedIteration.name != "How Nintendo's wii took over the console market"){
					controlPopUpDiv.setAttribute('style', 'margin-left:' + controlPopUpX + 'px; margin-top:' + controlPopUpY + 'px;');
					controlPopUpDiv.style.visibility = 'visible';
					elementEditForm.setAttribute('style', 'display:none');
				}
				toElementFormButton.setAttribute('style', 'display:none;');
			});
		})(compNb, elementNb, x, y);
		group.appendChild(competitorCircle);
	}

	for (var i = 0, len = this.competitors.length; i<len; i++) {

		var comp = this.competitors[i];

		if (i != highlightCompIndex) {

			var competitorName = document.createElement('div');
			competitorName.id = 'bn'+ i;
			competitorName.className = "competitorName";
			var sp = document.createElement('span');
			sp.className = "competitorNameSpan";
			sp.appendChild(document.createTextNode(comp.name));
			(function(comp){
				sp.addEventListener('click', function(){
					comp.print = true;
					comp.highlight = true;
					displayedIteration.PrintElements(null, null, true);
					displayedIteration.PrintCompetitors(comp.number);
					controlPopUpDiv.style.visibility = 'hidden';
					elementEditForm.setAttribute('style', 'display:none');
				});
			})(comp);
			competitorName.appendChild(sp);

			var eye = document.createElement('i');
			eye.ariaHidden = true;
			competitorName.appendChild(eye);
			(function(comp){
				eye.addEventListener('click', function(){
					comp.print = !comp.print;
					displayedIteration.PrintElements();
					displayedIteration.PrintCompetitors();
					controlPopUpDiv.style.visibility = 'hidden';
					elementEditForm.setAttribute('style', 'display:none');
				});
			})(comp);

			if(comp.print){
				var	categoryOffset = 0;
				for (var j = 0; j < nbOfElmts; j++) {
					var	x = circleX + categoryOffset + j * this.spaceBetweenRectCenters,
						y = canvasBottomY - comp.elements[j].force * forceHeightRatio,
						isLast = j == nbOfElmts-1;
					if (isLast){var isLastOfCategory = true;}
					else {var isLastOfCategory = this.elements[j].category != this.elements[j+1].category;}
					if (!isLast && isLastOfCategory) {
						var tempCategoryOffset = categoryGroupsSpacing;
						categoryOffset += categoryGroupsSpacing;
					} else {var tempCategoryOffset = 0;}
					if (!isLast && !isLastOfCategory){
						var y2 = canvasBottomY - comp.elements[j + 1].force * forceHeightRatio;
						AppendLine(i, j, 'dashLines', x, this.spaceBetweenRectCenters, tempCategoryOffset, y, y2, comp.color);
					}
					AppendCircle(i,j,x,y,comp.color, 'circles');
				}
				eye.className = 'fa fa-eye';
				eye.setAttribute('style', 'background-color:' + comp.color + '; color:white;');
			} else {
				eye.className = 'fa fa-eye-slash';
			}
			competitorNames.appendChild(competitorName);
			//utiliser des propriétés de comp ou player est peut être plus propre que d'utiliser des paramètres.
			//le problème c'est que je supprime puis détruis et recrée tout
		}
	}
	//the competitor to highlight is printed after the others to show it above,

	//maybe i can create it but append it latter
	//probleme de nom c'est un index pas un élément
	if (highlightCompIndex !== "null" && typeof highlightCompIndex !== "undefined") {
		var compToHighlight = this.competitors[highlightCompIndex],
			categoryOffset = 0;
		for (var j = 0; j < nbOfElmts; j++) {
			var	x = circleX + categoryOffset + j * this.spaceBetweenRectCenters,
				y = canvasBottomY - (compToHighlight.elements[j].force) * forceHeightRatio,
				isLast = j == nbOfElmts-1;
			if (isLast){var isLastOfCategory = true;}
			else {var isLastOfCategory = this.elements[j].category != this.elements[j+1].category;}
			//les acolades ne sont pas placées comme plus haut... c'est bizarre
			if (j < nbOfElmts - 1) {
				if (!isLast && isLastOfCategory) {
					var tempCategoryOffset = categoryGroupsSpacing;
					categoryOffset += tempCategoryOffset;
				} else {var tempCategoryOffset = 0;}
				//la je reteste le premier élément du if en dessous...
				if (!isLast && !isLastOfCategory){
					var y2 = canvasBottomY - compToHighlight.elements[j + 1].force * forceHeightRatio;
					AppendLine(highlightCompIndex, j, 'straightLines', x, this.spaceBetweenRectCenters, tempCategoryOffset, y, y2, compToHighlight.color);
				}
			}
			AppendCircle(highlightCompIndex,j,x,y,compToHighlight.color, 'circles acti');
		}
		//modulariser competitorName
		var competitorName = document.createElement('div');
		competitorName.className = "competitorName";

		var sp = document.createElement('span');
		sp.className = "competitorNameSpan";
		sp.appendChild(document.createTextNode(compToHighlight.name));
		competitorName.setAttribute('style', 'color:' + compToHighlight.color + '; font-weight:bold;');

		(function(compToHighlight){
			sp.addEventListener('click', function(){
				compToHighlight.highlight = false;
				displayedIteration.PrintElements();
				displayedIteration.PrintCompetitors();
			});
		})(compToHighlight);

		var eye = document.createElement('i');
		eye.className = 'fa fa-eye';
		eye.ariaHidden = true;
		eye.setAttribute('style', 'background-color:' + compToHighlight.color + '; color:white;');

		eye.addEventListener('click', function(){
			compToHighlight.print = false;
			displayedIteration.PrintElements();
			displayedIteration.PrintCompetitors();
		});

		competitorName.appendChild(sp);
		competitorName.appendChild(eye);
		if(highlightCompIndex === this.competitors.length -1){
			competitorNames.appendChild(competitorName);
		} else {
			var beforeNode = document.getElementById('bn' + (highlightCompIndex+1));
			competitorNames.insertBefore(competitorName, beforeNode);
		}
		var descriptionDiv = document.createElement('p'),
			descriptionText = compToHighlight.description? compToHighlight.description: 'What is your edge against this competitor?';
		descriptionDiv.id = compToHighlight.name + 'DescriptionDiv';
		descriptionDiv.className = 'descriptionDiv';

		descriptionDiv.appendChild(document.createTextNode(descriptionText));
		setTimeout(function(){
			descriptionDiv.setAttribute('style', 'margin-top:5px; left:40%;');
			descriptionDiv.style.opacity = 1;
		},10);

		(function(descriptionDiv, compToHighlight){
			descriptionDiv.addEventListener('click', function(){
				this.setAttribute('style', 'display:none;');
				controlPopUpDiv.setAttribute('style', 'display:none;');
				compEditForm.setAttribute('style', 'display:block;');
				compEditForm.elements.compEditTitle.value = compToHighlight.name;
				compEditForm.elements.compEditDescription.value = compToHighlight.description;
				competitorToModify = compToHighlight;
			});
		})(descriptionDiv, compToHighlight);

		graph.insertBefore(descriptionDiv, competitorNames);
	}
	barG.appendChild(group);
}

Iteration.prototype.orderElements = function(){
	//order by strength
	var elmts = [];
	for (var i = 0, len = this.elements.length; i < len; i++){
		var biggestElement = this.elements[0],
			indexOfBiggest = 0;
		for (var j = 0; j < this.elements.length; j++){
			if (this.elements[j].force > biggestElement.force){
				biggestElement = this.elements[j];
				indexOfBiggest = j;
			}
		}
		elmts.push(biggestElement);
		this.elements.splice(indexOfBiggest, 1);
	}
	this.elements = elmts;

	//order by category
	var elmts = [];
	for (var i = 0, len = categories.length; i<len; i++){
		for (var j = 0; j < this.elements.length; j++){
			if (categories[i] == this.elements[j].category){
				elmts.push(this.elements[j]);
			}
		}
	}
	this.elements = elmts;

	//Adjust competitors
	for (var i = 0; i<this.competitors.length; i++){
		var comp = this.competitors[i],
			orderedElements = [];
		for (var j = 0; j<this.elements.length; j++){
			orderedElements[j] = comp.elements[GetIndex(comp.elements, this.elements[j].name)];
		}
		comp.elements = orderedElements;
	}
}

//function called by addElement
//pas beaucoup utiliser éventuellement démoduler
Iteration.prototype.updateCategories = function(){
	this.nbUsedCategories = 0;
	this.categoriesCount = [0, 0, 0, 0, 0, 0, 0, 0];
	for (var i = 0, len = this.elements.length; i<len; i++){
		this.categoriesCount[categories.indexOf(this.elements[i].category)]++;
	}
	for (var i = 0, len=categories.length; i<len; i++){
		if(this.categoriesCount[i]){this.nbUsedCategories ++;}
	}
	categoryCenteringOffset = - Math.max((this.nbUsedCategories-1), 0) * categoryGroupsSpacing/2;
}

Iteration.prototype.distinction = function(){
	for (var i = 0, len = this.elements.length; i<len; i++){
		var distinction = 0;
		for (var j = 0, len2 = this.competitors.length; j < len2; j++){
			var nbPrintedComps = 0;
			if(this.competitors[j].print){
				distinction += Math.abs(this.elements[i].force - this.competitors[j].elements[i].force);
				nbPrintedComps ++;
			}
		}
		this.elements[i].distinction = distinction/nbPrintedComps;
	}
}

Iteration.prototype.createTab = function(){
	var activeTab = document.getElementsByClassName('pivotTab active'),
		name = this.name;
	if(activeTab.length !== 0){
		activeTab[0].className = 'pivotTab inactive';
	}

	var tab = document.createElement('div');
	tab.id = name;
	tab.className = 'pivotTab active';

	var spn = document.createElement('span');
	spn.appendChild(document.createTextNode(name + " "));
	tab.appendChild(spn);

	if(name != "How Nintendo's wii took over the console market"){
		var	pivot = document.createElement('div');
		pivot.className = "pivot";
		pivot.innerHTML = " | <i class='fa fa-code-fork' aria-hidden='true'></i>";
		tab.appendChild(pivot);
		iterationRef = this;
		pivot.addEventListener('click', function(){
			elementEditForm.setAttribute('style', 'display:none');
			var activeTab = document.getElementsByClassName('pivotTab active');
			pivotModel = iterationRef;
			pivotBasis.innerHTML = name;
			pivotForm.elements.pivotTitle.value = "";
			pivotForm.setAttribute('style', 'display:block');
		});
	}

	pivotNav.appendChild(tab);

	if(name != "How Nintendo's wii took over the console market"){
		tab.addEventListener('click', function(){
			DeleteChildren(barG);
			addTrigger.setAttribute('style', 'display:block;');
			activePreview.setAttribute('style', 'display:none;');
			elementForm.setAttribute('style', 'display:none;');
			compForm.setAttribute('style', 'display:none;');
			var activeTab = document.getElementsByClassName('pivotTab active');
			activeTab[0].className = 'pivotTab inactive';
			this.className = 'pivotTab active';
			displayedIteration = activeProject.iterations[GetIndex(activeProject.iterations, this.id)];
			DeleteActiveDescription();
			controlPopUpDiv.style.visibility = 'hidden';

			if(displayedIteration.creator === userEmail){
				graphHeader.setAttribute('style', 'display:flex;');
			}

			if(this.id === "How Nintendo's wii took over the console market"){
				graphHeader.setAttribute('style', 'display:none;');
			}
			displayedIteration.PrintElements();
			displayedIteration.PrintCompetitors();
		});
	}
}

function Competitor(name, description, number, elements){
	Player.call(this, name, number, elements);
	this.description = description;
	this.print = true;
	this.highlight = false;
}

function Element(name, force, description) {
	this.name = name;
	this.force = parseInt(force);
	this.description = description;
}

Element.prototype.increaseForce = function(){
	if (this.force == 5) {return;}
	this.force ++;
	var name = this.name,
		JSONtoSend = JSON.stringify([name, name, this.force, this.description, displayedIteration.name, displayedIteration.rank, activeProject.id]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/updateElement.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			//Ajusting the criteria before moving it
			displayedIteration.PrintElements(null, indexOfSelectedElement, true);
			displayedIteration.PrintCompetitors();
			displayedIteration.orderElements();
			indexOfSelectedElement = GetIndex(displayedIteration.elements, name);
			setTimeout(function (){
				displayedIteration.PrintElements(null, indexOfSelectedElement, true);
				displayedIteration.PrintCompetitors();
			}, 400);
		}
	});
	xhr.send(JSONtoSend);
};

Element.prototype.decreaseForce = function(){
	if (this.force == 1){return;}
	this.force --;
	var name = this.name,
		JSONtoSend = JSON.stringify([name, name, this.force, this.description, displayedIteration.name, displayedIteration.rank, activeProject.id]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/updateElement.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			displayedIteration.PrintElements(null, indexOfSelectedElement, true);
			displayedIteration.PrintCompetitors();
			displayedIteration.orderElements();
			indexOfSelectedElement = GetIndex(displayedIteration.elements, name);
			setTimeout(function (){
				displayedIteration.PrintElements(null, indexOfSelectedElement, true);
				displayedIteration.PrintCompetitors();
			}, 400);
		}
	});
	xhr.send(JSONtoSend);
}

Element.prototype.increaseCompForce = function(){
	if (this.force == 5) {return;}
	this.force ++;
	var JSONtoSend = JSON.stringify([this.name, this.force, displayedIteration.competitors[selectedPlayerNumber-1].name, displayedIteration.rank, activeProject.id]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/updateCompElement.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			//Ajusting the criteria before moving it
			displayedIteration.PrintElements();
			displayedIteration.PrintCompetitors(selectedPlayerNumber-1);
		}
	});
	xhr.send(JSONtoSend);
};

Element.prototype.decreaseCompForce = function(){
	if (this.force == 1) {return;}
	this.force --;
	//utiliser le nom n'est pas ouf c'estplus efficace d'utiliser le numéro
	var JSONtoSend = JSON.stringify([this.name, this.force, displayedIteration.competitors[selectedPlayerNumber-1].name, displayedIteration.rank, activeProject.id]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/updateCompElement.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {
			console.log(xhr.responseText);
			//Ajusting the criteria before moving it
			displayedIteration.PrintElements();
			displayedIteration.PrintCompetitors(selectedPlayerNumber-1);
		}
	});
	xhr.send(JSONtoSend);
};

Element.prototype.returnImportance = function (force) {
	switch (parseInt(force)) {
		case 5:
			return "Very high importance";
			break;
		case 4:
			return "High importance";
			break;
		case 3:
			return "Moderate importance";
			break;
		case 2:
			return "low importance";
			break;
		case 1:
			return "Very low importance";
			break;
	}
};

function CustomersElement(name, force, description){
	Element.call(this, name, force, description);
	this.category = "customers";
	this.returnImportance = function(force){
		switch (parseInt(force)) {
			//faire via array et fonction
			case 5:
				return "Primary target";
				break;
			case 4:
				return "Very important target";
				break;
			case 3:
				return"Important target";
				break;
			case 2:
				return "Not important target";
				break;
			case 1:
				return "Not a target";
				break;
		}
	};
}

function ProductsElement(name, force, description){
	Element.call(this, name, force, description);
	this.category = "products";
}

function DistributionElement(name, force, description){
	Element.call(this, name, force, description);
	this.category = "distribution";
}

function PriceElement(name, force, description){
	Element.call(this, name, force, description);
	this.category = "price";
	this.returnImportance = function(force){
		switch (parseInt(force)) {
			//faire via array et fonction
			case 5:
				return "Very expensive";
				break;
			case 4:
				return "Expensive";
				break;
			case 3:
				return "Affordable";
				break;
			case 2:
				return "Competitive";
				break;
			case 1:
				return "Free";
				break;
		}
	};
}

function MonetizationElement(name, force, description){
	Element.call(this, name, force, description);
	this.category = "monetization";
}

function CommunicationElement(name, force, description){
	Element.call(this, name, force, description);
	this.category = "communication";
}

function ResourcesElement(name, force, description){
	Element.call(this, name, force, description);
	this.category = "resources"
}

function ProductionElement(name, force, description){
	Element.call(this, name, force, description);
	this.category = "production"
}

CustomersElement.prototype = Object.create(Element.prototype, {
	constructor: {
		value: CustomersElement,
		enumerable: false,
		writable: true,
		configurable: true,
	}
});

CustomersElement.prototype.placeholder = "ex: urban women from 18 to 25";
CustomersElement.prototype.descriptionPlaceholders = ["ex: these customers work a lot and have no time to lose. They enjoy...",
													"ex: Many customers objectively have a problem but they don't realize how much time they lose...",
													"ex: Many potential clients don't enter the shop because they think they won't be able to afford..."];

ProductsElement.prototype = Object.create(Element.prototype, {
	constructor: {
		value: ProductsElement,
		enumerable: false,
		writable: true,
		configurable: true,
	}
});

ProductsElement.prototype.placeholder = "ex: Collaborative / Eco-friendly...";
ProductsElement.prototype.descriptionPlaceholders = ["ex: This feature is necessary for our customer to accomplish...",
												"ex: This feature will require us to include...",
												"ex: 3 testers complained about..."];

DistributionElement.prototype = Object.create(Element.prototype, {
	constructor: {
		value: DistributionElement,
		enumerable: false,
		writable: true,
		configurable: true,
	}
});

DistributionElement.prototype.placeholder = "ex: fast delivery, personnal service";
DistributionElement.prototype.descriptionPlaceholders = ["ex: Delivering to our client's home will make him save time and allow us to establish face to face contact...",
														"ex:",
														"ex:"];

PriceElement.prototype = Object.create(Element.prototype, {
	constructor: {
		value: PriceElement,
		enumerable: false,
		writable: true,
		configurable: true,
	}
});

MonetizationElement.prototype = Object.create(Element.prototype, {
	constructor: {
		value: MonetizationElement,
		enumerable: false,
		writable: true,
		configurable: true,
	}
});

MonetizationElement.prototype.placeholder = "ex: Subscription / Fee based...";
MonetizationElement.prototype.descriptionPlaceholders = ["ex: Flat fees scheme is riskier but will encourage customers to order more expensive items given that...",
													"ex: "];

ResourcesElement.prototype = Object.create(Element.prototype, {
	constructor: {
		value: ResourcesElement,
		enumerable: false,
		writable: true,
		configurable: true,
	}
});

ResourcesElement.prototype.placeholder = "ex: Materials / Developers...";
ResourcesElement.prototype.descriptionPlaceholders = ["ex: Few developers know our technology...",
												"ex: Developments costs make up 40% of our expenses...",
												"ex: We will need to build an in-house team of well-trained developers which requires..."];


CommunicationElement.prototype = Object.create(Element.prototype, {
	constructor: {
		value: CommunicationElement,
		enumerable: false,
		writable: true,
		configurable: true,
	}
});

CommunicationElement.prototype.placeholder = "ex: Social media / Events...";
CommunicationElement.prototype.descriptionPlaceholders = ["ex: We don't invest in social media because our main communication target is our customers but the organization that might fund us...",
													"ex: ",
													"ex: "];

ProductionElement.prototype = Object.create(Element.prototype, {
	constructor: {
		value: ProductionElement,
		enumerable: false,
		writable: true,
		configurable: true,
	}
});

ProductionElement.prototype.placeholder = "ex: Local production / On order...";
ProductionElement.prototype.descriptionPlaceholders = ["ex: Reducing time to market is necessary so plants have to be close to our main points of sales...",
												"ex:"];

teamValid.addEventListener('click', function(){
	var	f = teamForm.elements,
		name = f.memberName.value,
		mail = f.memberEmail.value,
		JSONtoSend = JSON.stringify([name, mail, activeProject.id]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/insertParticipant.php';

	if(!TestEmail(mail)){alert('hey, it seems like your email address is incorrect.'); return;}
	if(name === ""){alert('hey, this project member deserves a name'); return;}
	if(activeProject.participants.indexOf(mail) != -1){alert('hey, it seems like this person is already part of this project'); return;}

	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			console.log(xhr.responseText);
			activeProject.participants.push(mail);
			InsertMailIntoList(mail);
			f.memberName.value = "";
			f.memberEmail.value = "";
		}
	});
	xhr.send(JSONtoSend);
});

var wii = new Iteration("How Nintendo's wii took over the console market", -1, [], -1, "Shigeru");
wiiElements = [
		["customers", "Kids", 5, "Nintendo constantly tries to enlarge its customer base, with kids, both boys and girls, being the primary target for its crazy games."],
		["customers", "Moms", 3, "What if when buying a console for their kids, moms were also offering themsleves a gift? Nintendo simply killed the idea that video games are a men thing. And moms, they wanna have fun."],
		["customers", "Hardcore Gamers", 1, "A very competitive and demanding segment, animated by a technology race that requires heavy investments. Indeed, hardcore gamers are looking for realistic and complex games."],
		["products", "Simple gameplay", 5, "If the Wii is to be familial, it's crucial that every one can join without needing hours just to learn how to play."],
		["products", "Funny games", 4, "Capitalizing on Nintendo's magic of creating original worlds with memorable characters"],
		["products", "Small device", 3, "A small and nice looking device has more chances to be tolerated by moms in the living room, where a familial game belongs!"],
		["products", "Compatibility with older games", 3, "A necessary constraint so that Nintendo players have an additional reason to choose the Wii and play the old Mario Bros, instead of buying a Playstation or Xbox."],
		["products", "Powerful hardware", 2, "Nintendo doesn't thrive for realistic games, so powerful hardware isn't required. It allows the device to stay small and affordable."],
		["products", "Violent games", 1, "Violence isn't what moms want in their living room. Meanwhile, regulators were enforcing age requirements and bad press was surrounding the release of immoral games."],
		["price", "Price", 2, "A $300 lower price is a convincing sales argument, isn't Bowser?"],
		["resources", "Independant dev studios", 4, "It's key to attract the studios to develop games and broaden the offering. And they want appropriate compensation and a technology they can easily build upon."]
	];
for (var i = 0, len = wiiElements.length; i<len; i++){
	wii.addElement(wiiElements[i][0], wiiElements[i][1], wiiElements[i][2], wiiElements[i][3]);
}
wii.createTab();
wii.orderElements();
wii.addCompetitor('Playstation', "With it's broad customer target, Sony's PlayStation was a very serious competitor. It was the first entertainment platform to sell 100 million units! Sony's relationship to third party developers proved very successful, providing constantly updated libraries, technical support, and even development help.", [3, 1, 4, 1, 1, 1, 3, 4, 4, 5, 4], true);
wii.addCompetitor('Xbox', "Released in 2001, Xbox is backed by Microsoft's gigantic development budget and is graphically very advanced. It's also the first console equipped with a built-in hard disk.", [1, 1, 5, 1, 2, 3, 3, 5, 3, 4, 3], true);
wii.PrintElements();
wii.PrintCompetitors();
displayedIteration = wii;

addTrigger.addEventListener('click', function(){
	displayedIteration.PrintElements();
	displayedIteration.PrintCompetitors();
	controlPopUpDiv.style.visibility = 'hidden';
	if (addButtonFrame.style.display === 'block'){
		addButtonFrame.setAttribute('style', 'display:none;');
	} else {
		addButtonFrame.setAttribute('style', 'display:block');
	}
	elementForm.setAttribute('style', 'display:none;');
	elementEditForm.setAttribute('style', 'display:none;');
	compForm.setAttribute('style', 'display:none;');
	activePreview.setAttribute('style', 'display:none;');
});

function OpenCaseStudy(){
	startDivsContainer.setAttribute('style', 'display:none;');
	toOverview.setAttribute('style', 'display:none;');
	controlPopUpDiv.style.visibility = 'hidden';
	displayedIteration = wii;
	displayedIteration.PrintElements();
	displayedIteration.PrintCompetitors();
	signupForm.setAttribute('style', 'display:none;');
	loginForm.setAttribute('style', 'display:none;');
	fromBlogToProject.setAttribute('style', 'display:block;');
	conceptExplanations[0].setAttribute('style', 'display:block;');
	setTimeout(function(){
		conceptExplanations[0].setAttribute('style', 'display:block; margin-top:5px;');
		conceptExplanations[0].style.opacity = 1;
	},1000);
}

caseStudy.addEventListener('click', function(){
	OpenCaseStudy();
});

caseStudy2.addEventListener('click', function(){
	OpenCaseStudy();
});

for (var i=0, len = conceptExplanations.length; i<len; i++){
	(function(i, len){
		conceptExplanationsArrow[i].addEventListener('click', function(){
			conceptExplanations[i].setAttribute('style', 'display:none;');
			if(i+1<len){
				conceptExplanations[i+1].setAttribute('style', 'display:block;');
					setTimeout(function(){
					conceptExplanations[i+1].setAttribute('style', 'display:block; margin-top:5px;');
					conceptExplanations[i+1].style.opacity = 1;
				},10);
			}
		});
	})(i, len);
}

fromBlogToProject.addEventListener('click', function(){
	this.setAttribute('style', 'display:none;');
	DeleteActiveDescription();
	introduction.setAttribute('style', 'display:none;');
	loginForm.setAttribute('style', 'display:none;');
	signupForm.setAttribute('style', 'display:block;');
	startDivsContainer.setAttribute('style', 'display:block;');
});

home.addEventListener('click', function(){
	signupForm.setAttribute('style', 'display:none;');
	loginForm.setAttribute('style', 'display:none;');
	caseStudy.setAttribute('style', 'display:block;');
	introduction.setAttribute('style', 'display:block;');
	startDivsContainer.setAttribute('style', 'display:block;');
});

landingLogin.addEventListener('click', function(){
	signupForm.setAttribute('style', 'display:none;');
	introduction.setAttribute('style', 'display:none;');
	startDivsContainer.setAttribute('style', 'display:block;');
	loginForm.setAttribute('style', 'display:block;');
});

landingSignup.addEventListener('click', function(){
	loginForm.setAttribute('style', 'display: none;');
	introduction.setAttribute('style', 'display:none;');
	startDivsContainer.setAttribute('style', 'display:block;');
	signupForm.setAttribute('style', 'display:block;');
});

document.getElementById('newProject').addEventListener('click', function(){
	if(projectForm.style.display === 'none' || projectForm.style.display === ''){
		projectForm.elements.projectTitle.value = "";
		projectForm.elements.projectDescription.value = "";
		projectForm.setAttribute('style', 'display:block;');
		teamForm.setAttribute('style', 'display:none;');
		projectEditForm.setAttribute('style', 'display:none;');
	}else{
		projectForm.setAttribute('style', 'display:none;');
	}
});

//des variables à mieux utiliser !!
projectValid.addEventListener('click', function(){
	var f = projectForm.elements,
		name = f.projectTitle.value,
		description = f.projectDescription.value;
	if(name === ""){alert('Hey, your project deserves a name!'); return;}
	if(projects.indexOf(name) !== -1){alert('Hey, there is already a project with this name!'); return;}
	if(name.length > 25) {alert ("Sorry, we limit the project name to 25 characters..."); return;}
	if(description.length > 300) {alert ("Sorry, we limit the description to 300 characters..."); return;}

	var	JSONtoSend = JSON.stringify([name, description, userEmail]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/projectCreation.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			projectForm.setAttribute('style', 'display:none;');
			//it will be necessary to keep track of the various project ids

			//value à changer en description
			var p = new Project(JSON.parse(xhr.responseText), f.projectTitle.value, f.projectDescription.value, true, []),
				pl = new Iteration(f.projectTitle.value, -1, [], 0, userEmail);
			p.iterations.push(pl);
			p.createOverview();
			p.openGraph();
			activeProject = p;
			addButtonFrame.setAttribute('style', 'display:block');
			addFrameInfo.setAttribute('style', 'display:block');
			setTimeout(function(){
				addFrameInfo.setAttribute('style', 'display:none');
			},7000);
		}
	});
	xhr.send(JSONtoSend);
});

projectEditValid.addEventListener('click', function(){
	var f = projectEditForm.elements,
		name = f.projectEditTitle.value,
		description = f.projectEditDescription.value;

	if(name === ""){alert('Hey, your project deserves a name!'); return;}
	if(projects.indexOf(name) !== -1){alert('Hey, there is already a project with this name!'); return;}
	if(name.length > 25) {alert ("Sorry, we limit the project name to 25 characters..."); return;}
	if(description.length > 300) {alert ("Sorry, we limit the description to 300 characters..."); return;}

	var	JSONtoSend = JSON.stringify([activeProject.id, name, description]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/projectUpdate.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {
			console.log(xhr.responseText);
			projectEditForm.setAttribute('style', 'display:none;');
			var pjTitle = document.getElementById('project' + activeProject.id);
			pjTitle.innerHTML = f.projectEditTitle.value;
			pjTitle.parentNode.nextElementSibling.innerHTML = f.projectEditDescription.value;
		}
	});
	xhr.send(JSONtoSend);
});

toOverview.addEventListener('click', function(){
	overview.setAttribute('style', 'display:block;');
	graphFrame.setAttribute('style', 'display:none;');
	toOverview.setAttribute('style', 'display:none;');
	elementEditForm.setAttribute('style', 'display:none;');
});

// EVENTS ASSOCIATED WITH INSERTION ON THE GRAPH
for (var i = 0, len = addButton.length; i<len; i++){
	addButton[i].addEventListener('click', function(){
		controlPopUpDiv.style.visibility = 'hidden';
		var displayedQuestion = document.getElementById(categoryOfNewElement + 'Question');
		if(displayedQuestion){
			displayedQuestion.setAttribute('style', 'display:none');
		}
		categoryOfNewElement = this.id;
		elementForm.className = 'graphForm ' + categoryOfNewElement + 'ElementForm';
		compForm.setAttribute('style', 'display:none;');
		elementForm.setAttribute('style', 'display:block;');
		otherElement.innerHTML = 'Continue with ' + categoryOfNewElement;
		activePreview.setAttribute('style', 'display:none;');
		forceRange.value = 1;
		PrintRangeEquiv(categoryOfNewElement, forceRange, rangeEquiv);
		if (categoryOfNewElement === "price"){
			elementForm.elements.elementTitle.value = "Price";
		} else {
			var elementConstructor = eval(Majus(categoryOfNewElement) + 'Element'),
				newElement = new elementConstructor("temp", 1, "");
			elementForm.elements.elementTitle.value = "";
			elementForm.elements.elementTitle.placeholder = newElement.placeholder;
		}
	});
	addButton[i].addEventListener('mouseover', function(){
		SwitchActivePreview(this.id);
	});
}

direct.addEventListener('click', function(){
	//a quoi sert test par rapport à completed dans task?
	if(activeProject.tasks[1].completed){
		compTitle.value = "";
		compTitle.focus();
		compForm.setAttribute('style', 'display:block;');
		elementForm.setAttribute('style', 'display:none;');
		activePreview.setAttribute('style', 'display:none;');
	} else {
		alert('Oh, wait... Add at least 2 elements before adding a competitors.');
	}
});

direct.addEventListener('mouseover', function(){
	SwitchActivePreview(this.id);
});

for (var i = 0, len = bkgd.length; i<len; i++){
	bkgd[i].addEventListener('click', function(){
		this.parentNode.setAttribute('style', 'display:none;');
	});
}

forceRange.addEventListener("click", function(){
	PrintRangeEquiv(categoryOfNewElement, forceRange, rangeEquiv);
});

forceEditRange.addEventListener("click", function(){
	PrintRangeEquiv(displayedIteration.elements[indexOfSelectedElement].category, forceEditRange, rangeEditEquiv);
});

otherElement.addEventListener('click', function(){
	addOtherElement = true;
	displayedIteration.validElement();
});

elementValid.addEventListener('click', function(){
	addOtherElement = false;
	displayedIteration.validElement();
});

elementEditValid.addEventListener('click', function(){
	displayedIteration.editElement();
});

compValid.addEventListener('click', function(){
	displayedIteration.validCompetitor();
});

compEditValid.addEventListener('click', function(){
	var newName = Majus(compEditForm.elements.compEditTitle.value),
		newDescription = Majus(compEditForm.elements.compEditDescription.value);

	while(newName[newName.length-1] === " "){
		newName = newName.substr(0, newName.length-2);
	}

	//faire des modules qui contrôlent!!
	if(newName.length > 35) {alert ("Sorry, we limit the name to 35 characters to ensure proper readability. Please use the description section for necessary details."); return;}
	if(newName === "") {alert ("Hum... Your element has no name?"); return;}
	if(newDescription.length > 1000) {alert ("Sorry, description is limited to 1000 characters. Please be more concise."); return;}

	var JSONtoSend = JSON.stringify([newName, newDescription, competitorToModify.number, displayedIteration.rank, activeProject.id]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/updateCompetitor.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			competitorToModify.name = newName;
			competitorToModify.description = newDescription;
			compEditForm.setAttribute('style', 'display:none;');
			displayedIteration.PrintElements();
			displayedIteration.PrintCompetitors(displayedIteration.competitors[GetIndex(displayedIteration.competitors, competitorToModify.name)]);
		}
	});
	xhr.send(JSONtoSend);
});

// EVENTS ASSOCIATED WITH THE GRAPH MODIFICATION POPUP DIV

//pourrait être composé de modules partagés avec decrease
increaseForceButton.addEventListener("click", function() {
	if (selectedPlayerNumber === 0) {
		displayedIteration.elements[indexOfSelectedElement].increaseForce();
	}else{
		displayedIteration.competitors[selectedPlayerNumber-1].elements[indexOfSelectedElement].increaseCompForce()
	}
	activeProject.testTasks();
});

decreaseForceButton.addEventListener("click", function() {
	if (selectedPlayerNumber === 0) {
		displayedIteration.elements[indexOfSelectedElement].decreaseForce();
	} else {
		displayedIteration.competitors[selectedPlayerNumber-1].elements[indexOfSelectedElement].decreaseCompForce();
	}
	activeProject.testTasks();
});

withdrawButton.addEventListener("click", function() {
	//could be replace by an undo

	if (selectedPlayerNumber === 0) {
		var withdraw = confirm("Do you really want to delete this element?");
		if (!withdraw) {return;}
		var JSONtoSend = JSON.stringify([activeProject.id, displayedIteration.rank, displayedIteration.elements[indexOfSelectedElement].name]),
			xhr = new XMLHttpRequest(),
			app_url = location.protocol + '//' + location.host + '/deleteElement.php';
		xhr.open('POST', app_url);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.addEventListener('readystatechange', function(){
			if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
				//Ajusting the criteria before moving it
				console.log(xhr.responseText);
				displayedIteration.PrintElements(indexOfSelectedElement);
				displayedIteration.PrintCompetitors();
				//counting the number of elements per category:
				for (var i = 0; i < categories.length; i++) {
					if (displayedIteration.elements[indexOfSelectedElement].category == categories[i]) {
						displayedIteration.categoriesCount[i] --;
					}
				}
				displayedIteration.elements.splice(indexOfSelectedElement, 1);
				for (var i = 0; i < displayedIteration.competitors.length; i++) {
					displayedIteration.competitors[i].elements.splice(indexOfSelectedElement, 1);
				}
				displayedIteration.updateCategories();
				DeleteActiveDescription();
				displayedIteration.orderElements();
				setTimeout(function() {
					displayedIteration.PrintElements();
					displayedIteration.PrintCompetitors();
				}, 400);
				controlPopUpDiv.style.visibility = 'hidden';
				activeProject.testTasks();
			}
		});
		xhr.send(JSONtoSend);
	} else if (selectedPlayerNumber > 0) {
		var withdraw = confirm("Do you really want to delete this competitor?");
		if (!withdraw) {return;}
		//ici il faut supprimer le concurrent en entier et non pas un élément
		var JSONtoSend = JSON.stringify([displayedIteration.competitors[selectedPlayerNumber-1].name, displayedIteration.rank, activeProject.id]),
			xhr = new XMLHttpRequest(),
			app_url = location.protocol + '//' + location.host + '/deleteCompetitor.php';
		xhr.open('POST', app_url);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.addEventListener('readystatechange', function(){
			if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
				displayedIteration.competitors.splice(selectedPlayerNumber-1, 1);
				displayedIteration.PrintElements();
				displayedIteration.PrintCompetitors();
				controlPopUpDiv.style.visibility = 'hidden';
				activeProject.testTasks();
			}
		});
		xhr.send(JSONtoSend);
	}
});

//EVENTS ASSOCIATED WITH THE INFORMATION BUBBLES

settings.addEventListener('click', function(){
	if(settingsList.style.display === 'block'){
		settingsList.setAttribute('style', 'display:none;');
	} else {
		settingsList.setAttribute('style', 'display:block;');
	}
});

changePassword.addEventListener('click', function(){
	changePasswordForm.setAttribute('style', 'display:block;');
});

changePasswordValid.addEventListener('click', function(){
	var currentPassword = changePasswordForm.elements.currentPassword.value,
		newPassword = changePasswordForm.elements.newPassword.value;

	if (currentPassword === newPassword){alert('You have given the same password...'); return;}
	if (newPassword.length < 6){alert('Your new password should contain at least 6 characters.'); return;}
	if (newPassword.length > 30){alert('This password is a bit too long...'); return;}

	var	JSONtoSend = JSON.stringify([userEmail, currentPassword, newPassword]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/changePassword.php';

	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			console.log(xhr.responseText);
			var resp = JSON.parse(xhr.responseText);
			if(resp == 'ERRORpassword'){
				alert("Your current password is incorrect...");
			}
			changePasswordForm.setAttribute('style', 'display:none;');
		}
	});
	xhr.send(JSONtoSend);
});

forgottenPassword.addEventListener('click', function(){
	loginForm.setAttribute('style', 'display:none;');
	forgottenPasswordForm.setAttribute('style', 'display:block;');
});

forgottenPasswordValid.addEventListener('click', function(){
	var mail = forgottenPasswordForm.elements.getBackEmail.value;

	if(!TestEmail(mail)){alert('hey, it seems like your email address is incorrect.'); return;}

	var	JSONtoSend = JSON.stringify([mail]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/forgottenPassword.php';

	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			var resp = JSON.parse(xhr.responseText);
			console.log(xhr.responseText);
			if (resp == 'noEmail'){
				alert("There is no account linked to this email.");
			} else {
				forgottenPasswordForm.setAttribute('style', 'display:none;');
			}
		}
	});
	xhr.send(JSONtoSend);
});

pivotValid.addEventListener('click', function(){
	var pivTitle = pivotForm.elements.pivotTitle.value;

	if(pivTitle === ""){alert('Hey, your pivot needs a name.'); return;}
	if (pivTitle.length > 20) {alert ("Sorry, we limit the pivot name to 20 characters..."); return;}

	for (var i = 0, len = activeProject.iterations.length; i<len; i++){
		if(activeProject.iterations[i].name === pivTitle){alert('Truly sorry, an iteration with this name already exists.'); return;}
	}

	var	JSONtoSend = JSON.stringify([activeProject.id, pivotModel.name, pivTitle, userEmail]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/insertPivot.php';

	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			var newVersion = new Iteration(pivTitle, -1, [], activeProject.iterations.length-1, userEmail);
			for (var i=0, len = pivotModel.elements.length; i<len; i++){
				var elmt = pivotModel.elements[i];
				newVersion.addElement(elmt.category, elmt.name, elmt.force, elmt.description);
			}
			for (var i=0, len = pivotModel.competitors.length; i<len; i++){
				var comp = pivotModel.competitors[i],
					cForces = [];
				for (var j = 0, len2 = comp.elements.length; j<len2; j++){
					cForces.push(comp.elements[j].force);
				}
				newVersion.addCompetitor(comp.name, comp.description, cForces ,true);
			}
			activeProject.iterations.push(newVersion);
			displayedIteration = activeProject.iterations[GetIndex(activeProject.iterations, newVersion.name)];
			displayedIteration.createTab();
			displayedIteration.PrintElements();
			displayedIteration.PrintCompetitors();
			pivotForm.setAttribute('style', 'display:none;');
		}
	});
	xhr.send(JSONtoSend);
});

//AJAX
signupValid.addEventListener('click', function(){
	var f = signupForm.elements,
		name = f.nameSignup.value,
		mail = f.emailSignup.value,
		passw = f.passwordSignup.value,
		JSONtoSend = JSON.stringify([name, mail, passw]),
		xhr = new XMLHttpRequest();

	if(!TestEmail(mail)){alert('hey, it seems like your email address is incorrect.'); return;}
	if(name === ""){alert('Hey, you forgot to choose a user name.'); return;}
	if(name.length > 100){alert("Woo, such a long name doesn't fit in our database..."); return;}
	if(mail === ""){alert('Hey, you forgot to give your mail'); return;}
	if(passw === ""){alert('Hey, you forgot to enter a password'); return;}
	if(passw.length < 6){alert('Hey, your password should have a least 6 characters.'); return;}
	if(passw.length > 30){alert('This password is a bit too long...'); return;}

	var app_url = location.protocol + '//' + location.host + '/signup.php';

	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {console.log(xhr.responseText);
			var resp = JSON.parse(xhr.responseText);
			if(resp == 'errorExistingEmail'){
				alert('There is already an account for this email. Please go to log in.');
			} else {
				userEmail = resp;
				signupForm.setAttribute('style', 'display:none;');
				LeaveLandingPage();
				projectForm.setAttribute('style', 'display:block;');
			}
		}
	});
	xhr.send(JSONtoSend);
});

loginValid.addEventListener('click', function(){
	userEmail = loginForm.elements.emailLogin.value;
	var passw = loginForm.elements.passwordLogin.value,
		JSONtoSend = JSON.stringify([userEmail, passw]),
		xhr = new XMLHttpRequest(),
		app_url = location.protocol + '//' + location.host + '/login.php';
	xhr.open('POST', app_url);
	xhr.setRequestHeader("Content-type", "application/json");
	xhr.addEventListener('readystatechange', function(){
		if (xhr.readyState === XMLHttpRequest.DONE && (xhr.status === 200 || xhr.status === 0)) {
			console.log(xhr.responseText);
			var parsedJSON = JSON.parse(xhr.responseText);
			if(parsedJSON == 'ERRORpassword'){
				alert("Either the account doesn't exist or the password is incorrect...");
			} else {
				//creating projects
				landingLogin.setAttribute('style', 'display:none;');
				for (var p = 0, pLen = parsedJSON.length; p<pLen; p++){
					var pjt = new Project(parsedJSON[p].id, parsedJSON[p].n, parsedJSON[p].d, parsedJSON[p].c, parsedJSON[p].p);
					//creating a main player per project
					for (var i = 0, lgth = parsedJSON[p].iterations.length; i<lgth; i++){
						var iter = parsedJSON[p].iterations[i],
							iteration = new Iteration(iter[1], -1, [], iter[2], iter[3]),
							nbElmts = iter[4].length;
						//giving elements to the iteration
						for (var j = 0; j < nbElmts; j++){
							var elmt = iter[4][j];
							iteration.addElement(categories[elmt[0]], elmt[1], elmt[2], elmt[3]);
						}
						//giving competitors to the iteration
						for (var j = 0, len = iter[5].length; j < len; j++){
							var cp = iter[5][j],
								comp = new Competitor(cp[1], cp[2], cp[3], []);
							for (var h = 0; h < nbElmts; h++){
								var elmt = new Element(cp[5][h], parseInt(cp[4][h]));
								comp.elements.push(elmt);
							}
							iteration.competitors.push(comp);
						}
						iteration.orderElements();
						pjt.iterations.push(iteration);
					}
					pjt.testTasks();
					pjt.createOverview();
					console.log(pjt)
				}
				loginForm.setAttribute('style', 'display: none');
				LeaveLandingPage();
			}
		}
	});
	xhr.send(JSONtoSend);
});

headTitle.addEventListener('click', function(){
	overview.setAttribute('style', 'display: none');
	graphFrame.setAttribute('style', 'display: none');
	introduction.setAttribute('style', 'display: block');
	startDivsContainer.setAttribute('style', 'display:block');
	landingLogin.setAttribute('style', 'display:block');
	landingSignup.setAttribute('style', 'display:block');
});

var faTimes = document.getElementsByClassName('fa-times');
for (var i = 0, len=faTimes.length; i<len; i++){
	faTimes[i].addEventListener('click', function(){
		this.parentNode.setAttribute('style', 'display:none;');
	});
}
