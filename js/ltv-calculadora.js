/* Calculadora interativa de LTV: mesma conta da planilha ltv_calculadora.xlsx.
   LTV = intercepto + coef.valor × valor_1ª_compra + coef.mês × mês + coef.recorrente × recorrente + coef. de cada categoria. */
(function () {
  var M = window.LTV_MODELO;
  if (!M) return;
  var MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];

  function coef(lista, nome) {
    for (var i = 0; i < lista.length; i++) if (lista[i][0] === nome) return lista[i][1];
    return 0;
  }
  function prever(v) {
    return M.intercepto + M.valor * v.valor + M.mes * v.mes + M.recorrente * v.recorrente +
      coef(M.produto, v.produto) + coef(M.fonte, v.fonte) + coef(M.sexo, v.sexo) +
      coef(M.formacao, v.formacao) + coef(M.dia, v.dia);
  }
  window.ltvPrever = prever;

  function brl(n) { return n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); }
  function el(tag, cls, txt) { var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }

  window.montarCalculadoraLTV = function (raiz) {
    raiz.innerHTML = '';
    var campos = {};
    var form = el('div', 'calc-form');

    function campo(chave, rotulo, controle, ajuda) {
      var w = el('label', 'calc-campo');
      w.appendChild(el('span', 'calc-rotulo', rotulo));
      w.appendChild(controle);
      if (ajuda) w.appendChild(el('span', 'calc-ajuda', ajuda));
      campos[chave] = controle;
      form.appendChild(w);
    }
    function lista(opcoes, padrao) {
      var s = el('select');
      opcoes.forEach(function (o) {
        var op = el('option', '', Array.isArray(o) ? o[1] : o); op.value = Array.isArray(o) ? o[0] : o;
        if (String(op.value) === String(padrao)) op.selected = true;
        s.appendChild(op);
      });
      return s;
    }
    var nomes = function (l) { return l.map(function (x) { return x[0]; }); };

    var num = el('input'); num.type = 'number'; num.min = '10'; num.max = '5988'; num.step = '1'; num.value = '500'; num.inputMode = 'decimal';
    campo('valor', 'Valor da 1ª compra (R$)', num, 'Na base, de R$ 10 a R$ 5.988');
    campo('mes', 'Mês da compra', lista(MESES.map(function (m, i) { return [i + 1, m]; }), 6));
    campo('recorrente', 'Primeira compra recorrente?', lista([[0, 'Não'], [1, 'Sim']], 0));
    campo('produto', 'Produto de entrada', lista(nomes(M.produto), 'Python'));
    campo('fonte', 'Estratégia de venda', lista(nomes(M.fonte), 'Lançamento'));
    campo('sexo', 'Sexo', lista(nomes(M.sexo), 'Masculino'));
    campo('formacao', 'Formação', lista(nomes(M.formacao), 'Superior Completo'));
    campo('dia', 'Dia da semana da compra', lista(nomes(M.dia), 'Terça'));

    var res = el('div', 'calc-res');
    res.setAttribute('aria-live', 'polite');
    var rot = el('span', 'calc-res-rotulo', 'LTV previsto');
    var val = el('strong', 'calc-res-valor');
    var faixa = el('span', 'calc-res-faixa');
    var nota = el('p', 'calc-nota', 'Estimativa na data da primeira compra, a partir de um modelo de Regressão Linear (R² = 0,848 no teste; erro médio de R$ 404). Serve de apoio à decisão de mídia e não promete o valor de um cliente específico.');
    res.appendChild(rot); res.appendChild(val); res.appendChild(faixa);

    function calcular() {
      var v = {
        valor: parseFloat(campos.valor.value), mes: +campos.mes.value, recorrente: +campos.recorrente.value,
        produto: campos.produto.value, fonte: campos.fonte.value, sexo: campos.sexo.value,
        formacao: campos.formacao.value, dia: campos.dia.value
      };
      if (!isFinite(v.valor) || v.valor < 0) { val.textContent = '—'; faixa.textContent = 'Informe o valor da 1ª compra.'; return; }
      var p = prever(v);
      val.textContent = brl(p);
      var fora = v.valor < 10 || v.valor > 5988;
      faixa.textContent = fora
        ? 'Valor fora da faixa da base (R$ 10 a R$ 5.988): a estimativa perde confiança.'
        : 'Faixa de referência: ' + brl(Math.max(0, p - 404)) + ' a ' + brl(p + 404) + ' (± erro médio do teste)';
    }
    Object.keys(campos).forEach(function (k) { campos[k].addEventListener('input', calcular); campos[k].addEventListener('change', calcular); });

    raiz.appendChild(form);
    var lado = el('div', 'calc-lado');
    lado.appendChild(res); lado.appendChild(nota);
    raiz.appendChild(lado);
    calcular();
  };
})();
