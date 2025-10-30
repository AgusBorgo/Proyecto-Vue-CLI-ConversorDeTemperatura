<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <!-- Acá va tu UI: formularios, tablas, botones, etc. -->
  </div>
</template>

<script>
export default {
  name: 'MiComponente',
  props: {
    // Props si necesitás recibir datos desde el padre
  },
  data() {
    return {
      title: 'Hola Vue!',
      // Variables reactivas
    };
  },
  computed: {
    // Propiedades computadas
  },
  methods: {
    // Funciones y lógica
    saludar() {
      console.log('¡Hola desde Vue!');
    }
  },
  mounted() {
    // Código que se ejecuta al montar el componente
    this.saludar();
  }
};
</script>

<style scoped>
.container {
  padding: 1rem;
  font-family: sans-serif;
}
</style>