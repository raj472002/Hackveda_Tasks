let display = document.getElementById('display');


// IT will return and html collection which is basically a list of all the buttons 
// in the html document 

let buttons = Array.from(document.getElementsByClassName('button'));


//map to check which button is clicked and take action according to that 
// add the event listener to the following 

buttons.map(button => {
    button.addEventListener('click', (e) => {
       switch(e.target.innerText){ 
        case 'C':
            display.innerText = "";
            break;
        case '←':

        if(display.innerText) {
            display.innerText = display.innerText.slice(0 , -1);
            
        }
        break;
        case '=':
            try {
                display.innerText = eval(display.innerText);
                
            } catch { 
                 display.innerText = "INVALID_EXPRESSION";
                
            }
            break;
            

        default:
            display.innerText+= e.target.innerText;
       }
    });
});