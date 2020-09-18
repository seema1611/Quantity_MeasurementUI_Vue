<template>
  <div id="header">
    <div id="header-top">
      <div id="quanment">
        <b>Quanment</b>
      </div>
      <div id="history">
        History
      </div>
    </div>

    <div id="header-bottom">
      Welcome To Quantity Measurement  
    </div>
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

<style lang="scss" scoped>
#link-btn {
  color: black;
  text-decoration: none;
}
#header {
  font-family: "Poppins", sans-serif;
  background-color: white;
}
#header-top {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: black;
  font-size: 21px;
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
#header-bottom {
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

@media only screen and (max-width: 360px) {
  #quanment {
    font-size: 40px;
  }
}
</style>
