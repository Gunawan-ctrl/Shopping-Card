<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div id="page-wrap" v-if="product">
      <h4 v-if="notif" class="notif">Item added succesfully</h4>
      <div id="img-wrap">
        <img :src="`http://localhost:8000${product.imageUrl}`" alt="" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp {{ product.price }}</h3>
        <p>Everage Rating: {{ product.averageRating }}</p>
        <button @click="addToCart(product.code)" id="add-to-cart">
          Add to Cart
        </button>
        <p>
          {{ product.description }}
        </p>
      </div>
    </div>

    <error v-else />
  </div>
</template>

<script>
import axios from "axios";
import error from "../errors/ErrorNotFound.vue";

export default {
  components: {
    error,
  },
  data() {
    return {
      product: {},
      notif: false,
    };
  },
  methods: {
    addToCart(product) {
      axios.post("http://localhost:8000/api/orders/user/1", {
        product: product,
      });
      this.notif = true;
      this.$notify("successfully");
    },
  },
  async created() {
    const code = this.$route.params.id;
    const result = await axios.get(
      `http://localhost:8000/api/products/${code}`
    );
    this.product = result.data;
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
.notif {
  text-align: center;
  color: white;
  background-color: #41b883;
  padding: 3%;
  border-radius: 8px;
}
</style>
