<script setup lang="ts">
import gsap from 'gsap';
const customerNum = ref(0);
const averageScore = ref(0);
const reviewerNum = ref(0);
const statistics = ref(null);
const isStatView = useElementVisibility(statistics)


const tweened = reactive({
  customerNum: 0,
  averageScore: 0,
  reviewerNum: 0
})

watch(customerNum, (n) => {
  gsap.to(tweened, { duration: 2.5, customerNum: Number(n) || 0 })
})
watch(averageScore, (n) => {
  gsap.to(tweened, { duration: 2.5, averageScore: Number(n) || 0 })
})
watch(reviewerNum, (n) => {
  gsap.to(tweened, { duration: 2.5, reviewerNum: Number(n) || 0 })
})

watch(isStatView, (b) => {
  if (b) {
    customerNum.value = 1081;
    averageScore.value = 4;
    reviewerNum.value = 758;
  }
})
</script>

<template>
  <section>
    <div>
      <img src="/banner.jpg" alt="Banner" class="w-full h-full shadow cursor-pointer" @click="useRouter().push('/menu')">
    </div>
    <div class="flex mt-5 flex-col gap-2">
      <h1 class="mx-auto text-5xl font-kanit">
        <span class="text-[#cd7a1c]">Fast</span>
        Food Delivery
      </h1>
      <div class="mx-auto bg-white w-80 h-2 rounded-md">
        <div class="bg-[#cd7a1c] w-1/2 h-2 rounded-md"></div>
      </div>
    </div>
    <div class="grid grid-cols-3 mt-12 mb-4">
      <div class="flex justify-center text-center gap-4">
        <Icon name="ph:shopping-bag-open-fill" size="100" class="bg-[#cd7a1c] rounded-md shadow" />
        <div class="text-start">
          <h2 class="text-3xl font-kanit">Fast</h2>
          <h3 class="w-[28rem]">We deliver your orders in the fastest way so you don't go hungry.</h3>
        </div>
      </div>
      <div class="flex justify-center text-center gap-4">
        <Icon name="material-symbols:fastfood" size="100" class="bg-[#cd7a1c] rounded-md shadow" />
        <div class="text-start">
          <h2 class="text-3xl font-kanit">Delicious</h2>
          <h3 class="w-[28rem]">We prepare the most delicious food with the highest quality ingredients for you.</h3>
        </div>
      </div>
      <div class="flex justify-center text-center gap-4">
        <Icon name="material-symbols:room-service" size="100" class="bg-[#cd7a1c] rounded-md shadow" />
        <div class="text-start">
          <h2 class="text-3xl font-kanit">Service</h2>
          <h3 class="w-[28rem]">We provide the best service for your comfort and we work for it.</h3>
        </div>
      </div>
    </div>
    <div class="bg-[#292f33] mt-20 h-[16rem] mb-16 grid grid-cols-3 text-center items-center trigger" ref="statistics">
      <div class="flex flex-col items-center gap-2">
        <Icon size="65" name="streamline:interface-user-single-close-geometric-human-person-single-up-user" />
        <h4 class="text-5xl font-bold">{{ tweened.customerNum.toFixed(0) }}</h4>
        <h3 class="text-base">Customers</h3>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Icon size="65" name="ic:sharp-star" />
        <h4 class="text-5xl font-bold">{{ tweened.averageScore.toFixed(0) }}</h4>
        <h3 class="text-base">Average
          Score</h3>
      </div>
      <div class="flex flex-col items-center gap-2">
        <Icon size="65"
          name="streamline:interface-help-customer-support-1-customer-headset-help-microphone-phone-support" />
        <h4 class="text-5xl font-bold">{{ tweened.reviewerNum.toFixed(0) }}</h4>
        <h3 class="text-base">Reviewers</h3>
      </div>
    </div>
  </section>
</template>