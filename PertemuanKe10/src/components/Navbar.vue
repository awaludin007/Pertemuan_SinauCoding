<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-md">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <RouterLink class="nav-link" to="/">Cart</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/log">Log</RouterLink>
      </li>
    </ul>
  </nav>
</template>
