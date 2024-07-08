<script setup>
import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const ingredient = ref([])
const temp = reactive({
  ingredient: '',
  amount: 0,
  price: 0
})

const customer = ref('')

const inputIngredient = () => {
  ingredient.value.push({ ...temp })
  temp.customer = ''
  temp.ingredient = ''
  temp.amount = 0
  temp.price = 0
}

const deleteIngredient = (index) => {
  ingredient.value.splice(index, 1)
}

const totalPrice = computed(() => {
  return ingredient.value.reduce((sum, item) => {
    return sum + item.amount * item.price
  }, 0)
})

const totalAmount = computed(() => {
  return ingredient.value.reduce((sum, data) => {
    return sum + data.amount
  }, 0)
})

const router = useRouter()

const payment = () => {
  if (totalAmount.value === 0) {
    alert('Tidak ada pesanan yang bisa dicetak')
  } else if (customer.value === '') {
    alert('Mohon masukan nama customer')
  } else {
    router.push({
      path: '/cektagihan',
      query: {
        totalAmount: totalAmount.value,
        totalPrice: totalPrice.value,
        customer: customer.value
      }
    })
  }
}
</script>

<template>
  <h1>List Ingredient</h1>
  <label for="customer">
    Customer
    <input type="text" id="customer" v-model="customer" /> <br />
  </label>
  <div class="list">
    <label for="ingredient">
      Ingredient :
      <input type="text" id="ingredient" v-model="temp.ingredient" />
    </label>
    <label for="amount">
      Amount :
      <input type="number" id="amount" v-model="temp.amount" />
    </label>
    <br />
    <label for="price">
      Price :
      <input type="number" id="price" v-model="temp.price" />
    </label>
    <button type="submit" @click="inputIngredient()">Submit</button>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Ingredient</th>
        <th>Price</th>
        <th>Amount</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(data, index) in ingredient" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ data.ingredient }}</td>
        <td>Rp. {{ data.price }},00</td>
        <td>{{ data.amount }}</td>
        <td>Rp. {{ data.amount * data.price }},00</td>
        <td>
          <button type="button" @click="deleteIngredient(index)">Delete</button>
        </td>
      </tr>
      <tr>
        <td colspan="3">Total</td>
        <td>{{ totalAmount }}</td>
        <td>Rp. {{ totalPrice }},00</td>
        <td></td>
      </tr>
    </tbody>
  </table>
  <div>
    <p>Total Data : {{ ingredient.length }}</p>
    <button type="button" @click="payment()">Cetak Tagihan</button>
  </div>
</template>

<style scoped></style>
