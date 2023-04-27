function domainName(url) {
  if (url.includes('www.')) {
    return url.substring(url.lastIndexOf('www.') + 4, url.lastIndexOf('.com'));
  } else {
    return url.substring(url.lastIndexOf('://') + 3, url.lastIndexOf('.com'));
  }
}

const url1 = 'http://github.com';
const url2 = 'www.github.com';
const url3 = 'http://www.github.com';

console.log('1', domainName(url1));
console.log('2', domainName(url2));
console.log('3', domainName(url3));
