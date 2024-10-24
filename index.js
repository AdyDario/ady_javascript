function calcularParcelasDecrescentes() {
    // Solicitar os dados do usuário
    const valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo:"));
    const quantidadeParcelas = parseInt(prompt("Digite a quantidade de parcelas:"));
    const taxaJuros = parseFloat(prompt("Digite a taxa de juros ao mês (%):"));
  
    // Calcular a amortização (valor a ser pago do principal a cada parcela)
    const amortizacao = valorEmprestimo / quantidadeParcelas;
  
    // Converter a taxa de juros para decimal
    const taxaJurosDecimal = taxaJuros / 100;
  
    let saldoDevedor = valorEmprestimo;
  
    // Loop para calcular e exibir as parcelas
    for (let i = 1; i <= quantidadeParcelas; i++) {
      // Calcular os juros sobre o saldo devedor
      const juros = saldoDevedor * taxaJurosDecimal;
  
      // Calcular o valor da parcela
      const parcela = amortizacao + juros;
  
      // Exibir a parcela no console
      console.log(`Parcela ${i}: R$ ${parcela.toFixed(2)}`);
  
      // Atualizar o saldo devedor
      saldoDevedor -= amortizacao;
    }
  }
  
  // Chamar a função para iniciar o cálculo
  calcularParcelasDecrescentes();
