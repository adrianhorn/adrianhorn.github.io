
var muerte,jugar,vidaEnemigo,tiempo,mana;
var name, textoBienvenida,turnoEnemigo;
var vida, ataque, curacion, golpeEnemigo;
var heroe, enemigo;
//estadisticas
mana=50
turnoEnemigo=false
ataque = -20;
tiempo = 0;
vidaEnemigo=200;
golpeEnemigo=-15;
vida   = 200;
curacion=45;
muerte=false;
enemigo=document.getElementById("enemigo");
heroe=document.getElementById("heroe");
textoBienvenida='Hola ' + name;
name='Aventurero';




//tipos de ataques
function fallar(){
	textoColor(" falló😪",'#4EFAC0');
	turnoEnemigo=true
	document.getElementById("flama").style.display = "none";
	AtaqueEnemigo()
}
function golpe(){
	textoColor(" atacó👊",'#4EFAC0');
	vidaEnemigo+=ataque;
	turnoEnemigo=true;
	document.getElementById("flama").style.display = "none";
	AtaqueEnemigo()
}
function quemar(){
			vidaEnemigo+=ataque;
			mana-15;
			turnoEnemigo=true
			textoColor(" quemó al Enemigo",'#4EFAC0');
			document.getElementById("flama").style.display = "block";
			AtaqueEnemigo()
		}


//ataque Enemigo
function AtaqueEnemigo(){
		 	document.getElementById("Encendiar").disabled = true;
			document.getElementById("Jugar").disabled = true;
			document.getElementById("curacion").disabled = true;
	  setTimeout(
	    function() {
				document.getElementById("Encendiar").disabled =false;
				document.getElementById("Jugar").disabled = false;
				document.getElementById("curacion").disabled = false;
vida+=golpeEnemigo;
}, 1500);
	}



//botones
function juega(){
	textoColor()
	var dado = Math.floor(Math.random() *2);
	if(dado==0){
		fallar();
	}
	if(dado==1){
		golpe();
	}
}
function curarse(){
	mana+=curacion;
	vida+=curacion;
	if(vida>200){
		vida=200
	}
	document.getElementById("Encendiar").disabled = false;
	textoColor()
	if (vida > 0){
		muerte=false;
		textoColor(" curado","green");
	}else{
		muerte = true;
		perder();
		}
		AtaqueEnemigo();
}


//nombre
function nombrarse() {
		name=prompt('¿Como te llamas?');
		if (!name){
			name="desconocido ";
		}
		textoColor()
		console.log(name);
		return(name);
}
function saludar(){
	textoColor()
	textoBienvenida='Hola ' + name;
	document.getElementById("estado").innerHTML=name;
}


//estado
function perder(){
	if (vida<0){
		vida=0;
		textoColor(" morido","red");
		document.getElementById("quemar").disabled = true;
		document.getElementById("golpe").disabled = true;
		document.getElementById("fallar").disabled = true;
	}
}
function textoColor(texto="",color="Blue"){
	document.getElementById("estado").innerHTML=name+"<br>"+texto;
	document.getElementById("estado").style.color= color;
}
function mover(){
			heroe.style.left='"100px"';
}

//	for(k=250;k>0;k--){
	//		enemigo.style.right='+=10px';

function revision(){
	if (vida>200){
		vida=200;
	}
	perder();
	heroe.height=vida*1.25;
	enemigo.height=vidaEnemigo*1.3;
	document.getElementById("tiempo").innerHTML=tiempo;
	document.getElementById("tiempo").style.color= "purple";
	document.getElementById("cantidad de vida").style.color="lime"
	document.getElementById("cantidad de vida").innerHTML=vida + '/200 de vida';
	document.getElementById("cantidad de vida del enemigo").style.color="maroon"
	document.getElementById("cantidad de vida del enemigo").innerHTML=vidaEnemigo + ' de vida del Enemigo';
}

//bucles

setInterval(function(){
	tiempo++;
}, 1000);
setInterval(function(){
	revision ();
}, 100);
