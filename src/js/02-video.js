import Player from '@vimeo/player';
import throttle  from 'lodash.throttle';

const player = new Player('vimeo-player', {
    width: 640
});
//localStorage.clear();
const savedSettings = localStorage.getItem("videoplayer-current-time");
//console.log(savedSettings);
let parsedSettings = {};
if (savedSettings !== null) {
    try {
        parsedSettings = JSON.parse(savedSettings);
    } catch (error) {
        console.log(error.message);
    }
    
    player.setCurrentTime(parsedSettings.seconds).then(function (seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;

            default:
                // some other error occurred
                break;
        }
    });
}

const onTimeout = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};
const throttleOnTimeout = throttle(onTimeout, 500);
player.on('timeupdate', throttleOnTimeout);




