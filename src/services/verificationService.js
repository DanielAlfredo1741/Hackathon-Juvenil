// Ficheiro para comunicar com a API / Backend ou Modelos de Inteligência Artificial

/**
 * Função para verificar conteúdo através da API do Backend.
 * @param {Object} inputData - { text: string, image: File }
 * @returns {Promise<Object>} Resposta da IA com percentagens Verdadeiro/Duvidoso/Falso
 */
export const verifyContent = async (inputData) => {
  // TODO: Substituir este bloco pela chamada fetch real ao Backend da sua aplicação.
  // Exemplo de como ficará no futuro:
  // const formData = new FormData();
  // formData.append('text', inputData.text);
  // if(inputData.image) formData.append('image', inputData.image);
  // const response = await fetch('https://seu-backend/api/verify', { method: 'POST', body: formData });
  // return await response.json();

  return new Promise((resolve, reject) => {
    // Simular o atraso de uma requisição de rede e processamento da IA (2.5 segundos)
    setTimeout(() => {
      const isTextEmpty = !inputData.text || inputData.text.trim() === '';
      const hasImage = !!inputData.image;

      if (isTextEmpty && !hasImage) {
        return reject(new Error('Por favor, insira texto, link ou uma imagem para verificar.'));
      }

      // Gerar variações de percentagem para simular a resposta dinâmica da IA
      const mockTrue = Math.floor(Math.random() * (95 - 40 + 1)) + 40; 
      const mockFake = Math.floor(Math.random() * (100 - mockTrue));
      const mockDoubtful = 100 - mockTrue - mockFake;

      resolve({
        status: 'success',
        probabilities: {
          true: mockTrue,
          doubtful: mockDoubtful,
          false: mockFake
        },
        message: 'Análise gerada (Conexão Backend Simulada).'
      });
    }, 2500); 
  });
};
