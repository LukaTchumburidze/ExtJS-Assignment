Ext.define ('SimpleApp.view.main.TreeView.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.treeview',

    requires: [
        'SimpleApp.view.window.NewItemWindow'
    ],

    init: function () {
        var treeView = this.getView('tree-view');
        console.log (treeView);
        console.log("abc");
    },

    onRemoveItem: function () {
        let viewModel = this.getView().getViewModel();
        let selectedItem = viewModel.get('selectedItem');
        selectedItem.remove();
        //TODO: update store accordingly

        console.log (selectedItem);
    },

    onAddItem: function () {
        let selectedItem = this.getView().getViewModel().get('selectedItem');
        let depth;

        // if (selectedItem === undefined || selectedItem == null) {
        //     depth = 0;
        // } else {
        //     depth = selectedItem.data.depth;
        // }

        var win = Ext.create('SimpleApp.view.window.NewItemWindow');
        win.show();

    }
});