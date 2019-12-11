export function TrackTimeLine(track) {
  const playHead = document.getElementById('playhead');
  const duration = track.duration;

  function timeUpdate() {
    const playPercent = (track.currentTime * 100) / duration;
    playHead.style.width = playPercent + '%';
  }

  track.addEventListener('timeupdate', timeUpdate, false);

  track.addEventListener('ended', () => {
    playHead.style.width = '1px';
  }, false);
}

export function ChangePlayTime(props, event) {
  const { songId } = props;
  const { songPrivacy } = props;

  if (!songId) {
    alert('Please, start listen the music in playlist');
    return;
  }

  const trackId = songPrivacy === 'default' ? 'audio' + songId : 'userAudio' + songId;
  const track = document.getElementById(trackId);
  const timeline = songPrivacy === 'default' ? document.getElementById('timeline') : document.getElementById('userTimeline');
  const playHead = songPrivacy === 'default' ? document.getElementById('playhead') : document.getElementById('userPlayhead');
  const duration = track.duration;

  const newPlayHeadWidth = event.clientX - getPosition(timeline);
  const playPercent = newPlayHeadWidth / timeline.offsetWidth;

  playHead.style.width = newPlayHeadWidth + 'px';
  track.currentTime = duration * playPercent;
}

function getPosition(el) {
  return el.getBoundingClientRect().left;
}

export function GetTrackTime(track) {
  const { duration } = track;
  const seconds = `${Math.round(duration) % 60}`;
  const secondsValue = seconds.length === 1 ? '0' + seconds : seconds;

  return `${Math.floor(Math.round(duration) / 60)}:${secondsValue}`;
}

export function getCurrentPlayTime(track, props) {
  track.addEventListener('timeupdate', () => {
    const { currentTime } = track;
    const seconds = `${Math.round(currentTime) % 60}`;
    const secondsValue = seconds.length === 1 ? '0' + seconds : seconds;

    props.dispatch({
      type: 'SET_CURRENT_PLAY_TIME',
      currentTrackTime: `${Math.floor(Math.round(currentTime) / 60)}:${secondsValue}`
    })
  }, false);
}
