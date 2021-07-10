let screen = document.getElementById('screen-result');
let gif= document.getElementById("gif")
let secondscreen= document.getElementById("secondscreen");
function getData(ref){

    let value = ref.value;    
    screen.value += value;
}

function clean(){
    screen.value = '';
	secondscreen.className = "hide";
	gif.className="hide"
	screen.className="";
	
	
   
}

function calculate(){
	try {
		let test = eval(screen.value);
		if(isNaN(test)){
			screen.className="hide";       
			   gif.className="show"	
		}else{
			secondscreen.className = "show";
			secondscreen.value = screen.value;
			screen.value = test;
		}		
		
	} catch (error) {
	   screen.className="hide";       
	   gif.className="show"	
	}	
}

function sqrt(){
    
    try {
        let test = Math.sqrt(screen.value);
		if(isNaN(test)){
			screen.className="hide";       
	   		gif.className="show"
		}else{
			screen.value = test.toFixed(4);
		}		
		
    } catch (error) {
	   screen.className="hide";       
	   gif.className="show"		
    }
}

function percent(){
	try {
        let test = screen.value/100 ;
		if(isNaN(test)){
			screen.className="hide";       
	   		gif.className="show"
		}else{
			screen.value = test;
		}		
		
    } catch (error) {
	   screen.className="hide";       
	   gif.className="show"		
    }	
}

function plusminus(){
	try {
        let test = -(screen.value);
		if(isNaN(test)){
			screen.className="hide";       
	   		gif.className="show"
		}else{
			screen.value = test;
		}		
		
    } catch (error) {
	   screen.className="hide";       
	   gif.className="show"		
    }	
}

let buttonChange = document.getElementById('switch_label');

 buttonChange.onclick = function(e){    
  e.preventDefault
  
  document.body.classList.toggle('dark_theme')
 }