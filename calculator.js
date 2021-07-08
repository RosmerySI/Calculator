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
        screen.value = eval(screen.value);
    } catch (error) {
        screen.value = 'Error';
        setTimeout(() => {
            clean();
        }, 500);
    }
}



let buttonChange = document.getElementById('switch_label');

 buttonChange.onclick = function(e){    
  e.preventDefault
  
  document.body.classList.toggle('dark_theme')
 }