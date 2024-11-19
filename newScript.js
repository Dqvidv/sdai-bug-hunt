document.getElementById('funFactButton')?.addEventListener('click', function() {
    const funFact = document.getElementById('funfact');
    if (funFact) {
      funFact.style.display = (funFact.style.display === 'none' || funFact.style.display === '') ? 'block' : 'none';
    }
  });