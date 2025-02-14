<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<template>
  <div></div>
</template>
