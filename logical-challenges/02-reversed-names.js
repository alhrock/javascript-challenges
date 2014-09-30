var text = 'some text to reverse';

function invertString( str ) {
	return str.split( '' ).reverse().join( '' );
}

console.log( invertString( text ) );
