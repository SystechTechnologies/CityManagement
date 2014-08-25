Ext.define('Taas.view.Viewport', {
    renderTo: Ext.getBody(),
    extend: 'Ext.container.Viewport',
    id  : 'MainViewport',
    requires:[
      'Ext.tab.Panel',
      'Ext.layout.container.Border',
      'Taas.view.nav.NavMenu',
      'Taas.view.hrms.UserForm',
        
      'Taas.view.hrms.tabs.LeaveManagementTab',
      'Taas.view.hrms.tabs.ManageEmployeeTab',
      'Taas.view.hrms.tabs.PayrolDetailsTab',
      'Taas.view.hrms.tabs.TrainingServicesTab',
        
      'Taas.view.hrms.UserSearch',
      'Taas.view.hrms.UserGrid'
    ],

    layout: {
      type: 'border'
    },
    items: [/*{
      region: 'north',
      margins: '5 5 0 5',
      height: 100//,
     // html: '<img src="images/taas_header.jpg" />'
    },*/{
      xtype   : 'navmenu',
      margins : '5 0 5 5',
      region  : 'west',
      width   : 250
    },{
      itemId  : 'tabs',
      xtype   : 'tabpanel',
    //  id      : 'mainTabPanel',
      region  : 'center',
      margins : '5 5 5 5',
      items   : [{
        xtype : 'manage_employee_tab',
        id    : 'manage_employee_tab'
      }]
  }]
});