Ext.define('Taas.view.hrms.RolesGrid', {
  extend  : 'Ext.grid.Panel',
  title   : 'User Roles Grid',
  alias   : 'widget.rolesgrid',
  width   : 590,
  height  : 300,
  requires:[
    'Taas.store.hrms.RoleStore'
  ],
  padding: 10,
  //border: false,
  store: Ext.create('Taas.store.hrms.RoleStore'),
  columns: [
    { text: 'Role Name',  dataIndex: 'role' },
    { text: 'Role Descriptions', dataIndex: 'role_desc', flex: 1 },
    {
      xtype : 'actioncolumn',
      width : 50,
      items: [/*{
        icon    : 'reset',
        tooltip : 'Edit',
        handler : function(grid, rowIndex, colIndex) {console.log('Edit...');}
      },*/{
        icon    : 'images/cross.png',
        tooltip : 'Delete Roles',
        text    : 'Delete',
        handler : function(grid, rowIndex, colIndex) {console.log('Save...');}
      }]
    }
  ]
});