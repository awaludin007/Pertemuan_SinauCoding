<script setup>
import Card from "../components/Card.vue";
import { useCartStore } from "../store/cartStore.js";
import { storeToRefs } from "pinia";

const store = useCartStore();
const { count } = storeToRefs(store);
</script>

<template>
  <div class="text-center">
    <h2>This is Cart Page</h2>
    <p>Item for Sale</p>
    <p>Total Item : {{ count }}</p>

    <Card :isCartPage="true" />
  </div>
</template>
