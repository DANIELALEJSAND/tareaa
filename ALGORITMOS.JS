function circulo(){
    var a = 0;
   var b = 0;
   a = parseFloat(prompt("ESCRIBA EL RADIO DEL CIRCULO POR FAVOR "));
   b= 3.14 * a *a;
   alert("EL AREA DEL CIRCULO ES: " + b);
   
   }
   
   function rectangulo(){
       var a = 0;
      var b = 0;
      var c = 0;
      a = parseFloat(prompt("ESCRIBA LA BASE DEL RECTANGULO POR FAVOR "));
      b = parseFloat(prompt("ESCRIBA LA ALTURA DEL RECTANGULO POR FAVOR "));
      c = a *b ;
      alert("EL AREA DEL RECTANGULO ES : " + c);
      
      }
   
      function pentagono(){
   
       var a = 0;
      var b = 0;
      var c = 0;
      var d = 0;
      a = parseFloat(prompt("ESCRIBA EL PERIMETRO DEL PENTAGONO POR FAVOR "));
      b = parseFloat(prompt("ESCRIBA LA APOTEMA DEL PENTAGONO  POR FAVOR "));
      c = a *b ;
      d= c/2;
      alert("EL AREA DEL PENTAGONO  ES : " + d);
      
      } 
   
      function trapecio(){
       var a = 0;
      var b = 0;
      var c = 0;
      var d = 0;
      a = parseFloat(prompt("ESCRIBA LA BASE MAYOR DEL TRAPECIO POR FAVOR "));
      b = parseFloat(prompt("ESCRIBA LA BASE MENOR DEL TRAPECIO POR FAVOR "));
      c = parseFloat(prompt("ESCRIBA LA ALTURA DEL TRAPECIO  POR FAVOR "));
      d= a+b*c/2;
      alert("EL AREA DEL TRAPECIO ES : " + d);
      
      } 
   
      function hexagono(){
       var a = 0;
      var b = 0;
      var c = 0;
      a = parseFloat(prompt("ESCRIBA EL PERIMETRO DEL HEXAGONO POR FAVOR "));
      b = parseFloat(prompt("ESCRIBA LA APOTEMA DEL HEXAGONO POR FAVOR"));
      c= a*b/2;
      alert("EL AREA DEL HEXAGONO ES : " + c);
                                 
      } 
   