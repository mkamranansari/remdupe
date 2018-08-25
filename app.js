let button = document.querySelector("#submit"),
	outputText = document.querySelector("#outputTextArea"),
	res = "";
button.addEventListener("click", doIt);
function doIt(){
	button.value = "Filtering";
	let filterWorker = new Worker("filter.js"),
		inputText = document.querySelector("#inputTextArea").value.toLowerCase().split("\n");
	filterWorker.postMessage(inputText);
	filterWorker.onmessage = function(e){
		if(e.data == 1){
			filterWorker.terminate();
			filterWorker = undefined;
			finish();
			return;
		} 
		res += e.data + "\n";
	}
}
function finish(){
	button.value = "Filter";
	outputText.value = res;
	res = "";
}