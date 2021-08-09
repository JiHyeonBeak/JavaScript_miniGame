/**
 * 
 */
	var ex1 = ['jelly','dragon','hambuger','rice','xylitol','lupine','korea','paradise','jupiter','block','significnat'
				,'sequence','cohesion','sherlock','module','prototype'];
	var score =0;
	var num= parseInt((Math.random()*15)+0);
	var count =0;
	var sc = 0;
	
	console.log("초기 반복값:"+num);
	
	function next() {
		$('info').hide();
		//$('first').show();
/*		document.getElementById('info').removeAttribute('class');
		document.getElementById('info').setAttribute('class','active');
		
		document.getElementById('first').removeAttribute('class');
		document.getElementById('first').setAttribute('class','active');*/
		
	}
	
	
	
	function st(){  //시작키를 누를 시
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
				if(sc > 3) {
					score++;
				}
				else {
					score = score+2;
				}
		}
		num = parseInt((Math.random()*15)+0);
		document.getElementById('sco').innerText = '점수: '+score;

		document.getElementById('ex').innerText = ex1[num];
		
		document.getElementById('txt').value = '';
		console.log(user);
		console.log('현재단어: '+ex1[num]);
		console.log('카운트 수: '+count);
		
		 if(count === 8 ) {
			
			if(score > 10) {
				document.getElementById('sco').innerText = '아주 멋져요! '+ score + '점 입니다.';
			}
			else if(9 > score > 6) {
				document.getElementById('sco').innerText = '잘 하시네요! '+score+'점 입니다.';
			}
			else if(score < 6) {
				document.getElementById('sco').innerText = '연습할까요? ' +score+'점 입니다.';
			}
	}
		sc = 0;
		document.getElementById('tm').innerText = '경과시간 : '+sc+'초';
		
		}
	
	


