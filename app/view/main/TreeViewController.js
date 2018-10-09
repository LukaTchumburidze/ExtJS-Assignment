Ext.define('SimpleApp.view.main.TreeView.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.treeview',
    viewModel: 'main',

    requires: [
        //Models

        'SimpleApp.model.Municipality',
        'SimpleApp.model.Animal',
        'SimpleApp.model.Census',
        'Ext.data.StoreManager',

        //Forms
        'SimpleApp.view.form.MunicipalityForm',
        'SimpleApp.view.form.AnimalForm',
        'SimpleApp.view.form.CensusForm'

    ],

    onRemoveItem: function () {
        var treeView = this.getView(), treeStore = treeView.getStore();
        let viewModel = this.getView().getViewModel();
        let selectedItem = viewModel.get('selectedItem');

        console.log('Removing Item:');
        console.log(selectedItem);
        let curStore = Ext.data.StoreManager.get(storeIdMapping[selectedItem.getDepth() - 1]);
        let curModel = curStore.getById(selectedItem.id);

        curModel.erase({
            callback: function () {
                console.log(curModel);

                curStore.load();
                treeStore.load({node: selectedItem.parentNode});
            }
        });

    },

    onEditItem: function () {
        var treeView = this.getView(), treeStore = treeView.getStore();
        let selectedItem = this.getView().getViewModel().get('selectedItem');
        console.log(this.getView().getViewModel().get('editItem'));
        let depth = selectedItem.getDepth() - 1;
        console.log('selectedItem');
        console.log(selectedItem);

        let curStore = this.getView().getViewModel().get(storeIdMapping[depth]);
        let curModel = curStore.getById(selectedItem.id);
        this.getView().getViewModel().set('editItem', curModel);

        console.log('editItem');
        console.log('curItem');
        console.log(this.getView().getViewModel().get('editItem').getData());

        let win = Ext.create('Ext.window.Window', {
            title: 'Edit Item',

            items: [
                {
                    xtype: formXtypeMapping[depth],
                    title: titleMapping[depth]
                }
            ],

            fbar: [
                {
                    text: 'Submit',
                    formBind: true,
                    itemId: 'submit',
                    handler: function () {
                        let formFields = win.items.getRange()[0].items.getRange();
                        console.log("fields");
                        console.log(formFields);

                        for (let i = 0; i < formFields.length; i++) {
                            curModel.set(formFields[i].name, formFields[i].value);
                        }

                        curModel.set('parentId', selectedItem.id);
                        console.log(curModel.get('parentId'));
                        curModel.save({
                            callback: function () {
                                console.log(curModel);

                                curStore.load();
                                treeStore.load({node: selectedItem.parentNode});
                            }
                        });
                        win.close();
                    }
                }
            ]
        });
        win.show();
    },

    onAddItem: function () {
        var treeView = this.getView(), treeStore = treeView.getStore();
        let selectedItem = treeView.getViewModel().get('selectedItem');
        if (!selectedItem) {
            selectedItem = treeStore.getRoot();
        }

        console.log('selectedItem');
        console.log(selectedItem);
        let curModel = Ext.create(modelXtypeMapping[selectedItem.getDepth()]);
        let curStore = this.getView().getViewModel().get(storeIdMapping[selectedItem.getDepth()]);

        let win = Ext.create('Ext.window.Window', {
            title: 'Add Item',

            items: [
                {
                    xtype: formXtypeMapping[selectedItem.getDepth()],
                    title: titleMapping[selectedItem.getDepth()]
                }
            ],

            fbar: [
                {
                    text: 'Submit',
                    formBind: true,
                    itemId: 'submit',
                    handler: function () {
                        let formFields = win.items.getRange()[0].items.getRange();
                        let modelFields = curModel.getFields();
                        console.log("fields");
                        console.log(formFields);
                        console.log(modelFields);

                        for (let i = 0; i < formFields.length; i++) {
                            curModel.set(formFields[i].name, formFields[i].value);
                        }

                        curModel.set('parentId', selectedItem.id);
                        console.log(curModel.get('parentId'));
                        curModel.save();
                        console.log(curModel);

                        curStore.load();
                        treeStore.load({node: selectedItem});
                        win.close();
                    }
                }
            ]
        });
        win.show();
    },

    nodeSelect: function (event, record) {

    }
});