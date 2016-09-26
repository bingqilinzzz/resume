$(function() {
    load('en');
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
var load = function(lang) {
    var url = "data-" + lang + ".json";
    $.ajax({
        url: url,
    }).then(function(json) {
        render(json);
    });
};
var render = function(json) {
    new Vue({
        el: '#education',
        data: { educations: json.educations }
    });
    new Vue({
        el: '#work-experience',
        data: { works: json.work }
    });
    new Vue({
        el: '#hobbies',
        data: { hobbies: json.hobbies}
    });
    new Vue({
        el: '#skillset',
        data: { skills: json.skills }
    });
    $('.level').each(function(index, elem) {
        var level = parseInt($(elem).attr('data-level'));
        $(elem).find('i').each(function(index, elem) {
            if (index < level) $(elem).addClass('up');
        });
    });
    setTimeout(function() {
        stopLoading();
    }, 1000);
};
