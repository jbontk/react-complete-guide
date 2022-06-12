
export const cleanMongoObject = (obj) => {
    if (obj?._id) {
        const id = obj._id.toString();
        delete obj._id;
        return {...obj, id};
    }

    return obj;
};