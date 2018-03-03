$(document).ready(function() {

  $.get('https://demo3809455.mockable.io/users/1', function(data) {
    buildPerson(data);
  });

  $('.person__is-mentor').click(function() {
    $('.person__is-mentor + input').toggle($(this).find(':checked').length > 0);
  });

  $('.person__email').blur(function(e) {
    var isValid = /.+\@.+\..+/.test($(this).val());

    $('.person__email--invalid, .person__email--msg').toggle(!isValid);
    $('.person__email--valid').toggle(isValid);
  })

});

function buildPerson(data) {
  $('.person__name').text(data.name);

  data.genres.forEach(function(genre) {
    $('.person__genres').append('<a class="tag is-info is-link">'+genre+'</a>');
  })

  $('.person__mentor').toggle(data.is_mentor);
}
