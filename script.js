let wordsList = [
    "typing is a skill that has become indispensable in today's digital age it involves the ability to input text or commands into a computer or other electronic devices using a keyboard whether you're writing an email creating a document coding software or just chatting with friends your typing proficiency can greatly impact your efficiency and accuracy",
    "tike any skill typing can be honed and improved with practice touch typing where you type without looking at the keyboard is a sought after skill various typing software and online courses can help you increase your typing speed and accuracy additionally learning keyboard shortcuts for common tasks can boost your productivity and make you a more efficient typist",
    "in the digital age typing is not limited to traditional keyboards virtual keyboards on smartphones and tablets have made typing on the go a common practice thumb typing and swipe gestures have become integral to our daily lives transforming the way we interact with our devices as we continue to embrace emerging technologies the art of typing will undoubtedly adapt and evolve further"
]

let quotes = [
    "\"The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.\"",
    "\"The greatest glory in living lies not in never falling, but in rising every time we fall. The way to get started is to quit talking and begin doing.\"",
    "\"The future belongs to those who believe in the beauty of their dreams. You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.\"",
    "\"It always seems impossible until it's done. Education is the most powerful weapon which you can use to change the world.\"",
    "\"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. Have the courage to follow your heart and intuition. They somehow already know what you truly want to become.\"",
];

let numbersSentences = [
    "Pi is a mathematical constant that approximately equals 3.14159265359. The value of pi has fascinated mathematicians for centuries due to its infinite and non-repeating decimal expansion. This number is integral in various mathematical equations, making it fundamental in the world of science and engineering. In cryptography, prime numbers are essential for secure encryption. These unique numbers have only two divisors: 1 and themselves.",
    "The world's population is estimated to be 7.9 billion people, highlighting the challenges and opportunities that lie ahead. To access a secure facility, individuals must enter a passcode followed by the # key. The year 2023 is projected to witness the company achieving $5.7 billion in revenue, representing a 15% increase from the previous year. The year 2050 is expected to bring a global population of 10 billion people, signaling the exciting developments on the horizon.",
    "Life is a journey full of challenges, shaping our character and growth. Finding moments of silence in our noisy world can be a precious gift. Art has the power to inspire, transform, and connect with the expressions of humanity. Each day offers a fresh canvas, new opportunities, and the chance to create, learn, and live fully. The symphony of life blends different melodies, contributing to the unique composition of our existence.",
];

let punctuationSentences = [
    "Life is a journey, and along the way, we face obstacles that challenge our strength and character. Embrace the path you're on, for it is unique and full of opportunities. Even when you face difficulties, remember that each obstacle is a stepping stone to your goals. Every day brings new experiences, new lessons, and new chances for growth. Make the most of your journey, and don't forget to enjoy the beauty along the way.",
    "The world can be a noisy place, with constant distractions and demands. Finding moments of silence can be a precious gift to your well-being. Silence allows you to reflect, to listen to your inner voice, and to recharge your spirit. In the stillness, you can find clarity and peace. Embrace the power of silence, and let it be your sanctuary in a busy world.",
    "Every day is a new canvas, a fresh opportunity to paint the masterpiece of your life. It's a chance to create, to learn, to love, and to live fully. The choices you make, the actions you take, and the moments you cherish are the brushstrokes that shape your journey. With each sunrise, you have the gift of a blank canvas. What you create is entirely up to you.",
    "The symphony of life is a blend of different melodies, each with its own rhythm and harmony. From the highs of joy to the lows of sorrow, each note contributes to the unique composition of your existence. Embrace the entire spectrum of emotions, for it is the contrast that gives life its depth and beauty. In the grand symphony of life, your experiences are the music that defines your journey.",
]


let n = 0

let wpm = 0

let startTyping = true

const MAIN = document.getElementsByClassName("main")[0]

const CURSOR = document.getElementById("cursor")

let userchoice = "words"

let errors = 0

let choicelist = wordsList

let timer;

let completed = false

let randomSen


const timeElement = document.getElementById("ti");
let timeLeft = 120;

function decrementTime() {
    if (timeLeft > 0) {
        timeLeft--;
        timeElement.textContent = timeLeft;
    } 
    else {
        showResults();
        clearInterval(decrementTime);
    }


    
}


