module.exports = function toReadable (number) {
//create arrays with string numbers for dozens and ones
   const arr = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen ', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
   const arrDozen = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

   //check for zero
   if (number == 0) {
      const stringNumber = 'zero';
      return(stringNumber);
   }

   //numbers from 0 to 20
   else if (number > 0 && number < 20) {
      const stringNumber = arr[number];
      return(stringNumber.trim());
   }
   //numbers from 20 to 100
   else if (number >= 20 && number < 100) {
      const stringNumber = arrDozen[(number-number%10)/10]+' '+ arr[number%10];
      return(stringNumber.trim());
   }
   //numbers from 100 to 1000
   else if (number >= 100 && number < 1000) {
      if ((number%100) < 20){
      const stringNumber = arr[(number-number%100)/100]+' hundred ' + arr[number%100];
      return(stringNumber.trim());
      }
      else if (number%100>=20 && number%100<100){
      const stringNumber = arr[(number-number%100)/100]+' hundred ' + arrDozen[(number%100-number%10)/10]+' '+ arr[number%10];
      return(stringNumber.trim());
      }      
   }
}
