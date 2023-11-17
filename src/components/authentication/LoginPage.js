import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: '', email: '' }}
      onSubmit={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const alertMessage = JSON.stringify(values, null, 2);
        alert(alertMessage);

        // Use navigate function to go to "/"
        navigate('/');
      }}
    >
      <Form>
        <Field name="name" type="text" />
        <Field name="email" type="email" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default LoginPage;
