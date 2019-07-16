//CYPHERS
	function reverse(msg) {
		msg = msg.toUpperCase()
		var translate = '';
		for (var i = msg.length-1; i >= 0; i--) {
			translate += msg[i]
		}
		return translate;
	}

	function caeser(msg,key,isEncrypt=true){
	var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var translate = ''
		msg = msg.toUpperCase();
		k = key;
		for (i=0;i<msg.length;i++) {
			sym = msg[i]
			if (letters.indexOf(sym) != -1) {
				var num = letters.indexOf(sym);
				if (isEncrypt) {
					num +=k;
					while (num > 25 || num < 0) {num = num<0?num+26:num-26;}
				} else{
					num -=k;
					while (num > 25 || num < 0) {num = num<0?num+26:num-26;}
				}
				translate += letters[num];
			}else{
				translate += sym;
			}
		}
		return translate;

	}

	function transposition(msg, key, isEncrypt=true) {
		//number of cols = key
		if (isEncrypt && !(key<=0 || key>msg.length)) {
			var cypher = [];
			for (var i = 0; i <= key-1; i++) {cypher.push('')}

			for (var col = 0; col <= key-1; col++) {
				var pointer = col;
				while(pointer < msg.length){
					cypher[col] += msg[pointer];
					pointer+=key;
				}
			}
			return cypher.join('')

		}else if (!(key<=0 || key>msg.length)){
			cols = Math.ceil(msg.length/key);
			rows = key;
			voidBoxes = (cols * rows)-msg.length;
			plainText = []
			for (var i = 0; i <= cols-1; i++) {plainText.push('')}
			var col =0,
				row =0;
			for (var i = 0; i <= msg.length-1; i++) {
				symp = msg[i]
				plainText[col]+= symp;
				col++;
				if (col == cols || (col == cols-1 && row >= rows - voidBoxes)) {
					col = 0;
					row++;
				}
			}
			return plainText.join('')
		}else{
			return 'Error:Type more than 1 letter & make the key in this limit (1:length of message)'
		}

	}

	String.prototype.hashCode = function() {
		var hash = 0;
    if (this.length == 0) {
        return hash;
    }
    for (var i = 0; i < this.length; i++) {
        var char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
	};


	
function SHA1 (msg) {

 


    function rotate_left(n,s) {


        var t4 = ( n<<s ) | (n>>>(32-s));


        return t4;


    };

 


    function lsb_hex(val) {


        var str="";


        var i;


        var vh;


        var vl;

 


        for( i=0; i<=6; i+=2 ) {


            vh = (val>>>(i*4+4))&0x0f;


            vl = (val>>>(i*4))&0x0f;


            str += vh.toString(16) + vl.toString(16);


        }


        return str;


    };

 


    function cvt_hex(val) {


        var str="";


        var i;


        var v;

 


        for( i=7; i>=0; i-- ) {


            v = (val>>>(i*4))&0x0f;


            str += v.toString(16);


        }


        return str;


    };

 

 


    function Utf8Encode(string) {


        string = string.replace(/\r\n/g,"\n");


        var utftext = "";

 


        for (var n = 0; n < string.length; n++) {

 


            var c = string.charCodeAt(n);

 


            if (c < 128) {


                utftext += String.fromCharCode(c);


            }


            else if((c > 127) && (c < 2048)) {


                utftext += String.fromCharCode((c >> 6) | 192);


                utftext += String.fromCharCode((c & 63) | 128);


            }


            else {


                utftext += String.fromCharCode((c >> 12) | 224);


                utftext += String.fromCharCode(((c >> 6) & 63) | 128);


                utftext += String.fromCharCode((c & 63) | 128);


            }

 


        }

 


        return utftext;


    };

 


    var blockstart;


    var i, j;


    var W = new Array(80);


    var H0 = 0x67452301;


    var H1 = 0xEFCDAB89;


    var H2 = 0x98BADCFE;


    var H3 = 0x10325476;


    var H4 = 0xC3D2E1F0;


    var A, B, C, D, E;


    var temp;

 


    msg = Utf8Encode(msg);

 


    var msg_len = msg.length;

 


    var word_array = new Array();


    for( i=0; i<msg_len-3; i+=4 ) {


        j = msg.charCodeAt(i)<<24 | msg.charCodeAt(i+1)<<16 |


        msg.charCodeAt(i+2)<<8 | msg.charCodeAt(i+3);


        word_array.push( j );


    }

 


    switch( msg_len % 4 ) {


        case 0:


            i = 0x080000000;


        break;


        case 1:


            i = msg.charCodeAt(msg_len-1)<<24 | 0x0800000;


        break;

 


        case 2:


            i = msg.charCodeAt(msg_len-2)<<24 | msg.charCodeAt(msg_len-1)<<16 | 0x08000;


        break;

 


        case 3:


            i = msg.charCodeAt(msg_len-3)<<24 | msg.charCodeAt(msg_len-2)<<16 | msg.charCodeAt(msg_len-1)<<8    | 0x80;


        break;


    }

 


    word_array.push( i );

 


    while( (word_array.length % 16) != 14 ) word_array.push( 0 );

 


    word_array.push( msg_len>>>29 );


    word_array.push( (msg_len<<3)&0x0ffffffff );

 

 


    for ( blockstart=0; blockstart<word_array.length; blockstart+=16 ) {

 


        for( i=0; i<16; i++ ) W[i] = word_array[blockstart+i];


        for( i=16; i<=79; i++ ) W[i] = rotate_left(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);

 


        A = H0;


        B = H1;


        C = H2;


        D = H3;


        E = H4;

 


        for( i= 0; i<=19; i++ ) {


            temp = (rotate_left(A,5) + ((B&C) | (~B&D)) + E + W[i] + 0x5A827999) & 0x0ffffffff;


            E = D;


            D = C;


            C = rotate_left(B,30);


            B = A;


            A = temp;


        }

 


        for( i=20; i<=39; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0x6ED9EBA1) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=40; i<=59; i++ ) {
            temp = (rotate_left(A,5) + ((B&C) | (B&D) | (C&D)) + E + W[i] + 0x8F1BBCDC) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        for( i=60; i<=79; i++ ) {
            temp = (rotate_left(A,5) + (B ^ C ^ D) + E + W[i] + 0xCA62C1D6) & 0x0ffffffff;
            E = D;
            D = C;
            C = rotate_left(B,30);
            B = A;
            A = temp;
        }
        H0 = (H0 + A) & 0x0ffffffff;
        H1 = (H1 + B) & 0x0ffffffff;
        H2 = (H2 + C) & 0x0ffffffff;
        H3 = (H3 + D) & 0x0ffffffff;
        H4 = (H4 + E) & 0x0ffffffff;
    }
    var temp = cvt_hex(H0) + cvt_hex(H1) + cvt_hex(H2) + cvt_hex(H3) + cvt_hex(H4);
    return temp.toLowerCase();
}
