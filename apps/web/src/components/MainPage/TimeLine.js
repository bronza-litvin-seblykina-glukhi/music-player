export default class TimeLine {
  constructor(track, timeline, playhead) {
    this.track = track;
    this.timeline = timeline;
    this.playhead = playhead;
    this.duration = track.duration;
    this.timelineWidth = this.timeline.offsetWidth - this.playhead.offsetWidth;
    this.currentTime = track.currentTime;
  }

  updateTime() {
    let playPercent = this.timelineWidth * (this.currentTime / this.duration);
    this.playhead.style.width = playPercent + 'px';
  }
}
