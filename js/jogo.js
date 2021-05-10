var criaJogo = function() {
  var setPalavraSecreta = function(palavra) {
    palavraSecreta = palavra;
    qntLetras = palavra.length;
    lacunas = Array(qntLetras).fill('');
    etapa += 1;
  };

  var getLacunas = function() {
    return lacunas;
  };

  var getEtapa = function() {
    return etapa;
  };

  var palavraSecreta = '';
  var lacunas;
  var etapa = 1;

  return {
    setPalavraSecreta: setPalavraSecreta,
    getLacunas: getLacunas,
    getEtapa: getEtapa
  };
};
