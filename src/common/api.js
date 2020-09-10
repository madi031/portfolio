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

const updateSkipLink = path => {
  if (document.getElementById('skipLinkTag')) {
    document.getElementById('skipLinkTag').href = path;
  }
};

export {
  collapse,
  show,
  showFlex,
  updateSkipLink,
};