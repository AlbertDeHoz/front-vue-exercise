<script lang="ts" setup></script>
<template>
  <div
    id="app-main"
    class="app px-4 pt-4 text-indigo-50 min-h-screen bg-slate-900 grid gap-4 items-center mx-auto sm:max-w-xl lg:max-w-5xl"
  >
    <h1
      class="text-center text-2xl border-2 border-indigo-300 rounded mb-4 text-indigo-200"
    >
      TIC TAC TOE
    </h1>
    <p
      class="info text-slate-600 bg-slate-800 mb-4 px-4 py-1 rounded text-center"
    >
      {{ isPlayAlone ? "play alone" : "two players" }}
      <i class="fas fa-user"></i>
      <i class="fas fa-user" v-if="!isPlayAlone"></i>
    </p>
    <div
      class="board grid grid-rows-3 grid-cols-3 gap-2 mb-4 lg:w-3/4"
      style="aspect-ratio: 1 / 1"
    >
      <div
        v-for="(value, key) in values"
        :key="key"
        @click="!isPlayAlone ? play(key.toString()) : playAlone(key.toString())"
        class="bg-pink-800 hover:bg-pink-700 rounded flex justify-center items-center"
      >
        <span v-if="!value">{{ value }}</span>
        <font-awesome-icon v-else :icon="`fa-solid ${turn[value]}`" class="text-4xl"/>
        <!-- <i v-else :class="`${turn[value]} text-4xl`"></i> -->

      </div>
    </div>
    <menu-board
      v-on:handle-move="makeOneMove"
      v-on:handle-back="backOneMove"
      v-on:handle-restart="restartValues"
      v-on:handle-play-alone="setOnePlayer"
      :isPlayAlone="isPlayAlone"
      :winner="turn[winner]"
      class="menu"
    />
    <modal-winner
      :winner="turn[winner]"
      v-if="!!winner"
      v-on:handle-restart="restartValues"
    />
    <footer class="text-xs text-slate-700 text-center flex flex-col">
      <span
        >developed by
        <a
          href="https://github.com/AlbertDeHoz/front-vue-exercise"
          class="text-slate-600"
          >AlbertDeHoz{<font-awesome-icon icon="fa-brands fa-github" />}</a
        >
        with <font-awesome-icon icon="fa-solid fa-heart" /></span>
    </footer>
  </div>
</template>

<script>
import ModalWinner from "./components/ModalWinner.vue";
import MenuBoard from "./components/MenuBoard.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXmark, faCircle, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faXmark, faCircle, faHeart, faGithub)

export default {
  name: "App",

  components: {
    MenuBoard,
    ModalWinner,
    FontAwesomeIcon
  },

  data: () => ({
    isPlayAlone: false,
    turn: { X: "fa-xmark", O: "fa-circle" },
    history: [],
    values: {},
    defaultValues: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
    },
    slotStyles: {
      1: "border-b-4 border-r-4",
      2: "border-r-4 border-l-4 border-b-4",
      3: "border-b-4 border-l-4",
      4: "border-r-4 border-t-4 border-b-4",
      5: "border-4",
      6: "border-l-4 border-t-4 border-b-4",
      7: "border-t-4 border-r-4",
      8: "border-l-4 border-t-4 border-r-4",
      9: "border-t-4 border-l-4",
    },
    currentPlayer: "X",
    machinePlayer: "O",
    winner: null,
  }),

  mounted() {
    this.values = { ...this.defaultValues };
  },

  methods: {
    restartValues() {
      this.setValues({ ...this.defaultValues });
      this.currentPlayer = "X";
      this.machinePlayer = "O";
    },

    setOnePlayer() {
      this.isPlayAlone = !this.isPlayAlone;
      this.restartValues();
    },

    toggleCurrent() {
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    },

    makeOneMove() {
      const emptySlots = this.getEmptySlots();
      const randomNumber = Math.floor(Math.random() * emptySlots.length);
      const key = emptySlots[randomNumber];
      setTimeout(() => {
        this.play(key);
      }, 300);
    },

    backOneMove() {
      this.history.pop();
      const lastIndex = this.history.length - 1;
      this.setValues([ ...this.history[lastIndex] ]);
    },

    getEmptySlots() {
      const emptySlots = [];
      for (const [key, value] of Object.entries(this.values)) {
        if (!value) {
          emptySlots.push(key);
        }
      }
      return emptySlots;
    },

    setValues({ ...values }) {
      // this.history.length == 0 means no movements yet
      // '!values' means reset values due to 'handle-restart' sets the 'values' params as null
      const isValuesEmpty =
        Object.keys(values).length === 0 && values.constructor === Object;
      if (this.history.length == 0 || (isValuesEmpty && this.winner)) {
        for (let key = 1; key <= 9; key++) {
          this.values[key] = "";
          this.history = [];
          this.currentPlayer = "X";
          this.winner = this.calculateWinner(this.values);
        }
      }
      this.values = values;
      this.winner = this.calculateWinner(this.values);
    },

    playAlone(key) {
      if (this.currentPlayer === this.machinePlayer) {
        return;
      }
      const playerMove = this.play(key);
      this.makeOneMove();
    },

    play(key) {
      if (this.values[key] || !!this.winner) {
        return;
      }
      this.values[key] = this.currentPlayer;
      this.winner = this.calculateWinner(this.values);
      this.history.push({ ...this.values });
      this.toggleCurrent();
      return true;
    },

    /*
     * calculateWinner  receives the status of the currentPlayer value
     * and returns a winner if it exists
     */
    calculateWinner(values) {
      const lines = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (values[a] && values[a] === values[b] && values[a] === values[c]) {
          return values[a];
        }
      }
      return null;
    },
  },
};
</script>

<style>
#app-main {
  font-family: "Roboto Mono", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  --tw-bg-opacity: 1;
  background-color: rgb(15 23 42 / var(--tw-bg-opacity));
}

.app h1 {
  grid-area: title;
}

.app .info {
  grid-area: info;
  align-self: end;
}

.app .board {
  grid-area: board;
}

.app .menu {
  grid-area: menu;
  align-self: start;
}
.app footer {
  grid-area: footer;
}

.app {
  grid-template-areas:
    "title"
    "info"
    "board"
    "menu"
    "footer";
}

@media (min-width: 64rem) {
  .app {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "title title title"
      "board board info"
      "board board menu"
      "footer footer footer";
  }
}
</style>
