const { Client } = require('@elastic/elasticsearch'),
  serchArgs = require('debug')('search:args'),
  serchResult = require('debug')('search:result');

class ElasticGraphql {
  constructor(url) {
    this.elastic = new Client({ node: url });
  }

  async search(args) {
    serchArgs(args);

    let result = await this.elastic.search(args);
    
    serchResult(result);
    
    return result;
  }

}

module.exports = ElasticGraphql;