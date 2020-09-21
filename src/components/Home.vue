<template>
  <div id="home">
    <Header />

    <div id="home-text">
      <b>{{ hometext}}</b>
      CHOOSE TYPE
    </div>

    <div id="quantity-container">
      <div id="quantity-images">
        <Length />
        <Temperature />
        <Volume />
      </div>     
    </div>

    <div id="conversion-container">
      <Conversion />
    </div>

  </div>
</template>

<script>
import Header from "./Header.vue";
import Length from "./Length.vue";
import Temperature from "./Temperature.vue";
import Volume from "./Volume.vue";
import Conversion from "./Conversion.vue";

export default {
  name: "Home",
  data() {
    return {
      homeText: "CHOOSE TYPE",
    };
  },
  components: {
    Header,
    Length,
    Temperature,
    Volume,
    Conversion,
  },
};
</script>

<style lang="scss" scoped>
#home {
  width: 100%;
  height: auto;
}
#home-text {
  margin-top: 8vh;
  margin-left: 28vw;
  text-align: left;
  font-size: 15px;
  line-height: 19px;
}
#quantity-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 1vh;
}
#quantity-images {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 43vw;
  position: relative;
  left: 27.5vw;
}

#conversion-container {
  width: 42vw;
  position: relative;
  left: 28vw;
  margin-top: 05vh;
}

@media screen and (max-width: 780px) {
#home {
  width: 50%;
  height: auto;
 }

 #home-text {
  font-size: 20px;
}

#home-container {
  display: flex;
  flex-direction: column;
}

#quantity-images {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#conversion-container {
  width: 35vw;
  display:flex;
  display: flex;
  flex-direction: row;
}
}

</style>
