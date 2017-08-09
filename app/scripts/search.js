$(function() {
    var Search = {};
    Search = {
        init: function() {
            Search.keywords = Search.getUrlPara('keywords');
            Search.type = Search.getUrlPara('type');
            Search.name = Search.getUrlPara('name');
            Search.str = '';
            Search.initBody();
            Search.bindEvents();
        },
        initBody: function() {
            $('#keywords').val(Search.keywords);
            Search.initSearchType();

        },
        bindEvents: function() {
            $(document).on('keydown', '#keywords', Search.handleSearch);
            $(document).on('click', '#search_type_list>.menu-item>.menu-link', Search.handleSearchType);
            $(document).on('click', '#search_tools>.nav-item>.nav-link', Search.handleSearchTool);
        },
        handleSearchTool: function() {
            $('#bs-navbar-collapse').removeClass('in');
            Search.name = $(this).html();
            Search.initSearchType();
        },
        handleSearchType: function() {
            $('#bs-navbar-collapse').removeClass('in');
            $('#search_type').html($(this).html());
            Search.type = $(this).attr('data-type');
            Search.name = '';
            Search.initSearchType();
        },
        initSearchType: function() {
            Search.str = '';
            for (var key in window.SEARCH_DATA) {
                if (key == Search.type) {
                    $('#keywords').attr('placeholder', window.SEARCH_DATA[key].placeholder);
                    $('#search_type').html(window.SEARCH_DATA[key].name)
                    for (var i = 0; i < window.SEARCH_DATA[key].list.length; i++) {
                        if (Search.name && window.SEARCH_DATA[key].list[i].name == Search.name) {
                            $('#search_iframe').attr('src', window.SEARCH_DATA[key].list[i].site.replace('keywords', Search.keywords));
                        }
                        if (!Search.name && i == 0) {
                            $('#search_iframe').attr('src', window.SEARCH_DATA[key].list[i].site.replace('keywords', Search.keywords));
                        }
                        Search.str += '<li class="nav-item' + ((!Search.name && i == 0) || (Search.name && window.SEARCH_DATA[key].list[i].name == Search.name) ? ' active' : '') + '"><a class="nav-link">' + window.SEARCH_DATA[key].list[i].name + '</a></li>'
                    }
                    $('#search_tools').html(Search.str);
                }
            }
        },
        handleSearch: function() {
            if (event.keyCode == '13') {
                Search.keywords = $(this).val();
                Search.initSearchType();
            }
        },
        getUrlPara: function(name) {
            var paramsArr = window.location.search.substr(1).split('&'),
                params = {}, i;
            for (i = 0; i < paramsArr.length; i++) {
                var s = paramsArr[i].split('='),
                    k = s[0],
                    v = s[1] && decodeURIComponent(s[1]);
                    if (v && k in params) {
                        params.push(v)
                    }
                    if (v && !(k in params)) {
                        params[k] = [v];
                    }
            }
            return params[name] ? params[name].join('') : '';
        }
    };
    Search.init();
});