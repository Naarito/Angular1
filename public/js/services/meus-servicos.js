angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function ($resource) {
        return $resource('v1/fotos/:fotoId', null, {
            update: {
                method: 'PUT'
            },
            save: {
                method: 'POST'
            }
        });
    })

    .factory('cadastroDeFotos', function (recursoFoto, $q, $rootScope) {
        var servico = {};

        var evento = 'fotoCadastrada';

        servico.cadastrar = function (foto) {
            return $q(function (resolve, reject) {
                if (foto._id) {

                    recursoFoto.update({
                        fotoId: foto._id
                    }, foto, function () {
                        $rootScope.$broadcast(evento);
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' alterada com sucesso!',
                            inclusao: false
                        });

                    }, function (error) {

                        reject({
                            mensagem: 'Não foi possível alterar a foto ' + foto.titulo + ' !',
                            inclusao: false
                        })

                    });

                } else {

                    recursoFoto.save(foto, function () {
                        $rootScope.$broadcast(evento);
                        resolve({
                            mensagem: 'Foto ' + foto.titulo + ' adicionada com sucesso!',
                            inclusao: true
                        });

                    }, function (error) {

                        reject({
                            mensagem: 'Não foi possível adicionar a foto' + foto.titlo + '!',
                            inclusao: false
                        })

                    });

                }
            });
        };

        return servico;
    });
