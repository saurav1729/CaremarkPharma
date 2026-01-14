import React, { useContext, useState } from 'react';
import BasicInfo from './Sections/BasicInfo';
import PricingInfo from './Sections/PricingInfo';
import DetailsAndUsage from './Sections/DetailAndUsages';
import ManufacturerAndBatch from './Sections/ManufacturerAndBatch';
import FormNavigation from './FormNavigation';
import FormReview from './FormReview';
import Alert from '../../../../microinteraction/Alert';
import axios from 'axios';
import AuthContext from '../../../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { api } from '../../../service';
import MicroLoad from '../../../../microinteraction/MicroLoad';

const initialProduct = {
  name: '',
  category:'tablets', 
  composition: '',
  price: {
    original: 0,
    discounted: 0,
    discount_percentage: 0,
    includes_taxes: true,
  },
  package_size: '10 Capsules',
  package_size_ml:'100 ml', 
  stock_quantity: 0,
  description: { short: '', long: '' },
  usage: { dosage: 'As directed by the physician', instructions: 'Take this medication by mouth as directed by your doctor. Do not increase your dose or use this drug more often or for longer than prescribed.', side_effects: '', precautions: '' },
  manufacturer_details: { name: '', address: '', license: '' },
  batch_info: { number: '1234', manufacturing_date: '', expiry_date: '' },
  prescription_required: true,
  availability: 'in stock',
  images: [],
  related_products:[], 
  details: { authenticity: '100% authentic product', shipping: 'Free shipping', return_policy: '7 days return policy' },
  storage: 'Store in a cool, dry & dark place. Protect from direct sunlight. Keep medicine out of reach of children. Do not chew or crush the capsule. It should be swallowed whole.',
  marketing: { company: 'Caremark Pharmaceutical', address: 'Mantra City, Ranipur Range, Haridwar, Uttrakhand, Pin-249403' },
};

