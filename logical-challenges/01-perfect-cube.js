var input = 27;
var answer = 0;

while ( answer * answer * answer < Math.abs( input ) ) {
	answer += 1;
}

if ( answer * answer * answer === input ) {
	if ( input < 0 ) {
	  answer = - answer;
	}

	console.log( 'The cube root of ' + input + ' is: ' + answer );
} else {
	console.log( 'The number ' + input + ' is not a perfect cube' );
}
