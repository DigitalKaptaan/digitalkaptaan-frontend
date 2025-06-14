type HomeSection<T> = {
  type: string;
  data: T;
};

export function getSectionData<T>(
  data: HomeSection<T>[],
  sectionType: string
): HomeSection<T> | undefined {
  return data.find((item) => item.type === sectionType);
}
