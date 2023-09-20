import React from 'react'
import Card from './card'

import Student from './Student'
import Educator from './Educator'
const section5 = () => {
  return (
    <>
       <div className="d-flex">
       <Card title="About Us" linkTo="/login" individual="About" />
        <Card title="Applicant Corner" linkTo="/login" individual="Student" />
        <Card title="Educators Corner" linkTo="/login" individual="Educator's" />
        <Card title="Admin's Corner" individual="Admin"/>
        <Card title="Public Corner"/>
        
       </div>
    </>
  )
}

export default section5
