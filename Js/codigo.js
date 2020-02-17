/* ------------------------OBJETO CON LAS PROPIEDADES DE LA CALCULADORA */
var p={

    teclas: document.querySelectorAll("#Calculadora ul li"),
    accion: null,
    digito: null,/* sirve para almacenar en la propiedad digito */
    operaciones: document.querySelector("#operaciones"),
    cantidadSignos: 0,
    cantidadDecimal:false,
    resultado:false


}

/* ------------------------OBJETO CON LOS METODOS DE LA CALCULADORA */

var m={
    inicio: function(){
        for(var i=0; i<p.teclas.length;i++){

            p.teclas[i].addEventListener("click", m.oprimirTecla)
        }
    },

    oprimirTecla: function(tecla){

        p.accion=tecla.target.getAttribute("class")/*target ayuda a indicarle al codigo que boton (boton de la calculadora) se esta presionando, obteniendo el atributo que tiene cada boton, en este caso el atributo es class*/ 
        p.digito=tecla.target.innerHTML;//**permite agregar, reemplazar o capturar (es el que utilizamos ahora)contenido HTML dentro de una etiqueta */
        m.calculadora(p.accion,p.digito);
        
    },

    teclado: function(tecla){
        document.addEventListener("keydown",m.oprimir)
        
    },

    oprimir: function (tecla) {
        console.log(tecla.keyCode)

        if (tecla.keyCode==48 || tecla.keyCode == 96) {
            p.accion="numero";
            p.digito=0;
            
        }

        else if (tecla.keyCode==49 || tecla.keyCode == 97) {
            p.accion="numero";
            p.digito=1;
            
        }
        else if (tecla.keyCode==50 || tecla.keyCode == 98) {
            p.accion="numero";
            p.digito=2;
            
        }

        else if (tecla.keyCode==51 || tecla.keyCode == 99) {
            p.accion="numero";
            p.digito=3;
            
        }
        else if (tecla.keyCode==52 || tecla.keyCode == 100) {
            p.accion="numero";
            p.digito=4;
            
        }

        else if (tecla.keyCode==53 || tecla.keyCode == 101) {
            p.accion="numero";
            p.digito=5;
            
        }
        else if (tecla.keyCode==54 || tecla.keyCode == 102) {
            p.accion="numero";
            p.digito=6;
            
        }

        else if (tecla.keyCode==55 || tecla.keyCode == 103) {
            p.accion="numero";
            p.digito=7;
            
        }
        else if (tecla.keyCode==56 || tecla.keyCode == 104) {
            p.accion="numero";
            p.digito=8;
            
        }

        else if (tecla.keyCode==57 || tecla.keyCode == 105) {
            p.accion="numero";
            p.digito=9;
            
        }

        else if (tecla.keyCode==187 || tecla.keyCode == 107) {
            p.accion="signo";
            p.digito="+";
            
        }

        else if (tecla.keyCode==189 || tecla.keyCode == 109) {
            p.accion="signo";
            p.digito="-";
            
        }

        else if (tecla.keyCode==88 || tecla.keyCode == 106) {
            p.accion="signo";
            p.digito="*";
            
        }

        else if (tecla.keyCode==111) {
            p.accion="signo";
            p.digito="/";
            
        }

        else if (tecla.keyCode==190 || tecla.keyCode == 110) {
            p.accion="decimal";
            p.digito=".";
            
        }

        else if (tecla.keyCode==13) {
            p.accion="igual";
            
            
        }

        else if (tecla.keyCode==8) {
            p.accion="";
            m.borrarCalculadora();           
            
        }
        else{
            p.accion="";
            p.digito="";
        }

        m.calculadora(p.accion,p.digito);
    },

    calculadora: function(accion,digito){
        switch(accion){

            case "numero":
                p.cantidadSignos=0// cuando se presiona un numero, la varibla volvera a cero y se podra oprimir otravez un signo
                if (p.operaciones.innerHTML=="0") {//si esta el 0 de la caja de operaciones entonces se reemplazara el digito que se presiona
                    p.operaciones.innerHTML=digito;
                }else{
                    if (p.resultado==true) {
                        p.resultado=false;
                        p.operaciones.innerHTML=digito;

                    }else{
                        p.operaciones.innerHTML+=digito;//concatena el digito que se va presionando

                    }
                
            }
            break;

            case "signo":
                p.cantidadSignos++// cada vez que presione un signo, esta variable se pondra a 1, por lo que si el usuario quiere presionar otra vez otro signo despues de un signo, este no lo dejara

                if (p.cantidadSignos=="1") {// solo puede incrementar a 1
                    if (p.operaciones.innerHTML==0) {
                        p.operaciones.innerHTML=0
                    }else{
                    p.operaciones.innerHTML+=digito;
                    p.cantidadDecimal=false;
                    p.resultado=false;
                    }
                }
                
            break;

            case "decimal":
                if (!p.cantidadDecimal && p.cantidadSignos!=1) {
                    p.operaciones.innerHTML+=digito;
                    p.cantidadDecimal=true;
                    p.resultado=false;
                }
                

            break;

            case "igual":
                p.operaciones.innerHTML=eval(p.operaciones.innerHTML);//eval separa numero de signos y los evalua
                var expresion=/./g;
                if (!expresion.test(p.operaciones.innerHTML)) {
                    p.cantidadDecimal=true;
                }
                p.resultado=true;
                break;

        }
    },

    borrarCalculadora: function(){
        p.cantidadDecimal=false;
        p.operaciones.innerHTML=0
        
    }

}

m.inicio();
m.teclado();