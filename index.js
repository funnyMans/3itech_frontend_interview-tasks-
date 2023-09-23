const encode = (input) =>
  [...input]
    .map((x, i) => [x.charCodeAt(0), i])
    .sort()
    .flatMap((x) => x)
    .join('.')
    .match(/./g)
    .flatMap((x, i) => new Array(x == '.' ? 1 : 2 + x * 2).fill((1 + i) % 2))
    .join('')
    .replace(/(([01])\2*)/g, (x) => `${+x ? '.' : '-'}${x.length}`);

const decode = (input) =>
  input
    .match(/.\d+/g)
    .map((x) => (x.slice(1) > 1 ? (x.slice(1) - 2) / 2 : '.'))
    .join('')
    .split('.')
    .reduce((acc, item, index, arr) => {
      index % 2 && (acc[item] = String.fromCharCode(arr[index - 1]));
      return acc;
    }, [])
    .join('');
