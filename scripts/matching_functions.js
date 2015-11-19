
/*
++++++++++++++++++++++++++++++++
	general functions
++++++++++++++++++++++++++++++++
*/


var $isprotien=Boolean(false);
var $beware="none";
var $final='';
var $aouga=new Array();



function handleprotein() {

	/*
		converts basepair.value to lowercase, and
		replaces all the whitespace and non-word character.
		sends to mystery()
		
		why is it fooling around with $isprotien? why have a global
		variable determine what to do with the seqeunce? why is 'protien' misspelled?
	*/
	var $inquestion=document.repeat.basepair.value.toLowerCase().replace(/\s/g, '').replace(/\W/g, '');

	$isprotien=Boolean(true);
	var $found=look_for_repeats($inquestion);
	if ($found[0]) {
	    document.getElementById('theRepeat4').innerHTML="found in protein:</br>"+$found[1];
	} else {
	    document.getElementById('theRepeat4').innerHTML="found in protein:</br>"+$found[1];
	}
	$isprotien=Boolean(false);

}

function handledna() {
	/*
		converts basepair.value to uppercase, and
		replaces all the whitespace and non-word character.
		sends to readingframe()		
		
		the sequence scrubbing needs to be moved to the 
		functions that work with them, or write one scrubbing
		function that assigns a variable
	*/
	var $basepairs=document.repeat.basepair.value.toLowerCase().replace(/\s/g, '').replace(/[^atgc]/g, '').replace(/[0-9]/g, '');
	readingframe($basepairs);
}


function erase() {
	// clears all the fields
	document.getElementById('basepair').value="";
	document.getElementById('theRepeat1').innerHTML="found in frame 1:</br>"
	document.getElementById('theRepeat2').innerHTML="found in frame 2:</br>"
	document.getElementById('theRepeat3').innerHTML="found in frame 3:</br>"
	document.getElementById('theRepeat4').innerHTML="found in protein:</br>"
	document.getElementById('basepair').focus();
}

function esplainin() {
	// what's this? switching stylesheets?
	if (hid.style.display=='none') {
		hid.style.display='block';
	} else {
		hid.style.display='none';
	}
}

/*
+++++++++++++++++++++++++++++++++++++++
	translate bp to amino acid
+++++++++++++++++++++++++++++++++++++++
*/

function readingframe($transcription) {
	/*
		converts $transcription to protein codons, passes
		to translation(), then to mystery(). if nothing matches,
		then make a reverse compliment and try again
	*/

	var $kansas1=look_for_repeats(translation($transcription));
	var $kansas2=look_for_repeats(translation($transcription.slice(1)));
	var $kansas3=look_for_repeats(translation($transcription.slice(2)));
	if ((!$kansas1[0])&&(!$kansas2[0])&&(!$kansas3[0])) {

		var $mirror=revcom($transcription);
		var $kansas4=mystery(translation($mirror));
		var $kansas5=mystery(translation($mirror.slice(1)));
		var $kansas6=mystery(translation($mirror.slice(2)));

        document.getElementById('theRepeat1').innerHTML="found in frame 1:</br>"+$kansas4[1]+" [includes r.c.]";
        document.getElementById('theRepeat2').innerHTML="found in frame 2:</br>"+$kansas5[1]+" [includes r.c.]";
        document.getElementById('theRepeat3').innerHTML="found in frame 3:</br>"+$kansas6[1]+" [includes r.c.]";
	} else {

        document.getElementById('theRepeat1').innerHTML="found in frame 1:</br>"+$kansas1[1];
        document.getElementById('theRepeat2').innerHTML="found in frame 2:</br>"+$kansas2[1];
        document.getElementById('theRepeat3').innerHTML="found in frame 3:</br>"+$kansas3[1];
	}
}

