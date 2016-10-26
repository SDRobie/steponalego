function Hamming() {

    // oh joy, I'm using this.
    this.compute = function ( strA, strB ) {
        var count = 0;
        if( strA.length !== strB.length ) {
            throw new Error('DNA string not equal');
        }
        for( var i = 0; i < strA.length; i++ ) {
            if( strA.charAt(i) !== strB.charAt(i) ) {
                count++;
            }
        }

        return count;
    };
}

module.exports = Hamming;
