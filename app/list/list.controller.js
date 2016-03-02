(function () {
    "use strict";

    angular
        .module('todoapp')
        .controller('ListController', ListController);

    ListController.$inject = ['$scope'];

    /* @ngInject */
    function ListController($scope) {

        var listCtrl = this;

        listCtrl.title = 'To Do Lists';
        $scope.showModal = false;

        $scope.toggleModal = function(){
            $scope.showModal = !$scope.showModal;
        };

        $scope.savelist = function(){
            var listname = '',
                listtags = [],
                listtimestmp = '',
                listdescript = '',
                listitems = [];
            console.log($scope);
            // add new list to model
            listCtrl.items.push({
                'name': listname,
                'tags': listtags,
                'timestamp': listtimestmp,
                'description': listdescript,
                'items': listitems
            });



           var item_num = listCtrl.items.length - 1;

            for( var i=0; i<document.saveList.elements.length; i++ ) {
                var fieldName = document.saveList.elements[i].name;
                var fieldValue = document.saveList.elements[i].value;

                switch(fieldName) {
                    case 'name':
                        listname = (fieldValue !== '')? fieldValue : '';
                        listCtrl.items[item_num].name = listname;
                        break;
                    case 'description':
                        listdescript = (fieldValue !== '')? fieldValue : '';
                        listCtrl.items[item_num].description = listdescript;
                        break;
                    case 'tags':
                        listtags = (fieldValue.length !== 0)? fieldValue : '';
                        listCtrl.items[item_num].tags = listtags;
                        break;
                    case 'timestamp':
                        listtimestmp = (fieldValue !== '')? fieldValue : '';
                        listCtrl.items[item_num].items = listtimestmp;
                        break;
                    default:
                    //do nothing
                }
                // populate list items array
                var fieldNameStart = "item";
                if (fieldName.substring(0, fieldNameStart.length) === fieldNameStart) {
                    var listitem = (fieldValue !== '')? fieldValue : '';
                    listCtrl.items[item_num].items.push(listitem);
                };
            }
            $scope.showModal = !$scope.showModal;
            console.log(listCtrl.items);

        };

        /*$scope.additem = function () {
            $scope.itemplaceholder = 'List Item';
            console.log(listCtrl.items);
            var item_num = listCtrl.items.length + 1,
                input = '<input type="text" placeholder="{{ itemplaceholder }}" ng-model="items[ item_num ].items[]">';

            console.log(listCtrl.items);
        };
*/
        addEventListener('load', load, false);

        function load(){
            var body = document.getElementsByTagName("body")[0];
            var loader = document.getElementById("loader");
            var loaderOvly = document.getElementById("loader_overlay");
            loader.className = 'fadeOut';
            loaderOvly.className = 'fadeOut';
            body.className = 'loaded';
        };

        /*listCtrl.remove = function(index){
            listCtrl.items.splice(index,1);
        };*/

        $scope.$watch('listCtrl.items',function(){
            var total = listCtrl.items.length;
            listCtrl.total = total;
        }, true);

        activate();

        ////////////////

        function activate() {
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

        }

    }

})();