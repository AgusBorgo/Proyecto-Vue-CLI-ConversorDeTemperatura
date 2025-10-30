<template>
  <div class="container mt-4">
    <h2>{{ title }}</h2>
    <br>
    <div class="form-group">
        <label for="celcius"> Temperatura en Celcius</label>
        <input type="number"
        id="celsius"
        class="form-control"
        v.model.number="celsius"
        placeholder="Ingresar temperatura">
    </div>
    <br>
    <div class="class mt-4">
        <p>Temperatura en Fahrenheit</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiComponente',
  props: {
  },
  data() {
    return {
      title: 'Conversor de temperatura',
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