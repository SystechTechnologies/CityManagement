Ext.define('Taas.view.hrms.UserForm', {
  bodyStyle :'padding:10px',
  extend    : 'Ext.panel.Panel',
  alias     : 'widget.userform',
  width     : 700,
  border    : false,
  fieldDefaults: {
    //  labelAlign: 'left',
    msgTarget : 'side',
    labelWidth: 160
  },
  defaults: {
    anchor: '100%'
  },
  items: [{
    layout  : 'column',
    border  : false,
    items   : [{
      columnWidth : 0.5,
      border      : false,
      layout      : 'anchor',
      defaultType : 'textfield',
      items       : [{
        fieldLabel: 'First Name',
        name: 'first',
        anchor:'95%'
      },{
        fieldLabel: 'Password',
        name: 'password',
        anchor:'95%',
        inputType: 'password'
      },{
        xtype     : 'radiogroup',
        fieldLabel: 'Gender',
        // Arrange radio buttons into two columns, distributed vertically
        columns   : 2,
        vertical  : true,
        anchor    : '75%',
        items     : [
          { boxLabel: 'Male', name: 'rb', inputValue: '1' },
          { boxLabel: 'Female', name: 'rb', inputValue: '2', checked: true}
        ]
      },{
        fieldLabel: 'Driver\'s License Number',
        xtype : 'datefield',
        name: 'company',
        labelWidth  : 150,
        anchor  : '95%'
      },{
        fieldLabel: 'Passport Number',
        name: 'last',
        anchor:'95%'
      },]
    },{
      columnWidth:.5,
      border:false,
      layout: 'anchor',
      defaultType: 'textfield',
      
      items: [{
        fieldLabel: 'Last Name',
        name  : 'last',
        anchor:'100%'
      },{
        xtype       : 'combobox',
        fieldLabel  : 'Account Activation',
        name        : 'activation',
        anchor      : '100%',
        listeners: {},
       // fieldLabel: 'State',
        labelWidth  : 150,
        width: 150,
        store: {
          fields: ['abbr', 'name'],
          data : [
            {"abbr":"AL", "name":"Active"},
            {"abbr":"AK", "name":"Lock"}
          ]
        },
        valueField: 'abbr',
        displayField: 'name',
        typeAhead: true,
        queryMode: 'local',
        forceSelection: true
      },{
        fieldLabel: 'Marital Status',
        name: 'last',
        labelWidth  : 150,
        anchor:'100%'
      },{
        fieldLabel  : 'License Expiry Date',
        xtype       : 'datefield',
        labelWidth  : 150,
        name        : 'license_expiry',
        //  vtype:'email',
        anchor      :'100%'
      },{
        fieldLabel: 'Nationality',
        //     xtype : 'datefield',
        name: 'email',
        labelWidth  : 150,
        vtype:'email',
        anchor:'100%'
      }]
    }]
  },{
    xtype: 'fieldset',
    title: 'Mailing Address',
    defaultType: 'textfield',
    collapsible: true,
    //collapsed : true,
    layout: 'anchor',
    defaults: {
      anchor: '100%'
    },
    items: [{
      fieldLabel: 'Street Address',
      name: 'mailingStreet',
      listeners: {},
      billingFieldName: 'billingStreet',
      allowBlank: false
    }, {
      xtype: 'container',
      layout: 'hbox',
      items: [{
        xtype: 'textfield',
        fieldLabel: 'City',
        name: 'mailingCity',
      }, {xtype: 'splitter'},{
        xtype: 'combobox',
        // name: 'mailingState',
        listeners: {},
        fieldLabel: 'State',
        labelWidth: 50,
        width: 150,
        store: {
          fields: ['abbr', 'name'],
          data : [
            {"abbr":"AL", "name":"Alabama"},
            {"abbr":"AK", "name":"Alaska"},
            {"abbr":"AZ", "name":"Arizona"}
          ]
        },
        valueField: 'abbr',
        displayField: 'name',
        typeAhead: true,
        queryMode: 'local',
        forceSelection: true
      }, {xtype: 'splitter'},{
        xtype: 'textfield',
        fieldLabel: 'Postal Code',
        labelWidth: 80,
        name: 'mailingPostalCode',
        listeners: {},
        billingFieldName: 'billingPostalCode',
        width: 165,
        //    allowBlank: false,
        maxLength: 10,
        enforceMaxLength: true,
        maskRe: /[\d\-]/,
        regex: /^\d{5}(\-\d{4})?$/,
        regexText: 'Must be in the format xxxxx or xxxxx-xxxx'
      }]
    }]
  },{
    xtype:'tabpanel',
    plain:true,
    activeTab: 0,
    height:160,
    defaults:{bodyStyle:'padding:10px'},
    items:[{
      title:'Contact Details',
      //   defaults: {width: 230},
      defaults: {width: 500},
      defaultType: 'textfield',
      items :[{
        fieldLabel: 'Home',
        name: 'home',
        emptyText: '(888) 555-1212'
      },{
        fieldLabel: 'Business',
        name: 'business'
      },{
        fieldLabel: 'Mobile Number',
        name: 'mobile'
      },{
        fieldLabel: 'Fax Number',
        name: 'fax'
      }]
    },{
      title:'Qualifications',
      defaults: {width: 500},
      defaultType: 'textfield',
      items: [{
        fieldLabel: 'Work Experiance',
        name: 'work_experiance'
      },{
        fieldLabel: 'Education',
        name: 'education'
      },{
        fieldLabel: 'Skills',
        name: 'skills'
      },{
        fieldLabel: 'Languaues',
        name: 'languaues'
      }]
    }]
  }],
  buttons: [{
    text: 'Save User',
    iconCls: 'save'
  },{
    text: 'Reset', iconCls: 'reset'
  }]
});
