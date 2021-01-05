import { createSelector } from 'reselect';

import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key]) //mapping through object with the key:value search, since we can't map through array now, since its nonexistent, and we changed it to an object. at the shop.data.
);



export const selectCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam])
);