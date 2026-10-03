document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isOpen = item.classList.contains('is-open');

      accordionHeaders.forEach(otherHeader => {
        otherHeader.parentElement.classList.remove('is-open');
      });

      if (!isOpen) {
        item.classList.add('is-open');
      }
    });
  });

  const playBtn = document.querySelector('.spotify-play-btn');
  const spotifyStatus = document.querySelector('.spotify-status-text');

  if (playBtn && spotifyStatus) {
    let isPlaying = false;
    playBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      spotifyStatus.textContent = isPlaying ? 'Now playing' : 'Last played';
      playBtn.querySelector('svg').setAttribute('viewBox', isPlaying ? '0 0 24 24' : '0 0 24 24');
    });
  }
});
