const criaJogo = (sprite) => {
  let etapa = 1;
  let lacunas = [];
  let palavraSecreta = '';

  const ganhou = () => !!lacunas.length
    && !lacunas.some((v) => v === '');

  const perdeu = () => sprite.isFinished();

  const ganhouOuPerdeu = () => ganhou() || perdeu();

  const reinicia = () => {
    etapa = 1;
    lacunas = [];
    palavraSecreta = '';
    sprite.reset();
  };

  const processaChute = (chute) => {
    if(!chute.trim()) throw Error('Chute inválido');
    let exp = new RegExp(chute, 'gi')
      , resultado
      , acertou = false;

    while (resultado = exp.exec(palavraSecreta)) {
      acertou = lacunas[resultado.index] = chute;
    }

   if (!acertou) sprite.nextFrame();
};

  const criaLacunas = () => lacunas = Array(palavraSecreta.length).fill('');

  const proximaEtapa = () => etapa = 2;

  const setPalavraSecreta = (palavra) => {
    if(!palavra.trim()) throw Error('Palavra secreta inválida');
    palavraSecreta = palavra;
    criaLacunas();
    proximaEtapa();
  };

  const getLacunas = () => lacunas;

  var getEtapa = () => etapa;

  return {
    setPalavraSecreta, 
    getLacunas,
    getEtapa,
    processaChute,
    ganhou,
    perdeu,
    ganhouOuPerdeu,
    reinicia,
  }
};
