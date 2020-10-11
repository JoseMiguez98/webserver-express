const hbs = require('hbs');

hbs.registerHelper('getYear', () => new Date().getFullYear());
hbs.registerHelper('capitalize', args => {
  const words = args.split(' ');

  words.map((w, i) => {
    words[i] = w.charAt(0).toUpperCase() + w.slice(1);
  });

  return words.join('');
})
