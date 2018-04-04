angular.module('pic').controller('FotoController', function ($scope, cadastroDeFotos, recursoFoto, $routeParams) {
    $scope.foto = {}; //objeto vazio, não é um array pois não queremos pegar a lista completa, mas sim o formulário preenchido.
    $scope.mensagem = '';

    if ($routeParams.fotoId) {

        recursoFoto.get({
            fotoId: $routeParams.fotoId
        }, function (foto) {
            $scope.foto = foto;
        }, function (error) {
            $scope.mensagem = "Não foi possível obter a foto";
        });
    }

    $scope.submeter = function () {
        console.log($scope.foto);
        if ($scope.formulario.$valid) {

            cadastroDeFotos.cadastrar($scope.foto)
                .then(function (dados) {
                    $scope.mensagem = dados.mensagem;
                    if (dados.inclusao) {
                        $scope.foto = {};
                        $scope.formulario.$setPristine();
                    }

                })
                .catch(function (dados) {
                    $scope.mensagem = dados.mensagem;
                });
        }
    };

});
