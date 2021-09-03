const allModules = (r: FixMeAny) => r.keys().map((key: string) => r(key));

export const getAllModules = (requireContextModules: FixMeAny) =>
  allModules(requireContextModules).filter(
    (module: FixMeAny) => module.moduleName,
  );

export const getAllSlices = (requireContextModules: FixMeAny) =>
  Object.fromEntries(
    getAllModules(requireContextModules).map((module: FixMeAny) => [
      module.moduleName,
      module.reducer,
    ]),
  );

export const getAllModuleSagas = (requireContextModules: FixMeAny) => {
  const buildSaga = (module: FixMeAny) => module.saga;

  return getAllModules(requireContextModules)
    .filter((module: FixMeAny) => module.saga)
    .map(buildSaga)
    .map((s: FixMeAny) => Object.values(s));
};

export const getRequireContextSlices = () =>
  // @ts-ignore
  require.context('@src/slices/', true, /index.ts$/);
