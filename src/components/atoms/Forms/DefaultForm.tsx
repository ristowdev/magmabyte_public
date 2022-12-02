import { makeValidate } from 'mui-rff';
import React, { ReactNode, Ref } from 'react';
import { Form, FormRenderProps } from 'react-final-form';
import { AnySchema } from 'yup';
import * as yup from 'yup';
import { FormApi } from 'final-form';
import { isEmpty } from 'lodash';

interface IDefaultFormProps {
    schema?: AnySchema;
    saveClicked?: boolean;
    handleLeave?: boolean;
    children: ReactNode;
    onSubmit: (values: any, form?: FormApi<any, any>) => void;
    initialValues?: any;
    resetAfterSubmit?: boolean;
    // ref?:React.ForwardedRef<HTMLUListElement> ;
}

const DefaultForm = ({
    onSubmit,
    schema = yup.object({}),
    children,
    initialValues = {},
    resetAfterSubmit = false,
    saveClicked = false,
    handleLeave = false,
}: IDefaultFormProps) => {

    const validate = makeValidate(schema);
    return (
        <Form
            validate={validate}
            onSubmit={onSubmit}
            initialValues={initialValues}
            render={({ handleSubmit, form, errors, dirty }: FormRenderProps): ReactNode => (
                <form
                    onSubmit={event => {
                        handleSubmit(event);
                        // if (resetAfterSubmit) form.reset();
                        if (errors) {
                            // alert(JSON.stringify(errors))
                        }
                    }}
                    style={{ height: '100%' }}
                >
                    {children}
                </form>
            )}
        />
    );
};

export default DefaultForm;
