import React from 'react'
import Card from './card'
const section5 = () => {
  return (
    <>
       <div className="d-flex">
       <Card title="About Us" />
        <Card title="Applicant Corner" linkTo="/login" individual="Student" />
        <Card title="Educators Corner" linkTo="/login" individual="Educator's" />
        <Card title="Admin's Corner" individual="Admin"/>
        <Card title="Public Corner"/>
        
       </div>
    </>
  )
}

export default section5
