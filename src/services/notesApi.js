export const createNote = note => {
  return Promise.resolve({
    _id: 'TestId',
    ...note
  });
};
