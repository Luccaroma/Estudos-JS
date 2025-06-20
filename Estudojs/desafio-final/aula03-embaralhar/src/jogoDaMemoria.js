class JogoDaMemoria {

  constructor({ tela }) {
    this.tela = tela

    this.heroiIniciais = [
      { img: './arquivos/batman.png', name: 'batman' },
      { img: './arquivos/capitaoamerica.png', name: 'capitaoamerica' },
      { img: './arquivos/flash.png', name: 'flash' },
      { img: './arquivos/homemaranha.png', name: 'homemaranha' },
    ]
  }
  inicializar() {
    this.tela.atualizarImagens(this.heroiIniciais)
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
  }
  embaralhar() {
    const copias = this.heroiIniciais
      .concat(this.heroiIniciais)
      .map(item => {
        return Object.assign({}, item, { id: Math.random() / 0.5 })
      })
      .sort(() => Math.random() - 0.5)
      
    this.tela.atualizarImagens(copias)
  }
  jogar() {
    this.embaralhar()
  }

}