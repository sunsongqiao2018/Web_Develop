window.setTimeout(function(){
	var input = prompt("what would you want to do");
var namelist = [];
while(input !== "quit"){
	if (input === "add"){
		//add list of todo
		namelist.push(prompt("what you want to add to the list"));
		
	}
	else if(input === "list"){
		console.log(namelist);
		}
	input = prompt("what would you want to do");
}
},500)
