class Application {
    constructor(appId, url, title, developer, score, ratings, histogram, size, placeInTop) {
      this.appId = appId;
      this.url = url;
      this.time = `${new Date().getDate()} ${new Date().getHours()}:${new Date().getMinutes()}`;
      this.title = title;
      this.developer = developer;
      this.score = score;
      this.histogram = histogram;
      this.size = size;
      this.placeInTop = placeInTop;
      this.downloads = ratings;
    }
  }
  
  module.exports = Application;