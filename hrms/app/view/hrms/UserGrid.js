Ext.define('Taas.view.hrms.UserGrid', {
  extend  : 'Ext.grid.Panel',
  title   : 'User Search Result',
  alias   : 'widget.usergrid',
  width   : 600,
  requires:[
    'Taas.store.hrms.UserStore'
  ],
  padding: 10,
  store: Ext.create('Taas.store.hrms.UserStore'),
  columns: [
    { text: 'Name',  dataIndex: 'name' },
    { text: 'Email', dataIndex: 'email', flex: 1 },
    { text: 'Phone', dataIndex: 'phone' }
  ]
});