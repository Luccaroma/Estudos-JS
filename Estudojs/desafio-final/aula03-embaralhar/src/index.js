function onLoad() {
  const dependencias = {
    tela: Tela
  }
 const jogo = new JogoDaMemoria(dependencias)
  jogo.inicializar()
}
window.onload = onLoad