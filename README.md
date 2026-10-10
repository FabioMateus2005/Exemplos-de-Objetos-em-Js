# Objetos em JavaScript

Este projeto é um exercício dos **Fundamentos do JavaScript**. O arquivo `objetos.js` mostra como criar objetos literais, guardar dados em **propriedades** e definir **métodos** (funções dentro do objeto).

## Como executar

No terminal, na pasta deste projeto:

```bash
node objetos.js
```

Os `console.log` imprimem o objeto (ou o texto que o método devolve).

## O que é um objeto?

Um objeto agrupa informações relacionadas numa só variável. Em vez de várias variáveis soltas (`nome`, `preco`, `quantidade`), você guarda tudo junto:

```js
const notebook = {
  nome: "Notebook",
  preco: 3000,
  quantidade: 10
}
```

- **Propriedade**: um dado do objeto (`nome`, `preco`, `quantidade`).
- **Método**: uma função que pertence ao objeto (`estoque()`, `saudacao()`).
- **Acesso**: use ponto, por exemplo `notebook.preco` ou `notebook.estoque()`.

## A palavra `this`

`this` aponta para **o objeto em que o método está rodando**.

No primeiro exemplo, `this.velocidade` é a velocidade **daquele** `carro`, não de outro objeto. Sem `this`, o JavaScript procuraria uma variável `velocidade` fora do objeto e não acharia.

```js
mostrarVelocidade: function() {
  return "O carro está a " + this.velocidade + " km/h."
}
```

## Os exemplos do arquivo

### 1. `carro` — propriedades + método com `this`

Objeto com `marca`, `modelo`, `ano`, `cor` e `velocidade` (número `0`).

O método `mostrarVelocidade()` usa `this.velocidade` e devolve a frase:

> O carro está a 0 km/h.

É o exemplo mais completo: dados + comportamento que lê esses dados.

### 2. `pessoa` — método que junta várias propriedades

`nome`, `idade` e `cidade` descrevem a pessoa. `saudacao()` usa `this.nome` e `this.idade` para montar a apresentação:

> Olá, meu nome é João e eu tenho 30 anos.

A propriedade `cidade` existe no objeto, mas ainda não é usada no método.

### 3. `carro2` — atenção ao nome da propriedade

Aqui `velocidade` **é uma função**, não um número. Por isso `console.log(carro2)` mostra o objeto inteiro (incluindo a função), e não uma frase de velocidade.

Se você chamasse `carro2.velocidade()`, o `this.velocidade` dentro do método seria a **própria função**, não um valor em km/h. Compare com o primeiro `carro`, em que `velocidade` é o número `0` e o método tem outro nome (`mostrarVelocidade`).

### 4. Produtos em estoque (`ps5`, `xbox`, `amplificador`, `smartphone`, `notebook`)

Todos seguem o mesmo padrão de um item de loja:

| Propriedade   | Significado              |
|---------------|--------------------------|
| `nome`        | nome do produto          |
| `preco`       | preço                    |
| `quantidade`  | unidades disponíveis     |
| `estoque()`   | método que confirma estoque |

Para cada um, o código:

1. Imprime o objeto (`console.log(ps5)`).
2. Chama o método (`console.log(ps5.estoque())`), que devolve uma frase fixa, por exemplo: `O PS5 está em estoque.`

Os valores mudam (preço, quantidade, texto do método); a **estrutura** é a mesma. Isso mostra que objetos são um molde reutilizável para coisas parecidas.

## Resumo

| Conceito        | Neste arquivo                                      |
|-----------------|----------------------------------------------------|
| Objeto literal  | `{ chave: valor }`                                 |
| Propriedade     | `marca`, `nome`, `preco`, etc.                     |
| Método          | `mostrarVelocidade`, `saudacao`, `estoque`         |
| `this`          | acessa dados do próprio objeto                     |
| `console.log`   | mostra o objeto ou o retorno do método             |

Próximos passos naturais: usar `this.quantidade` dentro de `estoque()`, criar um método `vender()` que diminui a quantidade, ou uma função construtora / classe para não repetir o mesmo formato em cada produto.
