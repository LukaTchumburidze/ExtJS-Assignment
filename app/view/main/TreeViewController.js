Ext.define('SimpleApp.view.main.TreeView.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.treeview',
    viewModel: 'main',

    requires: [
        'SimpleApp.view.window.NewItemWindow',
        'Ext.data.StoreManager'
    ],

    onRemoveItem: function () {
        let viewModel = this.getView().getViewModel();
        let selectedItem = viewModel.get('selectedItem');
        selectedItem.remove();
        //TODO: update store accordingly

        console.log(selectedItem);
    },

    // onEditItem: function () {
    //     let selectedItem = this.getView().getViewModel().get('selectedItem');
    //     showWindow (selectedItem, selectedItem.getDepth()-1);
    // },

    onAddItem: function () {
        let selectedItem = this.getView().getViewModel().get('selectedItem');
        let depth;
        if (selectedItem == null || selectedItem === undefined) {
            depth = 0;
        } else {
            depth = selectedItem.getDepth();
        }
        let titleMapping = ['Municipality', 'Animal', 'Census'];
        let formXtypeMapping = ['municipality-form', 'animal-form', 'census-form'];
        let modelXtypeMapping = ['municipality', 'animal', 'census'];
        let storeIdMapping = ['municipalities', 'animals', 'censuses'];

        let curModel = Ext.create (modelXtypeMapping[depth]);
        let parModel;
        if (depth) {
            console.log('store');
            console.log(Ext.data.StoreManager);
            parModel = Ext.data.StoreManager.get(storeIdMapping[depth-1]).getById(selectedItem.id);
        }
        let curStore = this.getView().getViewModel().get(storeIdMapping[depth]);
        var treeStore = this.getView().getStore();

        // if (selectedItem === undefined || selectedItem == null) {
        //     depth = 0;
        // } else {
        //     depth = selectedItem.data.depth;
        // }

        let win = Ext.create('Ext.window.Window', {
            title: 'Add Item',
            width: 500,
            height: 500,

            items: [
                {
                    xtype: formXtypeMapping[depth],
                    title: titleMapping[depth]
                },
                {
                    fbar: [
                        {
                            text: 'Submit',
                            formBind: true,
                            itemId: 'submit',
                            handler: function () {
                                let formFields = win.items.getRange()[0].items.getRange();
                                let modelFields = curModel.getFields();
                                let modelMapping = {};
                                console.log(formFields);
                                console.log(modelFields);

                                for (let i = 0; i < formFields.length; i ++) {
                                    curModel.set(modelFields[i+1].getName(), formFields[i].value);
                                    modelMapping[modelFields[i+1].getName()] = formFields[i].value;
                                }

                                curModel.set('parentId', selectedItem.id);
                                modelMapping['parentId'] = selectedItem.id;
                                modelMapping['id'] = curModel.getId();
                                console.log(parModel);
                                console.log('children');
                                curModel.getProxy().data.push(modelMapping);
                                //parModel.children().getProxy().data.push(modelMapping);
                                parModel.children().load({
                                    callback: function () {
                                        console.log(parModel.children());
                                    }
                                });
                                curStore.load({
                                    callback: function () {
                                        console.log('Loaded');
                                        console.log(curStore);
                                        win.close();
                                    }
                                });

                                console.log("hi");
                            }
                        }
                    ]
                }
            ]
        });
        win.show();
    },

    getParentData: function (dataSoFar, node) {
        let depth = node.getDepth();
        console.log(node);

        if (depth <= 0) {
            return;
        }
        let curModel;

        switch (depth) {
            case 1:
                curModel = Ext.data.StoreManager.get('municipalities').getById(node.id);
                dataSoFar.set('MunicipalityEngName', curModel.get('EngName'));
                dataSoFar.set('MunicipalityGeoName', curModel.get('GeoName'));
                break;
            case 2:
                curModel = Ext.data.StoreManager.get('animals').getById(node.id);
                dataSoFar.set('AnimalEngName', curModel.get('EngName'));
                dataSoFar.set('AnimalGeoName', curModel.get('GeoName'));
                dataSoFar.set('AnimalLatName', curModel.get('LatName'));
                break;
            case 3:
                curModel = Ext.data.StoreManager.get('censuses').getById(node.id);
                dataSoFar.set('CensusPopulation', curModel.get('population'));
                dataSoFar.set('CensusDate', curModel.get('date'));
                break;
        }
        this.getParentData(dataSoFar, node.parentNode);
    },

    getChildData: function (node, dataSoFar, connectionStore) {
        let depth = node.getDepth();
        let curModel;

        switch (depth) {
            case 1:
                curModel = Ext.data.StoreManager.get('municipalities').getById(node.id);
                dataSoFar.set('MunicipalityEngName', curModel.get('EngName'));
                dataSoFar.set('MunicipalityGeoName', curModel.get('GeoName'));
                break;
            case 2:
                curModel = Ext.data.StoreManager.get('animals').getById(node.id);
                dataSoFar.set('AnimalEngName', curModel.get('EngName'));
                dataSoFar.set('AnimalGeoName', curModel.get('GeoName'));
                dataSoFar.set('AnimalLatName', curModel.get('LatName'));
                break;
            case 3:
                curModel = Ext.data.StoreManager.get('censuses').getById(node.id);
                dataSoFar.set('CensusPopulation', curModel.get('population'));
                dataSoFar.set('CensusDate', curModel.get('date'));
                break;
        }

        if (depth === 3) {
            dataSoFar = dataSoFar.copy(null);
            connectionStore.add(dataSoFar);
            return;
        }

        var me = this;
        node.expand();
        node.eachChild(function (childNode) {
            me.getChildData(childNode, dataSoFar, connectionStore);
        });
    },

    nodeSelect: function (event, record) {
        if (record.getDepth() === 3) {
            this.getView().getViewModel().set('censusSelected', true);
        } else {
            this.getView().getViewModel().set('censusSelected', false);
        }
        console.log(this.getView().getViewModel().get('censusSelected'));

        let dataSoFar = Ext.create('gridRow');
        let connectionStore = this.getView().up().down('connection-grid').getViewModel().get('gridStore');

        connectionStore.clearData();
        connectionStore.load();

        this.getParentData(dataSoFar, record.parentNode);
        this.getChildData(record, dataSoFar, connectionStore);
        connectionStore.sync();
    }
});