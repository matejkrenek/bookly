// handle errors function
const handleErrors = (err) => {
    console.log(err.message, err.code)
    const errors = {
        username: '',
        email: '',
        password: '',
        agreement: ''
    }

    // incorrect email
    if(err.message === 'incorrect email'){
        errors.email = 'Email address is incorrect'
    }

    // incorrect password
    if(err.message === 'incorrect password'){
        errors.password = 'Password is incorrect'
    }

    // Duplicated error
    if(err.code === 11000){
        for(const prop in errors){
            if(err.message.includes(prop)){
                errors[prop] = `User with this ${prop} already exists`
            }
        }
        return errors
    }

    if(err.message.includes('user validation failed')){
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        })
    }

    return errors
}

module.exports = { 
    handleErrors,
}