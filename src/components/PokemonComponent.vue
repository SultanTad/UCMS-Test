<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

import axios from "axios";

const route = useRoute();

const currentPokemon = ref({});

const getCurrentPokemon = async () => {
  try {
    let res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.id}`
    );
    currentPokemon.value = {
      name: res.data.name,
      img: res.data.sprites.front_default,
      weight: res.data.weight,
    };
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await getCurrentPokemon();
});
</script>

<template>
  <section class="pokemon">
    <div class="container">
      <div class="pokemon__inner">
        <img class="pokemon__img" :src="currentPokemon.img" alt="" />
        <p class="pokemon__name">Name: {{ currentPokemon.name }}</p>
        <p class="pokemon__weight">Weight: {{ currentPokemon.weight }}</p>
      </div>
    </div>
  </section>
</template>

<style>
.pokemon__inner {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
}

.pokemon__img {
  width: 300px;
}

.pokemon__name {
  font-size: 30px;
  margin-bottom: 20px;
}

.pokemon__weight {
  font-size: 18px;
}
</style>
