$(function() {
    $('.level').change(function() {
        console.log('change');
    });
    $('.level').each(function(index, elem) {
        var level = parseInt($(elem).attr('data-level'));
        $(elem).find('i').each(function(index, elem) {
            if (index < level) $(elem).addClass('up');
        });
    });
});
new Vue({
    el: '#work-experience',
    data: {
        works: [
            {
                start: '2015/10/12',
                end: '2016/09/12',
                company: 'BiliBili',
                position: 'front-end',
                responsebility: 'Under direct supervision, processes routine orders for material/merchandise or handles part of a more complex order processing system. May follow orders from placement to delivery, using a non-complex manual or computerized order processing system. Maintains records of orders, prices, inventory, and related data under well-defined procedures. Typically requires a high school education or equivalent and less than two years of related experience.'
            },
            {
                start: '2015/10/12',
                end: '2016/09/12',
                company: 'Glendale, CA',
                position: 'front-end|product mangement',
                responsebility: 'Assigned client cases, Executive Customer Communications, Escalated Customer Complaints and Legal customer issues in a professional and timely manner. When case volume mandates, provide support to the CR department by handling client cases. In addition be the designated back up for Client Cars. '
            },
            {
                start: '2015/10/12',
                end: '2016/09/12',
                company: 'BiliBili',
                position: 'front-end',
                responsebility: 'Under direct supervision, processes routine orders for material/merchandise or handles part of a more complex order processing system. May follow orders from placement to delivery, using a non-complex manual or computerized order processing system. Maintains records of orders, prices, inventory, and related data under well-defined procedures. Typically requires a high school education or equivalent and less than two years of related experience.'
            }
        ]
    }
});
new Vue({
    el: '#skillset',
    data: {
        skills: [
            {name: 'photoshop', level: 4},
            {name: 'jQuery', level: 5},
            {name: 'CSS', level: 4},
            {name: 'PHP', level: 4},
            {name: 'Mysql', level: 3},
            {name: 'Node.js', level: 3},
            {name: 'HTML', level: 3},
            {name: 'Perl', level: 1}
        ]
    }
});
