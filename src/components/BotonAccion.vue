<template>
  <button @click="accionBoton">{{ textoBoton }}</button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data(){
        texto: String
    },
    computed: {
        textoBoton(){
            return this.estado ? 'Incrementar 10' : 'Disminuir 10'
        },
        accionBoton(){
            return this.estado ? this.accionIncrementar : this.accionDisminuir
        }
    },
    props: {
        estado: Boolean
    },
    methods: {
    ...mapActions(['accionIncrementar', 'accionDisminuir'])
  }
}
</script>

<style>

</style>