import './styles.css';
import Text from './components/Text/Text.js';

console.log(Text({ label: 'Hello World!', style: 'Headline 1' }));

document.querySelector('#app').appendChild(
    Text({
        label: 'Hello World!',
        style: 'Headline 1',
    })
);
