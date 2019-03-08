import * as validate from 'mongoose-validator';
const visLength = validate;
const visAlphanumeric = validate;
const visEmail = validate;

const isLength2to10 = ()=> visLength({
    validator: 'isLength',
    arguments: [2, 10],
    message: 'El nombre de usuario debe estar entre {ARGS[0]} y {ARGS[1]} caracteres'
});

const isLength6to10 = ()=> visLength({
    validator: 'isLength',
    arguments: [6, 10],
    message: 'El nombre de usuario debe estar entre {ARGS[0]} y {ARGS[1]} caracteres'
});

const isAlphanumeric = ()=> visAlphanumeric({
    validator: 'isAlphanumeric',
    message: 'El nombre de usuario debe ser alfanumerico'
});

const isEmail = ()=> visEmail({
    validator: 'isEmail',
    message: 'Inruduce un email de formato valido'
});


const validators = {
    isLength2to10,
    isLength6to10,
    isAlphanumeric,
    isEmail
}

export default validators;