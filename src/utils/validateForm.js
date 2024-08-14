export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
    const isValidName = /^\w+/.test(name);
    let message = [];
    if(!isEmailValid) message.push("Email ID is not valid !!");
    if(!isValidPassword) message.push("Password is not valid !!");
    if(name !== undefined && !isValidName) message.push("Full Name is not valid !!");
    return message;
}