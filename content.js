const boldAndItalic_A = "1d63c";
const boldAndItalic_a = "1d656";

const bold_A = "1d5d4";
const bold_a = "1d5ee";

const italic_A = "1d608";
const italic_a = "1d622";

let userText = "";

chrome.storage.local.get('activeinput', result => {
    console.log('Value currently is ' + result.activeinput);
    userText = result.activeinput;

    let markdownedText = markdown_this_text(userText);
    let text = document.createTextNode(markdownedText);
    let contentParagraph = document.getElementById('contentParagraph');
    contentParagraph.appendChild(text);
});

function markdown_this_text(userText) {
    /*-------------------------*/
    /*------BOLD & ITALIC------*/
    /*-------------------------*/
    const boldAndItalicRegExp = new RegExp(/\*\*\*[^*]+\*\*\*/, "g");
    let matchesBoldAndItalic = [...userText.matchAll(boldAndItalicRegExp)];
    let txtTmp = ""
    for (let i = 0; i < matchesBoldAndItalic.length; i++) {
        let boldAndItalicText = matchesBoldAndItalic[i][0].replaceAll("*", "");
        for (
        let charToChange = 0;
        charToChange < boldAndItalicText.length;
        charToChange++
        ) {

            let charCode = boldAndItalicText.codePointAt(charToChange);
            if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
                if((charCode >= 65 && charCode <= 90)){
                    let code =
                    parseInt(boldAndItalic_A, 16) +
                    parseInt(boldAndItalicText.codePointAt(charToChange).toString(16), 16) -
                    parseInt("A".codePointAt(0));
                    txtTmp += String.fromCodePoint(code);
                }else{
                    let code =
                    parseInt(boldAndItalic_a, 16) +
                    parseInt(boldAndItalicText.codePointAt(charToChange).toString(16), 16) -
                    parseInt("a".codePointAt(0));
                    txtTmp += String.fromCodePoint(code); 
                }
            }else{
                txtTmp += boldAndItalicText.charAt(charToChange);
            }
        
        }
        userText = userText.replace(matchesBoldAndItalic[i][0], txtTmp);
        txtTmp = "";
    }


    /*----------------*/
    /*------BOLD------*/
    /*----------------*/
    const boldRegExp = new RegExp(/\*\*[^*]+\*\*/, "g");
    let matchesBold = [...userText.matchAll(boldRegExp)];
    txtTmp = ""
    for (let i = 0; i < matchesBold.length; i++) {
        let boldText = matchesBold[i][0].replaceAll("*", "");
        for (
        let charToChange = 0;
        charToChange < boldText.length;
        charToChange++
        ) {

            let charCode = boldText.codePointAt(charToChange);
            if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
                if((charCode >= 65 && charCode <= 90)){
                    let code =
                    parseInt(bold_A, 16) +
                    parseInt(boldText.codePointAt(charToChange).toString(16), 16) -
                    parseInt("A".codePointAt(0));
                    txtTmp += String.fromCodePoint(code);
                }else{
                    let code =
                    parseInt(bold_a, 16) +
                    parseInt(boldText.codePointAt(charToChange).toString(16), 16) -
                    parseInt("a".codePointAt(0));
                    txtTmp += String.fromCodePoint(code); 
                }
            }else{
                txtTmp += boldText.charAt(charToChange);
            }
        
        }
        userText = userText.replace(matchesBold[i][0], txtTmp);
        txtTmp = "";
    }


    /*------------------*/
    /*------ITALIC------*/
    /*------------------*/
    const italicRegExp = new RegExp(/\*[^*]+\*/, "g");
    let matchesitalic = [...userText.matchAll(italicRegExp)];
    txtTmp = ""
    for (let i = 0; i < matchesitalic.length; i++) {
        let italicText = matchesitalic[i][0].replaceAll("*", "");
        for (
        let charToChange = 0;
        charToChange < italicText.length;
        charToChange++
        ) {

            let charCode = italicText.codePointAt(charToChange);
            if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)){
                if((charCode >= 65 && charCode <= 90)){
                    let code =
                    parseInt(italic_A, 16) +
                    parseInt(italicText.codePointAt(charToChange).toString(16), 16) -
                    parseInt("A".codePointAt(0));
                    txtTmp += String.fromCodePoint(code);
                }else{
                    let code =
                    parseInt(italic_a, 16) +
                    parseInt(italicText.codePointAt(charToChange).toString(16), 16) -
                    parseInt("a".codePointAt(0));
                    txtTmp += String.fromCodePoint(code); 
                }
            }else{
                txtTmp += italicText.charAt(charToChange);
            }
        
        }
        userText = userText.replace(matchesitalic[i][0], txtTmp);
        txtTmp = "";
    }

    return userText;
}





