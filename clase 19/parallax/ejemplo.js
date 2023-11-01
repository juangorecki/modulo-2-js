$(document).ready(function () {
    $window = $(window);
    $('#intro').height($window.height());
    $window.scroll(function () {
        $('div.background').each(function (index, item) {
            const $scroll = $(item);
            const yPos = -($window.scrollTop() / $scroll.data('speed'));
            const coords = '50% ' + yPos + 'px';
            $scroll.css({ backgroundPosition: coords });
        });
    });
});

//$(document) > $() modo que tiene jquery de llamar los elementos
// $('#intro') > llama al id (el signo pesos es de la libreria jquery)
//$('div.background') > llama a los elementos con la clase background
// each > recorrer
// -($window.scrollTop() va con el menos para que el efecto sea hacia arriba y no para baja