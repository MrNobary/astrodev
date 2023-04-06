import React from "react";
import styled from "styled-components";
import './index.css'

import { PacotesDeViagem } from "./Pacotes";

import { Filtros } from "./components/Filtros/Filtro";
import { Gallery } from "./components/Produtos/Gallery";
import { Card } from "./components/Produtos/Cards";
import { Carrinho } from "./components/Carrinho/Carrinho";
import { Header } from "./components/Header/Header";
import { Headline } from "./components/Headline/Headline";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-DarkBlue);
  height: 100%;
`


class App extends React.Component {

  state = {
    valorMin: 20,
    valorMax: 50000,
    valorSearch: "",

    ordenacao: 'Crescente',

    carrinho: [],
    valorTotal: 0,

  }

  onChangeFmin = (e) => {
    this.setState({
      valorMin: e.target.value,
    })
  }

  onChangeFmax = (e) => {
    this.setState({
      valorMax: e.target.value,
    })
  }

  onChangeFsearch = (e) => {
    this.setState({
      valorSearch: e.target.value,
    })
  }

  ordenarProdutos = (e) => {
    this.setState({ordenacao: e.target.value,})
  }

  filtrarPacotes = () => {
    const pacotesFiltradosMin = PacotesDeViagem.filter((produto) => {
      if (this.state.valorMin) {
        return produto.price >= this.state.valorMin;
      }else{
        return produto
      }
    });

    const pacotesFiltradosMax = pacotesFiltradosMin.filter((produto) => {
      if (this.state.valorMax) {
        return produto.price <= this.state.valorMax;
      }else{
        return produto
      }
    });

    const pacotesFiltrados = pacotesFiltradosMax.filter((produto) => {
      return produto.planet.includes(this.state.valorSearch);
    });

    return pacotesFiltrados;
  };
  
  adicionarNoPacote = (produto) => {
    const pacotesDoCarrinho = this.state.carrinho.filter((item) => {
      if(item.id === produto.id) {
        return item;
      } else {
        return false
      }
    })

    if (pacotesDoCarrinho.length === 0) {
      produto.quantidade = 1;
      const novoCarrinho = [produto, ...this.state.carrinho];
      this.setState({
        carrinho: novoCarrinho,
      })
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (produto.id === item.id) {
          return {...item, quantidade: item.quantidade + 1}
        } else {
          return item;
        }
      })

      this.setState({
        carrinho: novoCarrinho,
      })
    }
    this.adicionarValorTotal(produto.price)
  }

  removerDoCarrinho = (itemParaRemover) => {
    if (itemParaRemover.quantidade === 1) {
      const novoCarrinho = this.state.carrinho.filter((item) => {
        if(item.id !== itemParaRemover.id) {
          return item;
        } else {
          return false;
        }
      })
      this.setState({carrinho: novoCarrinho})
    } else {
      const novoCarrinho = this.state.carrinho.map((item) => {
        if (itemParaRemover.id === item.id && item.quantidade >= 1) {
          return {...item, quantidade: item.quantidade - 1};
        } else {
          return item;
        }
      })
      this.setState({
        carrinho: novoCarrinho,
      })
    }
    this.removerValorTotal(itemParaRemover.price)
  }

  adicionarValorTotal = (valor) => {
    this.setState({
      valorTotal: this.state.valorTotal + valor
    })
  }

  removerValorTotal = (valor) => {
    this.setState({
      valorTotal: this.state.valorTotal - valor
    })
  }

  render() {

    const pacotesView = this.filtrarPacotes();

    return (
      <Body>
        <Header />
        <Headline />
        <Filtros 
        minimo={this.state.valorMin}
        onChangeFiltroMin={this.onChangeFmin}

        maximo={this.state.valorMax}
        onChangeFiltroMax={this.onChangeFmax}

        search={this.state.valorSearch}
        onChangeSearch={this.onChangeFsearch}
        />

        <Gallery 
        quantidade={pacotesView.length}
        onChangeOrder={this.ordenarProdutos}
        produtos={pacotesView}
        ordenacao={this.state.ordenacao}
        onClick={this.adicionarNoPacote}
        />

        <Carrinho 
        valorTotal={this.state.valorTotal}
        pacotesDoCarrinho={this.state.carrinho}
        removerDoCarrinho={this.removerDoCarrinho}
        />
      </Body>
    );
  }
  }

export default App;
