const criaController = (jogo) => {

  const $entrada = $('#entrada');
  const $lacunas = $('.lacunas');

  const exibeLacunas = () => {
    $lacunas.empty();
    jogo.getLacunas().forEach((element) => {
      $('<li>')
        .addClass('lacuna')
        .text(element)
        .appendTo($lacunas);
    });
  };

  const mudaPlaceHolder = (texto) => {
    $entrada
      .val('')
      .attr('placeholder', texto);
  };

  const guardaPalavraSecreta = () => {
    try {
      jogo.setPalavraSecreta($entrada.val().trim());
      $entrada.val('');
      exibeLacunas();
      mudaPlaceHolder('chute');
    } catch(err) {
      alert(err.message);
    }
  };

  const reinicia = () => {
    jogo.reinicia();
    $lacunas.empty();
    mudaPlaceHolder('Palavra Secreta');
  }

  const verificaFim = () => {
    if(jogo.ganhouOuPerdeu()){
      setTimeout(() => {
        if (jogo.ganhou()) {
          alert('Parabéns, você ganhou o jogo');
        } else if (jogo.perdeu()) {
          alert('Que pena, tente novamente');
        }
        reinicia();
      }, 200);
    }
  }

  const leChute = () => {
    try {
      var chute = $entrada.val().trim().substr(0, 1);
      jogo.processaChute(chute);
      $entrada.val('');
      exibeLacunas();
      verificaFim();
    } catch (err) {
      alert(err.message);
    }
  }

  const inicia = () => {
    $entrada.keypress((event) => {
      if (event.which == 13) {
        switch (jogo.getEtapa()) {
          case 1:
            guardaPalavraSecreta();
            break;
          case 2:
            leChute();
            break;
          }
      }
    });
  };

  return { inicia };
};
