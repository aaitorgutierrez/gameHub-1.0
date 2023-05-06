export const typePokemon = (data) => {
  const nameTypeReapet = [];
  data.forEach((element, index) => {
    element.type.forEach((singleType, index) => {
      !nameTypeReapet.includes(singleType.type.name) &&
        nameTypeReapet.push(singleType.type.name);
    });
  });
  return nameTypeReapet;
};
