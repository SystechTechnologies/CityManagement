Ext.define('Taas.view.hrms.CreateRoles', {
  bodyStyle : 'padding:10px',
  extend    : 'Ext.panel.Panel',
  alias     : 'widget.createroles',
  width     : 600,
  border    : false,
  requires:[
    'Taas.view.hrms.RolesGrid', 
    'Taas.store.hrms.RoleStore' 
  ],
  fieldDefaults: {
    msgTarget: 'side',
    labelWidth: 140
  },
  defaults: {
    anchor: '100%'
  },
  items: [{
    xtype : 'heading',
    data : {text : 'Create Roles for User'}
  },{
    xtype   : 'form',
    border  : false,
    padding: 10,
    //title   : 'Create Roles',
    defaultType: 'textfield',
    layout  : 'anchor',
    defaults: {
      anchor: '100%'
    },
    items: [{
      fieldLabel: 'Role Name',
      name      : 'role',
      anchor    : '60%',
      allowBlank: false
    },{
      xtype     : 'textarea',
      fieldLabel: 'Role Description',
      name      : 'role',
      allowBlank: false
    }],
    buttons: [{
      text    : 'Save Role',
      iconCls : 'save'
    },{
      text    : 'Reset', iconCls: 'reset'
    }]
  }, {
    xtype: 'rolesgrid'
  }]
});  
