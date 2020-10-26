# Elastic-GraphQL
This module works as a partial replacement for the [graphql-compose-elasticsearch](https://github.com/graphql-compose/graphql-compose-elasticsearch). By the time of developing, we were willing to integrate that module in our solution (at least the search function) but it was presenting some [issues](https://github.com/graphql-compose/graphql-compose-elasticsearch/issues/115). Instead, we derived a GraphQL schema based on the [Elasticsearch Node.js client docs](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/7.x/api-reference.html#_search) for the search functionality as well as examples shown in the graphql-compose-elasticsearch page.

The structure of this module in turn followed a previous solution that we developed to wrap the Prometheus REST API ([Prom-Graphql](https://github.com/carloszimm/prom-graphql)).

## Examples
![GraphiQL - Elastic](https://user-images.githubusercontent.com/4553211/97095959-1a4c7800-163c-11eb-9758-c5a8a8da5888.png)
