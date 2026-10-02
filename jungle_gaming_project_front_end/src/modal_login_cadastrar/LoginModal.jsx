import React, { useState } from "react";
import "./LoginModal.css";

export default function LoginModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  if (!isOpen) {
    return null;
  }

  return (
    <div className="login-overlay" onClick={onClose}>
      <div
        className="login-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão fechar */}
        <button className="login-close" onClick={onClose}>
          ×
        </button>

        {/* Abas */}
        <div className="login-tabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Entrar
          </button>

          <span>|</span>

          <button
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            Criar conta
          </button>
        </div>

        {activeTab === "login" ? (
          <>
            {/* Descrição */}
            <p className="login-description">
              Entre para gerenciar sua carteira, coleção e perfil
              <br />
              de criador.
            </p>

            {/* Formulário */}
            <form className="login-form">
              {/* Email */}
              <input
                type="email"
                placeholder="contato@email.com"
              />

              {/* Senha */}
              <div className="password-container">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="************"
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "◉" : "◉̸"}
                </button>
              </div>

              {/* Esqueci a senha */}
              <button
                type="button"
                className="forgot-password"
              >
                Esqueceu a senha?
              </button>

              {/* Entrar */}
              <button type="submit" className="login-button">
                Entrar
              </button>
            </form>

            {/* Separador */}
            <div className="login-divider">
              <span></span>
              <p>Ou continue com</p>
              <span></span>
            </div>

            {/* Google */}
            <button className="social-button">
              <span className="google-icon">G</span>
              <span>Continuar com Google</span>
            </button>

            {/* Facebook */}
            <button className="social-button">
              <span className="facebook-icon">f</span>
              <span>Continuar com Facebook</span>
            </button>
          </>
        ) : (
          <div className="register-content">
            <p className="login-description">
              Crie sua conta para gerenciar sua carteira,
              <br />
              coleção e perfil de criador.
            </p>

            <input
              className="register-input"
              type="text"
              placeholder="Nome"
            />

            <input
              className="register-input"
              type="email"
              placeholder="contato@email.com"
            />

            <input
              className="register-input"
              type="password"
              placeholder="Senha"
            />

            <button className="login-button">
              Criar conta
            </button>
          </div>
        )}
      </div>
    </div>
  );
}