document.querySelector("#submit").addEventListener("click", doIt);
let outputText = document.querySelector("#outputTextArea");
function doIt(){
	let filterWorker = new Worker("filter.js"),
		inputText = document.querySelector("#inputTextArea").value.toLowerCase().split("\n")
	filterWorker.postMessage(inputText);
	filterWorker.onmessage = function(e){
		if(e.data == 1){
			filterWorker.terminate();
			filterWorker = undefined;
			return;
		} 
		outputText.value += e.data + "\n";
		outputText.scrollTop = outputText.scrollHeight;
	}
}