class JogoDaMemoria {

  constructor({ tela }) {
    this.tela = tela

    this.heroiIniciais = [
      { img: './arquivos/batman.png', name: 'batman'},
      { img: './arquivos/capitaoamerica.png', name: 'capitaoamerica'},
      { img: './arquivos/flash.png', name: 'flash'},
      { img: './arquivos/homemaranha.png', name: 'homemaranha'},
    ]
  }
  inicializar() {
    this.tela.atualizarImagens(this.heroiIniciais)
  }
}