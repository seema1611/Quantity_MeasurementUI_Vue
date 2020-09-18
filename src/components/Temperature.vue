<template>
  <div
    class="md-card"
    @click="temperatureClickedEvent"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="{ hovered: temperatureClicked?true:hovered }"
  >
    <md-card-content>
      <md-card-media>
        <img
          src="../assets/hot-black.png"
          alt="Temperature"
          class="img"
          v-if="temperatureClicked?false:!hovered"
        />
        <img
          src="../assets/hot.png"
          alt="Temperature"
          class="img"
          v-if="temperatureClicked?true:hovered"
        />
      </md-card-media>
      <div class="img-text">Temperature</div>
    </md-card-content>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  name: "Temperature",
  mounted() {
    EventBus.$on("lengthClicked", () => {
      this.temperatureClicked = false;
    });
    EventBus.$on("volumeClicked", () => {
      this.temperatureClicked = false;
    });
  },
  data() {
    return {
      temperatureClicked: false,
      hovered: false,
    };
  },
  methods: {
    temperatureClickedEvent() {
      this.temperatureClicked = true;
      EventBus.$emit("temperatureClicked", this.temperatureClicked);
    },
  },
};
</script>

<style lang="scss" scoped>
$temperature-color: #fd5160;
.md-card {
  width: 12vw;
  height: 21vh;
  margin: 0.6vh;
  display: flex;
  flex-direction: column;
  vertical-align: top;
  box-shadow: none;
  border-radius: 7px;
  border: solid 1px white;
  background-color: white;
  color: #c9c9c9;
}
.img {
  height: auto;
  width: auto;
}
.md-card-content {
  margin-top: 2vh;
}
.img-text {
  font-size: 15px;
  line-height: 19px;
  margin-top: 1vh;
}
.hovered {
  border: $temperature-color solid 1px;
  color: $temperature-color;
  background-color: #ffeef0;
  box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.3);
}
</style>
