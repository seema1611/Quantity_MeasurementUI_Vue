<template>
  <div id="home">
    <Header />

    <div id="home-text">
      CHOOSE TYPE
    </div>

    <div id="quantity-container">
      <div id="quantity-images">
        <Length />
      </div>     
    </div>

  </div>
</template>

<script>
import Header from "./Header.vue";
import Length from "./Length.vue";

export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
    Header,
    Length,
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
</style>
