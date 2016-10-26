//this is too far beyond my level of understanding.
//Consider this my stopping point for the homework.
var DnaTranscriber = function() {
};
//all objects inherit their properties & methods of their prototype
//object constructor using transcribe
//I have no clue how transcribe works, but love that it does
DnaTranscriber.prototype.transcribe = function(input, type) {
    var output = '';

    for (var i = 0; i < input.length; i++) {
        var nucleotide = input[i];
        output += type[nucleotide];
    }

    return output;
};

DnaTranscriber.prototype.toRna = function(dnaInput) {
    var dna = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };
//more this
    return this.transcribe(dnaInput, dna);
};

DnaTranscriber.prototype.toDna = function(rnaInput) {
    var rna = {
        C: 'G',
        G: 'C',
        A: 'T',
        U: 'A'
    };

    return this.transcribe(rnaInput, rna);
};

module.exports = DnaTranscriber;
