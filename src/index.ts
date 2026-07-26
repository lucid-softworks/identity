/** Returns `value` unchanged while preserving its precise type. */
export function identity<TValue>(value: TValue): TValue {
  return value;
}
