const songs = ["kimetsu","rickAni"];
const titles = ["Kimetsu No Yaiba", "Rick Anime"];

const video = document.querySelector("video");
const audio = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.querySelector("h2");

let time;
let monitor;

let current = 0;


const playA = ()=> {
    audio.play();
}

const pauseA = ()=> {
    audio.pause();
}

const playNow = ()=> {
    let urlMp3   = `https://brunowotzke.ga/-PROJ-/music/songs/${songs[current]}/${songs[current]}.mp3`;
    let urlJpg   = `https://brunowotzke.ga/-PROJ-/music/songs/${songs[current]}/${songs[current]}.jpg`;
    let urlWebm = `https://brunowotzke.ga/-PROJ-/music/songs/${songs[current]}/${songs[current]}.webm`;
    
    
    audio.src = urlMp3;
    img.src = urlJpg;
    video.src = urlWebm;
    title.innerText = titles[current];

    // start and monitoring 
    
    video.play();
    clearInterval(monitor);
    monitor = setInterval(()=>{
        audio.playbackRate = video.playbackRate;
        if(video.currentTime == time){  
            pauseA();
        } else {
            playA();
        }
        time = video.currentTime;
    },200)
    
    console.log(`Current: ${current + 1}\nMax: ${songs.length}`)
}

playNow();


const next = ()=>{
    if(current < songs.length - 1){
        console.log("Próximo");
        current++;
        playNow();
    }
}

const before = ()=> {
    if(current > 0){
        console.log("Menos");
        current--;
        playNow();
    }
}
