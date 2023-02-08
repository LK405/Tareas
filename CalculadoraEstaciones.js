var mes = prompt ("Ingrese el numero de un mes") ;

   

if (mes > 0 && mes <= 12){
  
  if (mes >= 3 && mes <=5){
    
    window.alert("Es Primavera"); 
    
  } else if (mes >=6 && mes <=8  ) {
    
    window.alert("Es Verano");
    
  } else if (mes >= 9 && mes <=11){
    
    window.alert("Es Otoño"); 
  
  } else {
    
    window.alert("Es Invierno"); 
  }
    
} else  {
  
  window.alert("Valor Invalido: " + mes ); 
}
  window.alert(" Beldenson Lopez 23000419"  ); 
 