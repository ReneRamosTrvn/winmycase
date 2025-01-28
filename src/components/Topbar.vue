<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import logo from "@/components/icons/logo.png";

const showModal = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<template>
  <main>
    <div class="w-full border-b-1 border-b-gray-300 px-5 md:px-16">
      <nav class="w-full flex justify-between items-center px-4 py-2 relative">
        <div>
          <router-link to="/">
            <img :src="logo" alt="winmycaselogo" class="w-[200px]" />
          </router-link>
        </div>
        <div class="relative">
          <!-- Main button to toggle the modal -->
          <button
            @click="toggleModal"
            class="flex items-center gap-2 text-white py-2 px-4 rounded-full bg-indigo-600 hover:bg-indigo-700"
          >
            <i class="pi pi-sign-in"></i>
            <span class="hidden md:inline-block">Lawyer Access</span>
          </button>

          <!-- Modal -->
          <div
            v-if="showModal"
            class="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg border border-gray-200 z-50"
          >
            <button
              class="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
              @click="toggleModal"
            >
              <router-link class="w-full flex" to="/login">Log In</router-link>
            </button>
            <button
              class="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
              @click="toggleModal"
            >
              <router-link class="w-full flex" to="/signup"
                >Create Account</router-link
              >
            </button>
          </div>
        </div>
      </nav>
    </div>
  </main>
</template>
