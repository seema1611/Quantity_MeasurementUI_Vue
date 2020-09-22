<template>
  <div id="conversion-container">

    <div class="from-content">
      <div class="from-to-text">FROM</div>
      <input type="number" class="from-to-input" v-model="fromValue">
      <select class="select-unit">
        <option v-for= "value in quantityDropdown" :key= "value"> {{ value }}</option>
      </select>
    </div>

    <div class="to-content">
      <div class="from-to-text">TO</div>
      <input type="number" class="from-to-input" v-model="toValue">
      <select class="select-unit">
        <option v-for="value in quantityDropdown" :key= "value"> {{ value }}</option>
      </select>
    </div>

  </div>
</template>

<script>
import {bus} from '../main' 
export default { 
    name:'Conversion',
    data(){ 
      return{
      fromValue:"1",
      toValue:"1",
      quantityDropdown:[],
      Length:['Feet','Inch','Yard'],
      Temperature:['Kelvin','Fahrenheit'],
      Volume:['Liter','Mililiter'],
      }     
    },
    created(){
      bus.$on('getValue',(data)=>{        
        this.ChangeDropdown(data);
      })
    },

  methods:{
    ChangeDropdown:function( value){
      alert(value)
      switch(value) {
        case 'Length':
         this.quantityDropdown=this.Length;
        break; 
        case 'Temperature':
          this.quantityDropdown=this.Temperature;
        break;
        case 'Volume':
          this.quantityDropdown=this.Volume;
        break;
     }
    }
  }
}
</script>

<style lang="scss" scoped>
#conversion-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.from-content {
  display: flex;
  flex-direction: column;
  margin-left: 20%;
}

.to-content {
  display: flex;
  flex-direction: column;
  margin-right: 20%;
}

.from-to-text {
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  font-family: "Montserrat", sans-serif;
}

.from-to-input {
  width: 28vw;
  font-size: 25px;
  line-height: 40px;
  text-align: left;
  border: none;
  outline: none;
  padding: 1vh;
  padding-left: 10%;
  border: solid 1px rgba($color: #000000, $alpha: 0.2);
}

.select-unit {
  width: 28vw;
  height: 7vh;
  font-size: 12px;
  line-height: 15px;
  font-family: "Montserrat", sans-serif;
  outline: none;
  padding-left: 10%;
  border: solid 1px rgba($color: #000000, $alpha: 0.2);
  border-top: none;
}

@media screen and (max-width: 780px) {
  #conversion-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.from-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 5%;
}

.to-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 5%;
}

.from-to-input {
  width: 45vw;
  font-size: 20px;
}

.select-unit {
  width: 45vw;
  margin-bottom: 25%;
  font-size: 20px;
}

.from-to-text {
  font-size: 20px;
  margin-bottom: 8%;
}

}

</style>
