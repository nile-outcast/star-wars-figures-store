import * as Yup from 'yup'

export const PreOrderSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
})
