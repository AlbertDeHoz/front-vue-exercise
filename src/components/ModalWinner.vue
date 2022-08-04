<script lang="ts" setup></script>
<template>
  <div class="absolute bg-slate-900/75 flex justify-center items-center inset-0">
    <div class="bg-slate-900 w-3/4 max-w-lg border border-slate-100 rounded flex flex-col py-4 px-4 text-center drop-shadow">
      <div class="mb-4 mx-auto">The player "<i :class="winner"></i>" has won! <br/> 🎉 🥳 🎊</div>
      <button :class="buttonStyle" @click="emitRestart" >Restart</button>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        winner: String,
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
