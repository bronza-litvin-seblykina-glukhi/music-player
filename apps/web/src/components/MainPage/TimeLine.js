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

  const trackId = songPrivacy === 'default' ? 'audio' + songId : '';
  const track = document.getElementById(trackId);
  const timeline = document.getElementById('timeline');
  const playHead = document.getElementById('playhead');
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

  return `${Math.floor(Math.round(duration) / 60)}:${Math.round(duration) % 60}`;
}