cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.dialogs/www/notification.js",
        "id": "org.apache.cordova.dialogs.notification",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.dialogs/www/android/notification.js",
        "id": "org.apache.cordova.dialogs.notification_android",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "file": "plugins/com.chariotsolutions.nfc.plugin/www/phonegap-nfc.js",
        "id": "com.chariotsolutions.nfc.plugin.NFC",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.dialogs": "0.3.0",
    "com.chariotsolutions.nfc.plugin": "0.6.2",
    "cordova-plugin-whitelist": "1.0.0"
}
// BOTTOM OF METADATA
});