import * as Yup from 'yup';

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Please enter a valid email')
        .required('Email is required')
        .matches(EMAIL_REGEX, 'Invalid email address'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
});

export const signUpValidationSchema = Yup.object().shape({
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .matches(/[0-9]/, 'Password requires a number')
        .required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Confirm Password is required'),
    phone_number: Yup.string()
        .required('Phone number is required')
        .matches(/^\+[1-9]\d{1,14}$/, 'Phone number must be in international format')
})

export const emailValidationSchema = Yup.object().shape({
    email: Yup.string()
        .trim()
        .required('Email is required')
        .email('Please enter a valid email address')
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            'Invalid email address'
        ),
});

export const editProfileValidationSchema = Yup.object().shape({
    firstName: Yup.string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters')
        .max(50, 'First name must be less than 50 characters'),

    lastName: Yup.string()
        .required('Last name is required')
        .min(2, 'Last name must be at least 2 characters')
        .max(50, 'Last name must be less than 50 characters'),

    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

    phone: Yup.string()
        .matches(/^[0-9+\-\s()]*$/, 'Invalid phone number')
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must be less than 15 digits'),

    oldPassword: Yup.string()
        .min(6, 'Old password must be at least 6 characters'),

    newPassword: Yup.string()
        .min(6, 'New password must be at least 6 characters'),

    confirmPassword: Yup.string()
        .min(6, 'Confirm password must be at least 6 characters')
});

export const AddMemberSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name must be at least 2 characters')
        .required('Name is required'),
    relation: Yup.string()
        .required('Relation is required'),
});