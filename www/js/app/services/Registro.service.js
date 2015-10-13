
/**
*@file Registro.service.js
* Cliente que se encarga de consumir un web service SOAP.
*/

var Registro = Ember.Object.extend({
  /**
  * Función que se encarga de relizar el llamado al web service
  * @return Respuesta del web service
  */
  callService: function(tagNFC) {
    var DEV ='http://controlid.co/activos';
    var webServiceURL = DEV+'/web/app_dev.php/ws/DemoApi?wsdl';
    var soapMessage = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><regTag xmlns="http://controlid/ws/DemoApi/1.0/"><tag>'+tagNFC+'</tag></regTag></soap:Body></soap:Envelope>';
    var soapClient = SoapClient.create({url:webServiceURL, message:soapMessage });
    var result = soapClient.callService();
    return result;
  },
});
