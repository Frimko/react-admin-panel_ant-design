/**
 * Created by Frimko on 02.05.2018.
 * mailto ccc-car@yandex.ru.
 */
import { normalize } from 'normalizr';


/**
 * Recursively flatten the data
 * [{path:string},{path:string}] => {path,path2}
 * @param  menu
 */
export const getFlatMenuKeys = menu =>
  menu.reduce((keys, item) => {
    keys.push(item.path);
    if (item.children) {
      return keys.concat(getFlatMenuKeys(item.children));
    }
    return keys;
  }, []);

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
