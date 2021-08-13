import './text.css';

export const createText = ({
  label,
}) => {
  const title = document.createElement('h1');
  title.innerText = label;
  title.className = ['title', 'title-red'].join(' ');

  return title;
};
