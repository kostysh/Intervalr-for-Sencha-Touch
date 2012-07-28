Ext.define('Intervalr.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    
    requires: [
        'Ext.TitleBar',
        'Ext.Button'
    ],
    
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                id: 'mainView',
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Intervalr for Sencha Touch 2'
                    },
                    
                    {
                        id: 'startBtn',
                        xtype: 'button',
                        text: 'Start interval'
                    },
                    
                    {
                        id: 'processBtn',
                        xtype: 'button',
                        padding: 20,
                        style: 'margin-top: 10px;',
                        text: 1
                    }
                ]
            },
            
            {
                title: 'About',
                iconCls: 'info',
                layout: 'fit',
                styleHtmlContent: true,
                html: '<p><strong>Intervalr-for-Sencha-Touch demo</strong></p>' +
                      '<p>Version: 1.0</p>' +
                      '<p>Author: Constantine Smirnov, <a href="http://mindsaur.com">http://mindsaur.com</a></p>' +
                      '<p>License: GNU GPL v3.0</p>' +
                      '<p>GitHub: <a href="Intervalr-for-Sencha-Touch">Intervalr-for-Sencha-Touch</a></p>',
                scrollable: 'vertical'
            }
        ]
    }
});
