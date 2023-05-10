export const typePokemon = (data) => {
  const nameTypeReapet = [];
  data.forEach((element) => {
    element.type.forEach((singleType) => {
      !nameTypeReapet.includes(singleType.type.name) &&
        nameTypeReapet.push(singleType.type.name);
    });
  });
  return nameTypeReapet;
};
