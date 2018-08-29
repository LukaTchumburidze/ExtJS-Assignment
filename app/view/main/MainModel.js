/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('SimpleApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    stores: {
        municipalities: {
            model: 'Municipality',
            autoLoad: true
        },
        animals: {
            model: 'Animal',
            autoLoad: true
        },
        censuses: {
            model: 'Census',
            autoLoad: true
        }

    },

    data: {
        isItemSelected: true,
    }

});
