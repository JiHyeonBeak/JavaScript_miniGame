/**
 * 
 */
	var ex1 = ['jelly','dragon','hambuger','rice'];
	var score = 0;
	var num=0;
	
	function st(){ //시작키를 누를 시
		console.log('점수: '+score);
		var cor = num;
		document.getElementById('ex').innerText = ex1[cor];
		cor = ++num;
		var user = document.getElementById('txt').value;
			console.log('반복: '+cor);
			
			if(ex1.length == cor) {
				num=0;
			}
	
	};
	
	
	function ent(){
		var user = document.getElementById('txt').value;
		var cor = ex1[cor];
		console.log('유저 맞냐 : '+user);
		console.log('코렉트 맞냐 : '+cor);
		if(user === cor) {
			console.log('점수: '+score);
			score += 1;
		}
		
		var cor = num;
		document.getElementById('ex').innerText = ex1[cor];
		cor = ++num;
		if(ex1.length == cor) {
				num=0;
			}
		
		console.log(user);
		console.log('현재단어: '+ex1[cor-1]);
		
		
		
	}
	

