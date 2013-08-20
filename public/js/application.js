$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $('#tweet').submit(function(event) {
    event.preventDefault()
    //get the text the person wanted to tweet
    tweet = $('input[name="tweet"]').val()
    console.log(tweet)
    
    //display a message letting the user know their twitter is being processed
    $('#tweet').append($('<h3 id="msg"> one moment please! </h3>'))

    //disable the form
    $('#tweet').prop('disabled', true)
    console.log($('#tweet').prop('disabled'))

    // alert('one moment please!')

    $.post('/tweet', {tweet: tweet}, function(response) {
      console.log(response)




      $('#msg').remove()
    })


  })
    
  	// $.post('/tweet', function(response) {
   //   console.log(response)

});
