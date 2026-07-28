function setLanguage(language) {


const greek = document.querySelectorAll(".lang-el");

const english = document.querySelectorAll(".lang-en");



if(language === "en"){


greek.forEach(function(element){

element.style.display = "none";

});


english.forEach(function(element){

element.style.display = "inline";

});


}

else{


english.forEach(function(element){

element.style.display = "none";

});


greek.forEach(function(element){

element.style.display = "inline";

});


}


}
