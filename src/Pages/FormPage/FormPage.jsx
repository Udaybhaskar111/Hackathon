import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../Components/Common/InputField/InputField';
import { Button } from '../../Components/Common/Button/Button';
import { Select } from '../../Components/Common/SelectField/SelectField';
import { constants } from '../../Constants/Constant';
import { useNavigate } from 'react-router';
import styles from './FormPage.module.scss';
export default function FormPage() {
  const navigate = useNavigate();
  const Form = useForm({
    defaultValues: {
      dataProducts: '',
      dataQuality: '',
      sourceType: '',
      description: '',
      domain: '',
    },
    mode: 'onBlur',
  });
  const { register, handleSubmit, formState, control } = Form;
  const { errors } = formState;
  const setData = (data) => {
    console.log(data, 'gott the data');
  };
  const handleFun = () => {
    return navigate('/');
  };
  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit(setData)}>
          <div className={styles.container}>
            <div>
              <Input
                label="dataProducts"
                register={register('dataProducts', {
                  required: 'dataProducts are mandatory',
                })}
                errors={errors.dataProducts?.message}
              />
            </div>
            <div>
              <Input
                label="dataQuality"
                register={register('dataQuality', {
                  required: '*dataQuality is mandatory',
                })}
                errors={errors.dataQuality?.message}
              />
            </div>
          </div>
          <div className={styles.container}>
            <div>
              <Input
                label="sourceType"
                register={register('sourceType', {
                  required: '*sourceType is mandatory',
                })}
                errors={errors.sourceType?.message}
              />
            </div>
            <div>
              <Select
                label="please select"
                fieldname="domain"
                options={constants.fields}
                register={register('domain', {
                  required: '*domain is mandatory',
                })}
                errors={errors.domain?.message}
              ></Select>
            </div>
          </div>
          <div>
            <Input
              label="description"
              register={register('description', {
                required: '*description is mandatory',
              })}
              errors={errors.description?.message}
            />
          </div>
          <div>
            <Button type="submit" label="Submit" />
          </div>
        </form>
        <div>
          <Button type="text" label="Cancel" handle={handleFun} />
        </div>
      </div>
    </>
  );
}
