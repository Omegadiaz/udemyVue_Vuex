<template>
  <button @click="accionDisminuir(10)">Disminuir 10 </button>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods: {
        ...mapActions(['accionDisminuir'])
    }
}
</script>