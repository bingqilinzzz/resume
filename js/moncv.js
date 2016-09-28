$(function() {
    $('.lang .l').on('click', function() {
        $('.lang .l').each(function(index, el) {
            $(el).removeClass('on');
        });
        $(this).addClass('on');
        var lang = $(this).data('lang');
        startLoading();
        load(lang);
    });
});

var json = {}, resume;

resume = new Vue({
    el: '#resume',
    data: json
});

var render = function(data) {
    resume.$data = data;
    setTimeout(function() {
        $('.level').each(function(index, elem) {
            var level = parseInt($(elem).attr('data-level'));
            $(elem).find('i').each(function(index, elem) {
                if (index < level) $(elem).addClass('up');
            });
        });
        stopLoading();
    }, 500);
};
var load = function(lang) {
    var url = "data-" + lang + ".json";
    $.ajax({
        url: url,
    }).then(function(data) {
        render(data);
    });
};
load('en');
