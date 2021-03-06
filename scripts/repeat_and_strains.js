var $repeats=new Array();
	/*
		published repeats from J. de la Fuente et al, 
		Animal Health Research Reviews 6(1); 75ñ89
	*/
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
	$repeats[23]=Array('&Phi;','tdsssasgqqqessvssqseastssqlg');	// phi
	$repeats[24]=Array(' 4','tdsssasgqqqessvlsqsgqastssqlg');		// formerly Israeli-4
	$repeats[25]=Array(' 3','adsssasgqqqessvlsqsgqastssqlg');		// formerly Israeli-3
	$repeats[37]=Array('&Sigma;','adsssaggqqqessvssqseastssqlg');	// sigma
	$repeats[38]=Array('&alpha;','adsssasgvlsqsgqastssqlg');			// alpha
	$repeats[39]=Array('&beta;','tdsssagdqqqgsgvssqsgqastssqlg');	// beta
	$repeats[40]=Array('&Gamma;','tdsssasgqqqessvssqsdastssqlg');	// gamma
	$repeats[41]=Array('&pi;','adsssaggqqqessvssqsgqastssqfg');	// pi
	$repeats[42]=Array(' 1','sgsssasgqqqessvlsqggqastssqlg');		// formerly Israeli-1
	$repeats[43]=Array(' 2','tdsssasgqqqessvspqsgqastssqlg');		// formerly 2
	$repeats[44]=Array(' 5','adsssasgqqqessvssqsdastssqlg');			// formerly Italy-5
	$repeats[45]=Array(' 6','adsssasgqqqessvsshseastssqlg');			// formerly Italy-6
	$repeats[46]=Array(' 7','tdsssasgqqqessvsshseastssqlg');			// formerly Italy-7, tdsvsasgqqqessvsshseastssqlg
	$repeats[47]=Array(' 8','adgssagdqqqessvssqsgastssqsg');			// formerly Australia-1
	$repeats[48]=Array('m','adsssasgqqqessvssqsgqastssqsg');
	$repeats[49]=Array('&sigma;','adsssaggqqqesivssqsdhastssqlg');	// small sigma
	$repeats[50]=Array('&mu;','adsssasglqqessvssqsgqastssqlg');	// mu
	$repeats[51]=Array('&tau;','tdsssasgqqqessvlspsgqastssqlg');	// tau
		/*
			new published repeats from de la Fuente
			Vet Micro 119 (2007) 382-390
		*/
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
	$repeats[64]=Array(' 22','adsssasgqqqessvlspsgqastssqsg');  // was adsssasgqqqessvlspsgqastssqls
	$repeats[65]=Array(' 23','tdsssasgqqqkssvlsqssqastssqlg');
	$repeats[66]=Array(' 24','adsssagnqqqessvlpqsgqastssqsg');  // was adsssagnqqqessvlpqsgqastssqls, typo
	$repeats[67]=Array(' 25','adsssasgqqqessvlsqssqastssqlg');
	$repeats[68]=Array(' 26','adsssagnqqqessvlpqsgqastssqlg');
	$repeats[69]=Array(' 27','adsssasgqqqessvlsqsdqastssqlg');
	$repeats[70]=Array(' 28','agsssesgqqqessvlsqsgqastssqlg');
	$repeats[71]=Array(' 29','tdsssasdqqqessvssqsgqastssqlg');
	$repeats[72]=Array(' 30','adsssasgqqqkssvlsqssqastssqlg');
	$repeats[73]=Array(' 31','adsssagnqqqessvssqsdastssqlg');
	$repeats[74]=Array(' 32','tdsssaggqqqessvssqsgqastssqlg');
	$repeats[75]=Array(' 33','adsssasgqqqessvlsksgqagtssqlg');  // was adsssasgqqqessvlsksgqastssqlg, typo
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
	$repeats[26]=Array('&Delta;','adsssasgrqqessvssqsdqastssqlg');
	$repeats[27]=Array('&Theta;','adsssasgqqqessvssqsdqastspqlg');
	$repeats[28]=Array('&Psi;','adsssasgqqqessvssrsdqastssqlg');
	$repeats[29]=Array('&Omega;','adsssasgqqqessassqsdqastssqlg');
	$repeats[30]=Array('&Lambda;','adsssasgqqqessvssqseagtssqlgg');
	$repeats[31]=Array('&Xi;','adsssasgqqqessvssqsevstssqlgg');
	$repeats[32]=Array('&delta;','adsssapgqqqessvssqsdqastssqlg');
	$repeats[33]=Array('&zeta;','adsssasgqqqessvssqsdqactssqlg');
	$repeats[34]=Array('&omega;','adspsasgqqqessvssqsdqastssqlg');
	$repeats[35]=Array('&#981;','adsssasgqqqegsvssqsbqastspqlg');	// b isn't an ammino acid, look it up
	$repeats[36]=Array('&piv;','adsssasgrqqessvssqsdqastssqig');
	$repeats[91]=Array('tc63_3_s06 ','adsssasgqqqessvlsqseastssqlgg');
	$repeats[92]=Array(' EV1','adsssaggqqqessvssqsgastssqlg');
	$repeats[93]=Array(' EV2','tdsssagdqqqessvssqsdastssqlg');
	$repeats[94]=Array(' EV3','tdsssagdqqressvlspsgqastssqlgvg');
	$repeats[95]=Array(' EV4','tdsssagdqqqessvssqsgastssqlg');
	$repeats[96]=Array(' EV5','adsssesgqqqessvlsqsgqastssqlg');
	$repeats[97]=Array(' EV6','adsssasdqqqessvlspsgqastssqlg');
	$repeats[98]=Array(' EV7','tdsssassqqqessvlsqsdqastssqlg');
	$repeats[99]=Array(' EV8','tdsssagdqqqgsgvssqsgqastssqsg');
	
		// more repeats from PLoS One. 2013 Jun 11;8(6):e65243. doi: 10.1371/journal.pone.0065243
    $repeats[100]=Array(' 48','tdgssasgqqqessvlspsgqastssqlgvg');
    $repeats[101]=Array(' 49','tdgssagdqqqgsgvssqsgqastssqlg');
    $repeats[102]=Array(' 50','tdsssagdrqqgsgvssqsgqastssqlg');
    $repeats[103]=Array(' 51','tdsssagdqrqgsgvssqsgqastssqlg');
    $repeats[104]=Array(' 52','tdsssasgqqqvssvssqsdastssqlg');
    $repeats[105]=Array(' 53','tdsssasgqqqessvlppsgqastssqlg');
    $repeats[106]=Array(' 54','lhsssasgqqqessvsfqtgqastssqlg');
    $repeats[107]=Array(' 55','tdsssagdqhqessvssqsgqastssqlg');
    $repeats[108]=Array(' 56','tdsssasgeqqessvlspsgeastssqlg');
    $repeats[109]=Array(' 57','tdsssasgqhqesivssqseastssqlw');
    $repeats[110]=Array(' 58','tdgssasgqqqessvlsqsdeastssqlg');
    $repeats[111]=Array(' 59','tdgssasgqqqessvlsqsdeastssqsg');
    $repeats[112]=Array(' 60','adgssagdqqqessvssqsgastssqlg');
    $repeats[113]=Array(' 61','tdsssagdqqqessvssqsgastssqlg');
    $repeats[114]=Array(' 62','tdsssagdqqqessvssqsdastssqlg');
    $repeats[115]=Array(' 63','agsssasgqqqessvlsqsgqastssqlg');
    $repeats[116]=Array(' 64','agsssaggqqqessvssqseastssqlgg');
    $repeats[117]=Array(' 65','adsssasgqqqessvlsqseastssqlgg');
    $repeats[118]=Array(' 66','tdsssagdqqqessvssqsdastssqlr');
    $repeats[119]=Array(' 67','tdsssasgqqqessvlsqsgqaspssqlg');
    $repeats[120]=Array(' 68','agrssasgqqqessvlsqsgqastssqlg');
    $repeats[121]=Array(' 69','adgssagdqqqessvssqsgaspssqlg');
    $repeats[122]=Array(' 70','tdsssagdqqqessassqsgastssqlg');
    $repeats[123]=Array(' 71','tdsssagdqqhessvssqsgartssqlg');
    $repeats[124]=Array(' 72','adsssagdqqessvssqsgastssqlg');
    $repeats[125]=Array(' 73','tdsssagdqqqesgvssqsgqastssqlg');
    $repeats[126]=Array(' 74','adsssasgqqqesgvpsqsgqastssqlg');
    $repeats[127]=Array(' 75','adgssagdqqqesgvlsqsgqastssqlg');
    $repeats[128]=Array(' 76','tdsssasgqqqesgvssqsdastssqlg');
    $repeats[129]=Array(' 77','adsssvsgqqqessvlsqsgqastssqlg');
    $repeats[130]=Array(' 78','tdsssasgqqqessvlsqssqastss~qlg');
    $repeats[131]=Array(' 79','tdsssasgqpqessvlcvsdlsstssqlg');
    $repeats[132]=Array(' 80','adsssagdqqqessvssqsgqastssqlg');
    $repeats[133]=Array(' 81','tdsssagdqqqessvssqsgqastssqlg');
    $repeats[134]=Array(' 82','adsssasgqqqessvlsqsdlsstwsqlg');
    $repeats[135]=Array(' 83','tdsssasgqqqesgvlsqsgqastssqsg');
    $repeats[136]=Array(' 84','adsssagnqqqessvssqsgastssqlg');
    $repeats[137]=Array(' 85','adgssagdqqqessvssqsgagpssqlg');
    $repeats[138]=Array(' 86','tdsssagdqqqessvssksgastssqlg');
    $repeats[139]=Array(' 87','adsssasgqqqessvlsqsiqastssqlr');
    $repeats[140]=Array(' 88','tdsssasgqkqessvlpqsgqastssqlg');
    $repeats[141]=Array(' 89','adsssaggqqqessessqsdqastssklg');
    $repeats[142]=Array(' 90','adsssaggqqqessvssqsdqassssqlg');
    $repeats[143]=Array(' 91','tdsssasgqqqessvssqsgqastssqlr');
    $repeats[144]=Array(' 92','adsssasgqqqesgvlsqstqastssqlr');
    $repeats[145]=Array(' 93','ndsssasgqqqessvlspsgqastssqlgvg');
    $repeats[146]=Array(' 94','adsssasgqqqesgvlsqsgqastssqlgvg');
    $repeats[147]=Array(' 95','adssstggqqqessvsshseastssqlgg');
    $repeats[148]=Array(' 96','adsssasgqqqessvlsqseastsshlgg');
    $repeats[149]=Array(' 97','adssspsgqqqessvssqseaatssevrg');
    $repeats[150]=Array(' 98','adsssasgqqqessvlsqseastssqlg');
    $repeats[151]=Array(' 99','adsswpsgnrqespvlshsytttssqlrg');
    $repeats[152]=Array(' 100','tdsssasgqqqesgvlsqsgqastssqlg');
    $repeats[153]=Array(' 101','agsssaggqqqessvssqsdqattssqlg');
    $repeats[154]=Array(' 102','adsssaggqqqessvssqsdqantsshlg');
    $repeats[155]=Array(' 103','adsssasgqqqgssvlsqsgqastssqlg');
    $repeats[156]=Array(' 104','adsssesgqqqessvlsqsgqastssqlg');
    $repeats[157]=Array(' 105','tdsssaggqqqessvssqsdastssqlg');
    $repeats[158]=Array(' 106','adgssagdqqqessvssqsgqastssqlg');
    $repeats[159]=Array(' 107','adsssasdqqqesgvpsqseastssqlg');
    $repeats[160]=Array(' 108','adsssasgvlsqsgqastspqlg');
    $repeats[161]=Array(' 109','adsssasgqqpessvlspsgqastssqlg');
    $repeats[162]=Array(' 110','adsssasgqqresgvlsqsgqastsshlg');
    $repeats[163]=Array(' 111','tdsssasgrqqessvlsqsdqastssqsr');
    $repeats[164]=Array(' 112','tdsssasgqqqessvlsqsdqactssqlg');
    $repeats[165]=Array(' 113','tdsssasgqqressvlsqsdqastssqlg');
    $repeats[166]=Array(' 114','tdsssagdhqqgsgvssqsgeastssqlg');
    $repeats[167]=Array(' 115','tdsssagdhqqgsgvssqsgqastssqlg');
    $repeats[168]=Array(' 116','tdsssasgqqqestvssqsdastssqlg');
    $repeats[169]=Array(' 117','agsssaggqqqessvssqsdaatssyllg');
    $repeats[170]=Array(' 118','adsssasgqqqessvssqsdpatsspllg');
    $repeats[171]=Array(' 119','adsssasgqqqessvlsqsdpatsssllg');
    $repeats[172]=Array(' 120','tdsssasgqqqessvssqsddatsssqls');
    $repeats[173]=Array(' 121','tdsssasghqrestvlsrsdqastssqlg');
    $repeats[174]=Array(' 122','tdsssasghqrestvlsqsdqastssqsg');
    $repeats[175]=Array(' 123','tdsssasgqqrestvlsqsdqastsshsg');
    $repeats[176]=Array(' 124','tdsssasgqqrestvlsqsdqastssqlg');
    $repeats[177]=Array(' 125','tdsssasgqhqessvlsqsdqastssqsg');
    $repeats[178]=Array(' 126','tdsssasgqqqesnvlspcgrastssqlg');
    $repeats[179]=Array(' 127','adsssagdqqkesnvssqtgqaspsshlr');
    $repeats[180]=Array(' 128','tdsssagdqqqgsgvsaqsgqaspwsqlg');
    $repeats[181]=Array(' 129','adsssasgrhqksnvssqseactssqlg');
    $repeats[182]=Array(' 130','tdsssasgqwcessvssqseastssqlg');
    $repeats[183]=Array(' 131','tdsssasgqqqessvssqseastssqlr');
    $repeats[184]=Array(' 132','adsssasggqqqssvvsssddagtssplwt');
    $repeats[185]=Array(' 133','ddssasggqqqssvaspsgdaatsspllt');
    $repeats[186]=Array(' 134','adssssgdqqqnsvaspsddaatsshlwt');
    $repeats[187]=Array(' 135','ddssstgdqqqssvvspsddaarssqlwt');
    $repeats[188]=Array(' 136','adsssasgqqqessvssqseastssqlrg');
    $repeats[189]=Array(' 137','adsssasgqqqesivssqseartssqlgg');
    $repeats[190]=Array(' 138','adsssasgqqqessvssqseassssqlgg');
    $repeats[191]=Array(' 139','adsssasgqqqesivssqseastssqlgg');
    $repeats[192]=Array(' 140','adsssasgqqqesgvlsqsgqastssqlr');
    $repeats[193]=Array(' 141','tdsssasgqqqesgvlsqsgqastssqlr');
    $repeats[194]=Array(' 142','tdsssasgqqqessvlpqsghartssqsg');
    $repeats[195]=Array(' 143','tdsssgsgqqqessvlsqssqarsssqlg');
    $repeats[196]=Array(' 144','ddsssasgqqqessvlpqsgqdstssqsg');
    $repeats[197]=Array(' 145','gdsssssgqqqessvlsqssqastssqlg');
    $repeats[198]=Array(' 146','adsssagnqqqessvssqseastssqlg');
    $repeats[199]=Array(' 147','tdsssagnqqqessvssqsgagtssqlg');
    $repeats[200]=Array(' 148','tdsssagdqqqessvssqsgasassklr');
    $repeats[201]=Array(' 149','tdsssagdqqqessvsslsgastssqlg');
    $repeats[202]=Array(' 150','tdsssagdqkqessvssqigastssklg');
    $repeats[203]=Array(' 151','ansssasgqqeessvlsqsdqastssqlg');
    $repeats[204]=Array(' 152','tdsssasgqqqessvlsqsdqastssqlr');
    $repeats[205]=Array(' 153','tdsspemgqqqessvfsqsaqastssqsg');
    $repeats[206]=Array(' 154','adsssasgqqqessvlsqsdqastssqsg');
    $repeats[207]=Array(' 155','ansssasgqqqessvlsqsgqastssqlg');
    $repeats[208]=Array(' 156','adsssagnqqqessvssqsghastssqlg');
    $repeats[209]=Array(' 157','tdswsasgqqqessvlsqsdqastssqlg');
    $repeats[210]=Array(' 158','absssasgqqqessvlsqsdqstssqlg');
    $repeats[211]=Array(' 159','adsssasgqqqessvpsqseaatssql');
    $repeats[212]=Array(' 160','angssasgqqqessvlsqsdqastssqlg');
    $repeats[213]=Array(' 161','adsssasgqqqessvlsqsdeastssqlg');
	
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
	$strain[37]=Array('Kansas 0050','EM&Phi;');
	$strain[38]=Array('Canadian bison','DQQR');
	$strain[39]=Array('US bison','KBMFW');
	$strain[40]=Array('Yucat\u00e1n','TCBBCB&pi;');
	$strain[41]=Array('Mexico, Morelos, and Veracruz','&alpha;&beta;&beta;&Gamma;');
	$strain[42]=Array('Brazil 9','&alpha;&beta;&tau;M');
	$strain[43]=Array('Brazil 12','&alpha;&beta;&beta;N');
	$strain[44]=Array('Brazil 5','CFN');
	$strain[45]=Array('Brazil','BBQ&sigma;&mu;');
	$strain[46]=Array('x','x');	// #67 is newer for Virasoro, was &Sigma;&beta;QBC
	$strain[47]=Array('Salta','BBM');
	$strain[48]=Array('Puerto Rico','E&Phi;&Phi;&Phi;&Phi;&Phi;');
	$strain[49]=Array('Israel-tailed-1FM3',' 1FM 3');
	$strain[50]=Array('Israel-tailed-12M3',' 1 2M 3');
	$strain[51]=Array('Israel non-tailed',' 1 4');
	$strain[52]=Array('Italy 30, Italy 31','MMMQ');
	$strain[53]=Array('Italy 32',' 5&Gamma;&Gamma;&Gamma;');
	$strain[54]=Array('Italy 16',' 5&Phi;&Phi;&Phi;');
	$strain[55]=Array('Italy 6','QMQQM');
	$strain[56]=Array('Italy 8','QNNN');
	$strain[57]=Array('Italy 47',' 6 7 7 7');
	$strain[58]=Array('Australia - Darwin, WA, f12, and f72',' 8');

		// new strain names from delafuente 07
	$strain[59]=Array('Stillwater 483, OK','KBMH');
	$strain[60]=Array('Oregon','G');
	$strain[61]=Array('Aguascalientes, Mexico',' 4 9 10 11 9');
	$strain[62]=Array('Pichucalco, Mexico','&alpha;&beta;&beta;&Gamma;&beta;&Gamma;');
	$strain[63]=Array('Puente de Ixtla, Mexico',' 12 13 14');
	$strain[64]=Array('Parana, Brazil','&alpha;&beta;&beta;&beta;&beta;&Gamma;');
	$strain[65]=Array('Parana 2, Brazil',' 16F 17 13 18');
	$strain[66]=Array('Parana 3, Brazil','&tau; 10 15');
	$strain[67]=Array('Virasoro, Argentina','&Sigma;BQBC');
	// [68] used to be Salta, Argentina, same as 71
	$strain[69]=Array('Entre Rios 1,2,3,4, Argentina','FMM');
	$strain[70]=Array('Santa Fe 37,43,50,59, Argentina','&alpha;&beta;&beta;&beta;&Gamma;');
	$strain[71]=Array('Salta, Santa Fe 111,473,532,116, Argentina','BBM');
	$strain[72]=Array('Chaco 2-1, Chaco 3-1, Chaco 7, Chaco 8, Argentina','&tau; 22 13 18');
	$strain[73]=Array('Chaco 2 var2, Argentina','&alpha;&beta;&Gamma;&Gamma;&beta;&beta;&Gamma;');
	$strain[74]=Array('Chaco 3 var2, Argentina','&tau; 11 10 10 11 10 15');
	$strain[75]=Array('Chaco 5, Argentina - Parana 3, Brazil','&tau; 10 15');
	$strain[76]=Array('Cordoba 1, Cordoba 2, Argentina',' 23 24 25 26 27 27');
	$strain[77]=Array('Quitilipi, Argentina',' 28 29M 29MF');
	$strain[78]=Array('Mercedes, Argentina',' 23 30 31 31 31');
	$strain[79]=Array('Corrientes, Argentina','&alpha;&beta;&beta;&beta;');
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
	
