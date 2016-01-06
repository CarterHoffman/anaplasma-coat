# anaplasma-coat

<p>This script will take DNA or protein sequences and search for the repeated motifs of MSP1a, then display the results in the order that they occur in the sequence.  If searching DNA, the script translates all three reading frames to amino acids and searches for repeats.  If no match is found, it constructs the reverse complement and repeats the search again in all three reading frames. The inspiration for writing this script came after I had identified several motifs from a batch of <i>A. marginale</i> sequence results, and still had dozens and dozens left. Each motif is different from another by only a few amino acids, and each motif is about 26 AA long. It was hatefull work, and exactly what computers are supposed to do for you. A working copy of the script can be found <a href="http://greenbarnstar.github.io/anaplasma-coat/">here</a>.</p>

<p>Strain patterns change constantly, so the list of patterns grows all the time. The latest list is Cabezas-Cruz A et. al., PLoS ONE 8(6): e65243. doi:10.1371/journal.pone.0065243</p>

<h2>Brute force and Knuth-Morris-Pratt</h2>
<p>I learned how to write the algorithms used in this script from the book "Algorithms" by Robert Sedgewick.  You can find a pretty clear layout of the algorithm in C <a href='http://www-igm.univ-mlv.fr/~lecroq/string/node8.html'>on this page</a>, and a lengthy explanation on the <a href='http://en.wikipedia.org/wiki/Knuth-Morris-Pratt_algorithm'>Wikipedia</a> page.</p>

<p>The KMP algorithm is a faster way to search a string for a pattern than using brute force. It's tricky, and while I was able to learn enough to use it in this script, I don't completely understand how it works. The effect is that when a partial match is made between a pattern and a longer string, the points of comparison aren't completly reset.<p>
</p>With brute-force, the pattern is pushed along the string one character at a time. If there's a mismatch then you start all the way at the beginning of the pattern string and move to the next character in the search string. So with this example it takes three steps to find a match with brute-force.</p>

<pre>
1010100111001   1010100111001   1010100111001
||||x            x                ||||||||
10100111        -10100111       --10100111
</pre>
<p>With the KMP, you can skip ahead a few spaces if there's a partial match, based on a lookup table created by comparing the pattern to itself. That's the confusing part. In the same example, it only takes two steps to find a match</p>
<pre>
1010100111001   1010100111001
||||x             ||||||||
10100111        --10100111
</pre>

