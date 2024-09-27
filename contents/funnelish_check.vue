<template></template>

<script lang="ts">
import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://*/*"]
}

const getStyle: PlasmoGetStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

export default {
  plasmo: {
    getStyle
  },
  setup() {},
  mounted() {
    // content-script.js
const msg = "my msg from Funnelish_check...";
let has_funnelish = false;
const fnsh = document.querySelector("head");
has_funnelish = fnsh.innerHTML.includes("funnelish");

alert(has_funnelish);

chrome.runtime.sendMessage({
      type: "CONTENT_TO_BACKGROUND",
      payload: has_funnelish
    }, (response) => {
      console.log("Response from background script:", response)
    })
  }
}
</script>
