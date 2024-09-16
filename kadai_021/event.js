const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const h2Text = document.getElementById('text');

  setTimeout(() => {
    h2Text.textContent = 'ボタンをクリックしました';
  }, 2000);
});