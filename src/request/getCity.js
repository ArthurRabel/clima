import { getPrevision } from './getPrevision'

export function getCity(cityName) {

    // Dados da url pro get da cidade
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    let URL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&limit=3&appid=' + apiKey;
    console.log("URL da requisição do estado:", URL); // url do estado

    return fetch(URL)
        // Obtém os dados da resposta como xml
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao consumir a API. Código de status:', response.status);
            }

            return response.text(); // Retorna os dados como string xml
        })
        .then(data => {
            //json string para json objeto
            const dataObjeto = JSON.parse(data);

            //envia getPrevision a latitude e longitude para acessar a previsão e o nome do local
            return getPrevision(dataObjeto[0].lat, dataObjeto[0].lon, dataObjeto[0].name);

        })
        .catch(error => {
            console.error('Erro ao obter a cidade no getCity:', error); // Adicionando um log para o erro na função getCity
        });
}

