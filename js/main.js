(function () {
  'use strict';
  var root = document.documentElement;

  /* ---- Tema claro / escuro ---- */
  var btn = document.getElementById('tema');
  var txt = document.getElementById('tema-txt');
  var mq = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  function atual() {
    return root.getAttribute('data-theme') || (mq && mq.matches ? 'dark' : 'light');
  }
  function rotular() {
    var escuro = atual() === 'dark';
    var proximo = escuro ? 'claro' : 'escuro';
    btn.setAttribute('aria-label', 'Mudar para o tema ' + proximo);
    txt.textContent = 'Tema ' + proximo;
  }
  try {
    var salvo = localStorage.getItem('tema-cortese');
    if (salvo === 'dark' || salvo === 'light') root.setAttribute('data-theme', salvo);
  } catch (e) { /* sem armazenamento */ }
  if (!root.getAttribute('data-theme')) root.setAttribute('data-theme', 'dark'); /* padrão: tema escuro */
  rotular();

  btn.addEventListener('click', function () {
    var novo = atual() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', novo);
    try { localStorage.setItem('tema-cortese', novo); } catch (e) {}
    rotular();
  });

  /* ---- Estilo visual: Principal / Sóbria ---- */
  var btnEstilo = document.getElementById('estilo');
  var txtEstilo = document.getElementById('estilo-txt');
  var NOMES = { principal: 'Principal', sobria: 'Sóbria' };
  function estiloAtual() { return root.getAttribute('data-estilo') === 'sobria' ? 'sobria' : 'principal'; }
  function rotularEstilo() {
    var a = estiloAtual();
    txtEstilo.textContent = 'Estilo: ' + NOMES[a];
    btnEstilo.setAttribute('aria-label', 'Estilo atual: ' + NOMES[a] + '. Mudar para o estilo ' + NOMES[a === 'sobria' ? 'principal' : 'sobria']);
  }
  try {
    var est = localStorage.getItem('estilo-cortese');
    if (est === 'sobria' || est === 'principal') root.setAttribute('data-estilo', est);
  } catch (e) {}
  rotularEstilo();
  btnEstilo.addEventListener('click', function () {
    var novo = estiloAtual() === 'sobria' ? 'principal' : 'sobria';
    root.setAttribute('data-estilo', novo);
    try { localStorage.setItem('estilo-cortese', novo); } catch (e) {}
    rotularEstilo();
  });

  /* ---- Cards de dashboards (dados em js/dashboards.js) ---- */
  var lista = document.getElementById('dashboards');
  var modal = document.getElementById('modal');
  var frame = document.getElementById('modal-frame');
  var emIframe = window.self !== window.top; /* no preview embutido o iframe de terceiros é bloqueado: usa nova aba */

  function el(tag, cls, texto) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (texto) n.textContent = texto;
    return n;
  }
  var galeria = document.getElementById('modal-galeria');
  var rodape = document.getElementById('modal-rodape');
  var calc = document.getElementById('modal-calc'), abas = document.getElementById('modal-abas');
  function mostrarAba(qual) {
    galeria.hidden = qual !== 'doc'; calc.hidden = qual !== 'calc';
    abas.querySelectorAll('.aba').forEach(function (b) { b.setAttribute('aria-selected', b.getAttribute('data-aba') === qual ? 'true' : 'false'); });
    if (qual === 'calc' && !calc.firstChild && window.montarCalculadoraLTV) window.montarCalculadoraLTV(calc);
    (qual === 'doc' ? galeria : calc).scrollTop = 0;
  }
  abas.addEventListener('click', function (e) { var b = e.target.closest('.aba'); if (b) mostrarAba(b.getAttribute('data-aba')); });
  function mostrarFrame() { frame.hidden = false; galeria.hidden = true; calc.hidden = true; abas.hidden = true; rodape.hidden = true; document.getElementById('modal-nova').hidden = false; }
  function abrirGaleria(d) {
    document.getElementById('modal-titulo').textContent = d.titulo;
    document.getElementById('modal-nova').hidden = true;
    frame.hidden = true; frame.src = 'about:blank';
    galeria.innerHTML = '';
    d.galeria.forEach(function (src, i) {
      var im = el('img'); im.src = src; im.alt = 'Página ' + (i + 1) + ' do resumo do case'; im.draggable = false;
      galeria.appendChild(im);
    });
    abas.hidden = !d.calculadora; calc.innerHTML = '';
    mostrarAba('doc');
    if (d.pedido) {
      var p = document.getElementById('modal-pedir');
      p.textContent = d.pedido.texto;
      p.setAttribute('data-dica', 'Se o e-mail não abrir, escreva para ' + d.pedido.email);
      p.title = d.pedido.email;
      p.href = 'mailto:' + d.pedido.email + '?subject=' + encodeURIComponent(d.pedido.assunto);
      rodape.hidden = false;
    }
    modal.showModal();
  }
  /* Resumo visual: bloqueia clique direito e arrastar sobre as imagens */
  galeria.addEventListener('contextmenu', function (e) { e.preventDefault(); });
  galeria.addEventListener('dragstart', function (e) { e.preventDefault(); });

  (window.DASHBOARDS || []).forEach(function (d) {
    var li = el('li', 'dash');
    li.setAttribute('data-t', d.categoria || 'powerbi');
    if (d.emTodos) li.setAttribute('data-todos', '1');
    li.hidden = true; /* dashboards ficam fechados até clicar em "Power BI" */

    var midia = el('div', 'dash-midia');
    var nb = el('div', 'notebook');
    var tela = el('div', 'notebook-tela');
    var img = el('img'); img.src = d.capa; img.alt = 'Capa do dashboard ' + d.titulo; img.loading = 'lazy';
    tela.appendChild(img); nb.appendChild(tela); nb.appendChild(el('div', 'notebook-base'));
    midia.appendChild(nb);
    var prints = el('div', 'dash-prints');
    (d.prints || []).forEach(function (p) {
      var im = el('img'); im.src = p.src; im.alt = p.alt || ''; im.loading = 'lazy';
      prints.appendChild(im);
    });
    midia.appendChild(prints);

    var txt = el('div', 'dash-texto');
    txt.appendChild(el('p', 'tags', d.tag || 'Power BI'));
    txt.appendChild(el('h3', '', d.titulo));
    txt.appendChild(el('p', 'dash-rotulo', 'Objetivos principais e indicadores:'));
    txt.appendChild(el('p', '', d.resumo));
    var a = el('a', 'btn btn-cheio', d.botao || 'Clique para interagir');
    if (d.galeria) {
      a.href = '#'; /* resumo visual: sempre abre na janela, também na prévia */
      a.addEventListener('click', function (e) { e.preventDefault(); abrirGaleria(d); });
    } else {
      a.href = d.link; a.target = '_blank'; a.rel = 'noopener';
      if (!emIframe && modal && modal.showModal) {
        a.addEventListener('click', function (e) {
          e.preventDefault();
          mostrarFrame();
          document.getElementById('modal-titulo').textContent = d.titulo;
          document.getElementById('modal-nova').href = d.link;
          document.getElementById('modal-nova').hidden = false;
          frame.src = d.link;
          modal.showModal();
        });
      }
    }
    txt.appendChild(a);
    if (d.extra) {
      var x = el('a', 'dash-extra', d.extra.texto);
      x.href = d.extra.link; x.target = '_blank'; x.rel = 'noopener';
      txt.appendChild(x);
    }

    li.appendChild(midia); li.appendChild(txt);
    lista.appendChild(li);
  });
  if (modal) {
    var fechar = function () { modal.close(); };
    document.getElementById('modal-fechar').addEventListener('click', fechar);
    modal.addEventListener('click', function (e) { if (e.target === modal) fechar(); });
    modal.addEventListener('close', function () { frame.src = 'about:blank'; galeria.innerHTML = ''; calc.innerHTML = ''; });
  }

  /* ---- Filtro de projetos ---- */
  var filtros = document.querySelectorAll('.filtro');
  var cards = document.querySelectorAll('#dashboards .dash, #grade .proj');
  var vazio = document.getElementById('vazio');

  var dica = document.getElementById('dica-proj');
  var aberto = null; /* nenhuma categoria aberta ao carregar */

  function aplicar(alvo) {
    aberto = alvo;
    filtros.forEach(function (o) { o.setAttribute('aria-pressed', o.getAttribute('data-f') === alvo ? 'true' : 'false'); });
    var visiveis = 0;
    cards.forEach(function (c) {
      var temas = c.getAttribute('data-t').split(' ');
      var ehDash = c.classList.contains('dash');
      var mostra = alvo !== null && (alvo === 'todos' ? true : temas.indexOf(alvo) !== -1);
      c.hidden = !mostra;
      if (mostra) visiveis++;
    });
    vazio.hidden = alvo === null || visiveis !== 0;
    var dashVis = document.querySelectorAll('#dashboards .dash:not([hidden])').length;
    var projVis = document.querySelectorAll('#grade .proj:not([hidden])').length;
    lista.hidden = dashVis === 0;
    document.getElementById('grade').hidden = projVis === 0;
    if (dica) dica.hidden = alvo !== null;
  }

  filtros.forEach(function (f) {
    f.addEventListener('click', function () {
      var alvo = f.getAttribute('data-f');
      aplicar(aberto === alvo ? null : alvo); /* clicar de novo fecha */
    });
  });
  aplicar(null);

  /* ---- Status dos cursos: depois da data em data-fim, mostra só o ano (data-ano) ----
     Para mudar o dia da troca, edite data-fim no index.html (AAAA-MM-DD).
     Para manter o texto de status, apague o atributo data-fim. */
  var hoje = new Date();
  document.querySelectorAll('[data-fim]').forEach(function (el) {
    var fim = new Date(el.getAttribute('data-fim') + 'T00:00:00');
    if (!isNaN(fim) && hoje >= fim) el.textContent = el.getAttribute('data-ano');
  });

  /* ---- Ano no rodapé ---- */
  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* Botão E-mail do contato: abre o programa de e-mail e copia o endereço como garantia */
  var btnEmail = document.getElementById('btn-email');
  if (btnEmail) {
    var dicaOriginal = btnEmail.getAttribute('data-dica');
    btnEmail.addEventListener('click', function () {
      var end = btnEmail.getAttribute('data-email');
      try { if (navigator.clipboard) navigator.clipboard.writeText(end); } catch (e) {}
      btnEmail.setAttribute('data-dica', 'Endereço copiado: ' + end + ' (se o e-mail não abrir, cole no seu programa)');
      setTimeout(function () { btnEmail.setAttribute('data-dica', dicaOriginal); }, 4000);
    });
  }
})();
