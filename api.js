// api.js
import axios from "axios";

const fetchData = async () => {
  try {
    console.log("Iniciando a requisição...");
    const response = await axios.get("./data.json"); // Substitua pelo caminho correto
    console.log("Dados recebidos com sucesso:", response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter dados:", error);
    throw error; // Você pode optar por tratar o erro aqui ou deixá-lo ser tratado no componente
  }
};

export default fetchData;
