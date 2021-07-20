import {isFunction} from './utils.js'
let rawData=null;
let preparedData=null;
const MAX_ROWS=10;

const prepareData=(filterFn)=>{
  preparedData=rawData;
  if((isFunction(filterFn))){
    preparedData=preparedData.filter(filterFn)
  }
  preparedData=preparedData.slice(0,MAX_ROWS)
}

const getData=()=>{
  return preparedData
}

const storeData=(data)=>{
  rawData=data
  preparedData=data
  // return preparedData
}

export {getData,storeData,prepareData}
