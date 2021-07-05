const modeField = (data, mode) => {
  data.forEach((element) => {
    element.disabled = mode;
  });
};

export { modeField };
