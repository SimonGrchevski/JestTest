function strLength(str)  {
  const len = str.length;
  if (len < 1 || len > 10)
    throw new Error('wrong parameter');
  return len;

}

module.exports = strLength;