module.exports = {
  parseQuerys: (query) => {
    for (let i = 0; i < query.length; i++) {
      let transformedValue = query[i]["JSON_ARRAY('id', review_photos.id, 'url', review_photos.url )"]
      delete query[i]["JSON_ARRAY('id', review_photos.id, 'url', review_photos.url )"]
      query[i].photos = JSON.parse(transformedValue.split(","));
      for (let j = 0; j < query[i].photos.length; j++) {
        let obj = {id: query[i].photos[j], url: query[i].photos[j + 1]}
        return query
      }
    }
  }
}
