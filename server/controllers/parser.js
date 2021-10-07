module.exports = {
  parseQuerys: (query) => {
    let result = query.results.photos.map((i) => {
      i = JSON.parse(i);
      return i;
    })
    return result;
  }
}
