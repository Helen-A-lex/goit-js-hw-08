import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// const player = new Player('handstick', {
//   id: 19231868,
//   width: 640,
// });

// player.on('play', function () {
//   console.log('played the video!');
// });

const iframe = document.querySelector('iframe');
iframe.addEventListener('click');
const player = new Vimeo.Player(iframe);
const onTimeUpdate = function (data) {
  {
    duration: 61.857;
    percent: 0.049;
    seconds: 3.034;
  }
};

player.on('timeupdate', onTimeUpdate);

player.setCurrentTime().then(function (title) {
  console.log('title:', title);
});
