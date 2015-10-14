
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
	var $inquestion=document.repeat.basepair.value.toLowerCase().replace(/\s/g, '').replace(/\W/g, '');
	$isprotien='yes';
	mystery($inquestion);
	$isprotien='no';
}

function handledna() {
	var $basepairs=document.repeat.basepair.value.toLowerCase().replace(/\s/g, '').replace(/[^atgc]/g, '').replace(/[0-9]/g, '');
	readingframe($basepairs);
}


function erase() {
	document.repeat.basepair.value="";
	document.repeat.theRepeat1.value="";
	document.repeat.theRepeat2.value="";
	document.repeat.theRepeat3.value="";
	document.repeat.theRepeat4.value="";
	document.repeat.basepair.focus();
}

function esplainin() {
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
	var $readingframe=new String;
	var $splitsequence=$sequence.split('');
	for($a=0; $a<($sequence.length/3); $a++) {
		$b=$a*3;
		if (($b+1<$sequence.length)&&($b+2<$sequence.length)) {
			var $amino=$splitsequence[$b]+$splitsequence[$b+1]+$splitsequence[$b+2]+" ";
			$readingframe=$readingframe.concat($amino);
		}
	}
	$threemer=$readingframe.split(' ');
	return $threemer;
}

function readingframe($transcription) {
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
	var $plaintext=new String;
	for ($c=0; $c<$beads.length; $c++) {
		var $codon=manifold($beads[$c]);
		$plaintext=$plaintext.concat($codon);
	}
	return $plaintext;
}

