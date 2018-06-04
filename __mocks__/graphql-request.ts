export const GraphQLClient = jest.fn().mockImplementation(() => {
  return { request: async () => jest.fn() };
});
