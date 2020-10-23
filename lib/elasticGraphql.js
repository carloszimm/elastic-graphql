const { Client } = require('@elastic/elasticsearch');

class ElasticGraphql {
  constructor(url) {
    this.elastic = new Client({ node: url});
  }

  async search(args) {
    let result = await this.elastic.search(args);

    return result;
  }

}

module.exports = ElasticGraphql;