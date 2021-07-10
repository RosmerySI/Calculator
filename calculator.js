let screen = document.getElementById('screen-result');

function getData(ref){

    let value = ref.value;    
    screen.value += value;
}

function clean(){
    screen.value = '';
   
}

function calculate(){
    try {
        let prueba = eval(screen.value);
		if(isNaN(prueba)){
			let gif= document.getElementById("gif")
		}else{
			screen.value = eval(screen.value);
		}		
		
    } catch (error) {
	   screen.className="hide";
       let gif= document.getElementById("gif")
	   gif.className="show"
        setTimeout(() => {
        clean();
        }, 100);
		
    }

}

function sqrt(){
    
    screen.value = Math.sqrt(screen.value);

}

function percent(){
	screen.value=  (screen.value)
}

let buttonChange = document.getElementById('switch_label');

 buttonChange.onclick = function(e){    
  e.preventDefault
  
  document.body.classList.toggle('dark_theme')
 }