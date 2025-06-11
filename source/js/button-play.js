document.getElementById('play-button').addEventListener('click', () => {
  const videoContainer = document.getElementById('video-container');

  const iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.src = 'https://youtu.be/NeRFo07uBOE?si=ub9RkWpUSWZPXRnS';
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullscreen = true;
  iframe.frameBorder = '0';

  videoContainer.innerHTML = '';
  videoContainer.appendChild(iframe);
});
