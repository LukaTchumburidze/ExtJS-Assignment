Ext.define('SimpleApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onAddItem: function () {
        console.log('hi');
    },

    buildInitialTree: function (municipalities) {
        var data = {
            text: 'Ext JS',
            expanded: true,
            children: []
        };
        var emptyChild = {
            text: 'empty',
            expanded: true,
            children: []
        };

        for (let i = 0; i < municipalities.count(); i++) {
            var curMunicipality = municipalities.getAt(i);
            console.log(curMunicipality.getId());
            var curData = {
                text: curMunicipality.get('EngName'),
                id: curMunicipality.getId(),
                expanded: false,
                depth: 1,
                children: [emptyChild]
            };
            data.children.push(curData);
        }

        return data;
    },

    init: function () {
        console.log("abcde");
        var viewModel = this.getView('animal-views').getViewModel();
        console.log(viewModel);
        var treeView = this.getView().down('tree-view');

        console.log(viewModel);
        var municipalities = viewModel.data['municipalities'];
        console.log(municipalities);

        // for (let i = 0; i < municipalities.count(); i++) {
        //     console.log(municipalities.getAt(i));
        //     let animalStore = municipalities.getAt(i).children();
        //     animalStore.load();
        //     console.log(animalStore.count());
        //
        //     for (let j = 0; j < animalStore.count(); j++) {
        //         console.log(animalStore.getAt(j));
        //         let censusStore = animalStore.getAt(j).children();
        //         censusStore.load();
        //         console.log("censusStore: " + censusStore.count());
        //
        //         for (let k = 0; k < censusStore.count(); k++) {
        //             console.log(censusStore.getAt(k));
        //         }
        //     }
        // }

        var initialTreeStoreData = this.buildInitialTree(municipalities);
        console.log(initialTreeStoreData);

        console.log(treeView.getStore().setRootNode(initialTreeStoreData));
        console.log('End of stores!');
        console.log(treeView.getSelectionModel());
    },

    smth2: function () {
        console.log("Clicked!");
    }
});