var $repeat_dict={"adsssaggqqqessvssqsdqastssqlg": "B", "adsssasgqqqessvssqsdpatsspllg": "118", "adsssasgqqqessvssqseagtssqlgg": "&Lambda;", "tdsssasgqqqessvssqsdqastssqlg": "N", "agsssagdqqqessvssqsdqastssqlg": "40", "adsssasgqqqesivssqseastssqlgg": "139", "adsssaggqqqessvssqsdqantsshlg": "102", "adsssasgvlsqsgqastspqlg": "108", "adsssasgqqqessvlsqseastsshlgg": "96", "adsssagdqqessvssqsgastssqlg": "72", "adsssaggqqqessvssqsdqassssqlg": "90", "adsssasgqqqessvlsqsdlsstwsqlg": "82", "ddssasggqqqssvaspsgdaatsspllt": "133", "tdgssasgqqqessvlsqsdeastssqsg": "59", "adgssaggqqqessvssqsdqastssqlg": "K", "adsssasgqqqesgvlsqsgqastssqlgvg": "94", "ddssstgdqqqssvvspsddaarssqlwt": "135", "tdsssasgqqqessvlsqsdqactssqlg": "112", "angssasgqqqessvlsqsdqastssqlg": "160", "tdsspemgqqqessvfsqsaqastssqsg": "153", "adsssasgvlsqsgqastssqlg": "&alpha;", "adgssagdqqqessvssqsgastssqsg": "8", "tdsssasgqqqessvssqsdastssqlg": "&Gamma;", "adsssesgqqqessvlsqsgqastssqlg": "104", "tdgssagdqqqgsgvssqsgqastssqlg": "49", "adsssasgqqqesivssqseartssqlgg": "137", "tdsssagdqqqessvssqsdastssqlg": "62", "tdsssasgqkqessvlpqsgqastssqlg": "88", "adsssasglqqessvssqsgqastssqlg": "&mu;", "adsssasgqqqessvlsqsdpatsssllg": "119", "adsssasdqqqesgvpsqseastssqlg": "107", "agrssasgqqqessvlsqsgqastssqlg": "68", "adsslaggqqqessvssqsdqastssqlg": "J", "adssstggqqqessvsshseastssqlgg": "95", "ansssasgqqqessvlsqsgqastssqlg": "155", "adsssagnqqqessvssqseastssqlg": "146", "tdgssasgqqqessvlsqsdeastssqlg": "58", "adgssagdqqqesgvlsqsgqastssqlg": "75", "tdsssasgqqqkssvlsqssqastssqlg": "23", "adsssasgqqqessvsshseastssqlg": "6", "adsssasgrqqessvssqsdqastssqig": "&piv;", "tdsssasgqqqesnvlspcgrastssqlg": "126", "adsssasgqqqessvlsqsdeastssqlg": "161", "tdsssgsgqqqessvlsqssqarsssqlg": "143", "ddsssasgqqqessvlsqsdqastssqlg": "39", "adsssasgqqqessvlsqssqastssqlg": "25", "tdsssagdqqressvlspsgqastssqlgvg": "EV3", "tdsssasgqpqessvlcvsdlsstssqlg": "79", "adsssasgrhqksnvssqseactssqlg": "129", "agsssaggqqqessvssqsdqattssqlg": "101", "agsssesgqqqessvlsqsgqastssqlg": "28", "ddsssasgqqqessvssqseastssqlg": "A", "tdsssasghqrestvlsrsdqastssqlg": "121", "adsssasgqqqessvlsqsgqastssqlg": "3", "adsssasgqqqessvlspsgqastssqsg": "22", "tdsssasgqqqessvlpqsgqastssqsg": "42", "adsswpsgnrqespvlshsytttssqlrg": "99", "tdsssasgqhqesivssqseastssqlw": "57", "adsssasgqqqessvlsqsgqastssqsg": "38", "adsssasgqqqessvpsqseaatssql": "159", "tdsssaggqqqessvssqsdastssqlg": "105", "adssspsgqqqessvssqseaatssevrg": "97", "tdsssasdqqqessvssqsgqastssqlg": "29", "adsssasgqqqessvssqsdastssqlg": "5", "tdsssagdqqqessvssqsgastssqlg": "61", "adsssasgqqqgssvlsqsgqastssqlg": "103", "adgssagdqqqessvssqsgagpssqlg": "85", "tdsssagdqqqgsgvssqsgqastssqlg": "&beta;", "ndsssasgqqqessvlspsgqastssqlgvg": "93", "tdsssasgqqqessgssqsgqashsaqsg": "P", "adsssasgqqqessvssqseastssqlgg": "D", "tdsssasgqwcessvssqseastssqlg": "130", "adsssaggqqqessvssqseastssqlg": "&Sigma;", "tdsssagdqqqessvssqsgqastssqlg": "81", "adsssagnqqqessvlpqsgqastssqlg": "26", "tdsssasgqqqestvssqsdastssqlg": "116", "adsssagnqqqessvssqsgastssqlg": "84", "tdsssagnqqqessvssqsgagtssqlg": "147", "agsssaggqqqessvssqsdqastssqlg": "T", "tdsssasgqqqessvlppsgqastssqlg": "53", "tdsssasgrqqessvlsqsdqastssqsr": "111", "agsssaggqqqessvssqsdaatssyllg": "117", "tdsssagdqhqessvssqsgqastssqlg": "55", "adsssagdqqqessvssqsdqastssqlg": "47", "adspsasgqqqessvssqsdqastssqlg": "&omega;", "adsssasgqqqessvssqsdastssqsg": "9", "adsssasgqqqessvssqsevstssqlgg": "&Xi;", "tdgssasgqqqessvlspsgqastssqlgvg": "48", "adsssasgqqqessvssqsgqastssqsg": "m", "tdsssasgqqqessvlpqsdqastssqlg": "45", "adsssasgqqqkssvlsqssqastssqlg": "30", "ddsssasgqqqessvlpqsgqdstssqsg": "144", "tdsssagdrqqgsgvssqsgqastssqlg": "50", "tdsssasgqqqessvlpqsghartssqsg": "142", "adsssasgqqqessvssqsgqastssqlg": "M", "adsssasggqqqssvvsssddagtssplwt": "132", "adsssasgqqqessvlpqsgqastssqsg": "43", "adsssasgqqqesgvlsqstqastssqlr": "92", "agsssadgqqqessvssqsdqastssqlg": "L", "adsssaggqqhessvssqsdqastssqlw": "R", "tdsssasgqqqessvlsqsgqaspssqlg": "67", "adsssasgqqqessvssqsdqastssqlg": "Q", "adsssasgqqqessvlsqsiqastssqlr": "87", "tdsssasgeqqessvlspsgeastssqlg": "56", "adsssasgqqqessvssqseassssqlgg": "138", "absssasgqqqessvlsqsdqstssqlg": "158", "adsssaggqqqessessqsdqastssklg": "89", "tdsssasgqqqesgvssqsdastssqlg": "76", "adsssasgqqqessvssqsdqactssqlg": "&zeta;", "gdsssssgqqqessvlsqssqastssqlg": "145", "tdsssagdhqqgsgvssqsgeastssqlg": "114", "tdsssagdqqqesgvssqsgqastssqlg": "73", "adsssasgqqqessvlspsgqastssqlgvg": "11", "tdsssagdqkqessvssqigastssklg": "150", "adsssagdqqqessvssqsgqastssqlg": "80", "tdsssasgqqqessvlsqsgqastssqsg": "37", "tdsssasgqqqesgvssqsgqastssqlg": "17", "tdsssasgqqqessvssqsgqagtssqsg": "35", "adsssasgqqqessassqsdqastssqlg": "&Omega;", "adsssagdqqqesgvlsqsgqastssqlg": "20", "tdsssassqqqessvlsqsdqastssqlg": "EV7", "tdsssasgqqqessvssqsgqastssqsg": "H", "adsssagdrqqesgvlsqsgqastssqlg": "19", "adsssasgqqqessvlsqsdqastssqsg": "154", "tdsssasgqqqessvlspsgqastssqlg": "&tau;", "tdsssasgqqqessvssqsgqastssqlr": "91", "tdsssasgqhqessvlsqsdqastssqsg": "125", "tdsssasgqqressvlsqsdqastssqlg": "113", "tdsssasgqqqvssvssqsdastssqlg": "52", "tdsssasgqqqessvlsqsgastssqlg": "14", "saggqqqessvssqsdqastssqlg": "O", "ddsssasgqqqessvssqsdqastssqlg": "U", "tdsssasgqqqessvssqsgqastssqsr": "W", "adsssagdqqkesnvssqtgqaspsshlr": "127", "adsssvsgqqqessvlsqsgqastssqlg": "77", "adsssaggqqqessvssqsgqastssqlg": "C", "tdsssasgqqqessvssqsgqastssqlg": "F", "adsssasgqqqegsvssqsbqastspqlg": "&#981;", "tdsssagdqqqessvsslsgastssqlg": "149", "tdsssasgqqqessvsshseastssqlg": "7", "agsssaggqqqessvssqseastssqlgg": "64", "sgsssasgqqqessvlsqggqastssqlg": "1", "tdsssasgqqqesgvlsqsgqastssqlg": "100", "ddsssasgqqqessvssqsgqastssqlg": "I", "adgssagdqqqessvssqsgqastssqlg": "106", "adsssasgqqresgvlsqsgqastsshlg": "110", "assssasgqqqessvlsqsdqastssqlg": "41", "agsssasgqqqessvlsqsgqastssqlg": "63", "tdsssagdqqqessassqsgastssqlg": "70", "adsssagnqqqessvssqsghastssqlg": "156", "tdsssasgqqqesgvlsqsgqastssqlr": "141", "tdsssasgqqqesgvlsqsgqastssqsg": "83", "adsssasgqqqessvssqsdqastspqlg": "&Theta;", "tdsssagdqqqessvssqsgasassklr": "148", "adsssasgqqqessvssqseastssqlg": "E", "adsssagdqqqessvlsqsgqastssqlg": "21", "adsssasgqqqessvlsksgqagtssqlg": "33", "adsssasgqqqesgvlsqsgqastssqlr": "140", "adsssasgqqqessvlsqseastssqlgg": "65", "tdsssagdqqqessvssksgastssqlg": "86", "adsssasgqqqessvlsqsdqastssqlg": "27", "tdswsasgqqqessvlsqsdqastssqlg": "157", "adsssasgqqqesgvpsqsgqastssqlg": "74", "adsssasgqqqessvlspsgqastssqlg": "10", "adsssasgqqqessvssqseastssqlrg": "136", "tdsssagdqqqgsgvsaqsgqaspwsqlg": "128", "adsssasgqqqesgvlsqsgqastssqlg": "15", "adsssaggqqqessvssqsgqastssqfg": "&pi;", "tdsssasgqqqessvlsqsdqastssqsg": "18", "adsssasgqqqessvlsqseastssqlg": "98", "ansssasgqqeessvlsqsdqastssqlg": "151", "adsssasgqqqessvpsqseastssqlg": "36", "adsssagnqqqessvssqsdastssqlg": "31", "tdsssasghqrestvlsqsdqastssqsg": "122", "adgssagdqqqessvssqsgastssqlg": "60", "tdsssasgqqqessvlsqsgqastssqlg": "4", "tdsssaggqqqessvssqsgqastssqlg": "32", "adsssaggqqessvssqsdqastssqlg": "V", "tdsssasgqqrestvlsqsdqastsshsg": "123", "tdsssagdhqqgsgvssqsgqastssqlg": "115", "adsssasgqqqessvssrsdqastssqlg": "&Psi;", "tdsssasgqqqessvspqsgqastssqlg": "2", "adsssagdqqqgssvssqsgqastssqlg": "16", "lhsssasgqqqessvsfqtgqastssqlg": "54", "adsssasgrqqessvssqsdqastssqlg": "&Delta;", "tdsssasgqqqessvlpqsgqastssqlg": "46", "tdsssasaqqqessvssqsgqastssqsg": "44", "adsssasgqqpessvlspsgqastssqlg": "109", "tdsssagdqrqgsgvssqsgqastssqlg": "51", "adssssgdqqqnsvaspsddaatsshlwt": "134", "adsssapgqqqessvssqsdqastssqlg": "&delta;", "tdsssasgqqqessvssqsddatsssqls": "120", "agsssasgqqqessvlsqsdqastssqlg": "12", "adsssagnqqqessvlpqsgqastssqsg": "24", "ansssasgqqqessvlsqsdqastssqlg": "34", "adgssagdqqqessvssqsgaspssqlg": "69", "tdsssagdqqqessvssqsdastssqlr": "66", "tdsssasgqqqessvssqseastssqlr": "131", "adsssaggqqqessvssqsgastssqlg": "EV1", "tdsssasgqqrestvlsqsdqastssqlg": "124", "tdsssasgqqqessvlsqsdqastssqlr": "152", "tdsssagdqqhessvssqsgartssqlg": "71", "ddsssasgqqqessvssqsgqastssqsg": "G", "tdsssasgqqqessvssqseastssqlg": "&Phi;", "adsssaggqqqesivssqsdhastssqlg": "&sigma;", "adsssasdqqqessvlspsgqastssqlg": "EV6", "tdsssasgqqqessvlsqssqastss~qlg": "78", "tdsssasgqqqessvlsqsdqastssqlg": "13", "tdsssagdqqqgsgvssqsgqastssqsg": "EV8"};

