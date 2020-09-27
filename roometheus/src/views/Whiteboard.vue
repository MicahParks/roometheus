<template>
  <div id="whiteboard">
    <iframe
      src="https://whiteboard.roometheus.com"
      onload="this.width=screen.width;this.height=screen.height"
    ></iframe>
  </div>
</template>
<script>


export default {
  name: "Whiteboard"
};
</script>