import { createText } from './Text';

export default {
  title: 'Example/Text',
  args: {
    label: 'Hello World',
  }
};

const Template = ({ label, ...args }) => {
  return createText({ label, ...args });
};

export const Primary = Template.bind({});