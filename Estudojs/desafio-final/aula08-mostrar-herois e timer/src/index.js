function onLoad() {
  const dependencias = {
    tela: Tela,
    util: Util
  }
 const jogo = new JogoDaMemoria(dependencias)
  jogo.inicializar()
}
window.onload = onLoad