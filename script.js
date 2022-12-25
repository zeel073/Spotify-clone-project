console.log('hello world')

let songs =[
    {songpath: 'Songs/1.mp3'},
    {songpath: 'Songs/2.mp3'},
    {songpath: 'Songs/3.mp3'},
    {songpath: 'Songs/4.mp3'},
    {songpath: 'Songs/5.mp3'},
    {songpath: 'Songs/6.mp3'},
    {songpath: 'Songs/7.mp3'},
    {songpath: 'Songs/8.mp3'},
    {songpath: 'Songs/9.mp3'},
    {songpath: 'Songs/10.mp3'}
]
MakeAllPlays = () =>{
        songlist.forEach(element => {
            element.getElementsByTagName('i')[0].classList.remove('fa-circle-pause')
            element.getElementsByTagName('i')[0].classList.add('fa-circle-play')
        });
    }
    let htwo = document.querySelector('#htwo')
    let songlist = document.querySelectorAll('.firstsong')
    
    // audioElement = new Audio('1.mp3')
    let audioElement= new Audio()
    // audioElement.src = '6.mp3'
    // document.getElementById('number').innerHTML = audioElement.duration/100
let masterplay = document.getElementById('masterplay')
let backward = document.getElementById('backward')
let forward = document.getElementById('forward')
masterPlayIconPlays =()=>{
    masterplay.classList.remove('fa-circle-play')
    masterplay.classList.add('fa-circle-pause')
}
masterPlayIconPause =()=>{
    masterplay.classList.remove('fa-circle-pause')
    masterplay.classList.add('fa-circle-play')
}
songlist.forEach(element => {
    element.getElementsByTagName('i')[0].addEventListener('click', (e)=>{
        songListIconPlays =()=>{
            element.getElementsByTagName('i')[0].classList.remove('fa-circle-play')
            element.getElementsByTagName('i')[0].classList.add('fa-circle-pause')
        }
        songListIconPause =()=>{
            element.getElementsByTagName('i')[0].classList.remove('fa-circle-pause')
            element.getElementsByTagName('i')[0].classList.add('fa-circle-play')
        }
        masterPlayButtonPlay =()=>{
            MakeAllPlays();
            songListIconPlays();
             masterPlayIconPlays();
             audioElement.play()
        }
        masterPlayButtonPause=()=>{
            songListIconPause();
            masterPlayIconPause();
                audioElement.pause()
        }
        htwo.innerHTML = element.getElementsByTagName('h2')[1].innerHTML
        index = parseInt(e.target.id)
        if( element.getElementsByTagName('i')[0].classList.contains('fa-circle-play') || audioElement.paused || audioElement.currentTime <= 0)
        {
            // console.logSongs/('${index}.mp3')
            audioElement.src = `Songs/${index+1}.mp3`
            audioElement.currentTime = 0;
            masterPlayButtonPlay();
            // audioElement.src = 'Songs/${index+1}.mp3'
        }
        else{
            masterPlayButtonPause();
        }
        console.log(index)
    })
});


backward.addEventListener('click', ()=>{
            if(index>0){
            index-=1;
            audioElement.src = `Songs/${index+1}.mp3`
            audioElement.currentTime = 0;
            MakeAllPlays(); 
            masterPlayIconPlays();
            document.getElementById(`${index}`).classList.remove('fa-circle-play')
            document.getElementById(`${index}`).classList.add('fa-circle-pause')
            audioElement.play()
            }
            else{
            index=9;
            audioElement.src = `Songs/${index+1}.mp3`
            audioElement.currentTime = 0;
            MakeAllPlays(); 
            masterPlayIconPlays();
            document.getElementById(`${index}`).classList.remove('fa-circle-play')
            document.getElementById(`${index}`).classList.add('fa-circle-pause')
            audioElement.play()
            }
})

forward.addEventListener('click', ()=>{
            if(index<9){
            index+=1;
            audioElement.src = `Songs/${index+1}.mp3`
            audioElement.currentTime = 0;
            MakeAllPlays(); 
            masterPlayIconPlays();
            document.getElementById(`${index}`).classList.remove('fa-circle-play')
            document.getElementById(`${index}`).classList.add('fa-circle-pause')
            audioElement.play()
            }
            else{
            index=0;
            audioElement.src = `Songs/${index+1}.mp3`
            audioElement.currentTime = 0;
            MakeAllPlays(); 
            masterPlayIconPlays();
            document.getElementById(`${index}`).classList.remove('fa-circle-play')
            document.getElementById(`${index}`).classList.add('fa-circle-pause')
            audioElement.play()
            }
})
 
masterplay.addEventListener('click', ()=>{
            if(audioElement.paused || audioElement.currentTime <= 0){
                // masterPlayButtonPlay();
                // console.log('1')
                MakeAllPlays();
            // songListIconPlays();
            document.getElementById(`${index}`).classList.remove('fa-circle-play')
            document.getElementById(`${index}`).classList.add('fa-circle-pause')
            masterPlayIconPlays();
            audioElement.play()
        }
        else{
            // masterPlayButtonPause();
            document.getElementById(`${index}`).classList.remove('fa-circle-pause')
            document.getElementById(`${index}`).classList.add('fa-circle-play')
            masterPlayIconPause();
            audioElement.pause()
                // console.log('2')
            }
        })
        let progressbar = document.getElementById('progressbar')
   
        audioElement.addEventListener('timeupdate', ()=>{
            // console.log('time updated')
            let progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    // console.log(progress)
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = (progressbar.value*audioElement.duration)/100
})