var $strain_dict={
"A B B B B B B B" : "Florida",
"D D D D D E" : "Idaho",
"A B" : "Virginia",
"B B B C" : "Washington",
"K C H" : "Wetumka, OK",
"L C B C" : "Cushing, OK",
"K N N F H" : "Cushing 2, OK",
"K F N F H" : "Glencoe 1, OK",
"B M F H" : "Glencoe 2, OK",
"T B C" : "Glencoe 3, OK",
"K F F F H" : "Stillwater, OK",
"L B C C" : "Stillwater 2, OK",
"K B M F H" : "Stillwater 68, OK",
"U" : "Oklahoma City, OK",
"K B V C" : "Okmulgee, OK",
"T B B C" : "Stilger, OK",
"I H" : "Pawhuska, OK",
"L B C B" : "New Castle, OK",
"J B B" : "St. Maries, ID",
"B B C" : "California",
"L B C B C" : "Okeechobee, FL",
"D D D D E" : "Mississippi",
"B B B B" : "Missouri",
"M N B M H" : "Illinois",
"O B M P" : "Texas",
"B Bm Bm" : "Texas 198",
"A F H" : "South Dakota, Oregon",
"B B" : "Kansas 3261",
"B B B" : "Kansas 4102",
"B B B B" : "Kansas 2267",
"B B B B B" : "Kansas 0141",
"B B B B B B" : "Kansas 0063",
"D D D D D" : "Kansas 5076",
"D D E" : "Kansas 7042",
"D D D D D E" : "Kansas 4318",
"D D D D D D E" : "Kansas 2070",
"D D D D D D D E" : "Kansas 7030",
"E M &Phi;" : "Kansas 0050",
"D Q Q R" : "Canadian bison",
"K B M F W" : "US bison",
"T C B B C B &pi;" : "Yucat \u00e1n",
"&alpha; &beta; &beta; &Gamma;" : "Mexico, Morelos, and Veracruz",
"&alpha; &beta; &tau; M" : "Brazil 9",
"&alpha; &beta; &beta; N" : "Brazil 12",
"C F N" : "Brazil 5",
"B B Q &sigma; &mu;" : "Brazil",
"x" : "x",
"B B M" : "Salta",
"E &Phi; &Phi; &Phi; &Phi; &Phi;" : "Puerto Rico",
"1 F M 3" : "Israel-tailed-1FM3",
"1 2 M 3" : "Israel-tailed-12M3",
"1 4" : "Israel non-tailed",
"M M M Q" : "Italy 30, Italy 31",
"5 &Gamma; &Gamma; &Gamma;" : "Italy 32",
"5 &Phi; &Phi; &Phi;" : "Italy 16",
"Q M Q Q M" : "Italy 6",
"Q N N N" : "Italy 8",
"6 7 7 7" : "Italy 47",
"8" : "Australia - Darwin, WA, f12, and f72",
"K B M H" : "Stillwater 483, OK",
"G" : "Oregon",
"4 9 10 11 9" : "Aguascalientes, Mexico",
"&alpha; &beta; &beta; &Gamma; &beta; &Gamma;" : "Pichucalco, Mexico",
"12 13 14" : "Puente de Ixtla, Mexico",
"&alpha; &beta; &beta; &beta; &beta; &Gamma;" : "Parana, Brazil",
"16 F 17 13 18" : "Parana 2, Brazil",
"&tau; 10 15" : "Parana 3, Brazil",
"&Sigma; B Q B C" : "Virasoro, Argentina",
"F M M" : "Entre Rios 1,2,3,4, Argentina",
"&alpha; &beta; &beta; &beta; &Gamma;" : "Santa Fe 37,43,50,59, Argentina",
"B B M" : "Salta, Santa Fe 111,473,532,116, Argentina",
"&tau; 22 13 18" : "Chaco 2-1, Chaco 3-1, Chaco 7, Chaco 8, Argentina",
"&alpha; &beta; &Gamma; &Gamma; &beta; &beta; &Gamma;" : "Chaco 2 var2, Argentina",
"&tau; 11 10 10 11 10 15" : "Chaco 3 var2, Argentina",
"&tau; 10 15" : "Chaco 5, Argentina - Parana 3, Brazil",
"23 24 25 26 27 27" : "Cordoba 1, Cordoba 2, Argentina",
"28 29 M 29 M F" : "Quitilipi, Argentina",
"23 30 31 31 31" : "Mercedes, Argentina",
"&alpha; &beta; &beta; &beta;" : "Corrientes, Argentina",
"A B B B B" : "Havana, Cuba",
"1 F M 3 3" : "Azaria, Israel",
"M F F F" : "Lhavot-Habasan",
"M F F" : "Or-Haner",
"19 20 19 21" : "HB-A8, China",
"40 47 47 32 C C" : "Va-48, Spain",
"34 13 4 37" : "SA12, SW82, SW62, SW162, SW134, SA66, South Africa",
"34 4 37" : "SA193, South Africa",
"34 13 13 37" : "SW32, South Africa",
"34 F 4 H" : "SA14, South Africa",
"33 35 35" : "SA10, South Africa",
"3 3 38" : "SW29, SA71, SA302, SA196, South Africa",
"3 13 4 4 37" : "SW114, South Africa",
"27 4 13 13 37" : "SW109, South Africa",
"27 4 4 4 37" : "SW44, South Africa",
"27 13 4 13 4" : "SW90, South Africa",
"27 4 13 4 4" : "SA239, South Africa",
"27 13 4 44" : "SA183, South Africa",
"34 45 45 46 37" : "SW34, South Africa",
"27 37" : "SA191, South Africa",
"27 37" : "SA189, South Africa",
"27 18" : "SA4, South Africa",
"39 37 13 13 13 13 37" : "SA63, South Africa",
"40 Q Q" : "SA240, South Africa",
"41 13 13 13 4 37" : "SW113, South Africa",
"42 43 25 31" : "SW112, South Africa",
"3 36 3 36 36 3 36 38" : "SA243, South Africa"
};

