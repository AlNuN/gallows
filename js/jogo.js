var criaJogo = function () {
  var etapa = 1;
  var lacunas = [];
  var palavraSecreta = '';

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
    getEtapa: getEtapa
  }
};
