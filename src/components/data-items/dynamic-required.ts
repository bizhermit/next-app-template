export const dynamicRequired = (
  required: true | ((params: DataItem.ValidationProps<any>) => boolean),
  func: DataItem.Validation<DataItem.$object>,
): DataItem.Validation<DataItem.$object> => {
  if (typeof required === "function") {
    return (p) => {
      if (!(p.dataItem.required as ((params: DataItem.ValidationProps<any>) => boolean))(p)) return undefined;
      return func(p);
    };
  }
  return func;
};
