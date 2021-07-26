const loadData = (url, onSuccess, onError) => {
  fetch(url)
    .then((response) => response.json())
    .then((similarAds) => {
      onSuccess(similarAds);
    })
    .catch(() => onError());
};

const saveData = (url, body, alertSuccess, alertError) => {
  fetch(url, {
    method: 'POST',
    body: body,
  })
    .then((response) => {
      if (response.ok) {
        alertSuccess();
      } else {
        alertError();
      }
    })
    .catch(() => {
      alertError();
    });
};


export { loadData, saveData };
