

let element = document.querySelector('.header');
let footer = document.querySelector('.footer');
let counter = 0;
console.log(counter)

function changeColorBlue()  {
    element.style.backgroundColor = 'rgb(37, 70, 97)';
    footer.style.backgroundColor = 'rgb(37, 70, 97)';
    document.querySelector('.clickblue').innerHTML = 'Gray Theme';
    counter++;
    console.log(counter)
 
    }

function changeColorGray()  {
    element.style.backgroundColor = 'rgb(68, 66, 66)';
    footer.style.backgroundColor = 'rgb(68, 66, 66)';
    document.querySelector('.clickblue').innerHTML = 'Blue Theme';
    counter++
    
}

function changeColor() {
    if ( counter%2 == 0) {
        changeColorBlue()
    }
    else {
        changeColorGray()
    }
}

document.querySelector('.clickblue').onclick = changeColor





