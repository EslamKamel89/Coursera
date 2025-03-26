<template>
  <TitleComp title="Currency Convertor" />
  <div>
    <div class="space-x-3">
      <label for="fromCurrency">From Currency</label>
      <select
        id="fromCurrency"
        v-model="fromCurrency"
        class="px-2 py-1 rounded-xl border"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
        <option value="AUD">AUD</option>
        <option value="EGP">EGP</option>
      </select>
    </div>
    '
    <div class="space-x-3">
      <label for="toCurrency">To Currency</label>
      <select
        id="toCurrency"
        v-model="toCurrency"
        class="px-2 py-1 rounded-xl border"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
        <option value="GBP">GBP</option>
        <option value="AUD">AUD</option>
        <option value="EGP">EGP</option>
      </select>
    </div>
    <div class="flex space-x-3 items-center">
      <input
        type="number"
        v-model.number="amount"
        class="px-2 py-1 rounded-xl border"
        placeholder="Enter Amount"
      />
      <button
        class="bg-indigo-500 text-white px-3 py-2 rounded-xl my-4"
        @click="convert"
      >
        Convert
      </button>
    </div>
    <div v-if="conversionRate && amount">
      <h3 class="font-bold font-mono">
        {{ amount }} {{ fromCurrency }} equals
        {{ amount * conversionRate }}
        {{ toCurrency }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
type AllowedCurrencies = "USD" | "EUR" | "JPY" | "GBP" | "AUD" | "EGP";
const fromCurrency = ref<AllowedCurrencies>("EGP");
const toCurrency = ref<AllowedCurrencies>("USD");
const conversionRate = ref<number | null>();
const amount = ref<number | null>(null);
const apiKey = "demo";
const baseURL = "https://www.alphavantage.co";
const { data, execute, status } = useFetch<any>("/query", {
  baseURL,
  method: "get",
  immediate: false,
  params: {
    function: "CURRENCY_EXCHANGE_RATE",
    from_currency: fromCurrency,
    to_currency: toCurrency,
    apikey: apiKey,
  },
});
const convert = () => {
  execute();
};
watch(data, () => {
  conversionRate.value = data.value["Realtime Currency Exchange Rate"][
    "5. Exchange Rate"
  ] as number | null;
  //   if (conversionRate.value) {
  //     conversionRate.value = Math.round(conversionRate.value * 100) / 100;
  //   }
});
</script>
