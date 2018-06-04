const descriptionButton = document.querySelector("button.description");
const descriptionInput = document.querySelector('[type=text]');
const descriptionP = document.querySelector("p.description");
const listDiv = document.querySelector(".list");
const hideButton = document.getElementById('toggle-btn');
const addItemInput = document.querySelector(".addItemInput");
const addItemButton = document.querySelector(".addItemButton");
const listItems  = document.getElementsByTagName("li");
const listParent = listDiv.querySelector("ul");
const lis = listParent.children;

for( let i = 0 ; i < listItems.length ; i+=1 ){
	attachListItemButtons(listItems[i]);
}

function refreshListButtons( lis ){

	let firstItem = listParent.firstElementChild;
	let lastItem = listParent.lastElementChild;

	for( i = 0 ; i < lis.length ; i++){

		let up = lis[i].querySelector('button.up');
		let down = lis[i].querySelector('button.down');

		if( lis[i] == firstElementChild){

			up.disabled = true;
		}

		else if( list[i] == lastElementChild){

			down.disabled == true;
		}

		else{

			up.disabled = false;
			down.disabled = false;
		}
	}
}


function attachListItemButtons( li ){

	let up = document.createElement("button");
	up.className = "up";
	up.textContent = "up";
	li.appendChild(up);

	let down= document.createElement("button");
	down.className = "down";
	down.textContent = "down";
	li.appendChild(down);


	let remove = document.createElement("button");
	remove.className = "remove";
	remove.textContent = "remove";
	li.appendChild(remove);
}



descriptionButton.addEventListener( "click" , () => {
	descriptionP.textContent = descriptionInput.value;
	descriptionInput.value = "";
}); 

hideButton.addEventListener( 'click' , () => {

	if( listDiv.style.display == "none"){

		hideButton.textContent = "Hide List";
		listDiv.style.display = "block";
	}

	else{
		hideButton.textContent = "Show List";
		listDiv.style.display = "none";
	}
});

addItemButton.addEventListener( 'click' , () => {
	let li = document.createElement("li");
	li.textContent = addItemInput.value;
	attachListItemButtons(li);
	refreshListButtons();
	listParent.append(li);
	addItemInput.value = " ";
	refreshListButtons(lis);
}); 


listParent.addEventListener( 'click' , (event) => {

	if(event.target.className == "remove"){
		let listItem = event.target.parentNode;
		let parent = listItem.parentNode;
		parent.removeChild(listItem); 
	}  

	if(event.target.className == "up"){
		let listItem = event.target.parentNode;
		let prevItem = listItem.previousElementSibling;
		let ul = listItem.parentNode;
		if( prevItem){
			ul.insertBefore( listItem , prevItem);
		}
	}

	if(event.target.className == "down"){

		let listItem = event.target.parentNode;
		let nextItem = listItem.nextElementSibling;
		let ul = listItem.parentNode;
		if(nextItem){
			ul.insertBefore( nextItem , listItem);
		}
	}           		

});













