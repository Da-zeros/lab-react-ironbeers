import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import Header from '../components/Header'


const NewBeer = () => {
  
  const navigate = useNavigate(); 

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    tagline: Yup.string().required("Required"),
    description : Yup.string().required("Required"),
    first_brewed: Yup.string().required("Required"),
    brewers_tips: Yup.string().required("Required"),
    attenuation_level: Yup.number().required().positive().integer("Debe ser un entero"),
    contributed_by: Yup.string().required("Required")
  })

  const initialValues = {
    name: "",
    tagline : "",
    description: "",
    first_brewed: "",
    brewers_tips: "",
    attenuation_level: "",
    contributed_by:""
  }

  const onSubmit = async values=>{
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new",values)
    navigate('/')
  }    
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues, 
    validationSchema,
    onSubmit,
  });

    
    
  return (
    <>
    <Header />
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-goup">
        <label>Name</label>
        <input 
          name="name"
        
          onChange={handleChange}
          value={values.name}
          placeholder="name"/>
          {errors.name ? errors.name : null}
      </div>
     <div className="form-goup">
        <label>Tagline</label>
        <input 
          name="tagline"
          onChange={handleChange}
          value={values.tagline}
          placeholder="tagline"/>
          {errors.tagline ? errors.tagline : null}
      </div>
      <div className="form-goup">
        <label>Description</label>
        <input 
          name="description"
          onChange={handleChange}
          value={values.description}
          placeholder="Description"/>
          {errors.description ? errors.description : null}
      </div>
       <div className="form-goup">
        <label>First Brewed</label>
        <input 
          name="first_brewed"
          onChange={handleChange}
          value={values.first_brewed}
          placeholder="First"/>
          {errors.first_brewed ? errors.first_brewed : null}
      </div>
      <div className="form-goup">
        <label>Brewers Tipes</label>
        <input
          name="brewers_tips"
          onChange={handleChange}
          value={values.brewers_tips }
          placeholder="brewers_tips "/>
          {errors.brewers_tips  ? errors.brewers_tips  : null}
      </div>
      <div className="form-goup">
        <label>Attenuation Level</label>
        <input 
          name="attenuation_level"
          onChange={handleChange}
          value={values.attenuation_level}
          placeholder="attenuation_level"/>
          {errors.attenuation_level ? errors.attenuation_level: null}
      </div>
      <div className="form-goup">
        <label>Contributed by</label>
        <input 
          name="contributed_by"
          onChange={handleChange}
          value={values.contributed_by }
          placeholder="Contributed"/>
          {errors.contributed_by? errors.contributed_by : null}
      </div>
      <button type="submit">ADD NEW</button>

      
    </form>
    </>
   
  )
}

export default NewBeer