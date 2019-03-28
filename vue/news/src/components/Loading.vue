<template>
  <div id="loading">
    <svg xmlns="http://www.w3.org/2000/svg">
      <rect
        x="50%"
        y="50%"
        width="5"
        height="20"
        fill="#ff6700"
        style="transform:translateX(-10px)"
      >
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          begin="0s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect x="50%" y="50%" width="5" height="20" fill="#ff6700">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          begin="0.2s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
      <rect x="50%" y="50%" width="5" height="20" fill="#ff6700" style="transform:translateX(10px)">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          begin="0.4s"
          dur="0.6s"
          repeatCount="indefinite"
        ></animate>
      </rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: "loading"
};
</script>

<style scoped>
#loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.5);
}
svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
