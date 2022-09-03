<script lang="ts" setup></script>
<template>
  <div class="absolute bg-slate-900/75 flex justify-center items-center inset-0">
    <div class="bg-slate-900 w-3/4 max-w-lg border border-slate-100 rounded flex flex-col py-4 px-4 text-center drop-shadow">
      <div class="mb-4 mx-auto" v-if="winner!=='='">The player "<font-awesome-icon :icon="`fa-solid ${winner}`"/>" has won! <br/> 🎉 🥳 🎊</div>
      <div class="mb-4 mx-auto" v-else>It's a tie!!!</div>
      <button :class="buttonStyle" @click="emitRestart" >Restart</button>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faXmark, faHeart } from '@fortawesome/free-solid-svg-icons'
library.add(faXmark, faHeart)
export default {
    props: {
        winner: String,
    },
    components:{
        FontAwesomeIcon
    },


    data: () => ({
      buttonStyle:"hover:bg-indigo-500 text-indigo-300 bg-indigo-900 hover:text-indigo-50 py-2 px-4 rounded disabled:bg-slate-800 disabled:text-slate-600 "
    }),

    methods: {
        emitRestart() {
            this.$emit("handle-restart", {});
        },
    }
};
</script>
