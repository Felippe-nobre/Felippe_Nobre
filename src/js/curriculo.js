document.getElementById('btn-download').addEventListener('click', function () {
  document.getElementById('btn-download').style.display = 'none';
  window.print();
  setTimeout(() => {
    document.getElementById('btn-download').style.display = 'block';
  }, 500);
});