function translation($beads) {
	/*
		merged two previous functions
		now it takes $beads, chops it into 3's
		gets the aa through the codon_dict and returns
	*/
    var $codon_dict={"GCA":"A", "GCC":"A", "GCG":"A", "GCT":"A", "TGT":"C", "TGC":"C", "GAG":"E", "GAA":"E", "GAT":"D", "GAC":"D", "GGT":"G", "GGG":"G", "GGA":"G", "GGC":"G", "TTT":"F", "TTC":"F", "ATC":"I", "ATA":"I", "ATT":"I", "CAT":"H", "CAC":"H", "AAG":"K", "AAA":"K", "ATG":"M", "CTT":"L", "CTG":"L", "CTA":"L", "CTC":"L", "TTA":"L", "TTG":"L", "AAC":"N", "AAT":"N", "CAA":"Q", "CAG":"Q", "CCT":"P", "CCG":"P", "CCA":"P", "CCC":"P", "AGC":"S", "AGT":"S", "TCT":"S", "TCG":"S", "TCC":"S", "TCA":"S", "AGG":"R", "AGA":"R", "CGA":"R", "CGG":"R", "CGT":"R", "CGC":"R", "ACA":"T", "ACG":"T", "ACT":"T", "ACC":"T", "TGG":"W", "GTA":"V", "GTC":"V", "GTG":"V", "GTT":"V", "TAT":"Y", "TAC":"Y", "TAG":"Stop", "TAA":"Stop", "TGA":"Stop"};

    var $plaintext=new String;
    var $beads=$beads.toUpperCase().match(/.{1,3}/g);
    for ($c=0; $c<$beads.length; $c++) {
        var $codon=$codon_dict[$beads[$c]];
        $plaintext=$plaintext.concat($codon);
    }
    return $plaintext.toLowerCase();
}



/*
++++++++++++++++++++++++++++++++
	make reverse complement
++++++++++++++++++++++++++++++++
*/

/*
	these can be replaced with one function
*/

// strips oligo into an array for "downtown" to handle
function revcom(deboned) {
	var $flip=(deboned.split('')).reverse();
	$reflection=new Array();
	for ($c=0; $c<$flip.length; $c++) {
		$reflection[$c]=downtown($flip[$c]);
	}
	$done=$reflection.join('');
	return $done;
}

// replaces codon with its complement and returns to "revcon"
function downtown($whoop) {
	if ($whoop=='a') {
		$whoop='t';
	} else if ($whoop=='t') {
		$whoop='a';
	} else if ($whoop=='c') {
		$whoop='g';
	} else if ($whoop=='g') {
		$whoop='c';
	} else if ($whoop=='n') {
		$whoop='n';
	}
	return $whoop;
}

/*
++++++++++++++++++++++++++++++++
	the matching functions
++++++++++++++++++++++++++++++++
*/



	$substitute=new Array();
	$substitute[0]='Italy 6';
	$substitute[1]='Italy 7';


// done, 'merge' is already used by javascript
function overlap($data_range) { 
    /*
        got this off stackoverflow, it's dope
        
        given list of tuple match ranges, [(a,b),(c,d),(e,f),...]
        first sort the list to make sure a<c<e because the tuples
        will be concated from several repeat match results, but the spans
        will already be ordered from low to high
        the three possibilities are { 
        a < b < c < d   a---------b
                                     c---d
                                     
        a < c <= b < d  a------------b
                                c-------d
                                
        a < (c<d) <= b  a--------------b
                            c---d

        [(0, 28), (28, 56), (84, 112)] as example
    */

    $data_range.sort(function(a,b) {
        return a[0]-b[0];
    });

    var $merged_data=new Array();
    var $saved = $data_range[0];    

    for ($dr in $data_range) {
        if ($data_range[$dr][0]<=$saved[1]) {      
            $saved[1]=Math.max($saved[1], $data_range[$dr][1])
        } else {
            $merged_data.push([$saved[0], $saved[1]])
            $saved[0]=$data_range[$dr][0]
            $saved[1]=$data_range[$dr][1]
        }         
    }    
    $merged_data.push($saved)
    return $merged_data
}

// done
function known_unknowns($spans, $seq_length) { 
    /*
        take the list of tuples in spans, create new tuples
        that cover the repeats in sequence that are unknown
        
        check if there's a tuple starting at 0,
        check if the end tuple is as long as the sequence,
        fill in the missing tuples
        
        and then if you want just the gaps, leave wholething=False
    */ 
    var $donewith=[];
    //  does the list start with 0?
    var $smallest=$spans[0][0];
    for (var $n in $spans) {
        if (Math.min.apply(null, $spans[$n])<$smallest) {
            $smallest=Math.min.apply(null, $spans[$n]);
        }
    }
    if ($smallest!=0) { 
        var $pre_done=new Array();
        $pre_small=['?', [0, $smallest]];
        $donewith.unshift($pre_small);
    }
        
    //  is the largest number equal to the sequence length?
    var $largest=$spans[0][0];
    for (var $n in $spans) {
        if (Math.max.apply(null, $spans[$n])>$largest) {
            $largest=Math.max.apply(null, $spans[$n]);
        }
    }
    if ($largest<$seq_length) { 
        var $pre_big=new Array();
        $pre_big=['?', [$largest, $seq_length]];  

        $donewith.push($pre_big);
    }
        
    $spans.sort(function(a,b) {
        return a[0]-b[0]
    });
    for (var $s in $spans) {
        var $t=$s;
        $t++;
        if ($t<=$spans.length-1) {
            if ($spans[$s][1]!=$spans[$t][0]) {
                var $pre_wit=new Array();
                $pre_wit=['?', [$spans[$s][1], $spans[$t][0] ] ]
                $donewith.push($pre_wit);
            }
        }
    }
    
    // need to return this as sorted
    return $donewith;
}
 
