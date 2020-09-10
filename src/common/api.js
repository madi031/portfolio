const collapse = id => {
  if (document.getElementById(id)) {
    document.getElementById(id).style.display = 'none';
  }
};

const show = id => {
  if (document.getElementById(id)) {
    document.getElementById(id).style.display = 'block';
  }
};

const showFlex = id => {
  if (document.getElementById(id)) {
    document.getElementById(id).style.display = 'flex';
  }
};

export {
  collapse,
  show,
  showFlex,
};