export default function (id) {
  const y = Math.floor(id / 30);
  const x = id - (y * 30);
  return [x, y];
}
