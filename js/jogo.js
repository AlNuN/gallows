var criaJogo = function (sprite) {
  var etapa = 1;
  var lacunas = [];
  var palavraSecreta = '';

  var processaChute = function (chute) {
    var p = palavraSecreta.split('');
    var acertou = false;
    for (let i = 0; i < p.length; i++) {
      const e = p[i];
      if (e === chute) {
        lacunas[i] = chute;
        acertou = true
      }
    }
    if (!acertou) {
      sprite.nextFrame();
    }
  }

  var criaLacunas = function () {
    lacunas = Array(palavraSecreta.length).fill('');
  };

  var proximaEtapa = function () {
    etapa = 2;
  };

  var setPalavraSecreta = function (palavra) {
    palavraSecreta = palavra;
    criaLacunas();
    proximaEtapa();
  };

  var getLacunas = function () {
    return lacunas;
  };

  var getEtapa = function () {
    return etapa;
  };

  return {
    setPalavraSecreta: setPalavraSecreta, 
    getLacunas: getLacunas,
    getEtapa: getEtapa,
    processaChute: processaChute,
  }
};
