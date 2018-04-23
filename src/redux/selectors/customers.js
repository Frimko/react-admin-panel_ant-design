/**
 * Created by Frimko on 23.04.2018.
 * mailto ccc-car@yandex.ru.
 */

import { createSelector } from 'reselect'

const customersItemsSelector = state => state.customers

export const items = createSelector(
  customersItemsSelector,
  (customers) => customers.items
)

export const pagesCount = createSelector(
  customersItemsSelector,
  (customers) => customers.pages
)