const MultiStepProductForm = () => {
  const [product, setProduct] = useState(initialProduct);
  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});
  const [alertProps, setAlertProps] = useState(null);
  const authctx = useContext(AuthContext);
  const navigate = useNavigate(); 
  const location = useLocation();
  const[isLoading, setLoad]=useState(false); 

  useEffect(() => {
    if (location.state && location.state.product) {
      setProduct(location.state.product);
    }
  }, [location]);

  const steps = [
    { name: 'Basic Info', component: BasicInfo, validate: validateBasicInfo },
    { name: 'Pricing', component: PricingInfo, validate: validatePricingInfo },
    { name: 'Details & Usage', component: DetailsAndUsage, validate: validateDetailsAndUsage },
    { name: 'Manufacturer & Batch', component: ManufacturerAndBatch, validate: validateManufacturerAndBatch },
    { name: 'Review', component: FormReview }
  ];

  const handleChange = (e, section = null, subsection = null) => {
    const { name, value, type, checked } = e.target;
    setProduct(prevProduct => {
      if (section) {
        if (subsection) {
          return { ...prevProduct, [section]: { ...prevProduct[section], [subsection]: { ...prevProduct[section][subsection], [name]: type === 'checkbox' ? checked : value } } };
        }
        return { ...prevProduct, [section]: { ...prevProduct[section], [name]: type === 'checkbox' ? checked : value } };
      }
      return { ...prevProduct, [name]: type === 'checkbox' ? checked : value };
    });
  };
  
  const handleSubmit = async (e) => {
    setLoad(true); 
    e.preventDefault();
    if (validateForm()) {
      
      try {

        const formData = new FormData();
        formData.append('product', JSON.stringify(product)); 
        if (product.images && product.images.length > 0) {
          product.images.forEach((image, index) => {
            // If the image is a file, append it
            if (image.file) {
              formData.append('images', image.file);
            }
            // If the image is a URL, append it
            // if (image.url) {
            //   formData.append('imageUrls', image.url);
            // }
          });
        }
          const API_URL = "http://localhost:5000/api/product"
          const token = authctx.token;
        let response; 
        if (product._id) {
          response = await api.put(`/api/product/updateProduct/${product._id}`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
            },
            withCredentials: true,
          });
        } else {
          response = await api.post(`/api/product/addProduct`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Authorization': `Bearer ${token}`,
            },
            withCredentials: true,
          });
        }


        if (!response.status===200||!response.status===201) {
          throw new Error(`Failed to ${product._id ? 'update' : 'add'} product`);
        }

        if (response.status === 200 || response.status === 201) {
          setAlertProps({ type: 'success', message: `Product ${product._id ? 'updated' : 'added'} successfully!` });
          setTimeout(() => {
            setLoad(false); 
            navigate('/admin/products');
          }, 4000); // Navigate after 2 seconds
        } else {
          throw new Error(`Failed to ${product._id ? 'update' : 'add'} product`);
        }
        // setAlertProps({ type: 'success', message: 'Product saved successfully!' });
      } catch (error) {
        // console.error('Error saving product:', error);
        console.error(`Error ${product._id ? 'updating' : 'adding'} product:`, error);
        setAlertProps({ type: 'error', message: `Failed to ${product._id ? 'update' : 'add'} product. Please try again.` });
    
        // setAlertProps({ type: 'error', message: 'Failed to save product. Please try again.' });
      }
    } else {
      setAlertProps({ type: 'error', message: 'Please correct the errors before submitting.' });
    
    }
  };

  const validateForm = () => {
    for (let i = 0; i < steps.length - 1; i++) {
      const stepErrors = steps[i].validate(product);
      if (Object.keys(stepErrors).length > 0) {
        setCurrentStep(i);
        setErrors(stepErrors);
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    const stepErrors = steps[currentStep].validate(product);
    if (Object.keys(stepErrors).length === 0) {
      setCurrentStep(currentStep + 1);
      setErrors({});
    } else {
      setErrors(stepErrors);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <div className="max-w-[90%] mx-auto ">
      <FormNavigation steps={steps} currentStep={currentStep} />
      <form className="bg-gray-300 shadow-sm shadow-blue-400 rounded px-4 pt-4 pb-4 mb-4">
        <CurrentStepComponent product={product} handleChange={handleChange} errors={errors} />
        <div   className={`flex mt-4 ${
    currentStep > 0 ? 'justify-between' : 'justify-end'
  }`}>
          {currentStep > 0 && (
            <button type="button" onClick={prevStep} className="bg-gray-400 hover:bg-gray-500 text-gray-800  font-bold py-2 px-4 rounded-md">
              Previous
            </button>
          )}
          {currentStep < steps.length - 1 ? (
            <button type="button" onClick={nextStep} className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded">
              Next
            </button>
          ) : (
            <button type="button" onClick={handleSubmit} className="bg-green-700 flex justify-center items-center w-[10rem] hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            {isLoading?<MicroLoad/>:(product._id ? 'Update Product' : 'Submit')}
            </button>
          )}
        </div>
      </form>
      {alertProps && <Alert {...alertProps} />}
    </div>
  );
};

export default MultiStepProductForm;

function validateBasicInfo(product) {
  const errors = {};
  if (!product.name) errors.name = 'Name is required';
  if (!product.category) errors.category = 'category is required';
  if (!product.composition) errors.composition = 'Composition is required';
  if(!product.package_size) errors.package_size='Package size is required'; 
  if(!product.availability) errors.availability='Availability field is required'; 
  if(!product.images || product.images.length === 0) errors.images ='At least one image is required'; 
  return errors;
}

function validatePricingInfo(product) {
  const errors = {};
  if (product.price.original <= 0) errors['price.original'] = 'Original price must be greater than 0';
  if (product.price.discount_percentage < 0 || product.price.discount_percentage > 100) errors['price.discount_percentage'] = 'Discount percentage must be between 0 and 100';
  return errors;
}

function validateDetailsAndUsage(product) {
  const errors = {};
  if (!product.description.short) errors['description.short'] = 'Short description is required';
  if (!product.description.long) errors['description.long'] = 'Long description is required';
  return errors;
}

function validateManufacturerAndBatch(product) {
  const errors = {};
  if (!product.manufacturer_details.name) errors['manufacturer_details.name'] = 'Manufacturer name is required';
  if (!product.batch_info.number) errors['batch_info.number'] = 'Batch number is required';
  if (!product.batch_info.expiry_date) errors['batch_info.expiry_date'] = 'Expiry date is required';
  return errors;
}
