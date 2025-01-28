<script setup></script>

<template>
  <main class="min-h-[93vh] flex items-center justify-center bg-gray-100 px-4">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-center mb-6">Login</h1>
      <form class="space-y-4">
        <div>
          <label for="username" class="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            id="username"
            type="text"
            required
            placeholder="Enter email or username"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label for="password" class="block text-gray-700 font-semibold mb-2">
            Confirm Password
          </label>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white py-2 rounded-full hover:bg-indigo-700 transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  </main>
</template>
