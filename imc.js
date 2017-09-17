function calcula_imc() 
{
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;
	var sexo = document.getElementById('sexo').value;
	var imc;

	if(!peso || !altura || !sexo)
	{
		alert("Favor preencher todos os campos");
		return false;
	}	

	if(peso < 1 || altura < 1)	
	{
		alert("Valores menores que 1 sao invalidos");
		return false;
	}		

	imc = peso/(altura*altura);
	imc = parseFloat(imc.toFixed(2));

	if (sexo == "Masculino")
	{
		if(imc < 20.7)
			alert("Seu IMC é: "+imc + " e você está abaixo do peso");
		else if(imc >= 20.7 && imc < 26.4)
			alert("Seu IMC é: "+imc + " e você está no peso normal");
		else if(imc >= 26.4 && imc < 27.8)
			alert("Seu IMC é: "+imc + " e você está marginalmente acima do peso");
		else if(imc >= 27.8 && imc < 31.1)
			alert("Seu IMC é: "+imc + " e você está acima do peso ideal");
		else
			alert("Seu IMC é: "+imc + " e você está obeso");
	}
	else if(sexo == "Feminino")
	{
		if(imc < 19.1)
			alert("Seu IMC é: "+imc + " e você está abaixo do peso");
		else if(imc >= 19.1 && imc < 25.8)
			alert("Seu IMC é: "+imc + " e você está no peso normal");
		else if(imc >= 25.8 && imc < 27.3)
			alert("Seu IMC é: "+imc + " e você está marginalmente acima do peso");
		else if(imc >= 27.3 && imc < 32.3)
			alert("Seu IMC é: "+imc + " e você está acima do peso ideal");
		else
			alert("Seu IMC é: "+imc + " e você está obeso");

	}		
	
}