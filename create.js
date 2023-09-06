< !DOCTYPE html >
	<html lang="en">

		<head>
			<meta charset="UTF-8">
				<meta http-equiv="x-UA-Compatible" content="IE=edge">
					<meta name="viewport" content="width=device-width,initial scale =" 1.0">
					<link rel="stylesheet" href="	https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
						<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
							integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
							crossorigin="anonymous"></script>
						<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
							integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
							crossorigin="anonymous"></script>

						<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
							integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
							<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
								integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
								crossorigin="anonymous"></script>
							<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
								integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
								crossorigin="anonymous"></script>
							<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js"
								integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+"
								crossorigin="anonymous"></script>
						</head>

						<body>



							<div id="olu">
								<h1 style=background-color:blue>Add subject</h1>

								<input type="text" id="tola" placeholder="subjects..." style=" padding:3px 5px; font-size:24px" style=>

								<button onclick="tunji()" style="cursor:pointer; padding:3px 5px; background:lightblue; font-size:24px">+
									add</button>

							</div>

							<ol id="subject" style="font-size:36px">

							</ol>

							<script>

								let tunji = function () {
									let a = document.getElementById('olu');
								let b = document.getElementById('tola').value;
								let c = document.getElementById('subject');

								let d = document.createElement('li');
								let e = document.createTextNode(b);
								d.appendChild(e);
								c.appendChild(d);
								document.getElementById('tola').value = '';


								let x = document.createElement('span');
								let y = document.createTextNode('\u00d7');
								x.appendChild(y);
								x.style.backgroundColor = "blue";
								x.style.color = "white";
								x.style.cursor = "pointer";
								x.className = 'close';

								d.appendChild(x);

								let f = document.getElementsByClassName('close');
								let i;
								for (i = 0; i < f.length; i++) {
									f[i].onclick = function () {
										this.parentNode.style.textDecoration = "line-through"
									}

								}
		}

								document.addEventListener('keydown', function (e) {
			if (e.key === "Enter") {
									tunji();
			};
		});


							</script>
							<script>
								document.querySelector('.title').textContent = 'SIMPLE CALCULATOR';

								let a = Number(document.querySelector('.input1').value);
								let b = Number(document.querySelector('.input2').value);
								let span1 = document.querySelector('.sign');
								let span2 = document.querySelector('.answer');

								const x = document.querySelectorAll('button');

								for (let i = 0; i < x.length; i++) {

									x[i].addEventListener('click', function () {
										if (x[i].value == "add") {
											let c = a + b;
											span1.textContent = "+";
											span2.textContent = '=' + ' ' + c;

										} else if (x[i].value == "minus") {
											let c = a - b;
											span1.textContent = "-";
											span2.textContent = '=' + ' ' + c;

										} else if (x[i].value == "mult") {
											let c = a * b;
											span1.textContent = "x";
											span2.textContent = '=' + ' ' + c;

										} else if (x[i].value == "divide") {
											let c = a / b;
											span1.textContent = "/";
											span2.textContent = '=' + ' ' + c;
										}

										else if (x[i].value == "divide") {
											let c = a / b;
											span1.textContent = "=";
											span2.textContent = '=' + ' ' + c;
										}

									})
								};
								{
									"workbench.colorTheme"
			"gitlens.codeLens.enabled",
								"gitlens.codeLens.scopes"[
								"document",
								"containers",
								"blocks"
								],
								"gitlens.fileAnnotations.command"
								"window.zoomLevel"
		}
								const message = "MERRY CHRISTMAS TO EVERY ONE IN THIS ROOM"

								function greet() {
									console.log(message)
								}

								greet()
								{
									"workbench.colorTheme"
			"gitlens.codeLens.enabled"
								"gitlens.codeLens.scopes"[
								"document",
								"containers",
								"blocks"
								],
								"gitlens.fileAnnotations.command"
								"window.zoomLevel"
		}