<template>
  <div class="home-page">
    <div class="content-container">
      <h1 class="title">Benvinguts a l'Aplicació JavaScript</h1>
      <p class="description">Aquí pots trobar diverses eines útils:</p>
      <div class="features">
        <div class="feature-card">
          <h2>Calculadora</h2>
          <p>Realitza operacions matemàtiques de manera senzilla i ràpida.</p>
          <router-link to="/calculator" class="feature-link">Prova la Calculadora</router-link>
        </div>
        <div class="feature-card">
          <h2>Comentaris</h2>
          <p>Consulta els comentaris d'usuari i comparteix les teves opinions.</p>
          <router-link to="/comments" class="feature-link">Veure Comentaris</router-link>
        </div>
        <div class="feature-card">
          <h2>Usuaris</h2>
          <p>Explora la llista d'usuaris amb informació detallada.</p>
          <router-link to="/users" class="feature-link">Veure Usuaris</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 2%; /* Mantener un poco de espacio en los lados */
}

.content-container {
  background-color: rgba(0, 0, 0, 0.795);
  color: #ffffff;
  border-radius: 8px;
  padding: 30px;
  width: 100%;
  max-width: 800px;
  margin: 20px auto; /* Ajustar el margen para que sea más pequeño */
}

.title {
  font-size: 2rem;
  margin-bottom: 15px;
  text-align: center;
}

.description {
  font-size: 1.2rem; /* Aumentar el tamaño del texto de la descripción */
  margin-bottom: 20px;
  text-align: center;
}

.features {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.feature-card {
  background-color: #444444;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 90%;
  text-align: center;
  transition: transform 0.2s; /* Añadir efecto al pasar el ratón */
}

.feature-card:hover {
  transform: scale(1.02); /* Efecto de zoom al pasar el ratón */
}

.feature-card h2 {
  font-size: 1.5rem;
  margin: 0;
}

.feature-card p {
  color: #bbbbbb;
  font-size: 0.9rem;
}

.feature-link {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #ffffff;
  color: #000000;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  max-width: 80%;
}

.feature-link:hover {
  background-color: #cccccc;
}

/* Media queries para ajustar en pantallas más pequeñas */
@media (max-width: 768px) {
  .home-page {
    padding: 0 1%; /* Reduce el padding lateral en pantallas medianas */
  }
  .content-container {
    padding: 20px; /* Ajusta el padding interno */
    margin: 10px auto; /* Reduce el margen en pantallas medianas */
  }
  .title {
    font-size: 1.8rem;
  }
  .description {
    font-size: 1rem; /* Tamaño ajustado para pantallas medianas */
  }
  .feature-card h2 {
    font-size: 1.3rem;
  }
  .feature-card p {
    font-size: 0.8rem;
  }
}

@media (max-width: 480px) {
  .home-page {
    padding: 0 2%; /* Espacio lateral pequeño en móviles */
  }
  .content-container {
    padding: 15px; /* Menor padding para móviles */
    margin: 5px auto; /* Menor margen para móviles */
  }
  .title {
    font-size: 1.5rem; /* Ajusta el título para móviles */
  }
  .description {
    font-size: 0.8rem; /* Ajusta la descripción para móviles */
  }
  .features {
    flex-direction: column; /* Mantiene el diseño en columna */
  }
  .feature-card {
    padding: 10px; /* Reduce el padding para móviles */
  }
  .feature-card h2 {
    font-size: 1.2rem; /* Ajusta el tamaño de los títulos en móviles */
  }
  .feature-card p {
    font-size: 0.75rem; /* Ajusta el tamaño del texto en móviles */
  }
}
</style>