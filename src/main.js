import babelPolyfill from 'babel-polyfill'
import LabelGen from 'page-label-generator';

function* times(n) {
  for (let i = 0; i < n; i++)
    yield i;
}

let gen = LabelGen.pageLabelGenerator();
var body = document.querySelector('body');

for (const i of times(5))
  body.textContent += "Page " + gen.next().value + ", ";

body.textContent += " etc.";
