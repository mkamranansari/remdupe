
let inputText;
self.onmessage = function(e){
	inputText = e.data;
	filter();
	self.postMessage(1);
}
function filter() {
	for (let i = 0; i < inputText.length; i++) {
		const elementi = inputText[i];
		for (let j = 0; j < inputText.length; j++) {
			if (i !== j && elementi === inputText[j]) {
				inputText.splice(j, 1);
				j--;
			}
		}
		self.postMessage(elementi);
	}
}