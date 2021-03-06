window.onload = function() {
	document.getElementById("bouton").addEventListener("click", getRows)
}

function getRows(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("get", "xml/systemeSolaire.xml", true)
	xmlhttp.onreadystatechange = function () {
		if(this.readyState == 4 && this.status == 200 ){
			traitement(this);
		}
	}

	xmlhttp.send();
}

function traitement(xml){
	var i;
	var xmlDoc = xml.responseXML;
	var dataTable = "<tr><th>Nom</th><th>Diamètre</th><th>Distance du soleil</th><th>Nombre de lune(s)</th><th>Rotation</th><th>Révolution</th><th>Température min. °C</th><th>Température max. °C</th></tr>";
	var rowData = xmlDoc.getElementsByTagName("planete");

	for (var i=0; i<rowData.length; i++){
		dataTable += "<tr><td>" + 

		rowData[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue + 
		"</td><td>" + 
		rowData[i].getElementsByTagName("diametre")[0].childNodes[0].nodeValue + 
		"</td><td>" + 
		rowData[i].getElementsByTagName("distanceSoleil")[0].childNodes[0].nodeValue + 
		"</td><td>" + 
		rowData[i].getElementsByTagName("nbLune")[0].childNodes[0].nodeValue + 
		"</td><td>" + 
		rowData[i].getElementsByTagName("rotation")[0].childNodes[0].nodeValue + 
		"</td><td>" + 
		rowData[i].getElementsByTagName("revolution")[0].childNodes[0].nodeValue + 
		"</td><td>" + 
		rowData[i].getElementsByTagName("min")[0].childNodes[0].nodeValue + 
		"</td><td>" + 
		rowData[i].getElementsByTagName("max")[0].childNodes[0].nodeValue +
		"</td></tr>" ;
	}

	document.getElementById("tableData").innerHTML = dataTable;
}




/*function traitement(xml){
	var divData = "";
	var xmlDoc = xml.responseXML;
	var rowData = xmlDoc.getElementsByTagName("nom");
	
	for (var i=0; i<rowData.length; i++){
		divData += rowData[i].childNodes[0].nodeValue + "<br>";
	}

	document.getElementById("donnees").innerHTML = divData;
	//console.log(rowData);

}*/