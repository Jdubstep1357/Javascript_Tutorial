const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n => 0);

// Display each number with bullet point
// map each element in array to something else
const items = filtered.map(n => '<li>' + n + '</li>');

const html = '<ul>' + items.join('') + '</ul>';

console.log(html);



// 2nd example

// keep return in arrow function {} represents code block
// if returning object put it in parenthesis
const items_2 = filtered.map(n => { return { value: n } });

const html2 = '<ul>' + items.join('') + '</ul>';
console.log(html2);


// EASIEST WAY
const items2 = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log(items2);