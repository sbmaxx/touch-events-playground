BEM.DOM.decl('b-log', {

    log: function(message) {
        this.domElem.prepend(['<li>', message ,'</li>'].join(''));
    },

    clear: function() {
        this.domElem.html('')
    }

});