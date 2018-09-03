Ext.define('SimpleApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    stores: {
        municipalities: {
            model: 'Municipality',
            storeId: 'municipalities',
            autoLoad: true
        },
        animals: {
            model: 'Animal',
            storeId: 'animals',
            autoLoad: true
        },
        censuses: {
            model: 'Census',
            storeId: 'censuses',
            autoLoad: true
        }
    },

    data: {
        isItemSelected: false,
        isConnectionSelected: false,
        selectedItem: null,
        pastSelectedItem: null,
        chosenModelFieldset: null,
    },

    formulas: {
        fieldSetName: function (get) {
            var chosenModelFieldset = get('chosenModelFieldset');
            if (chosenModelFieldset != null) {
                return chosenModelFieldset.getData()['viewXtype'];
            }

            return '';

        }
    }
});
