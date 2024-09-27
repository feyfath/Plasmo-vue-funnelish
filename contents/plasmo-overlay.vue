<template>
  <span className="hw-top">
     This page was made with 🖤 using Funnelish 
  </span>
</template>

<script lang="ts">
import cssText from "data-text:~/contents/plasmo-overlay.css"
import type { PlasmoCSConfig, PlasmoGetStyle } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
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
  mounted() {}
}
</script>
