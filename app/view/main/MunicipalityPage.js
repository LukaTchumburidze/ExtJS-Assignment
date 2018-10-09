Ext.define('SimpleApp.view.main.MunicipalityPage', {
    extend: 'Ext.panel.Panel',
    xtype: 'municipality-page',
    requires: [
        'SimpleApp.view.main.MainModel'
    ],

    viewModel: {
        type: 'main'
    },

    defaults: {
        frame: true,
        bodyPadding: 10
    },

    referenceHolder: true,

    items: [
        {
            xtype: 'combobox',
            store: {
                model: 'Municipality',
                storeId: 'municipalities',
                autoLoad: true
            }
        },
        {
            xtype: 'animal-form',
            reference: 'justreference'
        }
    ],

    fbar: [
        {
            text: 'Submit',
            formBind: true,
            itemId: 'submit',
            handler: function () {
                var curModel = Ext.create('animal');
                var comboBox = this.up().up().down('combobox');
                var animalForm = this.up().up().down('animal-form');
                var formFields = animalForm.items.getRange();
                var selection = comboBox.getSelection();

                if (selection == null) {
                    Ext.Msg.alert("There was an error!", "Please choose a municipality!");
                    return;
                }

                for (let i = 0; i < formFields.length; i++) {
                    curModel.set(formFields[i].name, formFields[i].value);
                    formFields[i].reset();
                }
                curModel.set('parentId', selection.id);

                console.log(this.up().up().down('combobox'));
                console.log(this.up().up().down('animal-form'));
                console.log(animalForm.items.getRange());
                console.log(comboBox.getSelection());
                console.log(curModel);
                curModel.save({
                    callback: function () {
                        Ext.Msg.alert("Item added!", "Item has been added successfully");
                    }
                });
            }
        }
    ]
});