const resolvers = {
  Mutation: {
   createLink: (_: any, data: any) => {
     return data;
   },
  },
  Query: {
    allLinks: () => '123',
  },
};
export default resolvers;
