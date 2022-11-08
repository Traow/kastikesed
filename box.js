

import boxen from 'boxen';


console.log(boxen('laev',{padding: 1, margin: 1, borderStyle: 'bold'}));
console.log(boxen('laev',{padding: 1, margin: 1, borderStyle: 'single', borderColor: 'red'}));
console.log(boxen('laev',{padding: 1, margin: 1, borderStyle: 'double', borderColor: 'blue'}));
console.log(boxen('laev',{title: 'juhuu', titleAlignment:'center', padding: 1, margin: 1, borderColor: 'cyan'}));
console.log(boxen('laev',{padding: 1, margin: 1, borderStyle: 'round', borderColor: 'yellow'}));
console.log(boxen('laev',{padding: 1, margin: 1, borderStyle: 'classic', height: '20', borderColor: 'magenta'}));