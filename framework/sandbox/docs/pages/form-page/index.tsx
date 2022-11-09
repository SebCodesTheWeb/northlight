import React from 'react'
import {
  Blockquote,
  Button,
  Code,
  Divider,
  Form,
  H2,
  HStack,
  Link,
  P,
  Stack,
  TextField,
  VStack,
} from '../../../../lib'
import { Page } from '../../components'

const validation = (values: any) => {
  const errors: any = {}
  if (values.firstName === 'admin') {
    errors.firstName = {
      message: 'Nice try',
    }
  }
  return errors
}

const FormPage = () => (
  <Page
    title="Form"
    subtitle={ (
      <>
        <Blockquote>
          The Form Component is an abstraction of react-hook-form,
        </Blockquote>
        <P>
          It's main purpose is to initialize a form with the right state, and
          pass down the context to it's children to be used with our field
          components.
        </P>
      </>
    ) }
  >
    <Stack spacing={ 4 }>
      <H2>
        Our forms are built on{ ' ' }
        <Link
          color="blue.600"
          _hover={ { textDecoration: 'underline' } }
          href="https://react-hook-form.com/api"
          isExternal={ true }
        >
          React Hook Form
        </Link>
      </H2>
      <P>
        Mediatool uses one <strong>{ '<Form />' }</strong> Component{ ' ' }
      </P>
      <Code w="max-content" display="block" whiteSpace="pre">
        { `<Form
    initialValues={ {} }
    onSubmit={ () => {} }
  >
    {(methods) => {
      //FORM_FIELDS
    }}
</Form>
` }
      </Code>
      <Divider />
      <P>It takes the following props</P>
      <P>
        <strong>initialValues </strong>- this should contain an object with the
        name of the fields and their default values.
      </P>
      <P>
        <strong>onSubmit </strong>- This is a function on the form ( formValues
        ) { '=>' } void
      </P>
      <P>
        <strong>validate </strong>- This should be a function that
        returns an object with the form errors, look at the file validation
        in form-demo-page/validation to see how to write validation
      </P>
      <P>
        <strong>formSettings </strong>
        - This can be used to customize the form, look at <br />
        <Link
          href="https://react-hook-form.com/api/useform"
          color="blue.600"
          _hover={ { textDecoration: 'underline' } }
          isExternal={ true }
        >
          React Hook Form useForm Docs
        </Link>
        , all the options you can pass down to useForm, you can pass down to
        formSettings,
      </P>
      <P>
        <strong>children </strong>
        - Any valid JSX, can also be types as a function on the form <br />
        (methods) { '=>' } (JSX), where methods contain the form context,
        and is equivalent to the return value of useForm
      </P>
      <P>
        <strong>enableReinitialize </strong>
        Just as in formik, this uses a useEffect hook to
        reinitalize the form every time the initialValues change using a deep compare
      </P>
      <P>
        <strong>methods </strong>
        - In the edge case that you need to initialize the form with the useForm
        hook outside of the Form component, <br />
        you can initalize the form as usual and pass down your custom methods as
        a prop.
      </P>
      <Divider />
      <HStack spacing={ 8 } alignItems="start">
        <Stack>
          <Blockquote>Example 1</Blockquote>
          <P>This is recommended</P>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `const validation = (values: any) => {
  const errors: any = {}
  if (values.firstName === 'admin') {
    errors.firstName = {
      message: 'Nice try',
    }
  }
  return errors
}

<Form
  initialValues={ { firstName: '' } }
  onSubmit={ (values) => { console.log(values) } }
  formSettings={ {
    mode: 'onSubmit',
  } }
  validate={ validation }
>
  <HStack alignItems="end" w="300px">
    <TextField
      name="firstName"
      label="First Name"
      isRequired={ true }
    />
    <Button type="submit" variant="success">Validate</Button>
  </HStack>
</Form>
` }
          </Code>
        </Stack>
        <Stack>
          <Blockquote>Example 2</Blockquote>
          <P>This accomplishes the same thing but with methods prop</P>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `import { useForm } from '@mediatool/ui'
const validation = (values: any) => {
  const errors: any = {}
  if (values.firstName === 'admin') {
    errors.firstName = {
      message: 'Nice try',
    }
  }
  return errors
}

const methods = useForm({
  defaultValues: {firstName: ''},
  mode: 'onSubmit',
  resolver: (values) => {
    values,
    errors: validation
  }
})

<Form
  onSubmit={ (values) => { console.log(values) } }
  methods={ methods }
>
  <HStack alignItems="end" w="300px">
    <TextField
      name="firstName"
      label="First Name"
      isRequired={ true }
    />
    <Button type="submit" variant="success">Validate</Button>
  </HStack>
</Form>
` }
          </Code>
        </Stack>
      </HStack>
      <Divider />
      <Form
        initialValues={ { firstName: '' } }
        onSubmit={ () => {} }
        formSettings={ {
          mode: 'onSubmit',
        } }
        validate={ validation }
      >
        <Stack w="300px">
          <TextField name="firstName" label="First Name" isRequired={ true } />
          <Button type="submit" variant="success">
            Validate
          </Button>
        </Stack>
      </Form>
      <VStack w="50%" spacing={ 4 }>
        <P>
          Both example 1 and example 2 yield the same above field,
          but the difference being in the scope of the state,
          in example 2 the form state can be accessed throughtout the entire component,
          and not just as a child within the { '<Form> tag' }.
        </P>
        <P>
          Example 1 is still recommended however because it abstracts more away
          which makes it easier for future changes, example 2 should be used just when needed.
        </P>
      </VStack>
    </Stack>
  </Page>
)

export default FormPage
