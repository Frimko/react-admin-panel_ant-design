/**
 * Created by Frimko on 23.04.2018.
 * mailto ccc-car@yandex.ru.
 */

import { createSelector } from 'reselect';

export const customersItemsSelector = state => state.customers.table;

export const getError = createSelector(
  customersItemsSelector,
  (table) => {
    return table.errorText;
  }
);
export const byId = createSelector(
  customersItemsSelector,
  (table) => {
    return table.items.byId;
  }
);

export const ids = createSelector(
  customersItemsSelector,
  (table) => {
    return table.items.ids;
  }
);

export const items = createSelector(
  ids,
  byId,
  (ids, byId) => {
    return ids.map(id => byId[id]);
  }
);

export const pagesCount = createSelector(
  customersItemsSelector,
  (customers) => customers.pageCount
);
