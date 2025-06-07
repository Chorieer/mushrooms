function resizeImage(files) {
	var img = document.createElement("img");
	var reader = new FileReader();
	reader.onload = function(e) { 
		img.src = e.target.result;
		img.onload = function() {
			var canvas = document.createElement("canvas");
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(img, 0, 0);

	        var MAX_WIDTH = 200;
	        var MAX_HEIGHT = 200;
	        var width = img.width;
	        var height = img.height;

	        if (width > height) {
	          if (width > MAX_WIDTH) {
	            height *= MAX_WIDTH / width;
	            width = MAX_WIDTH;
	          }
	        } else {
	          if (height > MAX_HEIGHT) {
	            width *= MAX_HEIGHT / height;
	            height = MAX_HEIGHT;
	          }
	        }
	        canvas.width = width;
	        canvas.height = height;
	        var ctx = canvas.getContext("2d");
	        ctx.drawImage(img, 0, 0, width, height);
	        var dataurl = canvas.toDataURL("image/png");   
	        document.getElementById('image').src = dataurl; 
         
        };

	};
	reader.readAsDataURL(files[0]);
}	

async function init(files) {
	p = document.getElementById('result');
	p.innerHTML = "Працюємо...";
	const URL = "./model/";
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";
    resizeImage(files);

    model = await tmImage.load(modelURL, metadataURL);
    predict();
}

async function predict() {
	
    const predictions = await model.predict(document.getElementById('image'));
	p.innerHTML = "";
	p.innerHTML += '\
	<div class="alert alert-success" role="alert">\
  	Гриб ідентифіковано як їстівний!\
	</div>';
	for (let prediction of predictions) {
		let predict = Math.round(prediction.probability*100);
		if(predict >= 90) {
			switch (prediction.className) {
			  case "Альбатреллус овечий":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Albatrellus).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Albatrellus).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Аурикулярія":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Auriculyaria).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Auriculyaria).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Білий гриб":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Beliigrib).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Beliigrib).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Білий степовий гриб":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Beliistepnoigrib).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Beliistepnoigrib).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Боровик":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Borovik).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Borovik).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Вешенька":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Veshenka).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Veshenka).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Вовнянки":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Volnuhka).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Volnuhka).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Гігрофор":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Gigrofor).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Gigrofor).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Головач":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Golovach).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Golovach).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Груздь":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Gruzd).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Gruzd).text+'\
				  </div>\
				</div>\
				';
			    break;	
			  case "Дубовик":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Dubovik).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Dubovik).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Зимний гриб":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Zimniigrib).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Zimniigrib).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Парасолька":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Zontik).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Zontik).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Калоцибі травневий":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Calozibe).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Calozibe).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Ліофілум ільмовий":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Liofillum).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Liofillum).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Лисичка":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Lisichka).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Lisichka).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Маслюк":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Maslenok).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Maslenok).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Мокруха":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Mokrucha).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Mokrucha).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Моховик":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Mohovik).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Mohovik).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Подберезовик":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Podberozovik).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Podberozovik).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Підберезник":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Podosinovik).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Podosinovik).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Рижик":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Rizik).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Rizik).text+'\
				  </div>\
				</div>\
				';
			    break;
			  case "Спарасис кучерявий":
	        	p.innerHTML += 
				'\
				<div class="media border py-3 border-primary rounded">\
				  <img class="mx-3" src="'+JSON.parse(Sparasis).image+'" alt="">\
				  <div class="media-body">\
				    <h5 class="mt-0">'+prediction.className+" ("+predict+"% вірогідності)"+'</h5>\
				    '+JSON.parse(Sparasis).text+'\
				  </div>\
				</div>\
				';
			    break;
			}
		}
    }
    if(!p.innerHTML.match(/% вірогідності/))
    	p.innerHTML = "Гриб не ідентифіковано";
}