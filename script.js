function btnclick(val){
    document.getElementById("btn").value += val
}

function clr(){
    document.getElementById("btn").value = ""
}

function rel(){
   var text= document.getElementById("btn").value
   var result = eval(text)
   document.getElementById("btn").value =result
}