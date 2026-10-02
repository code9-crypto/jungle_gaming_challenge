import { Link, Outlet } from "@tanstack/react-router";
import LoginModal from "./modal_login_cadastrar/LoginModal";
import "./App.css";
import { useState } from "react";

export default function App() {

  const [ loginOpen, setLoginOpen ] = useState(false)

  return (
    <div className="pagina">
      <header className="topo">
        <div className="topo__linha">
          <div className="topo__marca">KURIO</div>

          <nav className="topo__nav">
            <Link to="/" className="nav__item" activeProps={{className: "nav__item nav__item--ativo"}}>Início</Link>
            <Link to="/routes/mercado" className="nav__item" activeProps={{className: "nav__item nav__item--ativo"}}>Mercado</Link>
            <Link to="/routes/criadores" className="nav__item" activeProps={{className: "nav__item nav__item--ativo"}}>Criadores</Link>
            <Link to="/routes/aprenda" className="nav__item" activeProps={{className: "nav__item nav__item--ativo"}}>Aprenda</Link>
          </nav>

          <div className="topo__acoes">
            <button className="icone" aria-label="Buscar">
              ⌕
            </button>

            <button
              className="icone icone--carrinho"
              aria-label="Carrinho"
            >
              🛒
              <span className="badge">0</span>
            </button>

            <button className="botao botao--primario" onClick={() => setLoginOpen(true)}>
              Entrar
            </button>

            <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)}></LoginModal>
          </div>
        </div>

        <div className="topo__linha-fina" />
      </header>

      {/* A página atual entra aqui */}
      <main>
        <Outlet />
      </main>

      <footer className="rodape">
        <div className="rodape__medalhoes">
          <div className="medalhao">
            <span className="medalhao__marca">W</span>
            <h4>Segurança da carteira</h4>
            <p>
              Proteja sua carteira e colecione arte digital
              verificada com confiança.
            </p>
          </div>

          <div className="medalhao">
            <span className="medalhao__marca">C</span>
            <h4>Criadores em destaque</h4>
            <p>
              Conheça artistas, estúdios e comunidades que
              moldam a cultura digital.
            </p>
          </div>

          <div className="medalhao">
            <span className="medalhao__marca">D</span>
            <h4>Alertas de lançamentos</h4>
            <p>
              Receba novidades sobre lançamentos e coleções.
            </p>
          </div>

          <div className="medalhao medalhao--newsletter">
            <h4>Antecipe-se ao próximo lançamento</h4>

            <form
              className="medalhao__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="digite seu e-mail..."
              />

              <button
                className="botao botao--primario"
                type="submit"
              >
                Enviar
              </button>
            </form>

            <p className="medalhao__nota">
              Receba lançamentos selecionados, histórias de
              criadores e recompensas de colecionador.
            </p>
          </div>
        </div>

        <div className="rodape__marca">
          <div className="rodape__marca-item">
            <span className="rodape__logo">KURIO</span>
          </div>

          <p>
            Construído para colecionadores, criadores e cultura
          </p>

          <span>contato@email.com</span>
          <span>+55 11 4002 8922</span>
        </div>

        <div className="rodape__grade">
          <div>
            <h4>Meu perfil</h4>
            <a href="#perfil">Meu perfil</a>
            <a href="#colecao">Minha coleção</a>
            <a href="#atividade">Atividade</a>
            <a href="#estudio">Estúdio do criador</a>
            <a href="#lista">Lista de observação</a>
          </div>

          <div>
            <h4>Central de ajuda</h4>
            <a href="#ajuda">Central de ajuda</a>
            <a href="#comprar">Como comprar NFTs</a>
            <a href="#seguranca">Carteira e segurança</a>
            <a href="#politica">Política do marketplace</a>
            <a href="#denuncia">Denunciar um problema</a>
          </div>

          <div>
            <h4>Coleções</h4>
            <a href="#arte">Arte Digital</a>
            <a href="#fotografia">Fotografia</a>
            <a href="#musica">Música</a>
            <a href="#3d">Arte 3D</a>
            <a href="#utilidade">Utilidade</a>
          </div>

          <div className="rodape__social">
            <h4>Redes sociais</h4>

            <div className="rodape__icones">
              <span className="icone-social" />
              <span className="icone-social" />
              <span className="icone-social" />
              <span className="icone-social" />
              <span className="icone-social" />
            </div>

            <h4>Carteiras compatíveis</h4>

            <div className="rodape__badge">
              Marcas de carteiras suportadas
            </div>
          </div>
        </div>

        <p className="rodape__copy">
          © 2026 Kurio. Propriedade digital para todos.
        </p>
      </footer>
    </div>
  );
}
