Ext.define('Taas.view.hrms.tabs.PayrolDetailsTab', {
  extend  : 'Taas.view.BaseTabPanel',
  alias   : 'widget.payrol_details_tab',
  title   : 'Payrol Details',
  itemId  : 'payrol_details_tab',
  tbar    : [
    /** For Employee **/ 
    { xtype: 'button', text: 'Employee', iconCls : 'add-user' }
  ],
  items   : []
});