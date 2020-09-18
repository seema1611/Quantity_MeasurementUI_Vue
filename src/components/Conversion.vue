<template>
    <div id="from-to-container">

        <div class="from-to">
            <div class="from-to-text">
                FROM
            </div>
            <input type="number" class="from-to-input">
        </div>

        <div class="from-to">
            <div class="from-to-text">
                TO
            </div>
            <input type="number" class="from-to-input">
        </div>

    </div>
</template>

<script>
export default {
    name: "Conversion"
}
</script>

<style lang="scss" scoped>
#from-to-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.from-to {
  display: flex;
  flex-direction: column;
}
.from-to-text {
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
}

.from-to-input {
  width: 20vw;
  font-size: 25px;
  line-height: 40px;
  text-align: left;
  border: none;
  outline: none;
  padding: 1vh;
  padding-left: 1vw;
  border: solid 1px rgba($color: #000000, $alpha: 0.2);
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
