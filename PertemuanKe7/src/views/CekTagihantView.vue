<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const totalAmount = route.query.totalAmount
const totalPrice = route.query.totalPrice
const namaCustomer = route.query.customer
</script>

<template>
  <div class="payment">
    <h1>Payment</h1>
    <p>
      Total pembayaran yang harus dibayarkan {{ namaCustomer }} dari {{ totalAmount }} items sebesar
      <br />
      Rp. {{ totalPrice }},00
    </p>
    <button type="button" @click="router.back()">Back</button>
  </div>
</template>
