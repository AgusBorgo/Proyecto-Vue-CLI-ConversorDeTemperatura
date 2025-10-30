<template>
  <div class="container mt-4">
    <h2>{{ title }}</h2>
    <br>
    <div class="form-group">
        <label for="celcius"> Temperatura en Celcius</label>
        <input type="number"
        id="celsius"
        class="form-control"
        v-model.number="celsius"
        placeholder="Ingresar temperatura">
    </div>
    <br>
    <div class="class mt-4">
        <p>Temperatura en Fahrenheit: 
            <span v-if="mostrarResultado" :style="{color : colorTexto}">{{fahrenheit.toFixed(2) }}</span>
        </p>
        <br>
        <p>Temperatura en Kelvin: 
            <span v-if="mostrarResultado" :style="{color : colorTexto}">{{kelvin.toFixed(2) }}</span>
        </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'ConversorDeTemperatura',
  props: {
  },
  data() {
    return {
      title: 'Conversor de temperatura',
      celsius: null,
    };
  },
  computed: {
    // Propiedades computadas
    fahrenheit(){
        return (this.celsius * 1.8 + 32)
    },
    kelvin(){
        return this.celsius + 273.15
    },
    colorTexto(){
        if(this.celsius <= 0){
            return "blue"
        } else if (this.celsius > 0 && this.celsius < 15){
            return "magenta"
        } else {
            return "red"
        }
    },
    mostrarResultado() {
        return typeof this.celsius === 'number' && !isNaN(this.celsius);
    }

  },
  methods: {
    // Funciones y lógica
  },
  mounted() {
    // Código que se ejecuta al montar el componente
    
  }
};
</script>

<style scoped>
.container {
  padding: 1rem;
  font-family: sans-serif;
}
</style>