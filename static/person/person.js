$(document).ready(function() {

  $.get('http://demo3809455.mockable.io/users/1', function(data) {
    buildPerson(data);
  });

});

function buildPerson(data) {
  $('.person__name').text(data.name);

  data.genres.forEach(function(genre) {
    $('.person__genres').append('<a class="tag is-info is-link">'+genre+'</a>');
  })

  $('.person__mentor').toggle(data.is_mentor);
}
