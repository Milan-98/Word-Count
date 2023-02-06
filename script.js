let selection1 = document.querySelector("#main");
let selection2 = document.querySelector(".output");
let milan;


selection1.addEventListener("input",function(){
    milan = this.value;
    let ka = milan.split(" ");
    ka = ka.filter(function(e){
        return e!="";
    });
    
    
    selection2.value=`${ka.length} words and ${milan.length}`


    
});

