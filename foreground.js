// Create a button element
let pageBody = document.body
let activeInput

// Attach the "click" event to your button
pageBody.addEventListener('keyup', () => {
    activeInput = document.activeElement.innerText;

    //On met l'input dans le storage
    chrome.storage.local.set({"activeinput": activeInput}, function() {
        console.log('Value is set to ' + activeInput);
      });
})



