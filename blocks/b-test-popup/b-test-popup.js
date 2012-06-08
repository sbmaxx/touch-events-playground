BEM.DOM.decl('b-test-popup', {

    _onTap: function() {
        this.domElem.css('display', 'none');
    }

},{

    live: function() {

        this.liveBindTo('tap', function() {
            this._onTap();
        });

    }

});