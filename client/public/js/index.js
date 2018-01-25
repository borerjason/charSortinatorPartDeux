$(document).ready(() => {
  $('button').click((event) => {
    event.preventDefault();
    const word = $('#word').val();
    window.fetchWord(word)
      .then(((response) => {
        $('table').append(`<tr><td>${word}</td><td>${response.sorted}</td></tr>`);
      }));
    $('input').val('');
  });
});
