
let currentMovie = '';

   $(function() {

  // Open modal and fill movie title

  $('.reserve-btn').on('click', function() {
    $('#bookingModal').modal('show');
    var title = $(this).data('movie');
console.log(title)
    $('#movieTitle').val(title);

    $('.modal-overlay').fadeIn(200);

  });// Handle form submission

  $('#reservationForm').on('submit', function(e) {

    e.preventDefault();

    alert('¡Reserva confirmada para "' + $('#movieTitle').val() +

          '" en horario ' + $('#showtime').val() +

          ' con ' + $('#seats').val() + ' asientos!');

    $(this).trigger('reset');

    $('.modal-overlay').fadeOut(200);

  });

});

    function closeModal() {
        document.getElementById('modalOver1lay').classList.remove('active');
        document.body.style.overflow = 'auto';
        resetForm();
        }
