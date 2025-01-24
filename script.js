/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Arial', sans-serif;
  background: #000;
  color: #fff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#container {
  text-align: center;
  width: 100%;
  height: 100%;
  position: relative;
}

header h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

#menu-principal button {
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border: 2px solid #00ff00;
  padding: 15px 30px;
  font-size: 1.2rem;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
}

#menu-principal button:hover {
  background: #00ff00;
  color: #000;
  transform: scale(1.05);
}

body::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
  opacity: 0.7;
  transition: background-image 1s ease-in-out;
}
// Função para salvar as configurações no localStorage
function salvarConfiguracoes() {
  const idioma = document.getElementById('idioma').value;
  const volume = volumeSlider.value;
  const tempoPartida = document.getElementById('tempo-partida').value;

  // Salvando no localStorage
  localStorage.setItem('config_idioma', idioma);
  localStorage.setItem('config_volume', volume);
  localStorage.setItem('config_tempo_partida', tempoPartida);

  alert('Configurações salvas com sucesso!');
  fecharModal();
}

// Função para carregar as configurações salvas
function carregarConfiguracoes() {
  const idioma = localStorage.getItem('config_idioma') || 'pt'; // Default: Português
  const volume = localStorage.getItem('config_volume') || '50'; // Default: 50%
  const tempoPartida = localStorage.getItem('config_tempo_partida') || '10'; // Default: 10 minutos

  // Aplicar valores aos elementos
  document.getElementById('idioma').value = idioma;
  volumeSlider.value = volume;
  volumeLabel.textContent = `${volume}%`;
  document.getElementById('tempo-partida').value = tempoPartida;
}

// Carregar configurações ao carregar a página
window.onload = carregarConfiguracoes;
