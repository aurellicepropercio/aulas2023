// Substitua 'SUA_CHAVE_DE_API' pela sua chave sua API do OpenwheatherMap

const apikey = '6697002e3de1827e2c86450448c8066f';

async function getwheather() {
    const cityinput = document.getElementById('city');
    const city = cityinput.value;
    
    //CHAMADA DA API isto aqui é uma explicação para meu entendimento, essa frase.
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&lang=pt_br`);

    //RESPOSTA DA API E TRANSFORMANDO EM JSON
    
    const data = await response.json();
     if (data.cod === 200) {  // 200 indica uma resposta bem-sucedida cidade encontrada na API
    
    const divVazia = document.getElementById('weatherInfo');
    const descriçãoTempo = data.weather[0].description;
    const temperature = (data.main.temp - 273.15).toFixed(1);
    const humidade = (data.main.humidity);
    const tempMin = (data.main.temp_min - 273.15).toFixed(1);
    const tempMax = (data.main.temp_max - 273.15).toFixed(1)

    divVazia.innerHTML = ` 
     <h2>Previsão para ${city}</h2>
     <p>Descrição do Tempo: ${descriçãoTempo}</p>
     <p>Temperatura: ${temperature}°C</p>
     <p>Humidade: ${humidade}%</p>
     <p>Tempeatura Mínima: ${tempMin}%</p>
     <p>Temperatura Máxima: ${tempMax}%</p>`
    
   }
}