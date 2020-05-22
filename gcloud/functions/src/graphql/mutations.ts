export const addUser = `
 mutation AddUser($uid: String, $name: String, $photoURL: String) {
  addUser(objects: [{authId: $uid, name: $name, imageUrl: $photoURL}]) {
    affected_rows
  }
}
`;
