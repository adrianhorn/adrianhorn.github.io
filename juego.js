var muerte,jugar,vidaEnemigo,tiempo,pocion;
var name,turnoEnemigo;
var vida, ataque, curacion, golpeEnemigo;
var heroe, enemigo,deshabilitarenemigo;


//estadisticas
turnoEnemigo=false
ataque = -25;
tiempo = 0;
pocion = 6;
vidaEnemigo=200;
golpeEnemigo=-20;
vida   = 200;
deshabilitarenemigo= 0;
curacion=45;
muerte=false;
enemigo=document.getElementById("enemigo");
heroe=document.getElementById("heroe");
textoBienvenida='Hola ' + name;
name='yoshi';


//nombre
function nombrarse(){
		name=prompt('¿Como te llamas?');
		if (!name){
			name="yoshi ";
		}
		console.log(name);
		return(name);
		textocolor();
		document.getElementById("estado").innerHTML=name;
}
nombrarse();


//Movimientos Enemigo
function MovimientosEnemigo(){
		revision()
	setTimeout{
		if (deshabilitarenemigo== 0){
			document.getElementById("Jugar").disabled = true;
			document.getElementById("curacion").disabled = true;
				document.getElementById("Jugar").disabled = false;
				document.getElementById("curacion").disabled = false;
		}
	},1200;
}
function lonk(){
	if(vida<80){
		var dado = Math.floor(Math.random() *3);
		if(dado==0){
			vidaEnemigo+=35;
		}
		if(dado==1){
			vida+=golpeEnemigo;
		}
		if(dado==2){
			vida+=golpeEnemigo;
		}
		if(dado==3){
		}
	}
	else var dado = Math.floor(Math.random() *2);
		if (dado==0){
			vida+=golpeEnemigo;
		}
		if (dado==1){
			vida+=golpeEnemigo;
		}
		if (dado==2){}
}


//botones
function juega(){
	var dado = Math.floor(Math.random() *4);
	if(dado==0){
		fallar();
	}
	if(dado==1){
		golpe();
	}
	if(dado==2){
		golpe();
	}
	if(dado==3){
		golpe();
	}
}
function curarse(){
		if(pocion==0){
			document.getElementById('curacion').disabled=true
		}
		else{
			pocion -=1
			revision()
			vida+=curacion;
			if(vida>200){
				vida=200
			}
			textoColor(" curado","green");
		}
	perder();

	MovimientosEnemigo();
}


//tipos de ataques
function fallar(){
	textoColor(" falló😪",'#4EFAC0');
	turnoEnemigo=true
	MovimientosEnemigo()
}
function golpe(){
	textoColor(" atacó👊",'#4EFAC0');
	vidaEnemigo+=ataque;
	turnoEnemigo=true;
	MovimientosEnemigo()
}


//estado
function ganar(){
	if (vidaEnemigo<1){
		vidaEnemigo=0;
		deshabilitarenemigo= 1;
		textoColor(" ganó","yellow");
		document.getElementById("Jugar").disabled = true;
		document.getElementById("curacion").disabled = true;
	}
}
function perder(){
	if (vida<1){
		vida=0;
		textoColor(" morido","red");
		document.getElementById("curacion").disabled = true;
		document.getElementById("Jugar").disabled = true;
	}
}


function revision(){
	if (vida>200){
		vida=200;
	}
	perder();
	ganar();
	document.getElementById("curacion").innerHTML='Usar Pocion '+ pocion;
//heroe.height=vida*2;
//enemigo.height=vidaEnemigo*2;
	document.getElementById("tiempo").innerHTML=tiempo;
	document.getElementById("tiempo").style.color= "purple";
	document.getElementById("cantidad de vida").style.color="lime"
	document.getElementById("cantidad de vida").innerHTML=vida + '/200 de vida';
	document.getElementById("cantidad de vida del enemigo").style.color="maroon"
	document.getElementById("cantidad de vida del enemigo").innerHTML=vidaEnemigo + ' de vida del Enemigo';
}
function textoColor(texto="",color="Blue"){
	document.getElementById("estado").innerHTML=name+"<br>"+texto;
	document.getElementById("estado").style.color= color;
}


//bucles
setInterval(function(){
	tiempo++;
}, 1000);
setInterval(function(){
	revision ();
}, 100);
