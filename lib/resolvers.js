const ElasticGraphql = require('./elasticGraphql'),
  { GraphQLJSON, GraphQLJSONObject } = require('graphql-type-json');

let resolvers = {
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject,
  ExpandWildcards: {
    OPEN: 'open',
    CLOSED: 'closed',
    HIDDEN: 'hidden',
    NONE: 'none',
    ALL: 'all'
  },
  SearchType: {
    QUERY_THEN_FETCH: 'query_then_fetch',
    DFS_QUERY_THEN_FETCH: 'dfs_query_then_fetch'
  },
  SuggestMode: {
    MISSING: 'missing',
    POPULAR: 'popular',
    ALWAYS: 'always'
  },
  Query: {
    elastic: ({ url }) => new ElasticGraphql(url)
  },
};

const exportResolvers = url => {

  if (url) {
    const elasticWithURL = resolvers.Query.elastic({ url });
    resolvers.Query.elastic = () => elasticWithURL;
  }

  return resolvers;
}

module.exports = exportResolvers;