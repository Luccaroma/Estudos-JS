class JogoDaMemoria {

  constructor({ tela }) {
    this.tela = tela

    this.heroiIniciais = [
      { img: './arquivos/batman.png', nome: 'batman' },
      { img: './arquivos/capitaoamerica.png', nome: 'capitaoamerica' },
      { img: './arquivos/flash.png', nome: 'flash' },
      { img: './arquivos/homemaranha.png', nome: 'homemaranha' },
    ]
    this.iconePadrao = './arquivos/padrao.png'
    this.heroisEscondidos = []
    this.heroisSelecionados = []
  }
  inicializar() {
    this.tela.atualizarImagens(this.heroiIniciais)
    this.tela.configurarBotaoJogar(this.jogar.bind(this))
    this.tela.configurarBotaoVerificarSelecao(this.verificarSelecao.bind(this))
  }
  embaralhar() {
    const copias = this.heroiIniciais
      .concat(this.heroiIniciais)
      .map(item => {
        return Object.assign({}, item, { id: Math.random() / 0.5 })
      })
      .sort(() => Math.random() - 0.5)

    this.tela.atualizarImagens(copias)

    setTimeout(() => {
      this.esconderHerois(copias)
    }, 1000);
  }
  esconderHerois(herois) {
    const heroisOcultos = herois.map(({ nome, id }) => ({
      id,
      nome,
      img: this.iconePadrao
    }))
    this.tela.atualizarImagens(heroisOcultos)
    this.heroisOcultos = heroisOcultos
  }
  exibirHeroi(id, nome) {
    const { img } = this.heroiIniciais.find((heroi) => heroi.nome === nome)
    this.tela.exibirHeroiPorId(id, img)
  }
verificarSelecao(id, nome) {
  const item = { id, nome }
  this.exibirHeroi(id, nome)

  const heroisSelecionados = this.heroisSelecionados.length
  switch(heroisSelecionados) {
    case 0:
      this.heroisSelecionados.push(item)
      break;

    case 1:
      const [opcao1] = this.heroisSelecionados
      this.heroisSelecionados = []

      if(opcao1.nome === item.nome && opcao1.id !== item.id) {
        this.tela.exibirMensagem(true)
      } else {
        this.tela.exibirMensagem(false)

        // Ocultar novamente depois de 1 segundo
        setTimeout(() => {
          this.tela.exibirHeroiPorId(opcao1.id, this.iconePadrao)
          this.tela.exibirHeroiPorId(item.id, this.iconePadrao)
        }, 1000)
      }
      break;
  }
}
  jogar() {
    this.embaralhar()
  }

}