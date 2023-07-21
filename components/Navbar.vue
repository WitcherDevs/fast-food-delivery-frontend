<template>
  <nav class="flex justify-between items-center px-20 shadow mt-3 font-kanit">
    <div>
      <NuxtLink to="/">
        <img src="/icon.png" alt="home" class="w-14 mx-auto icon-hover mb-2">
      </NuxtLink>
    </div>
    <div class="flex items-center gap-12 text-xl uppercase">
      <NuxtLink to="/" exact-active-class="text-[#cd7a1c]">
        Home
      </NuxtLink>
      <NuxtLink to="/menu" exact-active-class="text-[#cd7a1c]">
        Menu
      </NuxtLink>
    </div>
    <div class="flex items-center gap-5 text-lg uppercase cursor-pointer">
      <Icon name="ph:basket-bold" size="32" title="Comming Soon" />
    </div>
  </nav>
</template>

<style>
.icon-hover {
  transition: transform 0.3s ease-in-out;
}

.icon-hover:hover {
  transform: rotate(15deg)
}
</style>