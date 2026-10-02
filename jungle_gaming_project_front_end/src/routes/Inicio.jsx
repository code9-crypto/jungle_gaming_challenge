import React, { useState } from "react";
import "../App.css";
import macacoBeje from "../assets/macaco-beje.png";
import macacoRoxo from "../assets/macaco-roxo.png";
import macacoVerde from "../assets/macaco-verde.png";
import macacoFone from "../assets/macaco-fone.png";
import { Link, Outlet } from "@tanstack/react-router";

const AVATARES = [macacoBeje, macacoRoxo, macacoVerde, macacoFone];

const COLECOES = [
  { nome: "Arte Digital", total: 33 },
  { nome: "Fotografia", total: 12 },
  { nome: "Música", total: 65 },
  { nome: "Arte 3D", total: 39 },
  { nome: "Colecionáveis", total: 23 },
  { nome: "Generativa", total: 17 },
  { nome: "Jogos", total: 19 },
  { nome: "Assinaturas", total: 13 },
];

const REDES = [
  { nome: "Ethereum", total: 119 },
  { nome: "Polygon", total: 78 },
  { nome: "Solana", total: 86 },
];

const ITENS = [
  { id: "042", nome: "Emerald Ape", preco: "1.19", avatar: 0 },
  { id: "009", nome: "Sage Nomad", preco: "1.69", avatar: 1 },
  { id: "552", nome: "Neon Vessel", preco: "1.99", precoAntigo: "2.29", avatar: 2 },
  { id: "118", nome: "Cosmic Bloom", preco: "1.29", avatar: 3 },
  { id: "314", nome: "Violet Nomad", preco: "1.39", avatar: 0 },
  { id: "088", nome: "Ivory Baron", preco: "1.79", avatar: 1 },
  { id: "207", nome: "Golden Beat", preco: "0.99", avatar: 2 },
  { id: "275", nome: "Lunar Drift", preco: "1.09", avatar: 3 },
  { id: "160", nome: "Golden Signal", preco: "0.39", avatar: 0 },
];

const DIARIO = [
  {
    data: "12 de setembro · Leitura de 6 min",
    titulo: "Como funciona a propriedade de NFTs",
    texto: "Aprenda a colecionar, negociar e verificar ativos digitais.",
  },
  {
    data: "13 de setembro · Leitura de 2 min",
    titulo: "10 artistas digitais para acompanhar",
    texto: "Conheça criadores que moldam a cultura digital.",
  },
  {
    data: "15 de setembro · Leitura de 3 min",
    titulo: "Raridade, atributos e procedência",
    texto: "Entenda raridade, procedência, direitos autorais e utilidade.",
  },
  {
    data: "15 de setembro · Leitura de 2 min",
    titulo: "Como proteger sua carteira",
    texto: "Proteja sua carteira, seus ativos e sua identidade.",
  },
];

function Avatar({ id, src, className = "" }) {
  return (
    <div className={`avatar ${className}`}>
      <img src={src} alt={`NFT #${id}`} />
      <span className="avatar__id">#{id}</span>
    </div>
  );
}