function manifold($radiator) {
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

/*
var $repeats=new Array();

	moved to repeat_strains file
	
		published repeats from J. de la Fuente et al, 
		Animal Health Research Reviews 6(1); 75�89
	
	$repeats[0]=Array('A','ddsssasgqqqessvssqseastssqlg');
	$repeats[1]=Array('B','adsssaggqqqessvssqsdqastssqlg');
	$repeats[2]=Array('C','adsssaggqqqessvssqsgqastssqlg');
	$repeats[3]=Array('D','adsssasgqqqessvssqseastssqlgg');
	$repeats[4]=Array('E','adsssasgqqqessvssqseastssqlg');
	$repeats[5]=Array('F','tdsssasgqqqessvssqsgqastssqlg');
	$repeats[6]=Array('G','ddsssasgqqqessvssqsgqastssqsg');
	$repeats[7]=Array('H','tdsssasgqqqessvssqsgqastssqsg');
	$repeats[8]=Array('I','ddsssasgqqqessvssqsgqastssqlg');
	$repeats[9]=Array('J','adsslaggqqqessvssqsdqastssqlg');
	$repeats[10]=Array('K','adgssaggqqqessvssqsdqastssqlg');
		// s and k are the same
	$repeats[11]=Array('L','agsssadgqqqessvssqsdqastssqlg');
	$repeats[12]=Array('M','adsssasgqqqessvssqsgqastssqlg');
	$repeats[13]=Array('N','tdsssasgqqqessvssqsdqastssqlg');
	$repeats[14]=Array('O','saggqqqessvssqsdqastssqlg');
	$repeats[15]=Array('P','tdsssasgqqqessgssqsgqashsaqsg');
	$repeats[16]=Array('Q','adsssasgqqqessvssqsdqastssqlg');
	$repeats[17]=Array('R','adsssaggqqhessvssqsdqastssqlw');
		//	adsssaggqqhessvssqsdqastssqwg is the old R sequence, maybe the new one is wrong
	// $repeats[18]=Array('S','adgssaggqqqessvssqsdqastssqlg');
	// this was screwing the wetumka reply
	$repeats[19]=Array('T','agsssaggqqqessvssqsdqastssqlg');
	$repeats[20]=Array('U','ddsssasgqqqessvssqsdqastssqlg');
	$repeats[21]=Array('V','adsssaggqqessvssqsdqastssqlg');
	$repeats[22]=Array('W','tdsssasgqqqessvssqsgqastssqsr');
	$repeats[23]=Array('\u03a6','tdsssasgqqqessvssqseastssqlg');	// phi
	$repeats[24]=Array(' 4','tdsssasgqqqessvlsqsgqastssqlg');		// formerly Israeli-4
	$repeats[25]=Array(' 3','adsssasgqqqessvlsqsgqastssqlg');		// formerly Israeli-3
	$repeats[37]=Array('\u03a3','adsssaggqqqessvssqseastssqlg');	// sigma
	$repeats[38]=Array('\u03b1','adsssasgvlsqsgqastssqlg');			// alpha
	$repeats[39]=Array('\u03b2','tdsssagdqqqgsgvssqsgqastssqlg');	// beta
	$repeats[40]=Array('\u0393','tdsssasgqqqessvssqsdastssqlg');	// gamma
	$repeats[41]=Array('\u03c0','adsssaggqqqessvssqsgqastssqfg');	// pi
	$repeats[42]=Array(' 1','sgsssasgqqqessvlsqggqastssqlg');		// formerly Israeli-1
	$repeats[43]=Array(' 2','tdsssasgqqqessvspqsgqastssqlg');		// formerly 2
	$repeats[44]=Array(' 5','adsssasgqqqessvssqsdastssqlg');			// formerly Italy-5
	$repeats[45]=Array(' 6','adsssasgqqqessvsshseastssqlg');			// formerly Italy-6
	$repeats[46]=Array(' 7','tdsssasgqqqessvsshseastssqlg');			// formerly Italy-7
	$repeats[47]=Array(' 8','adgssagdqqqessvssqsgastssqsg');			// formerly Australia-1
	$repeats[48]=Array('m','adsssasgqqqessvssqsgqastssqsg');
	$repeats[49]=Array('\u03c3','adsssaggqqqesivssqsdhastssqlg');	// small sigma
	$repeats[50]=Array('\u03bc','adsssasglqqessvssqsgqastssqlg');	// mu
	$repeats[51]=Array('\u03c4','tdsssasgqqqessvlspsgqastssqlg');	// tau
		
			new published repeats from de la Fuente
			Vet Micro 119 (2007) 382-390
		
	$repeats[52]=Array(' 10','adsssasgqqqessvlspsgqastssqlg');
	$repeats[53]=Array(' 11','adsssasgqqqessvlspsgqastssqlgvg');
	$repeats[54]=Array(' 12','agsssasgqqqessvlsqsdqastssqlg');
	$repeats[55]=Array(' 13','tdsssasgqqqessvlsqsdqastssqlg');
	$repeats[56]=Array(' 14','tdsssasgqqqessvlsqsgastssqlg');
	$repeats[57]=Array(' 15','adsssasgqqqesgvlsqsgqastssqlg');
	$repeats[58]=Array(' 16','adsssagdqqqgssvssqsgqastssqlg');
	$repeats[59]=Array(' 17','tdsssasgqqqesgvssqsgqastssqlg');
	$repeats[60]=Array(' 18','tdsssasgqqqessvlsqsdqastssqsg');
	$repeats[61]=Array(' 19','adsssagdrqqesgvlsqsgqastssqlg');
	$repeats[62]=Array(' 20','adsssagdqqqesgvlsqsgqastssqlg');
	$repeats[63]=Array(' 21','adsssagdqqqessvlsqsgqastssqlg');
	$repeats[64]=Array(' 22','adsssasgqqqessvlspsgqastssqls');
	$repeats[65]=Array(' 23','tdsssasgqqqkssvlsqssqastssqlg');
	$repeats[66]=Array(' 24','adsssagnqqqessvlpqsgqastssqls');
	$repeats[67]=Array(' 25','adsssasgqqqessvlsqssqastssqlg');
	$repeats[68]=Array(' 26','adsssagnqqqessvlpqsgqastssqlg');
	$repeats[69]=Array(' 27','adsssasgqqqessvlsqsdqastssqlg');
	$repeats[70]=Array(' 28','agsssesgqqqessvlsqsgqastssqlg');
	$repeats[71]=Array(' 29','tdsssasdqqqessvssqsgqastssqlg');
	$repeats[72]=Array(' 30','adsssasgqqqkssvlsqssqastssqlg');
	$repeats[73]=Array(' 31','adsssagnqqqessvssqsdastssqlg');
	$repeats[74]=Array(' 32','tdsssaggqqqessvssqsgqastssqlg');
	$repeats[75]=Array(' 33','adsssasgqqqessvlsksgqastssqlg');
	$repeats[76]=Array(' 34','ansssasgqqqessvlsqsdqastssqlg');
	$repeats[77]=Array(' 35','tdsssasgqqqessvssqsgqagtssqsg');
	$repeats[78]=Array(' 36','adsssasgqqqessvpsqseastssqlg');
	$repeats[79]=Array(' 37','tdsssasgqqqessvlsqsgqastssqsg');
	$repeats[80]=Array(' 38','adsssasgqqqessvlsqsgqastssqsg');
	$repeats[81]=Array(' 39','ddsssasgqqqessvlsqsdqastssqlg');
	$repeats[82]=Array(' 40','agsssagdqqqessvssqsdqastssqlg');
	$repeats[83]=Array(' 41','assssasgqqqessvlsqsdqastssqlg');
	$repeats[84]=Array(' 42','tdsssasgqqqessvlpqsgqastssqsg');
	$repeats[85]=Array(' 43','adsssasgqqqessvlpqsgqastssqsg');
	$repeats[86]=Array(' 44','tdsssasaqqqessvssqsgqastssqsg');
	$repeats[87]=Array(' 45','tdsssasgqqqessvlpqsdqastssqlg');
	$repeats[88]=Array(' 46','tdsssasgqqqessvlpqsgqastssqlg');
	$repeats[89]=Array(' 47','adsssagdqqqessvssqsdqastssqlg');
	$repeats[90]=Array(' 9','adsssasgqqqessvssqsdastssqsg');
		// unpublished repeats
	$repeats[26]=Array('\u0394','adsssasgrqqessvssqsdqastssqlg');
	$repeats[27]=Array('\u0398','adsssasgqqqessvssqsdqastspqlg');
	$repeats[28]=Array('\u03a8','adsssasgqqqessvssrsdqastssqlg');
	$repeats[29]=Array('\u03a9','adsssasgqqqessassqsdqastssqlg');
	$repeats[30]=Array('\u039b','adsssasgqqqessvssqseagtssqlgg');
	$repeats[31]=Array('\u039e','adsssasgqqqessvssqsevstssqlgg');
	$repeats[32]=Array('\u03b4','adsssapgqqqessvssqsdqastssqlg');
	$repeats[33]=Array('\u03b6','adsssasgqqqessvssqsdqactssqlg');
	$repeats[34]=Array('\u03c9','adspsasgqqqessvssqsdqastssqlg');
	$repeats[35]=Array('\u03d5','adsssasgqqqegsvssqsbqastspqlg');	// b isn't an ammino acid, look it up
	$repeats[36]=Array('\u03d6','adsssasgrqqessvssqsdqastssqig');
	$repeats[91]=Array('tc63_3_s06 ','adsssasgqqqessvlsqseastssqlgg');
	$repeats[92]=Array(' EV1','adsssaggqqqessvssqsgastssqlg');
	$repeats[93]=Array(' EV2','tdsssagdqqqessvssqsdastssqlg');
	$repeats[94]=Array(' EV3','tdsssagdqqressvlspsgqastssqlgvg');
	$repeats[95]=Array(' EV4','tdsssagdqqqessvssqsgastssqlg');
	$repeats[96]=Array(' EV5','adsssesgqqqessvlsqsgqastssqlg');
	$repeats[97]=Array(' EV6','adsssasdqqqessvlspsgqastssqlg');
	$repeats[98]=Array(' EV7','tdsssassqqqessvlsqsdqastssqlg');
	$repeats[99]=Array(' EV8','tdsssagdqqqgsgvssqsgqastssqsg');
*/

	$substitute=new Array();
	$substitute[0]='Italy 6';
	$substitute[1]='Italy 7';
/*
	//	strain names
	//	changed all the S to K 7/16/7
var $strain=new Array;
	$strain[0]=Array('Florida','ABBBBBBB');
	$strain[1]=Array('Idaho','DDDDDE');
	$strain[2]=Array('Virginia','AB');
	$strain[3]=Array('Washington','BBBC');
	$strain[4]=Array('Wetumka, OK','KCH');
	$strain[5]=Array('Cushing, OK','LCBC');
	$strain[6]=Array('Cushing 2, OK','KNNFH');
	$strain[7]=Array('Glencoe 1, OK','KFNFH');
	$strain[8]=Array('Glencoe 2, OK','BMFH');
	$strain[9]=Array('Glencoe 3, OK','TBC');
	$strain[10]=Array('Stillwater, OK','KFFFH');
	$strain[11]=Array('Stillwater 2, OK','LBCC');
	$strain[12]=Array('Stillwater 68, OK','KBMFH');
	$strain[13]=Array('Oklahoma City, OK','U');
	$strain[14]=Array('Okmulgee, OK','KBVC');
	$strain[15]=Array('Stilger, OK','TBBC');
	$strain[16]=Array('Pawhuska, OK','IH');
	$strain[17]=Array('New Castle, OK','LBCB');
	$strain[18]=Array('St. Maries, ID','JBB');
	$strain[19]=Array('California','BBC');
	$strain[20]=Array('Okeechobee, FL','LBCBC');
	$strain[21]=Array('Mississippi','DDDDE');
	$strain[22]=Array('Missouri','BBBB');
	$strain[23]=Array('Illinois','MNBMH');
	$strain[24]=Array('Texas','OBMP');
	$strain[25]=Array('Texas 198','BBmBm');
	$strain[26]=Array('South Dakota, Oregon','AFH');
	$strain[27]=Array('Kansas 3261','BB');
	$strain[28]=Array('Kansas 4102','BBB');
	$strain[29]=Array('Kansas 2267','BBBB');
	$strain[30]=Array('Kansas 0141','BBBBB');
	$strain[31]=Array('Kansas 0063','BBBBBB');
	$strain[32]=Array('Kansas 5076','DDDDD');
	$strain[33]=Array('Kansas 7042','DDE');
	$strain[34]=Array('Kansas 4318','DDDDDE');
	$strain[35]=Array('Kansas 2070','DDDDDDE');
	$strain[36]=Array('Kansas 7030','DDDDDDDE');
	$strain[37]=Array('Kansas 0050','EM\u03a6');
	$strain[38]=Array('Canadian bison','DQQR');
	$strain[39]=Array('US bison','KBMFW');
	$strain[40]=Array('Yucat\u00e1n','TCBBCB\u03c0');
	$strain[41]=Array('Mexico, Morelos, and Veracruz','\u03b1\u03b2\u03b2\u0393');
	$strain[42]=Array('Brazil 9','\u03b1\u03b2\u03c4M');
	$strain[43]=Array('Brazil 12','\u03b1\u03b2\u03b2N');
	$strain[44]=Array('Brazil 5','CFN');
	$strain[45]=Array('Brazil','BBQ\u03c3\u03bc');
	$strain[46]=Array('x','x');	// #67 is newer for Virasoro, was \u03a3\u03b2QBC
	$strain[47]=Array('Salta','BBM');
	$strain[48]=Array('Puerto Rico','E\u03a6\u03a6\u03a6\u03a6\u03a6');
	$strain[49]=Array('Israel-tailed-1FM3',' 1FM 3');
	$strain[50]=Array('Israel-tailed-12M3',' 1 2M 3');
	$strain[51]=Array('Israel non-tailed',' 1 4');
	$strain[52]=Array('Italy 30, Italy 31','MMMQ');
	$strain[53]=Array('Italy 32',' 5\u0393\u0393\u0393');
	$strain[54]=Array('Italy 16',' 5\u03a6\u03a6\u03a6');
	$strain[55]=Array('Italy 6','QMQQM');
	$strain[56]=Array('Italy 8','QNNN');
	$strain[57]=Array('Italy 47',' 6 7 7 7');
	$strain[58]=Array('Australia - Darwin, WA, f12, and f72',' 8');

		// new strain names from delafuente 07
	$strain[59]=Array('Stillwater 483, OK','KBMH');
	$strain[60]=Array('Oregon','G');
	$strain[61]=Array('Aguascalientes, Mexico',' 4 9 10 11 9');
	$strain[62]=Array('Pichucalco, Mexico','\u03b1\u03b2\u03b2\u0393\u03b2\u0393');
	$strain[63]=Array('Puente de Ixtla, Mexico',' 12 13 14');
	$strain[64]=Array('Parana, Brazil','\u03b1\u03b2\u03b2\u03b2\u03b2\u0393');
	$strain[65]=Array('Parana 2, Brazil',' 16F 17 13 18');
	$strain[66]=Array('Parana 3, Brazil','\u03c4 10 15');
	$strain[67]=Array('Virasoro, Argentina','\u03a3BQBC');
	// [68] used to be Salta, Argentina, same as 71
	$strain[69]=Array('Entre Rios 1,2,3,4, Argentina','FMM');
	$strain[70]=Array('Santa Fe 37,43,50,59, Argentina','\u03b1\u03b2\u03b2\u03b2\u0393');
	$strain[71]=Array('Salta, Santa Fe 111,473,532,116, Argentina','BBM');
	$strain[72]=Array('Chaco 2-1, Chaco 3-1, Chaco 7, Chaco 8, Argentina','\u03c4 22 13 18');
	$strain[73]=Array('Chaco 2 var2, Argentina','\u03b1\u03b2\u0393\u0393\u03b2\u03b2\u0393');
	$strain[74]=Array('Chaco 3 var2, Argentina','\u03c4 11 10 10 11 10 15');
	$strain[75]=Array('Chaco 5, Argentina - Parana 3, Brazil','\u03c4 10 15');
	$strain[76]=Array('Cordoba 1, Cordoba 2, Argentina',' 23 24 25 26 27 27');
	$strain[77]=Array('Quitilipi, Argentina',' 28 29M 29MF');
	$strain[78]=Array('Mercedes, Argentina',' 23 30 31 31 31');
	$strain[79]=Array('Corrientes, Argentina','\u03b1\u03b2\u03b2\u03b2');
	$strain[80]=Array('Havana, Cuba','ABBBB');
	$strain[81]=Array('Azaria, Israel',' 1FM 3 3');
	$strain[82]=Array('Lhavot-Habasan','MFFF');
	$strain[83]=Array('Or-Haner','MFF');
	$strain[84]=Array('HB-A8, China',' 19 20 19 21');
	$strain[85]=Array('Va-48, Spain',' 40 47 47 32CC');
	$strain[86]=Array('SA12, SW82, SW62, SW162, SW134, SA66, South Africa',' 34 13 4 37');
	$strain[87]=Array('SA193, South Africa',' 34 4 37');
	$strain[88]=Array('SW32, South Africa',' 34 13 13 37');
	$strain[89]=Array('SA14, South Africa',' 34F 4H');
	$strain[90]=Array('SA10, South Africa',' 33 35 35');
	$strain[91]=Array('SW29, SA71, SA302, SA196, South Africa',' 3 3 38');
	$strain[92]=Array('SW114, South Africa',' 3 13 4 4 37');
	$strain[93]=Array('SW109, South Africa',' 27 4 13 13 37');
	$strain[94]=Array('SW44, South Africa',' 27 4 4 4 37');
	$strain[95]=Array('SW90, South Africa',' 27 13 4 13 4');
	$strain[96]=Array('SA239, South Africa',' 27 4 13 4 4');
	$strain[97]=Array('SA183, South Africa',' 27 13 4 44');
	$strain[98]=Array('SW34, South Africa',' 34 45 45 46 37');
	$strain[99]=Array('SA191, South Africa',' 27 37');
	$strain[100]=Array('SA189, South Africa',' 27 37');
	$strain[101]=Array('SA4, South Africa',' 27 18');
	$strain[102]=Array('SA63, South Africa',' 39 37 13 13 13 13 37');
	$strain[103]=Array('SA240, South Africa',' 40QQ');
	$strain[104]=Array('SW113, South Africa',' 41 13 13 13 4 37');
	$strain[105]=Array('SW112, South Africa',' 42 43 25 31');
	$strain[106]=Array('SA243, South Africa',' 3 36 3 36 36 3 36 38');
*/

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
/*
			switch ($windup) {
			case "5\u0393\u0393\u0393":
				$windup="5 \u0393 \u0393 \u0393"
				break;
			case "5\u03a6\u03a6\u03a6":
				$windup="5 \u03a6 \u03a6 \u03a6";
				break;
			case "1 FM3":
				$windup="1 F M 3";
				break;
			case "1 2M3":
				$windup="1 2 M 3";
				break;
			case "1 4":
				$windup="1 4";
				break;
			case "6777":
				$windup="6 7 7 7"
				break;
			}
*/
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