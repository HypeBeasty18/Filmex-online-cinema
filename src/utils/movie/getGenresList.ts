export const getGenreslist = (index: number, length: number, name: string) => {
  return index + 1 === length ? name : name + ',';
}