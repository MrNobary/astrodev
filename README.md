landingPages
# Astrodev

Projeto fornecido pelo curso de Programação Fullstack [Labenu](https://www.labenu.com.br/);  
A ideia original era que o projeto fosse um e-commerce de itens ligados ao espaço, mas  
alguma coisa aconteceu durante o processo, me perdi e quando me achei já estava fazendo  
um site de viagens interplanetarias.

## Astrodev
  Aqui você pode montar um pacote de viagem entre os planetas e astros do nosso sistema solar. Escolha todos os pontos que gostaria de visitar e espere suas passagens chegarem.

* Experimente o site aqui [Astrodev](http://terrific-fight.surge.sh/)
### Tecnologias utilizadas
<div align="center">
  <img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

## Etapas do processo
### Criação simplista do layout do site

![Figma](https://user-images.githubusercontent.com/77870818/230367618-5e7d01c6-5adc-477c-9b98-97e12547d0af.png)

### Separar o projeto em partes
Nessa etapa visualizei cada parte do projeto como um componente a parte para facilitar no fluxo de criação

### Construção e Implementação do Filtro
Aqui estruturei a área de filtro do site e suas funções.
* O usuario pode filtrar por valores mínimos e maximos
* E também pode pesquisar pelo nome do planeta
Criei um arquivo proprio apenas para armazenar o array de planetas.

![Produtos](https://user-images.githubusercontent.com/77870818/230367613-c294bdfd-1985-47ec-ab01-f4840573b854.png)

### Produtos e Lista de Produtos
Aqui apresento ao usuario uma lista de planetas disponiveis para acrescentar no seu pacote de voo, caso queira também tem como ordenar o site por ordem crescente e decrescente de preço.
Cada dado de planeta apresenta uma id, o nome do planeta, o preço da passagem e a imagem do mesmo.

### Carrinho
Agora precisava de um local onde pudesse visualizar os planetas selecionados e manusear os dados.
Aqui o usuario visualiza todo o pacote de viagens selecionado e pode remover caso sinta que exagerou.

![Carrinho](https://user-images.githubusercontent.com/77870818/230367617-7ae65fd8-ee6f-4f64-9d50-7786e5d6bc9a.png)

### União

Agora com todos os componentes criados e preparados, precisamos montar o site em um só arquivo (no caso o App.js). Onde também se origina várias props de informações que passeiam pelos componentes trazendo funcionalidade a empresa.
Após restruturar todas as props e implementar um arquivo ao outro, o site está quase completo. Ainda faltava uma estilização básica para trazer a aparencia de site funcional. Aqui estruturei a Navbar e a Headline do site, apenas por questões de beleza mesmo.

![Site inteiro](https://user-images.githubusercontent.com/77870818/230367620-67784e05-7e43-4dfa-bdf6-981b34c5618a.png)

_Não que seja um exemplo de beleza, mas pelo menos aprendi o comportamento de várias funcionalidades e treinei minha organização de arquivos_

*Ainda falta implementar a responsividade*
