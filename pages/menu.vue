<script setup lang="ts">
const foods = ref([
  { title: "Burger Menü", description: "XL Burger + French Fries + Your Choice of Beverage", price: "5" },
]);

const newFoods = Array.from({ length: 15 }, () => foods.value[0]);

onMounted(() => {
  setInterval
});
</script>

<template>
  <section>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center text-start px-20 mt-16 mb-16 gap-8">
      <div class="bg-[#292f33] flex rounded-lg h-[11rem] shadow-lg" v-for="item in newFoods">
        <img class="w-1/3" src="/burger_menu.png" alt="menu">
        <div class="flex flex-col gap-2">
          <div class="flex justify-between mt-5">
            <h1 class="font-kanit text-2xl text-start">{{ item.title }}</h1>
            <h3 class="font-kanit text-2xl text-start mr-3">{{ item.price }}$</h3>
          </div>
          <h2 class="mr-3 h-[4.2rem] max-w-max">{{ item.description }}</h2>
          <div class="text-end">
            <button class="mr-3">
              <Icon name="material-symbols:shopping-cart-outline-sharp" size="25" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>