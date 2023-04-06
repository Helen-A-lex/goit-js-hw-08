import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// const CURRENT_TIME_KEY = 'videoplayer-current-time';

// const iframe = document.querySelector('iframe');
// console.log(iframe);
// const player = new Player(iframe, {
//   id: 19231868,
//   width: 640,
// });

// const getCurrentTime = function (currentTime) {
//   const seconds = currentTime.seconds;
//   console.log(currentTime);

//   localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(seconds));
// };

// player.on('timeupdate', throttle(getCurrentTime, 1000));

// player.setCurrentTime(JSON.parse(localStorage.getItem(CURRENT_TIME_KEY)) || 0);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const currentTime = Number(localStorage.getItem('videoplayer-current-time'));

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
