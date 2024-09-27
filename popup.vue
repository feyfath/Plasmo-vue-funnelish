<template>
  <div>
    <h2 style="text-align: center;">
      <a href="https://www.funnelish.com" target="_blank">Funnelish</a> Extension!
    </h2>

    <div class="container">
      <button class="ref_btn" @click="showT">refresh 🔁</button>
      <br>
      <div class="msg_cntnr">
     <p v-if="state.isFunnelish" style="color: lightblue;">This page uses Funnelish</p>
     <p v-else style="color: lightgray;">this page does not run any Funnelish technology</p>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  min-width: 470px;
  align-items: center;
  justify-content: center;
  gap: 47px;
}
.msg_cntnr {
  text-align: center;
  font-size: large;
}
.ref_btn {
  color: #470;
  font-size: 23px;
  font-weight: bold;
  display: block;
  max-width: 30%;
  margin: 0 auto;
}
</style>
<script setup lang="ts">
import { reactive } from "vue"
import type { App } from "vue"


const state = reactive({ 
  isFunnelish: false
})

window.onload = () => {
  chrome.runtime.sendMessage({ type: "GET_DATA_FROM_BACKGROUND" }, (response) => {
    alert(response.data);
      if (response.data) {
        state.isFunnelish = response.data; // Store the data in the popup
        console.log("Data received from background script:", response.data);
      }
    });
}


function showT(){
  chrome.runtime.sendMessage({ type: "GET_DATA_FROM_BACKGROUND" }, (response) => {
    alert(response.data);
      if (response.data) {
        state.msg = response.data; // Store the data in the popup
        console.log("Data received from background script:", response.data);
      }
    });
}

defineOptions({
  prepare(app: App) {
    // Use any plugins here:
    // app.use
  }
});
</script>
