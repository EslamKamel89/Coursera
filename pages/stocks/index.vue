<template>
  <TitleComp title="Stocks" />
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
// Alpha Vantage api key
const apiKey = "1XNN5ZB032SDWRCI";
const baseURL = "https://www.alphavantage.co";
const { data } = await useFetch("/query", {
  baseURL,
  params: {
    function: "TIME_SERIES_INTRADAY",
    symbol: "IBM",
    interval: "5min",
    apikey: apiKey,
  },
});
</script>

<style scoped></style>
