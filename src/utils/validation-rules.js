const isNotEmpty = {
    apply: (value) => value?.trim()?.length > 0,
    errorMessage: 'Cannot be empty'
};

const isEmail = {
    apply: (value) => value?.indexOf('@') >= 0,
    errorMessage: 'Must be a valid email'
};

export {isNotEmpty, isEmail};