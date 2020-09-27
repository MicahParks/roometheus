<template>
  <div id="calendar">
    <iframe
      src="https://calendar.google.com/calendar/embed?src=parksml%40mymail.vcu.edu&ctz=America%2FNew_York"
      style="border: 0; margin:auto;"
      onload="this.width=(screen.width*.95);this.height=screen.height"
      frameborder="0"
      scrolling="no"
    ></iframe>
  </div>
</template>
<script>
export default {
  name: "Calendar"
};
</script>
