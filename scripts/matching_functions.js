
/*
++++++++++++++++++++++++++++++++
	general functions
++++++++++++++++++++++++++++++++
*/

var $isprotien='no';
var $beware="none";
var $final='';
var $aouga=new Array();


function handleprotien() {
	/*
		converts basepair.value to lowercase, and
		replaces all the whitespace and non-word character.
		sends to mystery()
		
		why is it fooling around with $isprotien? why have a global
		variable determine what to do with the seqeunce? why is 'protien' misspelled?
	*/
	var $inquestion=document.repeat.basepair.value.toLowerCase().replace(/\s/g, '').replace(/\W/g, '');
	$isprotien='yes';
	mystery($inquestion);
	$isprotien='no';
}

function handledna() {
	/*
		converts basepair.value to lowercase, and
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
	document.repeat.basepair.value="";
	document.repeat.theRepeat1.value="";
	document.repeat.theRepeat2.value="";
	document.repeat.theRepeat3.value="";
	document.repeat.theRepeat4.value="";
	document.repeat.basepair.focus();
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

function chunkstring($sequence) {
	/*
		converts a sequence string to an array of 3's
		ignores any trailing base pairs that are less
		than 3
	*/
	$threemer=$sequence.match(/\w{3}/g)
	return $threemer;
}

function readingframe($transcription) {
	/*
		converts $transcription to protein codons, passes
		to translation(), then to mystery(). if nothing matches,
		then make a reverse compliment and try again
	*/
	var $kansas1=mystery(translation(chunkstring($transcription)));
	var $kansas2=mystery(translation(chunkstring($transcription.slice(1))));
	var $kansas3=mystery(translation(chunkstring($transcription.slice(2))));
	if (($kansas1=='no matches')&&($kansas2=='no matches')&&($kansas3=='no matches')) {
		var $mirror=revcom($transcription);
		var $kansas4=mystery(translation(chunkstring($mirror)));
		var $kansas5=mystery(translation(chunkstring($mirror.slice(1))));
		var $kansas6=mystery(translation(chunkstring($mirror.slice(2))));
		document.repeat.theRepeat1.value=$kansas4+" [includes r.c.]";
		document.repeat.theRepeat2.value=$kansas5+" [includes r.c.]";
		document.repeat.theRepeat3.value=$kansas6+" [includes r.c.]";
	} else {
		document.repeat.theRepeat1.value=$kansas1;
		document.repeat.theRepeat2.value=$kansas2;
		document.repeat.theRepeat3.value=$kansas3;
	}
}

function translation($beads) {
	/*
		this is probably unnessisary
	*/
	var $plaintext=new String;
	for ($c=0; $c<$beads.length; $c++) {
		var $codon=manifold($beads[$c]);
		$plaintext=$plaintext.concat($codon);
	}
	return $plaintext;
}

