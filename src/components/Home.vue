<template>
  <div id="home">
    <Header />
    <ChooseTypeCard />
    <Conversion />
  </div>
</template>

<script>
import Header from "./Header.vue";
import ChooseTypeCard from "./ChooseTypeCard.vue";
import Conversion from "./Conversion.vue";

export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
    Header,
    ChooseTypeCard,
    Conversion,
  },
};
</script>
