class CalculadoraParcelas {
    constructor(valorEmprestimo, quantidadeParcelas, taxaJuros) {
      this.valorEmprestimo = valorEmprestimo;
      this.quantidadeParcelas = quantidadeParcelas;
      this.taxaJuros = taxaJuros / 100; // Converter taxa de juros para decimal
    }
  
    calcularParcelas() {
      let saldoDevedor = this.valorEmprestimo;
      const amortizacao = this.valorEmprestimo / this.quantidadeParcelas;
  
      for (let i = 1; i <= this.quantidadeParcelas; i++) {
        const juros = saldoDevedor * this.taxaJuros;
        const parcela = amortizacao + juros;
  
        console.log(`Parcela ${i}: R$ ${parcela.toFixed(2)}`);
        saldoDevedor -= amortizacao;
      }
    }
  }
  
  // Criar uma instância do objeto e chamar o método calcularParcelas
  const calculadora = new CalculadoraParcelas(
    parseFloat(prompt("Digite o valor do empréstimo:")),
    parseInt(prompt("Digite a quantidade de parcelas:")),
    parseFloat(prompt("Digite a taxa de juros ao mês (%):"))
  );
  
  calculadora.calcularParcelas();