<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const allPokemons = ref([]);

const getallPokemons = async () => {
  for (let i = 0; i <= 20; i++) {
    try {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i + 1}`);
      let pokemon = {
        id: res.data.id,
        name: res.data.name,
        img: res.data.sprites.front_default,
      };
      allPokemons.value.push(pokemon);
    } catch (error) {
      console.log(error);
    }
  }
};

onMounted(async () => {
  await getallPokemons();
});
</script>

<template>
  <main>
    <div class="container">
      <ul class="pokemon__list">
        <router-link
          :to="{ name: 'pokemon', params: { id: pokemon.id } }"
          v-for="pokemon in allPokemons"
        >
          <li class="pokemon__list-item">
            <img :src="pokemon.img" alt="" />
            <p>{{ pokemon.name }}</p>
          </li>
        </router-link>
      </ul>
    </div>
  </main>
</template>

<style>
.pokemon__list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 50px 0;
}

.pokemon__list-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px 0;
  padding: 10px;
  border: 1px solid #000;
  box-shadow: 2px 2px 4px rgba(61, 105, 16, 0.5);
  cursor: pointer;
}
</style>
