var n = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var nSize = n.length;

for ( var i = 0; i < nSize; n[ i ] = 0, i +=1 ) ; /* empty instruction */

console.log( n );
