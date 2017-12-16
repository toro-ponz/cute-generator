function cute(count) {
  if (count < 1) {
    return 'かわいい';
  }

  return 'かわいい(' + cute(count - 1) + ')';
}

function getTwitterShareButton(text) {
  var twitter_share_button = '<a class="twitter-share-button" id="twitter-share-button" href="https://twitter.com/share" data-lang="ja" data-text="' + trimTextFitTwitter(text) + '" data-hashtags="かわいいジェネレーター" data-size="large" data-dnt="true"></a>';

  return twitter_share_button;
}

function trimTextFitTwitter(text) {
  if (text.length > 107) {
    return 'かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわいい(かわ……)))))))))))))))))'
  }

  return text;
}

window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));

$(function () {
  $('#generate').on('click', function () {
    var cuteness_count = $('#cuteness').val();

    var cuteness_text = cute(Number(cuteness_count));

    $('#cuteness-text').val(cuteness_text);

    $('.twitter-share-button-area').html(getTwitterShareButton(cuteness_text));
    twttr.widgets.load();
  });
});
