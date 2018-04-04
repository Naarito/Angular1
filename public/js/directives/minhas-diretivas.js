 angular.module('minhasDiretivas', [])
     .directive('meuPainel', function () {
         var ddo = {}; //Cria um directive definition object

         ddo.restrict = "AE"; //libera o uso do objeto como Atributo (A) ou Elemento (E);
         //Atributo <div meu-painel></div> 
         //Elemento <meu-painel></meu-painel>

         ddo.scope = { //escopo interno da diretiva
             //titulo: '@titulo', OU titulo: '@' (recebe variavel de mesmo nome)
             titulo: '@',
             url: '@'
         };

         ddo.transclude = true;

         ddo.templateUrl = 'js/directives/meu-painel.html';

         return ddo;
     })

     .directive('meuBotaoPerigo', function () {
         var ddo = {}; //Cria um directive definition object

         ddo.restrict = "E"; //libera o uso do objeto como Atributo (A) ou Elemento (E);
         //Atributo <div meu-painel></div> 
         //Elemento <meu-painel></meu-painel>

         ddo.scope = { //escopo interno da diretiva
             //titulo: '@titulo', OU titulo: '@' (recebe variavel de mesmo nome)
             nome: '@',
             acao: '&' //carrega a expressão, encaixando-a no contexto do controller
         };

         ddo.template = '<button ng-click="acao(foto)" class="btn btn-danger btn-block margem-botoes">{{nome}}</button>';

         return ddo;
     })

     .directive('minhaFoto', function () {
         var ddo = {};

         ddo.restrict = "AE";

         ddo.scope = {
             titulo: '@', //Esta parte do código é responsável por capturar os dados gerados no escopo.
             url: '@'
         };

         ddo.transclude = true;

         ddo.templateUrl = 'js/directives/minha-foto.html';


         return ddo;
     })
     .directive('meuFocus', function () {
         var ddo = {};

         ddo.restrict = "A";

         ddo.link = function (scope, element) {
             scope.$on('fotoCadastrada', function () {
                 element[0].focus();
             });
         };

         return ddo;
     })
     .directive('meusTitulos', function () {
         var ddo = {};
         ddo.restrict = 'E';
         ddo.template = '<ul><li ng-repeat="titulo in titulos" class="list-unstyled" >{{titulo}}</li></ul>';

         ddo.controller = function ($scope, recursoFoto) {
             recursoFoto.query(function (fotos) {
                 $scope.titulos = fotos.map(function (foto) {
                     return foto.titulo;
                 });
             });
         };
         return ddo;
     });
