/**
 * 
 */
	var ex1 = ['jelly','dragon','hambuger','rice','xylitol','lupine','korea','paradise','jupiter','block','significant'
				,'sequence','cohesion','sherlock','module','prototype'];
	var score =0;
	var num= parseInt((Math.random()*15)+0);
	var count =0;
	var sc = 0;
	
	console.log("초기 반복값:"+num);
	
	function next() {
		document.getElementById('info').removeAttribute('class');
		document.getElementById('info').setAttribute('class','active');
		
		document.getElementById('stt').setAttribute('class','active');
		document.getElementById('nxt').setAttribute('class','active');
		
	}
	
	
	
	function st(){  //시작키를 누를 시
		document.getElementById('stt').removeAttribute('class');
		document.getElementById('nxt').setAttribute('class','active');
		
		document.getElementById('first').setAttribute('class','active');
	
		document.getElementById('info').removeAttribute('class');
		document.getElementById('ex').innerText = ex1[num];
		document.getElementById('sco').innerText = '점수: '+score;
		var user = document.getElementById('txt').value;
			console.log('반복: '+num);
		
		setInterval(function time() {
		sc++;
		document.getElementById('tm').innerText = '경과시간 : '+sc+'초';
		},1000);
			
	};
	
	
	
	function ent(){  //확인 키를 누를때마다
		var user = document.getElementById('txt').value;

		++count;
		console.log('유저 : '+user);
		console.log('코렉트 : '+ex1[num]);
			
			if(user === ex1[num]) {
				document.getElementById('sad').removeAttribute('class');
				document.getElementById('awsome').removeAttribute('class');
				document.getElementById('awsome').setAttribute('class','active');
				document.getElementById('comment').innerText='멋져!';
				
				
				if(sc > 3) {
					score++;
				}
				else {
					score = score+2;
				}
		}
			else {
				document.getElementById('awsome').removeAttribute('class');
				document.getElementById('sad').removeAttribute('class');
				document.getElementById('sad').setAttribute('class','active');
				document.getElementById('comment').innerText='잘 해보자';
			
		}
		num = parseInt((Math.random()*15)+0);
		document.getElementById('sco').innerText = '점수: '+score;

		document.getElementById('ex').innerText = ex1[num];
		
		document.getElementById('txt').value = '';
		console.log(user);
		console.log('현재단어: '+ex1[num]);
		console.log('카운트 수: '+count);
		
		 if(count === 10 ) {
			document.getElementById('first').removeAttribute('class');
			document.getElementById('tm').setAttribute('class','active');
			
			
			if(score >= 10) {
				document.getElementById('ex').innerText = '아주 멋져요! '+ score + '점 입니다.';
				document.getElementById('comment').innerText='대단해!';
			}
			else if(9 > score > 6) {
				document.getElementById('ex').innerText = '잘 하시네요! '+score+'점 입니다.';
				document.getElementById('comment').innerText='잘 하는데!';
			}
			else if(score <= 6) {
				document.getElementById('ex').innerText = '연습할까요? ' +score+'점 입니다.';
				document.getElementById('comment').innerText='노력해보자!';
			}
	}
		sc = 0;
		document.getElementById('tm').innerText = '경과시간 : '+sc+'초';
		
		}
	
	


