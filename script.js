 import {checkLen,encodeSeparate,encodingMatrixMulti} from "./encoding.js";     

 import {decodeMatrixMulti,decodeSeparate } from "./decoding.js";


// Encode Elements
const Emessage = document.querySelector("#Emessage");
const Ebtn = document.querySelector("#Ebtn");
const encodeContainer = document.querySelector("#encode");
const removeDecode = document.querySelector("#removeDecode");

// Decode Elements
const Dmessage = document.querySelector("#Dmessage");
const Dbtn = document.querySelector("#Dbtn");
const decodeContainer = document.querySelector("#decode");
const removeEncode = document.querySelector("#removeEncode");
 


function encode(){
    const valid = /^[a-zA-z\s]*$/; 
     
    if(Emessage.value.replace(/\s/g,"").length === 0){
        window.alert("Please Enter a Message")
    }


    else if( valid.test(Emessage.value)){
        let messageValue = Emessage.value.toUpperCase();
        messageValue = checkLen(messageValue);
        const messageLen = messageValue.length;
        let convertedCode =  encodeSeparate(messageValue,messageLen); 
        encodeContainer.innerText = encodingMatrixMulti(convertedCode);
        encodeContainer.style.display = "block";
    }

    else{
        window.alert("Please Enter only letters");
    }

    Emessage.value = "";
    
}

// Decryption

function decode(){

    const valid = /^[A-Z]*$/;
    let decodeValue = Dmessage.value;

    if(decodeValue.replace(/\s/g,"").length === 0){
        window.alert("Please Enter the Decoded Message");
    }

   else if(valid.test(decodeValue)){
        const decodeMatrix = decodeSeparate(decodeValue);
        decodeContainer.innerText = decodeMatrixMulti(decodeMatrix);
        decodeContainer.style.display = "block";  
   }

   else{
         window.alert("Please Enter the Message Only In Upper Case");
   }
   
   Dmessage.value = "";
}


function removeEncodeMessage(){
    encodeContainer.style.display = "none";
}

function removeDecodeMessage(){
    decodeContainer.style.display = "none";
}



// Event handlers

removeDecode.addEventListener('click',removeDecodeMessage);


removeEncode.addEventListener('click',removeEncodeMessage);

Emessage.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {encode() }
  });
Ebtn.addEventListener('click',encode);

Dmessage.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {decode() }
  });
Dbtn.addEventListener('click',decode);















