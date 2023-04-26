document.addEventListener('DOMContentLoaded', function() {
  var modal = document.getElementById('modal');
  var modalBtn = document.getElementById('modal-btn');
  var closeBtn = document.getElementsByClassName('close')[0];

  modalBtn.onclick = function() {
    modal.style.display = 'block';
  };

  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
