(function() {

    var time;

    BEM.DOM.decl('b-test', {

        onSetMod: {

            js: function() {

                var logger = this.findBlockInside('b-log'),
                    jQueryEvents = "click tap taphold swipe swipeleft swiperight scrollstart scrollstop orientationchange";

                this.bindToDoc(jQueryEvents, function(e) {

                    var log = [e.type, " event; tiarget: ", e.target.nodeName],
                        current = (new Date()).getTime();

                    time && log.push('; delta: ', current - time);
                    time = current;

                    logger.log(log.join(''));

                });

            }

        }

    });

}());