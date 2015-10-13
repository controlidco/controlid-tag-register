/*
 *@file RegistroController.js
 */

 Admin.IndexController = Ember.ObjectController.extend({
 	leer: false,
 	leido: false,
 	buttonDisable: false,
 	content: {},
 	init : function(){
 		var $this=this;
 		this.set('leer',true);
 		this.set('leido',false);
 		this.set('error',false);
 		this.set('error-message','');
 		this.set('tag','');
 		localStorage.clear();
 		localStorage.removeItem('tagRegistro');
 		var self = this;
 		nfc.addTagDiscoveredListener(
			function(nfcEvent)
			{
				self.set('error', false);
				console.log("Listo para leer");
				var tag = nfcEvent.tag;
				var tagNFC = nfc.bytesToHexString( tag.id );
        console.log(tagNFC);
			  var  registro = Registro.create();
        var resultado = registro.callService(tagNFC);
        if (resultado.data == false)
        {
          if (result.message == 'NETWORK_ERR')
          {
            self.set( 'error', true );
            self.set( 'error-message' , 'El dispositivo no posee internet' );
          }
        } else {
            console.log(resultado.data);
            var message = $(resultado.data).find('return').text();
            console.log(message);
            if( Ember.isEqual(message, 'registro-exitoso' ) )
            {
              localStorage.setItem("tagRegistro", tagNFC );
              self.set('leido',true);
              self.set('leer', true);
              self.set('error',false);
              self.set('tag', tagNFC);

            }
            if( Ember.isEqual(message, 'error-registrado' ) )
            {
              self.set( 'leer', true );
              self.set( 'leido',false );
              self.set( 'error', true );
              self.set( 'error-message' , 'El chip ya se registro, por favor intente con otro' );
            }
          }
      },
			function(status)
			{
				console.log("Acerque el tag a leer");
				self.set('leer', true);
			},
			function(error){
				$this.set('leer',false);
				$this.set('error', true);

				if (error === "NO_NFC") {
			        alert("El dispositivo no tiene NFC.");
			        $this.set('error-message',"El dispositivo no tiene NFC" );
			    } else if (error === "NFC_DISABLED") {
			    	  $this.set('error-message',"El NFC del dispositivo esta desactivado, por favor activelo" );
			        alert("El NFC del dispositivo esta desactivado, por favor activelo ");
			    } else {
			        alert("There was a problem " + error);
			    }

			}
		);
 	}//fin init
 });
