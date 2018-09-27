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
        let viewModel = this.getView().getViewModel();
        let selectedItem = viewModel.get('selectedItem');

        console.log('Removing Item:');
        console.log(selectedItem);
        let curStore = Ext.data.StoreManager.get(storeIdMapping[selectedItem.getDepth() - 1]);
        curStore.getById(selectedItem.id).erase();
        curStore.load({
            callback: function () {
                selectedItem.remove();
            }
        });
    },

    onEditItem: function () {
        let selectedItem = this.getView().getViewModel().get('selectedItem');
        let depth = selectedItem.getDepth()-1;
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

            reference: 'dog',
            items: [
                {
                    xtype: formXtypeMapping[depth],
                    title: titleMapping[depth]
                }
            ],

            // fbar: [
            //     {
            //         text: 'Submit',
            //         formBind: true,
            //         itemId: 'submit',
            //         handler: function () {
            //             let formFields = win.items.getRange()[0].items.getRange();
            //             let modelFields = curModel.getFields();
            //             console.log("fields");
            //             console.log(formFields);
            //             console.log(modelFields);
            //
            //             for (let i = 0; i < formFields.length; i++) {
            //                 curModel.set(formFields[i].name, formFields[i].value);
            //             }
            //
            //             curModel.set('parentId', selectedItem.id);
            //             console.log(curModel.get('parentId'));
            //             curModel.save();
            //             console.log(curModel);
            //             curStore.load({
            //                 callback: function () {
            //                     selectedItem.collapse();
            //                     selectedItem.expand();
            //                     win.close();
            //                 }
            //             });
            //         }
            //     }
            // ]
        });
        win.show();
    },

    onAddItem: function () {
        let depth, selectedItem = this.getView().getViewModel().get('selectedItem');
        console.log('selectedItem');
        console.log(selectedItem);
        if (!selectedItem) {
            depth = 0;
        } else {
            depth = selectedItem.getDepth();
        }

        let curModel = Ext.create(modelXtypeMapping[depth]);

        console.log(depth);
        let curStore = this.getView().getViewModel().get(storeIdMapping[depth]);

        let win = Ext.create('Ext.window.Window', {
            title: 'Add Item',

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
                        let modelFields = curModel.getFields();
                        console.log("fields");
                        console.log(formFields);
                        console.log(modelFields);

                        for (let i = 0; i < formFields.length; i++) {
                            curModel.set(formFields[i].name, formFields[i].value);
                        }

                        if (depth != 0) {
                            curModel.set('parentId', selectedItem.id);
                        } else {
                            curModel.set('parentId', 'root');
                        }
                        console.log(curModel.get('parentId'));
                        curModel.save();
                        console.log(curModel);
                        curStore.load({
                            callback: function () {
                                selectedItem.collapse();
                                selectedItem.expand();
                                win.close();
                            }
                        });
                    }
                }
            ]
        });
        win.show();
    },

    getParentData: function (dataSoFar, node) {
        let depth = node.getDepth();

        if (depth <= 0) {
            return;
        }
        let curModel;

        switch (depth) {
            case 1:
                curModel = Ext.data.StoreManager.get('municipalities').getById(node.id);
                dataSoFar.set('engName', curModel.get('engName'));
                dataSoFar.set('MunicipalityGeoName', curModel.get('geoName'));
                break;
            case 2:
                curModel = Ext.data.StoreManager.get('animals').getById(node.id);
                dataSoFar.set('engName', curModel.get('engName'));
                dataSoFar.set('geoName', curModel.get('geoName'));
                dataSoFar.set('latName', curModel.get('latName'));
                break;
            case 3:
                curModel = Ext.data.StoreManager.get('censuses').getById(node.id);
                dataSoFar.set('population', curModel.get('population'));
                dataSoFar.set('date', curModel.get('date'));
                break;
        }
        this.getParentData(dataSoFar, node.parentNode);
    },

    getChildData: function (node, dataSoFar, connectionStore) {
        let depth = node.getDepth();
        let curModel;
        let me = this;
        let curStore = Ext.data.StoreManager.get(storeIdMapping[depth - 1]);

        curStore.load({
            callback: function () {
                curModel = curStore.getById(node.id);
                switch (depth) {
                    case 1:
                        dataSoFar.set('engName', curModel.get('engName'));
                        dataSoFar.set('MunicipalityGeoName', curModel.get('geoName'));
                        break;
                    case 2:
                        dataSoFar.set('engName', curModel.get('engName'));
                        dataSoFar.set('geoName', curModel.get('geoName'));
                        dataSoFar.set('latName', curModel.get('latName'));
                        break;
                    case 3:
                        dataSoFar.set('population', curModel.get('population'));
                        dataSoFar.set('date', curModel.get('date'));
                        break;
                }

                if (depth === 3) {
                    dataSoFar = dataSoFar.copy(null);
                    connectionStore.add(dataSoFar);
                    return;
                }
                node.expand({
                    callback: function () {
                        node.eachChild(function (childNode) {
                            me.getChildData(childNode, dataSoFar, connectionStore);
                        });
                    }
                });
            }
        });
    },

    nodeSelect: function (event, record) {
        if (record.getDepth() === 3) {
            this.getView().getViewModel().set('censusSelected', true);
        } else {
            this.getView().getViewModel().set('censusSelected', false);
        }

        let dataSoFar = Ext.create('gridRow');
        let connectionStore = this.getView().up().down('connection-grid').getViewModel().get('gridStore');

        connectionStore.clearData();
        connectionStore.load();

        this.getParentData(dataSoFar, record.parentNode);
        this.getChildData(record, dataSoFar, connectionStore);
        connectionStore.sync();
    }
});