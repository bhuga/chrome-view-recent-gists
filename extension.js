(function() {
  chrome.extension.sendRequest({gist: "history"}, function(response) {
    window.historyResponse = response;
    list = $('<ul></ul>');
    list.addClass('gists');
    for (var i = 0; i < response.length; i++) {
      a = $('<a></a>');
      sha = (response[i].url.match(/gist.github.com\/(\d+)#?/))[1];
      title = (response[i].title.match(/(.*) — Gist/))[1]
      a.attr('href', response[i].url);
      a.text('gist: ' + sha);
      description = $('<span class=description></span>');
      description.text(' ' + title);
      li = $('<li></li>')
      li.append(a);
      li.append(description);
      list.append(li);
    }
    $('.secondary').append($('<h3>Recently Viewed Gists</h3>'))
    $('.secondary').append(list)
  });

}).call(this)
