import React from 'react';
import {useForm} from "react-hook-form";
import { Input } from '../../Components/Common/InputField/InputField';
import { Button } from '../../Components/Common/Button/Button';
import { Select } from '../../Components/Common/SelectField/SelectField';
import { constants } from '../../Constants/Constant';
import { useNavigate } from 'react-router';
import Header from '../../Components/Common/Header/Header';
import './FormPage.scss';
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
      <Header />
      
      <div>
      <h1 className='heading'>Add Products</h1>
        <form onSubmit={handleSubmit(setData)} className="form">
          <div className='form__details'>
            <div className='form__details-row'>
                <div className='form__details-inp'>
                    <Input
                        label="dataProducts"
                        register={register('dataProducts', {
                        required: '*dataProducts are mandatory', 
                        })}
                        errors={errors.dataProducts?.message}
                    /> 
                </div>
                <div className='form__details-inp'>
                <Input
                label="description"
                register={register('description', {
                    required: '*description is mandatory',
                })}
                errors={errors.description?.message}
                />
            </div>
            </div>



                <div className='form__details-row'>
                    <div className='form__details-inp'>
                    <Input
                        label="dataQuality"
                        register={register('dataQuality', {
                        required: '*dataQuality is mandatory',
                        })}
                        errors={errors.dataQuality?.message}
                    />
                    </div>
                    <div className='form__details-inp'>
                    <Input
                        label="sourceType"
                        register={register('sourceType', {
                        required: '*sourceType is mandatory',
                        })}
                        errors={errors.sourceType?.message}
                    />
                    </div>
                </div>
          </div>
          <div className="form__details">
            <div className='form__details-row'>
            <div className='form__details-select'>
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
          </div>
         
            <div className='buttons'>
                <button type="submit" className="button__submit">Submit</button>
                <button type="text" handle={handleFun} className="button__cancel">Cancel</button>

            </div>
            </form>
            <div>
            </div>
      </div>
    </>
  );
}
