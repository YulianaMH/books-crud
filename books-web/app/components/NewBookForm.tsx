import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

interface NewBookFormProps {
  onSubmit: (values: any) => void;
}

const NewBookForm: React.FC<NewBookFormProps> = ({ onSubmit }) => {
  const [error, setError] = useState<string | null>(null);

  return (
    <Formik initialValues={{ title: '', author: '', editorial: '', status: 'In Stock' }} onSubmit={async (values, { resetForm }) => {
      try {
        setError(null);
        await onSubmit(values);
        resetForm();
      } catch (error) {
        console.log('Error submitting the form. ', error);
        setError('Error submitting the form. Please try again.');
      }
    }}>
      <Form>
        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field type="text" id="title" name="title" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <Field type="text" id="author" name="author" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="editorial">Editorial</label>
          <Field type="text" id="editorial" name="editorial" className="form-control" required />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <Field as="select" id="status" name="status" className="form-control" required>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </Field>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default NewBookForm;
