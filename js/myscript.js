var array;

function cargarpagina(){
     array = [
        {nombre:"valentina",codigo:"192111",doc:"123456",prog:"ing.sistemas"},
        {nombre:"prado",codigo:"192111",doc:"123456",prog:"ing.sistemas"},
        {nombre:"sarabia",codigo:"192111",doc:"123456",prog:" ing.sistemas"}
    ];
    

}

function calcular(){
   let nombre = $("#nombre").val();
   for(let i=0;i<array.length;i++){
    if(nombre==array[i].nombre){
        console.log (" el nombre encontrado es: "+nombre);
        break;
    }
    else{
        console.log("su nombre "+nombre+" no fue enontrado");
    }
   }
}
