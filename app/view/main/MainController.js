Ext.define('SimpleApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    buildInitialTree: function (municipalities) {
        let data = {
            text: 'Main Node',
            expanded: true,
            children: []
        };
        let emptyChild = {
            text: 'empty',
            expanded: true,
            children: []
        };

        for (let i = 0; i < municipalities.count(); i++) {
            let curMunicipality = municipalities.getAt(i);
            data.children.push({
                text: curMunicipality.get('engName'),
                id: curMunicipality.getId(),
                expanded: false,
                depth: 1,
                children: [emptyChild]
            });
        }

        return data;
    },

    init: function () {
        let viewModel = this.getView('animal-views').getViewModel();
        let treeView = this.getView().down('tree-view');
        let municipalities = viewModel.data['municipalities'];

        var me = this;
        console.log('Building initial tree data');
        municipalities.load({
            callback: function () {
                let initialTreeStoreData = me.buildInitialTree(municipalities);
                console.log(treeView.getStore().setRootNode(initialTreeStoreData));
                console.log('Initial Tree data:');
                console.log(treeView.getStore());
            }
        });
    }
});


