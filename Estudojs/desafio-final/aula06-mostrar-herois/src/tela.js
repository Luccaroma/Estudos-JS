const ID_CONTEUDO = "conteudo"
const ID_BTN_JOGAR = "jogar"
const ID_MENSAGEM = "mensagem"
const CLASSE_INVISIVEL = "invisible"
const MENSAGENS = {
  sucesso: {
    texto: 'Combinação correta!',
    classe: 'alert-sucess'
  },
  erro: {
    texto: 'Combinação incorreta!',
    classe: 'alert-danger'
  }
}
class Tela {
  static obterCodigoHtml(item) {
    return `      
  <div class="col-md-3">
        <div class="card" style="width: 50%;" onclick="window.verificarSelecao('${item.id}', '${item.nome}')">
          <img src="${item.img}" id="${item.id}" name="${item.nome}" class="card-img-top" alt="...">
        </div>
        <br />
  </div>
  `
  }
  static configurarBotaoVerificarSelecao(funcaoOnclick) {
    window.verificarSelecao = funcaoOnclick
  }

  static alterarConteudoHtml(codigoHtml) {
    const conteudo = document.getElementById(ID_CONTEUDO)
    conteudo.innerHTML = codigoHtml
  }
  static gerarStringHtmlPelaImagem(itens) {
    return itens.map(Tela.obterCodigoHtml).join('')
  }
  static atualizarImagens(itens) {
    const codigoHtml = Tela.gerarStringHtmlPelaImagem(itens)
    Tela.alterarConteudoHtml(codigoHtml)
  }
  static configurarBotaoJogar(funcaoOnclick) {
    const btnJogar = document.getElementById(ID_BTN_JOGAR)
    btnJogar.onclick = funcaoOnclick
  }
static exibirHeroiPorId(id, img) {
  const elemento = document.getElementById(id)
  if (elemento) {
    elemento.src = img
  }
}
  static exibirMensagem(sucesso = true) {
    const elemento = document.getElementById(ID_MENSAGEM)
    if (sucesso) {
      elemento.classList.remove(MENSAGENS.erro.classe)
      elemento.classList.add(MENSAGENS.sucesso.classe)
      elemento.innerText = MENSAGENS.sucesso.texto
    }
    else {
      elemento.classList.remove(MENSAGENS.sucesso.classe)
      elemento.classList.add(MENSAGENS.erro.classe)
      elemento.innerText = MENSAGENS.erro.texto
    }
    elemento.classList.remove(CLASSE_INVISIVEL)
  }
}