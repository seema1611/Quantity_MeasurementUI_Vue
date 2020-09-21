<template>
  <div
    class="md-card"
    @click="lengthClickedEvent"
    @mouseover="hovered = true"
    @mouseleave="hovered = false"
    :class="{ hovered: lengthClicked?true:hovered }"
  >
    <md-card-content>
      <md-card-media>
        <img
          src="../assets/scale-black.png"
          alt="Length"
          class="img"
          v-if="lengthClicked?false:!hovered"
        />
        <img src="../assets/scale.png" alt="Length" class="img" v-if="lengthClicked?true:hovered" />
      </md-card-media>
      <div class="img-text">Length</div>
    </md-card-content>
  </div>
</template>

<script>
import { EventBus } from "./event-bus.js";
export default {
  name: "Length",
  mounted() {
    EventBus.$on("temperatureClicked", () => {
      this.lengthClicked = false;
    });
    EventBus.$on("volumeClicked", () => {
      this.lengthClicked = false;
    });
  },
  data() {
    return {
      lengthClicked: true,
      hovered: false,
    };
  },
  methods: {
    lengthClickedEvent() {
      this.lengthClicked = true;
      EventBus.$emit("lengthClicked", this.lengthClicked);
    },
  },
};
</script>

<style lang="scss" scoped>
$length-color: #0ec098;

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
  margin-top: 3vh;
}
.img-text {
  font-size: 15px;
  line-height: 19px;
  margin-top: 2vh;
}
.hovered {
  border: $length-color solid 1px;
  color: $length-color;
  background-color: #edfdf9;
  box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.3);
}

@media screen and (max-width: 780px) {
.md-card {
  width: 100%;
  margin-bottom: 20%;
}
.img-text {
  font-size: 20px;
  line-height: 19px;
  margin-top: 2vh;
}

}

</style>

