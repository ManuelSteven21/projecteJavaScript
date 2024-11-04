<template>
  <div class="comments-page">
    <h1 class="title">User Comments</h1>
    <div v-if="loading" class="loading">Loading comments...</div>
    <div v-else class="comments-container">
      <div v-for="comment in comments" :key="comment.id" class="comment-card">
        <h3 class="comment-name">{{ comment.name }}</h3>
        <p class="comment-body">{{ comment.body }}</p>
        <p class="comment-email">- {{ comment.email }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      comments: [],
      loading: true, // Estado de carga inicial
    };
  },
  async created() {
    await this.fetchComments(); // Llama al método para cargar comentarios
  },
  methods: {
    async fetchComments() {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments");
        if (!response.ok) throw new Error("Error fetching comments");
        this.comments = await response.json();
      } catch (error) {
        console.error("Error al cargar los comentarios:", error);
      } finally {
        this.loading = false; // Cambia el estado de carga al finalizar
      }
    },
  },
};
</script>

<style scoped>
.comments-page {
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

.comments-container {
  display: flex;
  flex-direction: column;
  width: 100%; /* Ancho completo para flexibilidad */
  max-width: 600px; /* Controla el ancho del contenedor */
  gap: 10px; /* Espacio entre tarjetas */
  background-color: rgba(0, 0, 0, 0.8); /* Fondo semitransparente para el contenedor de comentarios */
  padding: 30px; /* Padding interno del contenedor */
  border-radius: 10px; /* Bordes redondeados */
}

.comment-card {
  background-color: rgba(51, 51, 51, 0.9); /* Fondo de cada tarjeta */
  padding: 12px; /* Espacio interior de las tarjetas */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  color: #ffffff;
  transition: transform 0.3s; /* Transición para hover */
}

.comment-card:hover {
  transform: translateY(-2px); /* Efecto de hover */
}

.comment-name {
  font-size: 1.2rem; /* Tamaño del nombre */
  font-weight: bold;
  color: #ffffff;
}

.comment-body {
  margin: 10px 0; /* Espacio entre cuerpo y nombre */
  color: #dddddd;
}

.comment-email {
  font-size: 0.9rem;
  color: #bbbbbb;
  text-align: right;
}

/* Media queries para hacer responsive */
@media (max-width: 768px) {
  .title {
    font-size: 2rem; /* Tamaño del título en pantallas más pequeñas */
  }

  .loading {
    font-size: 1rem; /* Ajustar tamaño de carga */
  }

  .comment-card {
    padding: 10px; /* Reducir padding de las tarjetas */
  }

  .comment-name {
    font-size: 1rem; /* Ajustar tamaño del nombre */
  }

  .comment-body {
    font-size: 0.9rem; /* Ajustar tamaño del cuerpo del comentario */
  }

  .comment-email {
    font-size: 0.8rem; /* Ajustar tamaño del email */
  }
}

@media (max-width: 480px) {
  .comments-page {
    padding: 10px; /* Reduce padding del contenedor principal en móviles pequeños */
  }

  .title {
    font-size: 1.5rem; /* Tamaño más pequeño para el título */
  }

  .loading {
    font-size: 0.9rem; /* Ajustar tamaño de la carga */
  }

  .comment-card {
    padding: 8px; /* Ajustar padding en móviles más pequeños */
  }
}
</style>
