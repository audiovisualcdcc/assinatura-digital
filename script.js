function createAss() {
  //recebe elementos digitados
  let nome = document.querySelector(".nomeCompleto").value.toLowerCase();
  let setor = document.querySelector(".setor").value.toLowerCase();
  let tel = document.querySelector(".tel").value.toLowerCase();

  //deixando telefone com - no meio
  if (tel[4] != "-") {
    const parte1 = tel.slice(0, 4);
    const parte2 = tel.slice(4, 8);
    tel = `${parte1}-${parte2}`;
  }

  //Colocando a primeira letra dos nomes e sobrenomes maiuscula
  const palavras = nome.split(" ");
  const setorpalavra = setor.split(" ");

  for (let i = 0; i < palavras.length; i++) {
    if (
      palavras[i] !== "de" &&
      palavras[i] !== "da" &&
      palavras[i] !== "do" &&
      palavras[i] !== "dos" &&
      palavras[i] !== "das" &&
      palavras[i] !== "em" &&
      palavras[i] !== "e"
    ) {
      palavras[i] = palavras[i][0].toUpperCase() + palavras[i].substr(1);
    }
  }

  for (let i = 0; i < setorpalavra.length; i++) {
    if (
      setorpalavra[i] != "de" &&
      setorpalavra[i] != "da" &&
      setorpalavra[i] != "do" &&
      setorpalavra[i] != "dos" &&
      setorpalavra[i] != "das" &&
      setorpalavra[i] != "em" &&
      palavras[i] !== "e"
    ) {
      console.log(setorpalavra[i]);
      console.log(typeof setorpalavra[i]);
      setorpalavra[i] =
        setorpalavra[i][0].toUpperCase() + setorpalavra[i].substr(1);
    }
  }
  nome = palavras.join(" ");
  setor = setorpalavra.join(" ");

  //pega os elementos html em que colocarei esses valores dentro da assinatura
  document.querySelector(".description .name").innerHTML = nome;
  document.querySelector(".description .nameSetor").innerHTML = setor;
  document.querySelector(".description .telefone").innerHTML = tel;
}

function selectText(node) {
  node = document.getElementById(node);

  if (document.body.createTextRange) {
    const range = document.body.createTextRange();
    range.moveToElementText(node);
    range.select();
  } else if (window.getSelection) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  } else {
    console.warn("Could not select text in node: Unsupported browser.");
  }
}

function abrirGmail() {
  let gmail = window.open("https://mail.google.com/mail/u/0/#settings/general");
}

const clickable = document.querySelector(".click-me");
clickable.addEventListener("click", () => {
  selectText("copy-ass");
  document.execCommand("copy");
  setTimeout(abrirGmail, 300);
});

//quando clico no botao cddc ou observatorio acima da assinatura
function opcao_assinatura(elemento) {
  //remove o que esta clicado
  let clicado = document.querySelector(".clicked");
  clicado.classList.remove("clicked");

  //Coloque efeito clicked no clicado
  elemento.classList.add("clicked");

  let seletorLogoCdcc = document.querySelector(".logo-cdcc");
  seletorLogoCdcc.classList.add("display-none");

  let seletorLogoObservatorio = document.querySelector(
    ".ass-digital .logo-observatorio"
  );
  let descricaoObservatorio = document.querySelector(
    ".description .observatorio"
  );

  //seletor facebook icone observatorio
  let seletorFbObservatorio = document.querySelector(".icons .fb-observatorio");

  //seletor facebook icone cdcc
  let seletorFbCdcc = document.querySelector(".icons .fb-cdcc");

  console.log(seletorLogoCdcc);
  console.log(seletorLogoObservatorio);
  console.log(descricaoObservatorio);

  if (elemento.classList.contains("option-cdcc")) {
    //desaparece logo observatorio
    if (seletorLogoObservatorio != null) {
      seletorLogoObservatorio.classList.add("display-none");
      seletorFbObservatorio.classList.add("display-none");
    }
    //desaparece descricao observatorio - "Observat??rio Dietrich Schiel"
    descricaoObservatorio.classList.add("display-none");

    //aparece logo cdcc
    seletorLogoCdcc.classList.remove("display-none");
    //aparece fb do cdcc
    seletorFbCdcc.classList.remove("display-none");
    //coloca efeito no button cdcc
    // document.querySelector(".option-cdcc").classList.add("efeito-button");
  } else {
    if (seletorLogoCdcc != null) {
      //desaparece logo cdcc
      seletorLogoCdcc.classList.add("display-none");
      seletorFbCdcc.classList.add("display-none");
    }
    //document.querySelector(".option-observatorio").classList.add("efeito-button");
    //aparece logo observatorio
    seletorLogoObservatorio.classList.remove("display-none");
    seletorFbObservatorio.classList.remove("display-none");

    //aparece descricao observatorio
    descricaoObservatorio.classList.remove("display-none");
  }
}
