<script setup lang="ts">

</script>

<template>
  <div class="loading">
    <div class="container">

      <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none" class="spinner">

        <circle cx="33" cy="33" r="29" stroke="#0C111D" stroke-width="8"/>

        <path
            d="M38.0353 61.5594C42.5423 60.7647 46.7972 58.9146 50.4522 56.1604C54.1071 53.4062 57.0584 49.8261 59.0646 45.7128C61.0708 41.5994 62.075 37.0697 61.9951 32.4939C61.9152 27.9181 60.7535 23.4261 58.605 19.3853C56.4565 15.3445 53.3821 11.8696 49.6332 9.24459C45.8844 6.61962 41.5675 4.91916 37.0355 4.28223C32.5036 3.6453 27.8852 4.09 23.558 5.57997C19.2309 7.06993 15.3178 9.56285 12.1387 12.8549"
            stroke="#9E77ED"
            stroke-width="8"
            stroke-linecap="round"/>

        <animateTransform attributeName="transform"
                          values="0,0,0;360,0,0"
                          type="rotate"
                          repeatCount="indefinite"
                          dur="750ms"/>

      </svg>

      <p class="text">Loading...</p>

    </div>
  </div>
</template>

<style scoped lang="scss">

.loading {
  background-color: #0C111D;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  place-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.spinner {
  width: 66px;
}

.text {
  margin: 0;
  color: #CECFD2;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

@media only screen and (max-width: 768px) {
  .container {
    gap: 16px;
  }

  .spinner {
    width: 49px;
  }

  .text {
    font-size: 14px;
    line-height: 20px;
  }
}

</style>