function manifold($radiator) {
	/*
		holy crap, this is a job for a dictionary!
	*/
	var $aminoacid=new String;
	$vane=$radiator.slice(0,2);
	// collects all the AA that code with the first two bp
	if ($vane=='ac') {
		$aminoacid='t';
	} else if ($vane=='cg') {
		$aminoacid='r';
	} else if ($vane=='tc') {
		$aminoacid='s';
	} else if ($vane=='ct') {
		$aminoacid='l';
	} else if ($vane=='gt') {
		$aminoacid='v';
	} else if ($vane=='cc') {
		$aminoacid='p';
	} else if ($vane=='gc') {
		$aminoacid='a';
	} else if ($vane=='gg') {
		$aminoacid='g';
	} else if ($vane=='at') {
		($radiator=='atg')? $aminoacid='m': $aminoacid='i';
	} else {
		// handles the ones that need 3 bp
		$tail=$radiator.slice(2);
		switch ($vane) {
		case 'aa':
			if (($tail=='a')||($tail=='g')) {
				$aminoacid='k';
			} else {
				$aminoacid='n';
			}
			break;
		case 'ca':
			if (($tail=='a')||($tail=='g')) {
				$aminoacid='q';
			} else {
				$aminoacid='h';
			}
			break;
		case 'ga':
			if (($tail=='a')||($tail=='g')) {
				$aminoacid='e';
			} else {
				$aminoacid='d';
			}
			break;
		case 'ta':
			if (($tail=='t')||($tail=='c')) {
				$aminoacid='y';
			} else if (($tail=='a')||($tail=='g')) {
				$aminoacid='.';
			}
			break;
		case 'tg':
			if (($tail=='t')||($tail=='c')) {
				$aminoacid='c';
			} else if ($tail=='g') {
				$aminoacid='w';
			} else {
				$aminoacid='.';
			}
			break;
		case 'tt':
			if (($tail=='t')||($tail=='c')) {
				$aminoacid='f';
			} else {
				$aminoacid='l';
			}
			break;
		case 'ag':
			if (($tail=='a')||($tail=='g')) {
				$aminoacid='r';
			} else {
				$aminoacid='s';
			}
		}
	}
	return $aminoacid;
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


/*
	this function is the first part of the 
	Knuth-Morris-Pratt algorithm.  It sends the	
	kansas repeat to the nextTable function.
	If all the letters in the k.r. match the sequence, 
	it returns aouga array, through honker function, to the mystery function
*/
function matchKMP($findthisStr, $inthisStr, $ident, $seqorstrain) {
	//	convert the k.r. to an array
	var $findthis=$findthisStr.split('');
	var $step=nextTable($findthis);
	var $inthis=$inthisStr.split('');
	var $i=0;
	var $j=0;
	while ($j<$inthis.length) {
		while (($i>-1)&&($findthis[$i]!=$inthis[$j])) {
			$i=$step[$i];
		}
		$i++;
		$j++;
		if ($seqorstrain=='seq') {
			if ($i>=$findthis.length) {
				// some k.r. differ only by length, need to weed those apart
				switch ($ident) {
					//	E and D
					case 'E':
					//	if the next letter isn't g then okay
					if ($inthis[$j]!='g') {
						$found=$j-$i;
						$ls=$findthis.length;
						$i=$step[$i];
						honker($ident, $found);
					}
					break;
					//  O and B
					case 'O':
					var $pj=$j;
					$pj=$pj-26;
					$isbigo=$pj-21;
					$isbigb=$pj-26;
					//	I think I fixed the starting O problem
					if (($inthis[$pj]=='g')||($inthis[$pj]==null)) {
						$found=$j-$i;
						$ls=$findthis.length;
						$i=$step[$i];
						honker($ident, $found);
					}
					break;
					default:
					$found=$j-$i;
					$ls=$findthis.length;
					$i=$step[$i];
					honker($ident, $found);
				}
			}
		} else {
			if (($i>=$findthis.length)&&($findthisStr.length==$inthisStr.length)) {
					$found=$j-$i;
					$ls=$findthis.length;
					$i=$step[$i];
					honker($ident, $found);
			}
		}
	}

}

/*
	this is the second half of the KMP algorithm
	which figures how far back to set the k.r. 
	when it encounters a mismatch.  It's different
	for every repeat
*/
function nextTable($x) {
var $p=0;
var $q=-1;
var $next=new Array();
$next[0]=-1;
while ($p<$x.length) {
	while (($q>-1)&&($x[$p]!=$x[$q])) {
		$q=$next[$q];
	}
	$p++;
	$q++;
	if ($x[$p]==$x[$q]) {
		$next[$p]=$next[$q];
	} else {
		$next[$p]=$q;
	}
}
return $next;
}

/*
	this creates an array of the
	results using the position found
	in the sequence as the array
	key.  That way the repeat letters
	are displayed in the order they're found
	in the seqeunce, not in the order of
	the $repeats array.
*/
function honker($letter, $place) {
	$aouga[$place]=$letter;
}

function mystery($seq) {
	/*
		finds the strain name associated with the msp1a repeats
	*/
	//	convert aa sequence to lower case
	// var $seqRaw=document.repeat.aminoacids.value;
	// var $seq=$seqRaw.toLowerCase();
	var $ratchet=0;
	//	match aa to repeat name
	while ($ratchet<$repeats.length) {
		//	typeof solves the problem with $ratchet array numbers that aren't there
		if (typeof $repeats[$ratchet]!='undefined') {
			matchKMP($repeats[$ratchet][1], $seq, $repeats[$ratchet][0], 'seq');
			$ratchet++;
		} else {
			$ratchet++;
		}
	}

	if ($aouga.length>0) {
		$windup=$aouga.join('');		
		//	convert aouga to string with no intervening chars, split again, join up with spaces inbetween
		$winded=($windup.split('')).join(' ');
		$aouga=new Array();
		//	do the match round again for strain names
		var $cog=0;
		while ($cog<$strain.length) {
			// same problem as 558
			if (typeof $strain[$cog]!='undefined') {
				matchKMP($strain[$cog][1], $windup, $strain[$cog][0], 'strain');
				$cog++;
			} else {
				$cog++;
			}
		}
		if ($aouga.length>0) {
			$pitch=$aouga.join('');
			$aouga=new Array();

			if ($isprotien=='yes'){
				document.repeat.theRepeat4.value=$windup+" ("+$pitch+")";
			} else {
				return $windup+" ("+$pitch+")";
			}
		} else {
			// s is the same as k, but sbmfw doesn't show as bison, or sch as wetumka
			// 7/16/7 may be able to delete this part, since update on line 558
			switch ($windup) {
				case "KBMFW":
					$windup=$strain[39][1]+" ("+$strain[39][0]+")";
					return $windup;
					break;
				case "KCH":
					$windup=$strain[4][1]+" ("+$strain[4][0]+")";
					return $windup;
					break;
			}
			if ($isprotien=='yes'){
				document.repeat.theRepeat4.value=$windup;
			} else {
				return $windup;
			}
		}

	} else {
		if ($isprotien=='yes'){
			document.repeat.theRepeat4.value='no matches';
			$aouga=new Array();
		} else {
			return "no matches";
			$aouga=new Array();
		}
	}

}
