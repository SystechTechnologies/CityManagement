Ext.define('Taas.view.hrms.tabs.TrainingServicesTab', {
  extend  : 'Taas.view.BaseTabPanel',
  alias   : 'widget.training_services_tab',
  title   : 'Training Services',
  itemId  : 'training_services_tab',
  tbar    : [
    /** For Employee **/ 
    { xtype: 'button', text: 'Training', iconCls : 'add-user' }
  ],
  items   : []
});