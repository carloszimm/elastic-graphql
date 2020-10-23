const exportSchema = url =>
  `
  scalar JSON
  scalar JSONObject

  type Response {
    body: JSONObject
    statusCode: Int
    headers: JSONObject
    warnings: [String]
    meta: JSONObject
  }

  enum DefaultOperator {
    AND
    OR
  }

  enum ExpandWildcards {
    OPEN
    CLOSED
    HIDDEN
    NONE
    ALL
  }

  enum SearchType {
    QUERY_THEN_FETCH
    DFS_QUERY_THEN_FETCH
  }

  enum SuggestMode {
    MISSING
    POPULAR
    ALWAYS
  }

  type ElasticGraphQl {
    search(index: JSON,
      type: JSON,
      analyzer: String,
      analyze_wildcard: Boolean,
      ccs_minimize_roundtrips: Boolean,
      default_operator: DefaultOperator = OR,
      df: String,
      explain: Boolean,
      stored_fields: JSON,
      docvalue_fields: JSON,
      from: Float,
      ignore_unavailable: Boolean,
      ignore_throttled: Boolean,
      allow_no_indices: Boolean,
      expand_wildcards: ExpandWildcards = OPEN,
      lenient: Boolean,
      preference: String,
      q: String,
      routing: JSON,
      scroll: String,
      search_type: SearchType,
      size: Float,
      sort: JSON,
      _source: JSON,
      _source_excludes: JSON,
      _source_includes: JSON,
      terminate_after: Float,
      stats: JSON,
      suggest_field: String,
      suggest_mode: SuggestMode = MISSING,
      suggest_size: Float,
      suggest_text: String,
      timeout: String,
      track_scores: Boolean,
      track_total_hits: Boolean,
      allow_partial_search_results: Boolean,
      typed_keys: Boolean,
      version: Boolean,
      seq_no_primary_term: Boolean,
      request_cache: Boolean,
      batched_reduce_size: Float,
      max_concurrent_shard_requests: Float,
      pre_filter_shard_size: Float,
      rest_total_hits_as_int: Boolean,
      body: JSONObject): Response
  }

  type Query {
    elastic${url ? '' : '(url: String!)'}: ElasticGraphQl
  }
`;


module.exports = exportSchema;