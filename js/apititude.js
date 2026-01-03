function submit() {
  const answer = document.getElementById('ans').value;
  let score = 0;

  if(answer == 8) {
    score = 10;
  }
  localStorage.setItem('apititude', score);
  logAction('aptitude test submitted');

  window.location.href = 'result.html'
}