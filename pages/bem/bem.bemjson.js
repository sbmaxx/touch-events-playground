({
    block: 'b-page',
    title: 'bem',
    head: [
        { elem: 'css', url: 'bem.css' },
        { elem: 'js', url: 'http://yandex.st/jquery/1.7.2/jquery.min.js' },
        { elem: 'js', url: 'bem.js' }
    ],
    content: [
        {
            block: 'b-test'
        },{
            block: 'b-test-popup',
            js: true
        }
    ]
})