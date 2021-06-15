<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1
    :style="colorContador">Mi contador: {{ this.contador }}</h1>
    <button @click="accionIncrementar">Incrementar 10</button>
    <boton-accion :estado="true"/>
    <boton-accion :estado="false"/>
  </div>
</template>

<script>
// @ is an alias to /src

import BotonAccion from  "../components/BotonAccion.vue"
import { mapState, mapMutations, mapActions } from "vuex";
import BotonDisminuir from '../components/BotonDisminuir.vue';

export default {
  name: 'Home',
  components: {
    BotonDisminuir,
    BotonAccion
  },
  computed: {
  
      ...mapState(['contador']),
    colorContador(){
      return [this.contador >= 100 ? {'color': 'green'} : {'color': 'red'}]
    }
  },
  methods: {
    ...mapActions(['accionIncrementar'])
  }
}
</script>
