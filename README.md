Intervalr-for-Sencha-Touch
==========================

Intervals manager for Sencha Touch  

Author: Constantine V. Smirnov, kostysh(at)gmail.com, http://mindsaur.com    
License: GNU GPL v3.0    
Current version: 1.0    
ST2 version: 2.1.0 Beta1    
ST2 SDK Tools: 2.0.0 Beta 3

Versions:
=========
1.0 Initial release

Features:
=========
- Add, remove intervals
- Start, stop, pause, toggle interval execution status
- Times limit for each interval
- Interval events: beforeexecute, execute, start, stop, pause, statuschange, resume, remove, finish
- Easy to use 

Installing:
===========
- Place src to your app folder;
- Configure custom path for custom components: 
<!-- language: lang-js -->
        
        Ext.Loader.setPath({
            'Ext.ux': '[..path..]src/ux'
        });
- Require Intervalr class in app.js:
<!-- language: lang-js -->
        
        requires: ['Ext.ux.util.Intervalr']

- Create new interval:
<!-- language: lang-js -->
        
        Intervalr.add('yourinervalname', {
            timeout: 10000,// Timeout in milliseconds
            times: -1,     // Infinity
            listeners: {
                execute: function() {
                    console.log('He dude!');
                },
                exception: function(err) {
                    console.log('Error', err);
                }
            }
        });

- Setup some extra listeners:
<!-- language: lang-js -->
        
        Intervalr.addListeners('yourinervalname', {
            scope: this,
            statuschange: this.onStatusChangeListener,
            finish: this.onFinishListener
        });

- Start interval:
<!-- language: lang-js -->
        
        Intervalr.start('yourinervalname');

- Set paused:
<!-- language: lang-js -->
        
        Intervalr.pause('yourinervalname');

- Inverse paused value:
<!-- language: lang-js -->
        
        Intervalr.toggle('yourinervalname');

- Remove interval:
<!-- language: lang-js -->
        
        Intervalr.remove('yourinervalname');

Live demo: 
==========
http://mindsaur.com/demo/intervalr
