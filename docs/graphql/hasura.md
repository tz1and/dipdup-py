# Hasura integration

DipDup uses this optional section to configure the Hasura engine to track your tables automatically.

```yaml
hasura:
  url: http://hasura:8080
  admin_secret: ${HASURA_ADMIN_SECRET:-changeme}
```

Under the hood, DipDup generates Hasura metadata from your DB schema and applies it using [Metadata API](https://hasura.io/docs/latest/graphql/core/api-reference/metadata-api/index.html).

Hasura metadata is all about data representation in GraphQL API. The structure of the database itself is managed solely by Tortoise ORM.

Metadata configuration is idempotent: each time you call `run` or `hasura configure` command, DipDup queries the existing schema and does the merge if required. DipDup configures Hasura after reindexing, saves the hash of resulting metadata in the `dipdup_schema` table, and doesn't touch Hasura until needed.

## Database limitations

The current version of Hasura GraphQL Engine treats `public` and other schemas differently. Table `schema.customer` becomes `schema_customer` root field (or `schemaCustomer` if `camel_case` option is enabled in DipDup config). Table `public.customer` becomes `customer` field, without schema prefix. There's no way to remove this prefix for now. You can track related [issue (opens new window)](https://github.com/hasura/graphql-engine/issues/5394)at Hasura's GitHub to know when the situation will change. Since 3.0.0-rc1, DipDup enforces `public` schema name to avoid ambiguity and issues with the GenQL library. You can still use any schema name if Hasura integration is not enabled.

## Authentication

DipDup sets read-only permissions for all tables and enables non-authorized access to the `/graphql` endpoint.

## Limit the number of rows

DipDup creates `user` role that allows performing queries without authorization. Now you can limit the maximum number of rows such queries return and also disable aggregation queries automatically generated by Hasura:

```yaml
hasura:
  select_limit: 100
```

Note that with limits enabled, you have to use either offset or cursor-based pagination on the client-side.

## Disable aggregation queries

```yaml
hasura:
  allow_aggregations: False
```

## Convert field names to camel case

For those of you from the JavaScript world, it may be more familiar to use _camelCase_ for variable names instead of _snake\_case_ Hasura uses by default. DipDup now allows to convert all fields in metadata to this casing:

```yaml
hasura:
  camel_case: true
```

Now this example query to hic et nunc demo indexer...

```graphql
query MyQuery {
  hic_et_nunc_token(limit: 1) {
    id
    creator_id
  }
}
```

...will become this one:

```graphql
query MyQuery {
  hicEtNuncToken(limit: 1) {
    id
    creatorId
  }
}
```

All fields auto generated by Hasura will be renamed accordingly: `hic_et_nunc_token_by_pk` to `hicEtNuncTokenByPk`, `delete_hic_et_nunc_token` to `deleteHicEtNuncToken` and so on. To return to defaults, set `camel_case` to False and run `hasura configure --force`.

Keep in mind that "camelcasing" is a separate stage performed after all tables are registered. So during configuration, you can observe fields in `snake_case` for several seconds even if `hasura.camel_case` flag is set.

> 🤓 **SEE ALSO**
>
> * {{ #summary config/hasura.md }}
> * {{ #summary cli-reference.md#hasura-configure }}