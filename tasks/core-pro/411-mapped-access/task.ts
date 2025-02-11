type PagesMap = {
  homepage: string;
  about: string;
  contact: string;
};

type PagesAccess<T> = {
  [K in keyof T]: boolean;
};

export function checkAccess(map: PagesMap): PagesAccess<PagesMap> {
  return Object.keys(map).reduce((access, key) => {
    access[key as keyof PagesMap] = !!map[key as keyof PagesMap];
    return access;
  }, {} as PagesAccess<PagesMap>)
}