function addTestSentence(clist){

    
    randomSen = clist[Math.floor(Math.random()*clist.length)]
    let rantestSentence = randomSen.split(" ")

    let Mainspans = ""

    for (let i=0; i<rantestSentence.length; i++){
        let spans = ""
        let word = rantestSentence[i]
        for (let j=0; j<word.length; j++){
            
            let span = `<span id="letter${j}" class="letter" >${word[j]}</span>`;

            if (i === 0){
                span =  `<span id="letter${j}" class="letter" >${word[j]}</span>`;
            }
            spans += span
        }
        Mainspans+= `<div id=word${i} class="word">${spans}</div>`
        if (i != rantestSentence.length-1){
            Mainspans+= `<span class="letter space"> </span>`
        }
    }


    MAIN.innerHTML = Mainspans
    document.getElementById('word0').getElementsByTagName("span")[0].classList.add("cursor")
    
}

function userChoice(){

    const LI = document.getElementsByClassName("li")

    for (let i = 0; i < LI.length; i++){

        LI[i].addEventListener("click", () => {

            LI[i].classList.add("choice");

            for (let j = 0; j < LI.length; j++){
                if (i !== j){
                    LI[j].classList.remove("choice")
                }
            };

            userchoice = LI[i].textContent

            if (userchoice === "words"){
                choicelist = wordsList
            }

            else if (userchoice === "quotes"){
                choicelist = quotes
            }

            else if (userchoice === "punctuation"){
                choicelist = punctuationSentences
            }

            else if (userchoice === "numbers"){
                choicelist = numbersSentences
            }

            addTestSentence(choicelist)
        })
    };
}


addTestSentence(choicelist)
userChoice()

let spanList = document.getElementsByClassName("letter")

window.addEventListener("keydown", function (ev){
    if (n < randomSen.length && timeLeft !== 0){
        if (ev.key !== "Enter" && ev.key !== "Backspace" && ev.key != "Shift" && ev.key != "CapsLock" && ev.key != "Backspace" && ev.key != "Control" && ev.key != "Tab" && ev.key != "Alt" && ev.key != "Escape" && ev.key != "ArrowUp" && ev.key != "ArrowDown" && ev.key != "ArrowLeft" && ev.key != "ArrowRight" && ev.key != "Enter" && ev.key != "Delete" && ev.key != "End" && ev.key != "Home" && ev.key != "Insert" && ev.key != "Meta"){
        
        if (ev.key === spanList[n].textContent){
            spanList[n].style.color = "#D1D0C5"
            wpm++;
        }

        else {

            if (ev.key !== " " && spanList[n].textContent === " "){
                spanList[n].style.backgroundColor = "#ca47544e"

            }

            errors++;
            wpm--;

            console.log(errors)

            spanList[n].style.color = "#ca4754"
        }

        if (startTyping){
            this.document.getElementsByClassName("nav")[0].style.opacity = "0"
            this.document.getElementsByClassName("timer")[0].style.opacity = "1"
            timer = setInterval(decrementTime,1000)
            startTyping = false
        }

        n++;
        spanList[n-1].classList.remove("cursor")
        
        if (n < randomSen.length)
        {spanList[n].classList.add("cursor")}

        
        if (n === randomSen.length){
            completed=true
            this.clearInterval(timer)
        }
        

    }}

    showResults();

})

function showResults(){
    if (completed || timeLeft === 0){
        document.querySelector(".result").classList.add("up")
        document.querySelector("#error").textContent = errors
        document.querySelector("#wpm").textContent = Math.floor(wpm/5)
    }
}

window.addEventListener("keydown" , function (ev){

    if (ev.key === "Backspace" && timeLeft !== 0){
        wpm--;
        ev.preventDefault()

        if (n>0 && n < randomSen.length){
            spanList[n].classList.remove("cursor")
            spanList[n-1].classList.add("cursor")
            n--;
            spanList[n].style.color = "#636669"
            spanList[n].style.backgroundColor = "transparent"
        }

    }


})

const restartElement = document.getElementsByClassName('restart')[0];

restartElement.addEventListener('click', function() {

    restartElement.style.animation = 'rotate 1s forwards ease-in-out';

    restartElement.addEventListener('animationend', function() {
        restartElement.style.animation = '';
    });

    document.getElementsByClassName("nav")[0].style.opacity = "1"
    document.getElementsByClassName("timer")[0].style.opacity = "0"
    addTestSentence(choicelist)
    n=0
    startTyping = true
    clearInterval(timer)
    timeLeft = 120
    timeElement.textContent = timeLeft;
    errors = 0
    document.querySelector(".result").classList.remove("up")
    completed = false
    wpm = 0
});
