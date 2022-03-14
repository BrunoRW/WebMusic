const video = document.querySelector("video");
const audio = document.querySelector("audio");

const playA = ()=> {
    audio.play();
}

const pauseA = ()=> {
    audio.pause();
}

let time;

const start = (e)=> {
    e.style.display = "none";
    video.play();
    const monitor = setInterval(()=>{
        audio.playbackRate = video.playbackRate;
        if(video.currentTime == time){  
            pauseA();
        } else {
            playA();
        }

        time = video.currentTime;
    },200)
}