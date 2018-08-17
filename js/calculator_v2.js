//This function finds the amount of all screens
function getScreensAmount(){	
	var samsung18Amount = document.getElementById('samsung18').value * 1;
	var samsung18kioskAmount = document.getElementById('samsung18kiosk').value * 1;
	var indoor49Amount = document.getElementById('indoor49').value * 1;
	var indoor55Amount = document.getElementById('indoor55').value * 1;
	var outdoor55Amount = document.getElementById('outdoor55').value * 1;
	var retrofitAmount = document.getElementById('retrofit').value * 1;
	
	return [samsung18Amount, samsung18kioskAmount, indoor49Amount, indoor55Amount, outdoor55Amount, retrofitAmount];
}

//This function finds price for all screen amounts
function getScreensPrice(){	
	var samsung18Price = document.getElementById('samsung18').value * 605;
	var samsung18kioskPrice = document.getElementById('samsung18kiosk').value * 1093;
	var indoor49Price = document.getElementById('indoor49').value * 1102;
	var indoor55Price = document.getElementById('indoor55').value * 1909;
	var outdoor55Price = document.getElementById('outdoor55').value * 5334;
	var retrofitPrice = document.getElementById('retrofit').value * 692;
		
	return [samsung18Price, samsung18kioskPrice, indoor49Price, indoor55Price, outdoor55Price, retrofitPrice];
}

function calculateTotal(){
	//Display the amount of screens
	var allScreens = getScreensAmount();
	document.getElementById('samsung18Amount').innerHTML = allScreens[0].toLocaleString();
	document.getElementById('samsung18kioskAmount').innerHTML = allScreens[1].toLocaleString();
	document.getElementById('indoor49Amount').innerHTML = allScreens[2].toLocaleString();
	document.getElementById('indoor55Amount').innerHTML = allScreens[3].toLocaleString();
	document.getElementById('outdoor55Amount').innerHTML = allScreens[4].toLocaleString();
	document.getElementById('retrofitAmount').innerHTML = allScreens[5].toLocaleString();
	
	//Display the screen totals
	var allScreensPrice = getScreensPrice();
	document.getElementById('samsung18Price').innerHTML = allScreensPrice[0].toLocaleString();
	document.getElementById('samsung18kioskPrice').innerHTML = allScreensPrice[1].toLocaleString();
	document.getElementById('indoor49Price').innerHTML = allScreensPrice[2].toLocaleString();
	document.getElementById('indoor55Price').innerHTML = allScreensPrice[3].toLocaleString();
	document.getElementById('outdoor55Price').innerHTML = allScreensPrice[4].toLocaleString();
	document.getElementById('retrofitPrice').innerHTML = allScreensPrice[5].toLocaleString();
	document.getElementById('samsung18Total').value = allScreensPrice[0].toLocaleString();
	document.getElementById('samsung18KioskTotal').value = allScreensPrice[1].toLocaleString();
	document.getElementById('indoor49Total').value = allScreensPrice[2].toLocaleString();
	document.getElementById('indoor55Total').value = allScreensPrice[3].toLocaleString();
	document.getElementById('outdoor55Total').value = allScreensPrice[4].toLocaleString();
	document.getElementById('retrofitTotal').value = allScreensPrice[5].toLocaleString();
	var allScreensTotal = allScreensPrice[0] + allScreensPrice[1] + allScreensPrice[2] + allScreensPrice[3] + allScreensPrice[4] + allScreensPrice[5];
	document.getElementById('screenTotal').value = allScreensTotal.toLocaleString();

	//Add up the totals and display the final total
    var totalPrice1 = allScreensTotal;
	var totalPrice2 = totalPrice1.toLocaleString();
	document.getElementById('totalPrice').innerHTML = totalPrice2;
	document.getElementById('hardwareTotal').value = totalPrice2;
}