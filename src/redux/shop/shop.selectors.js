import { createSelector } from 'reselect';

// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }//write a object to make the string find the id
//if change shop data into object then it would be unnecessary

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
    [selectCollections],
    collections => collections ? Object.keys(collections).map( key => collections[key]) : []
);

export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
);//if shop data is object, find()&id_map would be unnecessary

export const selectCollectionsFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);