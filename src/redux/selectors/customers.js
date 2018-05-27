/**
 * Created by Frimko on 23.04.2018.
 * mailto ccc-car@yandex.ru.
 */

import { createSelector } from 'reselect';

const customersItemsSelector = state => state.customers;

export const items = createSelector(
  customersItemsSelector,
  (customers) => {
    console.log('customers', customers);
    console.log('customers.items', customers.items);
    return customers.items.ids.map(id => customers.items.byId[id]);
  }
);

export const pagesCount = createSelector(
  customersItemsSelector,
  (customers) => customers.pageCount
);