// done   
function initnext($needle) { 
    /*
        generates the next table for patterns used in kmp_search
    */
    var $next=new Array();
    var $j=-1;
    var $i=0;
    $next[0]=-1;
    while ($i<$needle.length-1) { 
        if (($j==-1) || ($needle[$i]==$needle[$j])) {
            $j+=1;
            $i+=1;
            if ($needle[$i]!=$needle[$j]) { 
                $next[$i]=$j;
            } else { 
                $next[$i]=$next[$j];
            }
        } else {
            $j=$next[$j];
        }
    }
    return $next
}
 
// done  
function kmp_search($needle, $haystack, $start, $matches) { 
    /*
        searches haystack for matches to $needle
        
        added a check for false positives with the
        bedtok() function. if that returns true then the
        match is appended to 'matches' list
    */
    $j=0;
    $i=$start;
    $next_table=initnext($needle);
    while ($j<$needle.length && $i<=$haystack.length-1) {   
        if ($j==-1 || $haystack[$i]==$needle[$j]) { 
            $j+=1;
            $i+=1;         
        } else {             
            $j=$next_table[$j];
        }
    } 

    var $troublemakers={
        "adsssasgqqqessvlspsgqastssqlg" : "10",
        "adsssasgqqqesgvlsqsgqastssqlg" : "15",
        "adsssasgqqqessvlsqseastssqlg" : "98",
        "adsssasgqqqessvssqseastssqlg" : "E",
        "saggqqqessvssqsdqastssqlg" : "O"
    }
    var $suspect=Boolean(false);
    if ($troublemakers[$needle]) { 
        $leading=$haystack.slice(($i-$j)-4, $i-$j);
        $trailing=$haystack.slice($i, $i+2);
        if (!$leading) { 
            $leading=Boolean(false);
        }
        if (!$trailing) { 
            $trailing=Boolean(false);
        }

        $suspect=bedtok($needle, $leading, $trailing);
    }

    if ($j>=$needle.length-1 && $i+$needle.length<=$haystack.length) {  
        //  matches found before the end of $haystack string          
        if (!$suspect) {             
            // matches.append([$needle,$i-$j])  
            $new_match=new Array()
            $new_match=[$repeat_dict[$needle], [($i-$j), $i]]

            $matches.push($new_match);
        }
        kmp_search($needle,$haystack, ($i-$needle.length+1), $matches); 
                     
    } else { 
        //  matches found at the end of $haystack string

        if ($j>$needle.length-1) { 
            if (!$suspect) {           
                // matches.append([$needle,$i-$j])
                $new_match=new Array()
                $new_match=[$repeat_dict[$needle], [($i-$j), $i]]
                $matches.push($new_match); 
            }
        }  
    }
    return $matches; 
} 

// done      
function bedtok($dupe, $prefix, $suffix) { 
    /*
        checks for those repeats that will cause false positives
        some repeats are exactly the same as 
        others, just shorter
        
        short   long    diff how?
        ----------------------------
        10      11      10+'vg'
        15      94      15+'vg'
        98      65      98+'g'      
        E       D       E+'g'
        O       K       'adgs'+O
        O       B       'adss'+O
        O       T       'agss'+O 
        
        checks prefix and suffix of dupe. 
        if false positive found, then the function returns False 
    */
    
    var $pre_pass=Boolean(true);
    var $suf_pass=Boolean(true);
        
    if ($prefix && ($prefix=='adgs' || ($prefix=='adss' || $prefix=='agss'))) { 
        // print 'k, b, or t'
        $pre_pass=Boolean(false);
    }  

    if ($suffix && ($suffix=='vg' || $suffix.slice(0,1)=='g')) { 
        // print '11,94,65,D'
        $suf_pass=Boolean(false);
    }
   //  print pre_pass, suf_pass            
    if ($pre_pass && $suf_pass) { 
        // print "that's a real {0}".format(troublemakers.get(dupe))
        return Boolean(false);
    } else { 
        // print 'something else'
        return Boolean(true);
    }
}

