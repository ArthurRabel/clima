export function getPrevision(lat, lon, name) {

    // Dados da url pro get da previsão
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    let URL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat.toString() + '&lon=' + lon.toString() + "&appid=" + apiKey;

    return fetch(URL)
        // Obtém os dados da resposta como json
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao consumir a API. Código de status:', response.status);
            }
            return response.text(); // Retorna os dados como string json
        })
        .then(prevision => {
            return [JSON.parse(prevision), name]; // Retorna os dados da previsao e o nome do local
        })
        .catch(error => {
            console.error('Erro os dados da previsão no getPrevisao:', error); // Adicionando um log para o erro na função getCity
        });
}