<template>
  <header class="header" x-data="{ isMenuOpen: false }">
    <nav class="nav">
      <!-- Logo y Título -->
      <a href="#" class="logo-container">
        <img src="@/assets/logo.jpg" alt="Logo" class="logo" />
        <h1 class="app-title">Aplicació JavaScript</h1>
      </a>

      <!-- Botón del menú para móvil -->
      <button
        class="menu-toggle"
        @click="isMenuOpen = !isMenuOpen; toggleMenu()"
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <!-- Menú de navegación -->
      <ul :class="{ 'nav-list': true, 'nav-list-mobile': isMenuOpen }">
        <li><router-link to="/">Inici</router-link></li>
        <li><router-link to="/calculator">Calculadora</router-link></li>
        <li><router-link to="/comments">Comentaris</router-link></li>
        <li><router-link to="/users">Usuaris</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  methods: {
    toggleMenu() {
      console.log('isMenuOpen:', this.$data.isMenuOpen);
    }
  },
};
</script>

<style scoped>
/* Estilos adaptados como antes */
.header {
  width: 100%;
  background-color: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  box-sizing: border-box;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-container {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.app-title {
  font-size: 1.5rem;
  margin: 0;
}

.menu-toggle {
  display: none;
  background: none;
  color: #fff;
  font-size: 1.5rem;
  border: none;
}

/* Estilos para la navegación */
.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin: 0 10px;
}

.nav-list li a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.nav-list li a:hover {
  color: yellow;
}

/* Estilos móviles */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-list {
    display: none; /* Ocultar lista por defecto */
  }

  .nav-list.nav-list-mobile {
    display: block; /* Mostrar lista cuando el menú está abierto */
    position: absolute;
    top: 60px; /* Ajusta según la altura de tu header */
    right: 0;
    background-color: #000;
    width: 100%;
    padding: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
    z-index: 1000;
  }

  .nav-list.nav-list-mobile li {
    margin: 10px 0;
    text-align: center;
  }

  .app-title {
    font-size: 1.2rem;
  }
}
</style>