// done
function assemble_matches($haystack) { 

    /*
        1) looks for matches with kmp_search(), returns span in haystack 
            where repeat match starts & ends.
        2) Then merges sequential repeats.  
        3) Fills in gaps along haystack length at the start, middle, end 
            where matches are not covered, and appends those results 
            from known_unknowns() to first_round.
        4) looks for '?' in results. if yes, display all characters in the haystack slice
            if not, just string together the repeat letters
    */
    var $first_round=new Array();

    for (var $k in $repeat_dict) { 
        kmp_search($k, $haystack, 0, $first_round);
    }

    if ($first_round.length==0) {
        return $haystack;      
    } else {
    // merge() is now overlap(), because the name was already taken by javascript    
    var $pre_second=new Array();
    for (var $o in $first_round) {
        // use slice to make a shallow copy.
        // things performed on $pre_second were affecting $first_round
        $pre_second.push($first_round[$o][1].slice(0,2));
    }

    $second_round=overlap($pre_second);
   
    var $mysteries=known_unknowns($second_round, $haystack.length);
    
    //  appends those results from known_unknowns() to first_round
    for (var $m in $mysteries) { 
        $first_round.push($mysteries[$m]);
    }

 
    //  sorts to new list 
    $first_round.sort(function(a,b) {
        return a[1][0]-b[1][0];
    });

    /*
       I'm doing it this way because some(), reduce()
       every(), and filter() aren't supported by IE<9
       and this script was supposed to be used on whatever
       browser you had. Hope I didn't miss other methods
       that aren't supported by at least IE5.5
    */
    var $allknown=Boolean(true);
    for ($r in $first_round) {
        if ($first_round[$r][0]=='?') {
            $allknown=Boolean(false);
        }
    }
    
    var $final=new Array();
    if ($allknown) { 
        for ($r in $first_round) {
            $final.push($first_round[$r][0])
        }
    } else { 
        for ($r in $first_round) {
            if ($first_round[$r][0]=='?') { 
                $final.push($haystack.slice($first_round[$r][1][0], $first_round[$r][1][1]).toLowerCase())   
            } else { 
                $final.push($first_round[$r][0]);
            }
        }     
    }

    return $final
    }

}

// done
function look_for_repeats($haystack) {     
    /*
        1) assemble repeat matches in haystack with assemble_matches()
        2) make a new string from final that can be matched for 
            continuous repeat letters. don't know an easier way to do that
        3) match 0 or more '0' followed by 1 or more '1' followed by 0 or more '0'
            if yes, look for a strain match
    */    
    var $final=assemble_matches($haystack);

    // not sure how to do this by searching arrays
    // not gonna care right now
    var $braid=new Array();
    for (var $f in $final) { 
        if ($final[$f]==$final[$f].toUpperCase()) { 
            $braid.push('1');   
        } else { 
            $braid.push('0');
        }
    }

    //  match 0 or more '0' followed by 1 or more '1' followed by 0 or more '0'

    if ($braid.join('').search('^0+$')>-1) {
      
        var $results=Array(Boolean(false), 'returns '+$final+"</br>-this script doesn't have a match for that sequence");
     
    } else if ($braid.join('').search('^0*1+0*$')>-1) { 
     
        var $done=new Array();
        for (var $f in $final) {
            if ($final[$f]==$final[$f].toUpperCase()) {
                $done.push($final[$f]);
            }
        }
        var $thestrain=$strain_dict[$done.join(' ')];

        if ($thestrain) {
            var $results=Array(Boolean(true), 'returns '+$final.join(', ')+',</br> and found the strain '+$thestrain);
        } else {
            var $results=Array(Boolean(true), 'returns '+$final.join(', ')+',</br>-but this script doesn\'t have a match for this strain');
        }

    } else { 

        var $results=Array(Boolean(true), 'returns '+$final.join(', ')+',</br>-but this script doesn\'t have a match for this strain');
    }

return $results;

}
