$(function() {
    var Index = {};
    Index = {
        init: function() {
            Index.str = '';
            Index.initBody();
            Index.bindEvents();
        },
        initBody: function() {
            $('.e-popover').popover();
        },
        bindEvents: function() {
            $(document).on('click', '#search_type>.btn-group', Index.handleSearchType);
            $(document).on('click', '#search_tools>.btn-group', Index.handleSearchTools);
        },
        handleSearchType: function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            Index.str = '';
            for (var i = 0; i < window.SEARCH_DATA[$(this).attr('data-type')].list.length; i++) {
                if (i == 0) {
                    $('#search').attr('placeholder', window.SEARCH_DATA[$(this).attr('data-type')].placeholder)
                }
                Index.str += '<div aria-label="searchTool" class="btn-group' +
                    (i == 0 ? ' active' : '') + '" role="group">' +
                    '<button class="btn btn-link" type="button">' +
                    window.SEARCH_DATA[$(this).attr('data-type')].list[i].name +
                    '</button></div>';
            }
            $('#search_tools').html(Index.str);
            $('#search_form').find('input[name="type"]').val($(this).attr('data-type'));
        },
        handleSearchTools: function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            window.open('search.html?keywords=' + $('#keywords').val() + '&type=' + $('#search_type>.btn-group.active').attr('data-type') + '&name=' + $(this).find('.btn').html());
        }
    };
    Index.init();
});