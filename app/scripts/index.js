$(function() {
    var Index = {};
    Index = {
        init: function() {
            Index.initBody();
        },
        initBody: function() {
            $('.e-popover').popover();
        }
    };
    Index.init();
});