export default {
  title: 'Demo',
};

export const Heading = () => '<h1>Hello World</h1>';

export const Button = () => {
  const btn = document.createElement('button');
  btn.type = 'button';
  btn.innerText = 'Hello Button';
  btn.addEventListener('click', e => console.log(e));
  return btn;
};

export const Suger = () => '<h1>OMG</h1>';


Heading.story = {
  parameters: {
    notes: `Here we put anything bla bla bla`,
  },
};