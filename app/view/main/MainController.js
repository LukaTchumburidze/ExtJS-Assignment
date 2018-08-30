Ext.define('SimpleApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onAddItem: function () {
        console.log('hi');
    },

    init: function () {
        console.log ("abcde");
        var viewModel = this.getView('animal-view').getViewModel();
        console.log(viewModel);
        var treeView = this.getView().down('tree-view');

        console.log (viewModel);
        var municipalities = viewModel.data['municipalities'];
        console.log (municipalities);

        for (let i = 0; i < municipalities.count(); i ++) {
            console.log(municipalities.getAt(i));
            let animalStore = municipalities.getAt(i).children();
            animalStore.load();
            console.log(animalStore.count());

            for (let j = 0; j < animalStore.count(); j++) {
                console.log(animalStore.getAt(j));
                let censusStore = animalStore.getAt(j).children();
                censusStore.load();
                console.log("censusStore: " + censusStore.count());

                for (let k = 0; k < censusStore.count(); k++) {
                    console.log(censusStore.getAt(k));
                }
            }
        }

        console.log ('End of stores!');
        console.log (treeView.getSelectionModel());
        console.log (treeView.getStore());
    },

    smth2: function () {
        console.log("Clicked!");
    }
});


