<template>
  <div class="users-page">
    <h1 class="title">Usuarios</h1>
    <div v-if="loading" class="loading">Cargando usuarios...</div>
    <div v-else class="users-container">
      <div v-for="user in users" :key="user.id" class="user-card">
        <h3 class="user-name">{{ user.firstName }} {{ user.lastName }}</h3>
        <p class="user-email">Email: {{ user.email }}</p>
        <p class="user-age">Edad: {{ user.age }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      loading: true,
    };
  },
  async created() {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      this.users = response.data.users; // Asegúrate de que `users` es la propiedad correcta
    } catch (error) {
      console.error("Error al cargar los usuarios:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

<style scoped>
.users-page {
  padding: 20px;
  color: #ffffff;
  min-height: 100vh; /* Mantiene el contenedor principal a la altura de la vista */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 20px;
  text-align: center;
}

.loading {
  font-size: 1.2rem;
  color: #ffffff;
}

.users-container {
  display: flex;
  flex-direction: column;
  width: 100%; /* Ancho completo para flexibilidad */
  max-width: 600px; /* Controla el ancho del contenedor */
  gap: 10px; /* Espacio entre tarjetas */
  background-color: rgba(0, 0, 0, 0.8); /* Fondo semitransparente para el contenedor de usuarios */
  padding: 30px; /* Padding interno del contenedor */
  border-radius: 10px; /* Bordes redondeados */
}

.user-card {
  background-color: rgba(51, 51, 51, 0.9); /* Fondo de cada tarjeta */
  padding: 12px; /* Espacio interior de las tarjetas */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  color: #ffffff;
  transition: transform 0.3s; /* Transición para hover */
}

.user-card:hover {
  transform: translateY(-2px); /* Efecto de hover */
}

.user-name {
  font-size: 1.2rem; /* Tamaño del nombre */
  font-weight: bold;
  color: #ffffff;
}

.user-email,
.user-age {
  margin: 5px 0; /* Espacio reducido entre el email y la edad */
  color: #dddddd;
  font-size: 0.9rem; /* Tamaño de fuente ajustado */
}

/* Media queries para hacer responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2rem; /* Tamaño del título en pantallas más pequeñas */
  }

  .loading {
    font-size: 1rem; /* Ajustar tamaño de carga */
  }

  .user-card {
    padding: 10px; /* Reducir padding de las tarjetas */
  }

  .user-name {
    font-size: 1rem; /* Ajustar tamaño del nombre */
  }

  .user-email,
  .user-age {
    font-size: 0.8rem; /* Tamaño de email y edad ajustado */
  }
}

@media (max-width: 480px) {
  .users-page {
    padding: 10px; /* Reducir padding del contenedor principal */
  }

  .title {
    font-size: 1.5rem; /* Ajustar tamaño del título para móviles pequeños */
  }

  .loading {
    font-size: 0.9rem; /* Ajustar tamaño de la carga */
  }

  .user-card {
    padding: 8px; /* Reducir padding en móviles más pequeños */
  }
}
</style>
