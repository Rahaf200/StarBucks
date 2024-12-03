<template>
    <nav class="navbar">
      <div class="navbar-left">
        <img src="https://www.starbucks.com/" alt="Logo" class="logo" />
        <ul class="menu">
          <li><a href="#">Menu</a></li>
          <li><a href="#">Rewards</a></li>
          <li><a href="#">Gift Cards</a></li>
        </ul>
      </div>
      <div class="navbar-right">
        <a href="#" class="link">Find a store</a>
        <button class="btn-outline">Sign in</button>
        <button class="btn-black">Join now</button>
      </div>
    </nav>
  </template>
  
  <script lang="ts" setup>
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 4rem;
    background-color: white;
    border-bottom: 1px solid #ccc;
  }
  
  .navbar-left {
    display: flex;
    align-items: center;
  }
  
  .logo {
    height: 30px;
    margin-right: 1rem;
  }
  
  .menu {
    list-style: none;
    display: flex;
    gap: 1rem;
  }
  
  .menu li a {
    text-decoration: none;
    color: #000;
    font-weight: 500;
  }
  
  .navbar-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .link {
    text-decoration: none;
    color: #000;
    font-size: 0.9rem;
  }
  
  .btn-outline {
    padding: 0.5rem 1rem;
    border: 1px solid black;
    background: transparent;
    font-size: 0.9rem;
    cursor: pointer;
  }
  
  .btn-black {
    padding: 0.5rem 1rem;
    background: black;
    color: white;
    border: none;
    font-size: 0.9rem;
    cursor: pointer;
  }
  </style>
  