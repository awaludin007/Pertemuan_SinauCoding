<script setup>
import Card from "../components/Card.vue";
import { useCartStore } from "../store/cartStore.js";
import { storeToRefs } from "pinia";
import { computed } from "vue";

const store = useCartStore();
const { count } = storeToRefs(store);

const message = computed(() => {
  return count.value > 0 ? "" : "There is nothing in your cart";
});
</script>

<template>
  <div class="col display-flex gap-3 flex-wrap justify-content-center text-center">
    <h2>This Cart Log Page</h2>
    <p>Total item in Cart : {{ count }}</p>
    <p class="fw-bold">{{ message }}</p>
    <Card :isCartPage="false" />
  </div>
</template>
