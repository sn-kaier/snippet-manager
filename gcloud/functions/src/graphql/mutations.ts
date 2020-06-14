export const addUser = `
 mutation AddUser($uid: String, $photoURL: String) {
  addUser(objects: [{authId: $uid, name: "", imageUrl: $photoURL}]) {
    affected_rows
  }
}
`;
