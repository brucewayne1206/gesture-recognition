import * as fp from "fingerpose";

// describe victory gesture ✌️
const helloDescription = new fp.GestureDescription('hello');

for(let finger of [fp.Finger.Thumb, fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  helloDescription.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
  helloDescription.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
  helloDescription.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 0.9);
  helloDescription.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 0.9);
}

// describe victory gesture ✌️
const loveDescription = new fp.GestureDescription('love');

loveDescription.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
loveDescription.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
loveDescription.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
loveDescription.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);

loveDescription.addCurl(fp.Finger.Middle, fp.FingerCurl.HalfCurl, 0.9);
loveDescription.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);

loveDescription.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 0.9);
loveDescription.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);

loveDescription.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
loveDescription.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);
loveDescription.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpLeft, 1.0);
loveDescription.addDirection(fp.Finger.Pinky, fp.FingerDirection.DiagonalUpRight, 1.0);

loveDescription.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
loveDescription.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.9);
loveDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 0.9);
loveDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 1.0);
loveDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 1.0);

// describe victory gesture ✌️
const okDescription = new fp.GestureDescription('ok');

okDescription.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 1.0);
okDescription.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 0.9);

okDescription.addCurl(fp.Finger.Index, fp.FingerCurl.HalfCurl, 1.0);
okDescription.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 0.9);

for(let finger of [fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  okDescription.addCurl(finger, fp.FingerCurl.NoCurl, 1.0);
  okDescription.addDirection(finger, fp.FingerDirection.VerticalUp, 1.0);
  okDescription.addDirection(finger, fp.FingerDirection.DiagonalUpLeft, 1.0);
  okDescription.addDirection(finger, fp.FingerDirection.DiagonalUpRight, 1.0);
}


// describe thumbs up gesture 👍
const thumbsUpDescription = new fp.GestureDescription('thumbs_up');

// thumb:
// - curl: none (must)
// - direction vertical up (best)
// - direction diagonal up left / right (acceptable)
thumbsUpDescription.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
thumbsUpDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
thumbsUpDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpLeft, 0.9);
thumbsUpDescription.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalUpRight, 0.9);

// all other fingers:
// - curled (best)
// - half curled (acceptable)
// - pointing down is NOT acceptable
for(let finger of [fp.Finger.Index, fp.Finger.Middle, fp.Finger.Ring, fp.Finger.Pinky]) {
  thumbsUpDescription.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
  thumbsUpDescription.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
}

// require the index finger to be somewhat left or right pointing
// but NOT down and NOT fully up
thumbsUpDescription.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
thumbsUpDescription.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
thumbsUpDescription.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
thumbsUpDescription.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);

// describe victory gesture ✌️
const victoryDescription = new fp.GestureDescription('victory');

// index:
victoryDescription.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
victoryDescription.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
victoryDescription.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpLeft, 1.0);
victoryDescription.addDirection(fp.Finger.Index, fp.FingerDirection.DiagonalUpRight, 1.0);

// middle:
victoryDescription.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
victoryDescription.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
victoryDescription.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpLeft, 1.0);
victoryDescription.addDirection(fp.Finger.Middle, fp.FingerDirection.DiagonalUpRight, 1.0);

for(let finger of [fp.Finger.Thumb, fp.Finger.Ring, fp.Finger.Pinky]) {
  victoryDescription.addCurl(finger, fp.FingerCurl.FullCurl, 1.0);
  victoryDescription.addCurl(finger, fp.FingerCurl.HalfCurl, 0.9);
}

export { helloDescription, okDescription, loveDescription, thumbsUpDescription, victoryDescription };