export default function App() {
  const [pagina, setPagina] = useState(1);

  return (
    
    <div>
      <section className="hero">
        <div className="hero__conteudo">
          <div className="hero__texto">
            <p className="hero__boasvindas">Bem-vindo à Kurio</p>
            <h1>Seja dono do futuro<br />da arte digital</h1>
            <p className="hero__sub">
              Descubra NFTs selecionados de criadores emergentes e consagrados.
              Colecione peças digitais raras com autenticidade garantida.
            </p>
            <div className="hero__cta">
              <button className="botao botao--primario">Explorar</button>
            </div>
            <div className="hero__pontos">
              <span /><span /><span />
            </div>
          </div>
          <div className="hero__visual">
            <Avatar id="482" src={macacoBeje} className="hero__avatar" />
          </div>
        </div>
      </section>

      <div className="corpo">
        <aside className="lateral">
          <div className="painel">
            <div className="filtro">
              <h3 className="filtro__titulo">Coleções</h3>
              <ul className="filtro__lista">
                {COLECOES.map((item) => (
                  <li key={item.nome}>
                    <label className="filtro__item">
                      <span>{item.nome}</span>
                      <span className="filtro__contagem">({item.total})</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div className="filtro">
              <h3 className="filtro__titulo">Faixa de preço</h3>
              <input type="range" min="0" max="15" step="0.1" defaultValue="6" />
              <p className="filtro__faixa">Preço: 0,02 – 12,30 ETH</p>
              <button className="botao botao--primario botao--largo">Aplicar</button>
            </div>

            <div className="filtro">
              <h3 className="filtro__titulo">Rede</h3>
              <ul className="filtro__lista">
                {REDES.map((item) => (
                  <li key={item.nome}>
                    <label className="filtro__item">
                      <span>{item.nome}</span>
                      <span className="filtro__contagem">({item.total})</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="destaque">
            <h4 className="destaque__titulo">NFT EM DESTAQUE</h4>
            <p className="destaque__etiqueta">OFERTA LIMITADA</p>
            <Avatar id="027" src={macacoFone} className="destaque__avatar" />
          </div>
        </aside>

        <main className="principal">
          <div className="principal__cabecalho">
            <div className="abas">
              <button className="abas__item abas__item--ativo">Todos os NFTs</button>
              <button className="abas__item">Novos lançamentos</button>
              <button className="abas__item">Em alta</button>
            </div>
            <label className="ordenar">
              Ordenar por:
              <select defaultValue="recentes">
                <option value="recentes">Listados recentemente</option>
                <option value="menor-preco">Menor preço</option>
                <option value="maior-preco">Maior preço</option>
              </select>
            </label>
          </div>

          <div className="grade">
            {ITENS.map((item) => (
              <article className="cartao" key={item.id}>
                <Avatar id={item.id} src={AVATARES[item.avatar]} />
                <div className="cartao__info">
                  <h4>{item.nome} #{item.id}</h4>
                  <div className="cartao__precos">
                    <span className="cartao__preco">{item.preco} ETH</span>
                    {item.precoAntigo && (
                      <span className="cartao__preco-antigo">{item.precoAntigo} ETH</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="paginacao">
            {[1, 2, 3, 4].map((n) => (
              <button
                key={n}
                className={`paginacao__item ${n === pagina ? "ativo" : ""}`}
                onClick={() => setPagina(n)}
              >
                {n}
              </button>
            ))}
            <button className="paginacao__item" onClick={() => setPagina(pagina + 1)}>›</button>
          </div>

          <div className="promos">
            <div className="promo">
              <Avatar id="g1" src={macacoRoxo} className="promo__avatar" />
              <div className="promo__texto">
                <h3>Lançamentos genesis de edição limitada</h3>
                <p>Colecione edições escassas diretamente dos criadores antes da revelação pública.</p>
                <button className="botao botao--primario">Explorar</button>
              </div>
            </div>
            <div className="promo">
              <Avatar id="g2" src={macacoVerde} className="promo__avatar" />
              <div className="promo__texto">
                <h3>Arte digital selecionada e muito mais</h3>
                <p>Explore novos artistas, coleções verificadas e obras digitais que definem a cultura.</p>
                <button className="botao botao--primario">Explorar</button>
              </div>
            </div>
          </div>

          <section className="diario">
            <h2>Diário da Cunhagem</h2>
            <p className="diario__sub">Histórias, guias e insights para colecionadores sobre o universo da propriedade digital.</p>
            <div className="diario__grade">
              {DIARIO.map((post) => (
                <article className="diario__item" key={post.titulo}>
                  <div className="diario__imagem" />
                  <div className="diario__conteudo">
                    <p className="diario__meta">{post.data}</p>
                    <h4>{post.titulo}</h4>
                    <p className="diario__texto">{post.texto}</p>
                    <a href="#" className="diario__link">Ler mais →</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
      
  );
}
