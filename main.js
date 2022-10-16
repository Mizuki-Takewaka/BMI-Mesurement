'use strict';

const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const getBmi = document.querySelector('#getBmi');
const reset = document.querySelector('#reset');
const resultBmiBox = document.querySelector('#result_bmi_box');
const resultRankBox = document.querySelector('#result_rank_box');
const calc = () => { 
   return Math.round((weight.value*10000/height.value**2)*10)/10;
};

const getRank = () => {
  if (calc() < 18.5) {
    return '低体重'
  } else if (18.5 <= calc() < 25) {
    return '普通体重'
  } else if(25 <= calc() < 30) {
    return '	肥満（１度）'
  } elseif
  if (30 <= calc() < 35) {
    return '肥満（２度）'
  } elseif
  if (35 <= calc() < 40) {
    return '肥満（３度）'
  } elseif
  if (40 <= calc()) {
    return '	肥満（４度）'
  }
};



getBmi.addEventListener('click',()=> {

  if(height.value == "" || weight.value == ""){
    window.alert('「身長」および「体重」を入力して下さい');
  }else{
    resultBmiBox.textContent = calc();
    resultRankBox.textContent = getRank();
  }

});

reset.addEventListener('click',()=> {
  
  weight.value = "";
  height.value = "";
  resultBmiBox.textContent = "";
  resultRankBox.textContent = "";

});