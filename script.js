// Lista de jogadores fictícios
const jogadores = [
  { nome: "João", habilidade: 85 },
  { nome: "Pedro", habilidade: 78 },
  { nome: "Carlos", habilidade: 90 },
];

// Mostrar elenco
function mostrarElenco() {
  const conteudo = document.getElementById("conteudo");
  let html = "<h2>Elenco</h2><ul>";
  jogadores.forEach((jogador) => {
    html += `<li>${jogador.nome} - Habilidade: ${jogador.habilidade}</li>`;
  });
  html += "</ul>";
  conteudo.innerHTML = html;
}

// Simular partida
function simularPartida() {
  const habilidadeTotal = jogadores.reduce((sum, jogador) => sum + jogador.habilidade, 0);
  const resultado = Math.random() * habilidadeTotal > habilidadeTotal / 2;
  const conteudo = document.getElementById("conteudo");
  conteudo.innerHTML = `<h2>${resultado ? "Vitória!" : "Derrota!"}</h2>`;
}
