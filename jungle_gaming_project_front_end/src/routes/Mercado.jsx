import React, { useState } from "react";
import "../styles/NFTDetails.css"
import macacoBeje from "../assets/macaco-beje.png"
import macacoVerde from "../assets/macaco-verde.png"
import macacoRoxo from "../assets/macaco-roxo.png"
import macacoFone from "../assets/macaco-fone.png"

const nftImages = [
  {macacoBeje},
  {macacoVerde},
  {macacoRoxo},
  {macacoFone}
];

const collection = [
  {
    name: "Cosmic Bloom",
    id: "#118",
    price: "1.29 ETH",
    image: "/assets/cosmic-bloom.png",
  },
  {
    name: "Violet Nomad",
    id: "#314",
    price: "1.39 ETH",
    image: "/assets/violet-nomad.png",
  },
  {
    name: "Ivory Baron",
    id: "#088",
    price: "1.79 ETH",
    image: "/assets/ivory-baron.png",
  },
  {
    name: "Golden Beat",
    id: "#207",
    price: "0.99 ETH",
    image: "/assets/golden-beat.png",
  },
  {
    name: "Golden Signal",
    id: "#160",
    price: "0.39 ETH",
    image: "/assets/golden-signal.png",
  },
];

export default function NFTHeader() {
  const [activeTab, setActiveTab] = useState("details");
  const [selectedImage, setSelectedImage] = useState(nftImages[0]);
  const [quantity, setQuantity] = useState(1);
  const [favorite, setFavorite] = useState(false);

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  return (
    <section className="nft-header">

      {/* Breadcrumb */}
      <div className="nft-breadcrumb">
        <span>Início</span>
        <span>/</span>
        <span>Mercado</span>
      </div>

      <div className="nft-header-content">

        {/* ========================= */}
        {/* GALERIA */}
        {/* ========================= */}

        <div className="nft-gallery">

          {/* Miniaturas */}
          <div className="nft-thumbnails">

            {nftImages.map((image, index) => (
              <button
                key={index}
                className={`nft-thumbnail ${
                  selectedImage === image && index === 0
                    ? "selected"
                    : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Visualização ${index + 1}`}
                />
              </button>
            ))}

          </div>

          {/* Imagem principal */}
          <div className="nft-main-image">

            <img
              src={selectedImage}
              alt="Emerald Ape #042"
            />

            <button className="nft-zoom">
              <span>⌕</span>
            </button>

          </div>

        </div>

        {/* ========================= */}
        {/* INFORMAÇÕES */}
        {/* ========================= */}

        <div className="nft-information">

          {/* Título */}
          <div className="nft-title">
            <h1>Emerald Ape #042</h1>
          </div>

          {/* Preço + avaliação */}
          <div className="nft-price-rating">

            <div className="nft-price">
              1.19 ETH
            </div>

            <div className="nft-rating">

              <span className="rating-stars">
                ★★★★★
              </span>

              <span className="rating-text">
                19 avaliações de colecionadores
              </span>

            </div>

          </div>

          <div className="nft-separator" />

          {/* Sobre */}
          <div className="nft-about">

            <h2>Sobre este NFT:</h2>

            <p>
              Um colecionável digital finalizado à mão da
              coleção Kurio Editions, verificado na Ethereum,
              com arte desbloqueável e acesso para
              colecionadores.
            </p>

          </div>

          {/* Edição */}
          <div className="nft-edition">

            <h2>Edição:</h2>

            <div className="edition-options">

              <span>1/1</span>

              <span>1/10</span>

              <span className="edition-highlight">
                1/50
              </span>

              <span className="edition-open">
                ABERTA
              </span>

            </div>

          </div>

          {/* Compra */}
          <div className="nft-purchase">

            {/* Quantidade */}
            <div className="quantity-control">

              <button
                onClick={decreaseQuantity}
                aria-label="Diminuir quantidade"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={increaseQuantity}
                aria-label="Aumentar quantidade"
              >
                +
              </button>

            </div>

            {/* Comprar */}
            <button className="buy-button">
              COMPRAR
            </button>

            {/* Favoritar */}
            <button
              className={`favorite-button ${
                favorite ? "favorite-active" : ""
              }`}
              onClick={() => setFavorite(!favorite)}
            >
              <span className="heart">
                {favorite ? "♥" : "♡"}
              </span>

              <span>
                Favoritar
              </span>
            </button>

          </div>

          {/* Metadados */}
          <div className="nft-metadata">

            <div>
              <span>ID do token:</span>
              <strong>#0042</strong>
            </div>

            <div>
              <span>Coleção:</span>
              <strong>Kurio Apes</strong>
            </div>

            <div>
              <span>Atributos:</span>
              <strong>
                Óculos, Esmeralda, Raro
              </strong>
            </div>

          </div>

          {/* Compartilhamento */}
          <div className="nft-share">

            <span>
              Compartilhar este NFT:
            </span>

            <button aria-label="LinkedIn">
              in
            </button>

            <button aria-label="Instagram">
              ◎
            </button>

            <button aria-label="Twitter">
              ♥
            </button>

          </div>

        </div>

      </div>

      {/* =====================================
          ABAS
      ====================================== */}

      <div className="nft-tabs">

        <button
          className={
            activeTab === "details"
              ? "nft-tab active"
              : "nft-tab"
          }
          onClick={() => setActiveTab("details")}
        >
          Detalhes do NFT
        </button>

        <button
          className={
            activeTab === "reviews"
              ? "nft-tab active"
              : "nft-tab"
          }
          onClick={() => setActiveTab("reviews")}
        >
          Avaliações de colecionadores (19)
        </button>

      </div>

      {/* =====================================
          CONTEÚDO
      ====================================== */}

      {activeTab === "details" && (
        <div className="nft-description">

          <p>
            Emerald Ape #042 é uma obra digital 1/50
            finalizada à mão da coleção Kurio Editions.
            Cada atributo fica armazenado nos metadados
            do token e verificado na Ethereum. A obra
            explora identidade, movimento e luz em um
            mundo digital sem fronteiras.
          </p>

          <p>
            A propriedade inclui a arte em alta resolução,
            lançamentos exclusivos para colecionadores e
            um registro permanente de procedência registrada
            na rede. Nova Sato recebe 5% de direitos
            autorais nas vendas secundárias, apoiando novos
            trabalhos e lançamentos da comunidade.
          </p>

          <div className="nft-info-block">

            <h3>Rede:</h3>

            <p>
              Cunhado na Ethereum com procedência imutável
              e metadados armazenados no IPFS.
            </p>

          </div>

          <div className="nft-info-block">

            <h3>Contrato:</h3>

            <p>
              Direitos autorais do criador: 5% nas vendas
              secundárias, pagos automaticamente pelos
              mercados compatíveis.
            </p>

          </div>

          <div className="nft-info-block">

            <h3>Direitos autorais:</h3>

            <p>
              0x7A42...19E8 · Contrato inteligente
              ERC-721 verificado.
            </p>

          </div>

        </div>
      )}

      {/* =====================================
          AVALIAÇÕES
      ====================================== */}

      {activeTab === "reviews" && (
        <div className="nft-reviews">

          <div className="review">

            <div className="review-header">

              <strong>
                Colecionador #184
              </strong>

              <span className="review-stars">
                ★★★★★
              </span>

            </div>

            <p>
              Excelente peça da coleção. A arte possui
              bastante qualidade e os detalhes são
              muito bem trabalhados.
            </p>

          </div>

          <div className="review">

            <div className="review-header">

              <strong>
                Colecionador #092
              </strong>

              <span className="review-stars">
                ★★★★★
              </span>

            </div>

            <p>
              Uma das peças mais interessantes da coleção.
            </p>

          </div>

          <div className="review">

            <div className="review-header">

              <strong>
                Colecionador #031
              </strong>

              <span className="review-stars">
                ★★★★☆
              </span>

            </div>

            <p>
              Gostei bastante da combinação de cores e
              dos atributos.
            </p>

          </div>

        </div>
      )}

      {/* =====================================
          MAIS DA COLEÇÃO
      ====================================== */}

      <div className="more-collection">

        <h2>
          Mais desta coleção
        </h2>

        <div className="collection-line" />

        <div className="collection-grid">

          {collection.map((item) => (

            <article
              className="collection-item"
              key={item.id}
            >

              <div className="collection-image">

                <img
                  src={item.image}
                  alt={item.name}
                />

              </div>

              <div className="collection-name">
                {item.name}{" "}
                <span>{item.id}</span>
              </div>

              <div className="collection-price">
                {item.price}
              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}