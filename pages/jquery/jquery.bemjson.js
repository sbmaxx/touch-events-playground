({
    block: 'b-page',
    title: 'jquery',
    head: [
        { elem: 'css', url: 'jquery.css' },
        { elem: 'js', url: 'http://yandex.st/jquery/1.7.2/jquery.min.js' },
        { elem: 'js', url: 'jquery.js' }
    ],
    content: [
        {
            block: 'b-test'
        },
        {
            block: 'b-test-popup',
            js: true
        }
    ]
})