//declarar un array representa los asientos con false para vacios//

var airlineSeats = [false,false,false,false,false,false,false,false,false,false]; // declaro un array que representa los 
																				//asientos disponibles=false; || no disponible=true;
var busySeats = 0; // declaro una variable para guardar los asientos ocupados.

function paintSeats (array){
	var containerSeats = document.getElementById("seats");

	for (var i = 0; i < array.length; i++) {
		var seat = document.createElement("div");
		seat.className = "seats";

		// del 1 al 4, en el arreglo es primera clase, del indice 0 al 3.
		if (i<4) {
			seat.style.background = "blue";
		}
		else{
			seat.style.background = "green";
		}
		containerSeats.appendChild(seat);
	}
}


function reserve (){
	var btn = document.getElementById("btn");
	btn.addEventListener('click', chooseZone);//se agrega el evento al boton//
};


function chooseZone(){//elegir zona
	var choice = prompt("Ingresa la opción de la clase en que prefieres viajar: \n 1.Primera \n 2.Económica");

if (choice ==1 ) {//si la eleccion del usuario es igual a 1, ocurre esta funcion
	checkFirstClassZone();
} else if (choice ==2){// si el usuario elige opcion 2, ocurre esta funcion.
	checkEconomicZone();
} else {
	alert("Por favor ingresa un numero valido");//si no elige ninguna de las opciones anteriores, aparecera el siguiente alert.
}
};

var checkFirstClassZone = function(){
	var zone = "Primera Clase" ;

	for (var index = 0; index < 4; index++){
		if(airlineSeats[index] == false){// si el arreglo es igual a false, esta vacio
			airlineSeats [index] = true;//en ese momento se reserva el asiento
			// se termina el for al reservar el asiento con break
			reserveSeat(index);// se visualiza reserva
			paintTicket(index, zone);// ticket reservado Graficado con datos
			busySeats++; //contador se incrementa en 1
			break;
		}else if(index == 3 && airlineSeats[index] == true){
			reasignEconomicZone(zone);
		}	
	}
};



var checkEconomicZone = function(){
	var zone = "Economica";
	for(var index = 4; index < 10; index++){
		if(airlineSeats[index]== false){//si el arreglo esta vacio
			airlineSeats[index] = true;// reserva el asiento
			reserveSeat(index);
			paintTicket(index, zone);
			busySeats++;
			break;
		}else if (index == 9 && airlineSeats[index] == true){
			reasignFirstClassZone(zone);
		}
	}
};

var reserveSeat = function(indexToPaint){
	var seat = document.getElementsByClassName("seats");
	seat[indexToPaint].textContent = "Ocupado";
};






var reasignEconomicZone = function(zone){
	if(busySeats == 10){
		noSeats();
		nextFlight();
	}else{
	var reasign = confirm(
		"Ya no quedan asientos disponibles en" + zone +
		 " \n Quieres reservar en zona Economica?"
		);
		if(reasign == true){
		checkEconomicZone();
		}else{
		nextFlight();
		}
	}
};

var reasignFirstClassZone = function(zone){
	if(busySeats == 10){
		noSeats();//funcion de no hay asientos
		nextFlight();//  funcion proximo vuelo
	}else{
	var reasign = confirm(
		"Ya no quedan asientos en" + 
		zone + 
		" \n Quieres reservar en Primera Clase"
		);

		if(reasign == true){
		checkFirstClassZone();
		}else {
		nextFlight();
		}
	}
};

var paintTicket = function(index, zone){
	var containerTickets = document.getElementById("tickets");
	var ticket = document.createElement("div");
	ticket.className = "seats";
	var title = document.createElement("p");
	var reservedSeating = document.createElement("p");
	var zoneClass = document.createElement("p");
	title.textContent = "PASE DE ABORDAR";
	reservedSeating.textContent = " asiento:" + (index +1);
	zoneClass.textContent = zone;
	ticket.appendChild(title);
	ticket.appendChild(reservedSeating);
	ticket.appendChild(zoneClass);
	containerTickets.appendChild(ticket);

};

var nextFlight = function(){
	alert("Nuestro proximo vuelo sale en 3 horas!");

};

var noSeats = function(){
	alert("Lo sentimos, \n llegas tarde!, ya no hay asientos disponibles en este vuelo.");
};

paintSeats(airlineSeats);
reserve();
chooseZone();