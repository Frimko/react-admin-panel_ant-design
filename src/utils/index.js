/**
 * Created by Frimko on 02.05.2018.
 * mailto ccc-car@yandex.ru.
 */
import { normalize } from 'normalizr';

/**
 *
 * @param data - array
 * @param name - name schema
 * @param schema
 * @returns {*}
 */
export function normalizeData(data, name, schema) {
  if (!data || !data.length) {
    return {
      byId: {},
      ids: [],
    };
  }

  const normalized = normalize(data, [schema]);

  return {
    byId: normalized.entities[name],
    ids: normalized.result,
  };
}
