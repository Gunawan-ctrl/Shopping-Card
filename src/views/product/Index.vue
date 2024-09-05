<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div id="page-wrap">
      <div class="grid-wrap">
        <productItem
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "@/boot/axios";
import productItem from "@/components/ProductItem";
import * as vue from "vue";

const products = vue.ref([]);

const getData = async () => {
  try {
    const response = await axios.get("products");
    products.value = response.data;
  } catch (error) {
    console.log(error);
  }
};
vue.onMounted(() => {
  getData();
});
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}
</style>
