let titleMapping = ['Municipality', 'Animal', 'Census'];
let formXtypeMapping = ['municipality-form', 'animal-form', 'census-form'];
let modelXtypeMapping = ['municipality', 'animal', 'census'];
let storeIdMapping = ['municipalities', 'animals', 'censuses'];

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
        },
        gridStore: {
            model: 'GridRow',
            pageSize: 5,
            storeId: 'grid-store',
            autoLoad: false
        }
    },

    data: {
        isItemSelected: false,
        isConnectionSelected: false,
        selectedItem: null,
        chosenModelFieldset: null,
        censusSelected: false,
        editItem: null,
    },
});
