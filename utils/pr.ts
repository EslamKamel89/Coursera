export default function pr<T>(value: T, title: string | null = null) {
  console.log("_/\\_".repeat(2) + (title ?? "") + "_/\\_".repeat(2));
  console.log(value);
  return value;
}
