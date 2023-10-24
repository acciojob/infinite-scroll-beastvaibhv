//your code here!
const list = document.getElementById("infi-list");
const itemLists = list.getElementsByTagName("li");


list.addEventListener("scroll", ()=>{
	if(list.scrollTop + list.clientHeight >=  list.scrollHeight){
		addMoreItems();
	}
})
function addMoreItems(){
	for(let i = 0; i < 2; i++){
		const listItem = document.createElement("li");
		listItem.textContent = `Item ${itemLists.length + 1}`;
		list.appendChild(listItem);
	}
}
