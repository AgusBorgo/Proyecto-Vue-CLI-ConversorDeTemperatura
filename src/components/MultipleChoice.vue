<template>
  <section class="card">
    <h2>Resultados del Multiple Choice</h2>
    <table class="table table-bordered tabla-personalizada">
      <thead>
        <tr>
          <th>#</th>
          <th>Pregunta</th>
          <th>Respuesta elegida</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(respuesta, index) in respuestas" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ respuesta.pregunta }}</td>
          <td>{{ respuesta.elegida }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const respuestas = ref([
  {
    pregunta: 'Como es la forma reducida de v-on:click? ',
    elegida: 'c) @click',
  },
  {
    pregunta: 'El modificador trim recorta... ',
    elegida: 'c) Los espacios adelante y atrás en una entrada de texto',
  },
  {
    pregunta: 'La propiedad routes en la definición del router de Vue.js tiene como función: ',
    elegida: 'a) Definir el path y el componente activo para esa ruta',
  }
])


</script>

<style scoped>
.tabla-personalizada {
  background-color: #6f3333 !important;
  color: white;
}

.tabla-personalizada th,
.tabla-personalizada td {
  background-color: #6f3333 !important;
  color: white !important;
  border-color: #fff !important;
}


.tabla-personalizada tbody tr:hover {
  background-color: #8b3f3f !important;
}
</style>