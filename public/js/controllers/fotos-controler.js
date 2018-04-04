angular.module('pic').controller('FotosController', function ($scope, recursoFoto) {
    //$Scope faz com que as variáveis internas à função possam ser utilizadas

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFoto.query(function (fotos) {
        $scope.fotos = fotos;
    }, function (error) {
        console.log(error);
        $scope.mensagem = "Não foi possível obter as fotos";
    });

    $scope.remover = function (foto) {
        recursoFoto.delete({
            fotoId: foto._id
        }, function () {
            var indiceDaFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceDaFoto, 1);
            $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';
        }, function (error) {
            console.log(error);
            $scope.mensagem = 'Não foi possível remover a foto ' + titulo;
        });
    };
});
