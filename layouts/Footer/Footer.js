import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Footer() {
  const [yearStatus, setYearStatus] = useState()
  useEffect(()=>{
    let upcomingYear = new Date().getFullYear()+1;
    setYearStatus({upComing_year:upcomingYear});
  })
  return (
    <Card>
      <Card.Body className='text-center'>Copyright &copy; Easy data {2022}-{yearStatus?.upComing_year}</Card.Body>
    </Card>
  );
}

export default Footer;