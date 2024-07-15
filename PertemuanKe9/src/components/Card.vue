<script setup>
import { useCartStore } from "../store/cartStore.js";
import { storeToRefs } from "pinia";
const store = useCartStore();

const props = defineProps({
  isCartPage: {
    type: Boolean,
    default: true,
  },
});

const { product, cartItem } = storeToRefs(store);
const { addCartItem, deleteCartItem } = store;

let showItem = props.isCartPage ? product.value : cartItem.value;
let buttonText = props.isCartPage ? "Add" : "Remove";
</script>

<template>
  <div class="container">
    <div class="d-grid gap-3 justify-content-center text-center">
      <div class="card" v-for="data in showItem" :key="data.id">
        <p>{{ data.title }}</p>
        <button @click="isCartPage ? addCartItem(data) : deleteCartItem(data)">
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>
