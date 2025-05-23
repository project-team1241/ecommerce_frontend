export const validatesignin = (email, password, fullName = null) => {
    const isRegister = fullName !== null;

    if (isRegister && !fullName.trim()) {
        return "Name should not be empty";
    }

    if (!email) {
        return "Email should not be empty";
    }

    if (!password) {
        return "Password should not be empty";
    }

    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!emailValid) {
        return "Invalid Email";
    }

    if (!passwordValid) {
        return "Invalid password";
    }

    return null;
};

