var dataBalances = {
	Tom   : { total : 13000 },
	John  : { total : 'Nothing' },
	Steve : { total : 620.98 },
	Bill  : { total : '487.11' },
	Paul  : { total : 31 },
	Jack  : { total : 0.93 }
};

var personsList = [];

var floatDetect = function( input ) {
  if ( parseInt( input ) != input && !isNaN( input ) )
    return true; 
};

var printFloat = function( data ) {
  for ( var person in data ) {
    if ( floatDetect( data[ person ].total ) )
      personsList.push( person );
  }
};

printFloat( dataBalances );
console.log( personsList );
