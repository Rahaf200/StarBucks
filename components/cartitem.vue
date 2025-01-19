<template>
    <div class="cart-item-card">
      <img :src="product.image" alt="Product" class="product-image" />
      <div class="product-details">
        <h4>{{ product.name }}</h4>
        <p>${{ product.price.toFixed(2) }}</p>
      </div>
      <div class="actions">
        <span class="action-icon" @click="addItem">+</span>
        <span class="action-icon" @click="removeItem">-</span>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import type { Product } from "@/src/types/Product";
  
  export default {
    props: {
      product: {
        type: Object as () => Product,
        required: true,
      },
      addOneItem: {
        type: Function,
        required: true,
      },
      removeOneItem: {
        type: Function,
        required: true,
      },
    },
    methods: {
      addItem() {
        this.addOneItem();
      },
      removeItem() {
        this.removeOneItem();
      },
    },
  };
  </script>
  
  <style scoped>
  .cart-item-card {
    display: flex;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    gap: 15px;
  }
  
  .product-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  
  .product-details {
    flex: 1;
  }
  
  .actions {
    display: flex;
    gap: 10px;
  }
  
  .action-icon {
    background-color: #00471b;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  