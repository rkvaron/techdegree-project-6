const video = document.getElementById('myVideo');
const spans = document.querySelectorAll('span');
const transcript = document.getElementById('transcript');

video.addEventListener('timeupdate', () => {

  for (let i=0; i < spans.length; i +=1) {

    let currentTime = video.currentTime;
    let dataStart = spans[i].getAttribute('data-start');
    let dataEnd = spans[i].getAttribute('data-end');

      if(dataStart < currentTime && currentTime < dataEnd) {
        console.log('orange');
        spans[i].style.color = '#FFA500';
      } else if(currentTime = dataEnd){
        spans[i].style.color = '#000000';
      }
    }
});
