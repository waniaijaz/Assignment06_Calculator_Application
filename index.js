let val = document.getElementById("res").value

let clck1 = document.getElementById("res")
let clck2 = document.getElementById("cal")
let facto = document.getElementById('fact')

facto.addEventListener("click", fact )

clck2.addEventListener("click", resu)
clck1.addEventListener("keyup" , result)

function result(event) {
   if(event.which === 13){
       let x = document.getElementById("res").value
       let y = eval(x)
       document.getElementById("res").value = y       
   }
   
}


function inp(val){

    document.getElementById("res").value += val 
}

function resu(){

    let x = document.getElementById("res").value
       let y = eval(x)
       document.getElementById("res").value = y
}

clr =  () => {
   
    document.getElementById("res").value = ""

}

function per(){
    let val = document.getElementById("res").value
    val = val / 100
    document.getElementById("res").value = val
}


function fact(){
    let val = document.getElementById("res").value
    let n = 1
    if(val == 0){
         document.getElementById("res").value = 1
    }
    else{
        for(var i = 1 ; i<= val ; i++){
            n = n * i
        }
        document.getElementById("res").value = n
        
    }
    
}

function root(){
  let val = document.getElementById("res").value
  val = Math.sqrt(val)
  document.getElementById("res").value = val
}