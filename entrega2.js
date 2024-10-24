function calcularValorImposto(valorUnitario, quantidade, imposto) {
    // Calcula o valor total dos impostos
    return valorUnitario * quantidade * (imposto / 100);
  }
  
  function calcularValorTotal(valorUnitario, quantidade, valorImposto) {
    // Calcula o valor total com impostos
    return valorUnitario * quantidade + valorImposto;
  }
  
  function calcularPrecoFinal(valorUnitario, quantidade, imposto) {
    // Calcula o valor do imposto e o valor total
    const valorImpostoTotal = calcularValorImposto(valorUnitario, quantidade, imposto);
    const precoFinal = calcularValorTotal(valorUnitario, quantidade, valorImpostoTotal);
  
    return precoFinal;
  }
  
  // Obtendo os dados do usuário
  const valorUnitario = parseFloat(prompt("Digite o valor unitário do produto:"));
  const quantidade = parseInt(prompt("Digite a quantidade de itens:"));
  const imposto = parseFloat(prompt("Digite o valor do imposto (em %):"));
  
  // Chamando a função principal e exibindo o resultado
  const precoFinal = calcularPrecoFinal(valorUnitario, quantidade, imposto);
  alert("O preço total com impostos é: R$" + precoFinal.toFixed(2));
