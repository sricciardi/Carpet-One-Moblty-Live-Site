//PAYPAL BUTTON
setTimeout( function dustin(){
         
	paypal.Button.render({

		env: 'production', // sandbox | production

		style: {
		label: 'pay',
		size:  'responsive', // small | medium | large | responsive
		shape: 'pill',   // pill | rect
		color: 'gold'   // gold | blue | silver | black
	},

	// PayPal Client IDs - replace with your own
	// Create a PayPal app: https://developer.paypal.com/developer/applications/create
	client: {
		sandbox:    'ARm8F9TgHpTjDEUKd9XylNGr2KUYemBj0zv_qWdMGIgci7jMQ5ZQHPzqMqVf8t4frQMVOvNOq5mpVuM3',
		production: 'AeITSzNxJFb5RHj6GKTFajBiTdutDl8GknuwzbAwpuS4gCAqdPzO_zQhk-4CBVBJvIZ9-550XJSGXrGB'
	},

	// Show the buyer a 'Pay Now' button in the checkout flow
	commit: true,

	// payment() is called when the button is clicked
	payment: function(data, actions) {       
	   var totalPrice4 = document.getElementById('totalPrice').innerHTML;

		// Make a call to the REST api to create the payment
		return actions.payment.create({
			payment: {
				transactions: [
					{
						amount: { total: totalPrice4, currency: 'USD' }
						//amount: { total: 1.00, currency: 'USD' }
					}
				]
			}
		});
	},

	// onAuthorize() is called when the buyer approves the payment
	onAuthorize: function(data, actions) {

		// Make a call to the REST api to execute the payment
		return actions.payment.execute().then(function() {
			//window.alert('Payment Complete!');
			$('#survey').submit();
		});
	}   
	}, '#paypal-button-container');
}, 3000);