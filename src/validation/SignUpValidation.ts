import * as Yup from "yup"


export const SIGN_UP_VALIDATION = Yup.object().shape({
    firstname:Yup.string().required('required'),
    lastname: Yup.string().required('required'),
    termsOfService: Yup.boolean()
        .oneOf([true], 'The terms and conditions must be accepted.')
        .required('The terms and conditions must be accepted.'),
})
