var addbtn = document.querySelector("#container > form > button")
addbtn.addEventListener("click", newRegister)

function newRegister() {						
	var newP = document.createElement("p");  // 새 p 요소 만들기 
	var userName = document.querySelector("#userName");					
	var newText = document.createTextNode(userName.value);  // 새 텍스트 노드 만들기
	newP.appendChild(newText);  // 텍스트 노드를 p 요소의 자식 요소로 연결하기

	var delBtn = document.createElement("span");
	var delText = document.createTextNode("X");
	delBtn.setAttribute("class", "del");
	delBtn.appendChild(delText);
	newP.appendChild(delBtn);

	var nameList = document.querySelector("#nameList");
	nameList.insertBefore(newP, nameList.childNodes[0]);
	userName.value = "";

	var removeBttns = document.querySelectorAll(".del");
	for (var i=0; i<removeBttns.length; i++){
		removeBttns[i].addEventListener("click", function(){
			if (this.parentNode.parentNode)
				this.parentNode.parentNode.removeChild(this.parentNode)
		})
	}
}