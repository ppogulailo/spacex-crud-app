const REQUIRED_FIELD = 'Required to fill';

export const searchValidation = {
  required: REQUIRED_FIELD,
  validate: (value: string) => {
    if (value.match(/[а-яА-Я]/) != null) {
      return 'Only English must be in the box';
    }
    if (value.trim() === '') {
      return 'The field needs to be filled';
    }
    return true;
  },
};
