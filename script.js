function onesDigit(n) {
  // your code here
	if (n>=0) {
		return (n%10);
	}
}
 
// Do not change the code below 

const n = prompt("Enter Number:");
alert(onesDigit(n));
