<template>
  <div id="header">
    <div id="header-history-quanment">
      <div id="quanment">
        <b>Quanment</b>
      </div>
      <div id="history">
        History
      </div>
    </div>

    <div id="header-welcome">Welcome To Quantity Measurement</div>

  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
#header {
  font-family: "Poppins", sans-serif;
  background-color: white;
}
#header-history-quanment {
  font-size: 21px;
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

#quanment {
  padding-left: 15vw;
  padding-top: 2vh;
  line-height: 31px;
}

#history {
  padding-right: 15vw;
  padding-top: 3vh;
  font-size: 12px;
  line-height: 18px;
  padding-bottom: 3vh;
}

#header-welcome {
  color: white;
  background-color: #446dff;
  width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 25px;
  line-height: 30px;
  padding-top: 3vh;
  padding-bottom: 3vh;
  opacity: 1;
}

@media screen and (max-width: 780px) {
  #quanment {
    font-size: 20px;
  }

  #header-top {
    width: 200%
}

  #header-bottom {
  width: 200%;
}
}


</style>

