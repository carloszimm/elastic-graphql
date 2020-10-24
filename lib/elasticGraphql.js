const { Client } = require('@elastic/elasticsearch'),
  debug = require('debug')('elastic-graphql');

class ElasticGraphql {
  constructor(url) {
    this.elastic = new Client({ node: url });
  }

  async search(args) {
    debug(args);

    let result = await this.elastic.search(args);
    
    debug(result);
    
    return result;
  }

}

module.exports = ElasticGraphql;