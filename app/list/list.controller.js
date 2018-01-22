(function () {
    "use strict";

    angular
        .module('todoapp')
        .controller('ListController', ListController);

    ListController.$inject = ['$scope', '$log', 'ListService'];

    /* @ngInject */
    function ListController($scope, $log, ListService) {

        var listCtrl = this;

        listCtrl.title = 'To Do Lists';
        listCtrl.items = ListService;
        listCtrl.newList = {};
        listCtrl.listItem = '';
        listCtrl.newList.items = [];
        listCtrl.addingItems = false;

        $scope.showModal = false;

       /*addEventListener('load', load, false);

        function load(){
            var body = document.getElementsByTagName("body")[0];
             var loader = document.getElementById("loader");
             var loaderOvly = document.getElementById("loader_overlay");
             loader.className = 'fadeOut';
             loaderOvly.className = 'fadeOut';
             body.className = 'loaded';

             if (window.FileReader) {
             document.getElementById('filename').addEventListener('change', handleFileSelect, false);
             } else {
             alert('This browser does not support FileReader');
             }

        };*/

        listCtrl.toggleModal = function(){
            $scope.showModal = !$scope.showModal;
            listCtrl.newItem = {};
        };

        listCtrl.revertAdding = function(){
            listCtrl.newItem = null;
        };

        listCtrl.add = function(form){
            if(form.$invalid){
                $window.alert("can't save: form not valid");
                return false;
            }

            //ADD TO FIREBASE
            console.log(listCtrl.newList);
            listCtrl.items.$add(listCtrl.newList);
            listCtrl.newList = null;
            $scope.showModal = !$scope.showModal;

            /*ListService.add(listCtrl.newList)
                .then(function(response){
                    listCtrl.items.push(listCtrl.newList);
                    console.log(listCtrl.items);
                    listCtrl.newList = null;
                    $scope.showModal = !$scope.showModal;
                })
                .catch(function(response){
                    $window.alert("problem saving");
                    $scope.showModal = !$scope.showModal;
                    $log.error(response.status);
                });*/

        };

        listCtrl.additem = function (e, form) {

            if (listCtrl.addingItems){
                if(!listCtrl.listItem){
                    alert('you must enter an item');
                    return false;
                }
                listCtrl.saveItem(form);
            }

            listCtrl.addingItems = !listCtrl.addingItems;
            e.innerHtml = (listCtrl.addingItems)? 'Add' : 'Add Item to List';
        };

        listCtrl.saveItem = function(form){
            listCtrl.newList.items.push( listCtrl.listItem );
            listCtrl.listItem = '';
        };

        listCtrl.removeList = function(index){
            //listCtrl.items.splice(index,1);
            listCtrl.items.$remove(index);
        };

        listCtrl.removeItem = function(indexList, indexItem){
            //var id = listCtrl.items[indexList].$id;
            console.log('vvv');
            //console.log(listCtrl.items);
            //console.log(indexList);
            //console.log(id);
            console.log(listCtrl.items[indexList]);
            //console.log(listCtrl.items[indexList].items);
            //console.log(indexItem);
            console.log(listCtrl.items[indexList].items[indexItem]);
            //console.log(indexList);
            //console.log(listCtrl.items[indexList]);
            //console.log(listCtrl.items[indexList].items);
            //console.log(indexItem);
            ///console.log(listCtrl.items[indexList].id);

           // console.log(listCtrl.items[indexList].child(indexItem));
            //listCtrl.child("items/" + id + "/items/").$remove(indexItem);
            listCtrl.items[indexList].items[indexItem] = null;
            listCtrl.items.$save();
            //listCtrl.items[indexList].items.$remove(indexItem);
            //listCtrl.items[indexList].items.splice(indexItem,1);
        };

        $scope.$watch('listCtrl.items',function(){
            //var total = listCtrl.items.length;
            //listCtrl.total = total;
        }, true);

        //activate();
        function activate() {
            var fbaseUrl = new Firebase('https://flickering-fire-936.firebaseio.com/items/');

            listCtrl.items = $firebaseArray(fbaseUrl);

            /*fbaseUrl.authWithPassword({
                email    : "don@mcgrathdesigns.com",
                password : "sundown"
            }, function(error, authData) {
                if (error) {
                    console.log("Login Failed!", error);
                } else {
                    console.log("Authenticated successfully with payload:", authData);
                }
            });*/

            //ListService.list();
            //.then(function(response){
                //listCtrl.items = response.data;
            //}).catch(function(response){
            //$log.error(response.status);
        //});
        };

        // handle the file uploader
        function handleFileSelect(evt) {
            var files = evt.target.files;
            var f = files[0];
            var reader = new FileReader();

            reader.onload = (function(theFile) {
                return function(e) {
                    document.getElementById('image_list').innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" width="50" />'].join('');
                };
            })(f);

            reader.readAsDataURL(f);
        };

        /*function activate() {
            listCtrl.total = 0;
            listCtrl.items = [
                {
                    "name": "List 1",
                    "tags": [],
                    "timestamp": 0,
                    "description": "",
                    "items": ['buy eggs and butter','go to DMV', 'call Dad & Mom']
                },
                {
                    "name": "List 2",
                    "tags": [],
                    "timestamp": 0,
                    "description": "",
                    "items": ['buy eggs and butter','go to DMV', 'call Dad & Mom']
                },
                {
                    "name": "List 3",
                    "tags": [],
                    "timestamp": 0,
                    "description": "",
                    "items": ['buy eggs and butter','go to DMV', 'call Dad & Mom']
                },
                {
                    "name": "List 4",
                    "tags": [],
                    "timestamp": 0,
                    "description": "",
                    "items": ['buy eggs and butter','go to DMV', 'call Dad & Mom']
                }
            ];

        }*/

    }

})();