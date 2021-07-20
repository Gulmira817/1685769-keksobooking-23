const loadData = (url,onSuccess,onError)=>{
  const dataPromise = fetch(url);
  dataPromise.then((response)=>{
    if(!response.ok){
      throw new Error('Не удалось получить данные.');
    }
    return response.json();
  }).then((json)=>{
    onSuccess(json);
  }).catch((error)=>{
    onError(error)
  });
};
 export {loadData}
