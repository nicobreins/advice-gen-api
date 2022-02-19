const DICE = document.getElementById('dice');
const ADVICEEL = document.getElementById('advice');
const ADVICECOUNT = document.getElementById('adv-count');
const DICEIMG = document.getElementById('dice-img');


DICE.onclick = () =>{
    randomAdvice();

    DICEIMG.classList.remove('active');
    void DICEIMG.offsetWidth;
    DICEIMG.classList.add('active'); 
}

const randomAdvice = ()=>{
    const xhr = new XMLHttpRequest();
    const url = `https://api.adviceslip.com/advice`;
    
    xhr.responseType = 'json';
    
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            // console.log(xhr.response.slip);
            ADVICECOUNT.innerText = xhr.response.slip.id;
            ADVICEEL.innerText = xhr.response.slip.advice;
        }
    };
    
    xhr.open('GET', url);
    xhr.send(); 
}

randomAdvice();
