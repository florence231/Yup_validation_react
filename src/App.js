import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import FormInput from './form';

function App() {
  return (
    <Formik
      initialValues={{ tache: '', nom: '' }}

      validationSchema={Yup.object({
        tache: Yup.string().max(10, 'La tache est trop longue').required('Required'),
        nom: Yup.string().min(3, '3 caractere minimum requis').required('Required'),
      })} >
      {formik => {
        return <FormInput names={['tache', 'nom']} formik={formik} />
      }}
    </Formik>
  );

}

export default App;
