Ext.define('Taas.view.BaseTabPanel', {
  extend  : 'Ext.panel.Panel',
  alias   : 'widget.base_tab',
 // closable: true,
  border  : false,
  listeners : {
    close: function(me) {
      console.log('closing ' + me.title + '...');
      return false;
      /*
      Ext.MessageBox.confirm('Confirm',
        'Are you sure you want to close ' + me.title +' panel ?', 
       // Ext.emptyFn
        function(btn) {
          console.log('In dialog?');
          me.removeAll(true);
        });
      */  
      //me.removeAll(true);  
    }
  }
});