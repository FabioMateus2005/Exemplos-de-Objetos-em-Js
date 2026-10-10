// 'this' referencia o objeto atual
const carro = {
  marca: "Ford",
  modelo: "Fiesta",
  ano: 2020,
  cor: "Prata",
  velocidade: 0,
  mostrarVelocidade: function() {
    return "O carro está a " + this.velocidade + " km/h."
  }
}
console.log(carro.mostrarVelocidade());  


const pessoa = {
  nome: "João",
  idade: 30,
  cidade: "São Paulo",
  saudacao: function() {
    return "Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos."
  }
}
console.log(pessoa.saudacao());

const carro2 = {
  marca: "Fusca",
  modelo: "1970",
  ano: 1970,
  cor: "Azul",
  velocidade: function() {
    return "O carro está a " + this.velocidade + " km/h."
  }
}
console.log(carro2);

const ps5 = {
  nome: "PS5",
  preco: 5000,
  quantidade: 10,
  estoque: function() {
    return "O PS5 está em estoque."
  }
}
console.log(ps5);
console.log(ps5.estoque());

const xbox = {
  nome: "Xbox",
  preco: 4000,
  quantidade: 10,
  estoque: function() {
    return "O Xbox está em estoque."
  }
} 

console.log(xbox);
console.log(xbox.estoque());

const amplificador = {
  nome: "Amplificador",
  preco: 3000,
  quantidade: 20,
  estoque: function() {
    return "O Amplificador está em estoque."
  }
}

console.log(amplificador);
console.log(amplificador.estoque());

const smartphone = {
  nome: "Smartphone",
  preco: 2000,
  quantidade: 10,
  estoque: function() {
    return "O Smartphone está em estoque."
  }
}
console.log(smartphone);
console.log(smartphone.estoque());

const notebook = {
  nome: "Notebook",
  preco: 3000,
  quantidade: 10,
  estoque: function() {
    return "O Notebook está em estoque."
  }
}
console.log(notebook);
console.log(notebook.estoque());