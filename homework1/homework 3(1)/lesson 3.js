var numb1 = numb( prompt( 'Введите число', '' ) );
  var arifm = calcs( prompt( 'Введите тип операции +, -, *, /', '' ) );
  var numb2 = numb( prompt( 'Введите число', '' ) );
  var sum;

  function calcs( _data ){

   if( _data == "+" || _data == "-" || _data == "*" || _data == "/" ) {

    return _data;

   } else {

    return calcs( prompt( 'Введите тип операции +, -, *, /', '' ) );

   }

  }
  
  function numb( _data ){
  
   if( isNaN( _data ) == false && _data != null && _data != undefined ){
   
    return Number( _data );
    
   } else {
   
    return Number( numb( prompt( 'Введите число', '' ) ) );
   
   }
  
  }
  
  if(arifm == "+") sum = numb1 + numb2;
  if(arifm == "-") sum = numb1 - numb2;
  if(arifm == "*") sum = numb1 * numb2;
  if(arifm == "/") sum = numb1 / numb2;
  
  
  console.log( numb1, arifm, numb2, " = ", sum );
  


