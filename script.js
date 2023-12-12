const qS = (el)=> document.querySelector(el);

const clock = () =>{
    let date = new Date();
    let milliSeconds = date.getMilliseconds();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();

    qS('.seconds').style.transform = `translate(0,-50%) rotate(${(seconds + (milliSeconds/1000))*6}deg)`;
    qS('.minutes').style.transform = `translate(0,-50%) rotate(${(minutes + (seconds/60))*6}deg)`;
    qS('.hours').style.transform = `translate(0,-50%) rotate(${(hours + (minutes/60))*30}deg)`;

}


setInterval(clock,50);
