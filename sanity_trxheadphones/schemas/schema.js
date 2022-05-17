import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import banner from './banner'
import product from './product'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([banner,product]),
})
