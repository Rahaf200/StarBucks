<template>
  <div class="availability-container store-selector-fixed">
    <label for="store-select" class="label">For item availability</label>
    <!-- Dropdown button with the arrow included -->
    <div class="dropdown">
      <div class="dropdown-button">
        <select
          id="store-select"
          class="store-dropdown"
          v-model="selectedStore"
          @change="onStoreChange"
        >
          <option value="" disabled>Choose a store</option>
          <option v-for="store in stores" :key="store.id" :value="store.id">
            {{ store.name }}
          </option>
        </select>
        <div class="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
          </svg>
        </div>
      </div>
      <div class="underline"></div>
    </div>
    <!-- Shopping bag icon -->
    <div class="bag-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoreSelector",
  data() {
    return {
      selectedStore: "",
      stores: [
        { id: "1", name: "Store 1" },
        { id: "2", name: "Store 2" },
        { id: "3", name: "Store 3" },
      ],
    };
  },
  methods: {
    onStoreChange() {
      console.log("Selected store ID:", this.selectedStore);
    },
  },
};
</script>

<style scoped>
.availability-container {
  background-color: #173f35; /* Dark green background */
  padding: 15px;
  color: white;
  font-family: Arial, sans-serif;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  height: 150px;
}

.label {
  font-size: 16px;
  margin-bottom: 8px;
  display: block;
}

.dropdown {
  position: relative;
  width: 100%;
}

.dropdown-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 25%;
  background-color: #173f35;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 10px 8px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: left;
}

.store-dropdown {
  appearance: none;
  border: none;
  background: transparent;
  color: white;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  cursor: pointer;
  outline: none;
}

.store-dropdown option[value=""] {
  font-weight: normal;
  color: gray;
}

.store-dropdown:focus {
  outline: none;
  border: none;
}

.arrow-icon {
  position: absolute;
  right: 10px;
  pointer-events: none;
}

.arrow-icon svg {
  fill: white;
  width: 16px;
  height: 16px;
}

.underline {
  height: 2px;
  background-color: white;
  width: 25%;
  margin-top: 5px;
  margin-left: 0;
}

.bag-icon {
  position: absolute;
  top: 50%;
  left: 65%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.bag-icon svg {
  fill: white;
  width: 24px;
  height: 24px;
}
</style>
