angular.module('pic', ['minhasDiretivas', 'ngAnimate', 'ngRoute', 'meusServicos']) //Cria um módulo sem dependências
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        //quando o usuário acessar o link /fotos estará, na verdade acessando o html principal.html, que utiliza o controlador FotosContoller

        $routeProvider.when('/fotos', {
            templateUrl: 'partials/principal.html',
            controller: 'FotosController'
        });

        //quando o usuário acessar o link /fotos/new estará, na verdade acessando o html foto.html, que utiliza o controlador FotoContoller

        $routeProvider.when('/fotos/new', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.when('/fotos/edit/:fotoId', {
            templateUrl: 'partials/foto.html',
            controller: 'FotoController'
        });

        $routeProvider.otherwise({
            redirectTo: '/fotos'
        });
    });
