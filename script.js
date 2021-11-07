const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play
async function selectMediaStream() {
  try {
    // use Screen Capture API to get a media stream
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    // set media stream as 'src' attribute of HTML video element
    videoElement.srcObject = mediaStream;
    // Play video once it is loaded
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log(err);
  }
}

button.addEventListener('click', async () => {
  // Disable Button
  button.disabled = true;
  // Start Picture-in-Picture
  await videoElement.requestPictureInPicture();
  // Reset button
  button.disabled = false;

});

selectMediaStream();