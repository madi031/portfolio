const collapse = id => {
  document.getElementById(id).style.display = 'none';
};

const show = id => {
  document.getElementById(id).style.display = 'block';
};

const showFlex = id => {
  document.getElementById(id).style.display = 'flex';
};

export {
  collapse,
  show,
  showFlex,
};