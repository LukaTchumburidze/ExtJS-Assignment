Ext.define ('SimpleApp.view.main.TreeView.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.treeview',

    init: function () {
        var treeView = this.getView('tree-view');
        console.log (treeView);
        console.log("abc");
    },

    selectionHandler: function (record, index) {

        // //console.log (record);
        // let viewModel = this.getView().getViewModel();
        // console.log ('a');
        // console.log (viewModel);
        // console.log (this.getViewModel().get('isItemSelected'));
        // //viewModel.set('isItemSelected', true);
        // console.log (this.getViewModel().get('isItemSelected'));
    },

    beforeselect: function () {
        console.log ("hiiiiiiiiiiiiiiiiii");
    }
});