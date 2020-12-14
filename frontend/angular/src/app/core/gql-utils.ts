import {Mutation, Query} from 'apollo-angular';


export const queryNames = (service: Mutation<any, any> | Query<any, any>) => {
  const definitions = service.document?.definitions;
  if (definitions && definitions.length) {
    return definitions.map(def => def.name?.value);
  }
  console.error('failed to find query names in', service);
  return [];
};
