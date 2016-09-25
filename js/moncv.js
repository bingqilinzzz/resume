$(function() {
    $.ajax({
        url: "data.json",
    }).then(function(json) {
        new Vue({
            el: '#education',
            data: { educations: json.educations }
        });
        new Vue({
            el: '#work-experience',
            data: { works: json.educations }
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
        $('.resume').css('display', 'block');
        $('.loading').css('display', 'none');
        clearInterval(interval);
    });
});
