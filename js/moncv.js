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
var json = {}, educations, works, hobbies, skills, projects;
educations = new Vue({
    el: '#education',
    data: json
});
works = new Vue({
    el: '#work-experience',
    data: { works: json.works }
});
hobbies = new Vue({
    el: '#hobbies',
    data: { hobbies: json.hobbies}
});
skills = new Vue({
    el: '#skillset',
    data: { skills: json.skills }
});
projects = new Vue({
    el: '#projects',
    data: { projects: json.projects }
});
var render = function(data) {
    educations.$data = data;
    works.$data = data;
    hobbies.$data = data;
    skills.$data = data;
    projects.$data = data;
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
