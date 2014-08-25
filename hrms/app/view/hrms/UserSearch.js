Ext.define('Taas.view.hrms.UserSearch', {
  bodyStyle:'padding:10px',
  extend: 'Ext.form.Panel',
  alias: 'widget.usersearch',
  width: 590,
  border: false,
  
  requires:[
    'Taas.view.Heading'
  ],

  fieldDefaults: {
    //  labelAlign: 'left',
    msgTarget: 'side',
    labelWidth: 140
  },
  defaults: {
    anchor: '100%'
  },
  items: [{
    layout  : 'column',
    border  : false,
    items   : [{
      columnWidth:.5,
      border:false,
      layout: 'anchor',
      defaultType: 'textfield',
      items: [{
        fieldLabel: 'First Name',
        name: 'first',
        anchor:'95%'
      }, {
        xtype: 'radiogroup',
        fieldLabel: 'Gender',
        // Arrange radio buttons into two columns, distributed vertically
        columns: 2,
        vertical: true,
                  items: [
                      { boxLabel: 'Male', name: 'rb', inputValue: '1' },
                      { boxLabel: 'Female', name: 'rb', inputValue: '2', checked: true}
                  ]
                },{
                    fieldLabel: 'Driver\'s License Number',
                    xtype : 'datefield',
                    name: 'license_number',
                    anchor:'95%'
                },{
                    fieldLabel: 'Passport Number',
                    name: 'passport',
                    anchor:'95%'
                },]
            },{
                columnWidth:.5,
                border:false,
                layout: 'anchor',
                defaultType: 'textfield',
                items: [{
                    fieldLabel: 'Last Name',
                    name: 'last_name',
                    anchor:'100%'
                },{
                    fieldLabel: 'Marital Status',
                    name: 'marital_status',
                    anchor:'100%'
                },{
                    fieldLabel: 'License Expiry Date',
                    xtype : 'datefield',
                    name: 'license_exp_date',
                    anchor:'100%'
                },{
                    fieldLabel: 'Nationality',
               //     xtype : 'datefield',
                    name: 'nationality',
                    anchor:'100%'
                }]
            }]
        }],
        buttons: [{
            text: 'Search User',
            iconCls: 'search'
        },{
            text: 'Reset',
            iconCls: 'reset'
        }]
    });
