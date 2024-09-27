<script lang="ts">
import type {
  PlasmoCSConfig,
  PlasmoGetInlineAnchor,
  PlasmoMountShadowHost
} from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://www.plasmo.com/*"]
}
const img1 = document.querySelector("img").getAttribute("src");

const getInlineAnchor: PlasmoGetInlineAnchor = () =>
  document.querySelector(".text-slate-11");

const mountShadowHost: PlasmoMountShadowHost = ({ anchor, shadowHost }) => {
  //alert(img1);
  anchor!.element!.insertBefore(shadowHost!, anchor!.element!.firstChild)
}



export default {
  plasmo: {
    getInlineAnchor,
    mountShadowHost
  },
  data() {
    return {
      count: 0
    }
  },
  setup() {},
  mounted() {}
}
</script>

<template>
  <div>
    <span style="color: red">{{ count }}</span>
    <button @click="count++">Many Myths are based on truth</button>
  </div>
</template>
