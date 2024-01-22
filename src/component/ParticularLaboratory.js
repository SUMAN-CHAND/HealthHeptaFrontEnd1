import React, { useEffect, useState } from 'react'
import ClinicCardForList from './clinicCardForList.js';
import DoctorCardOfList from './DoctorCardOfList';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ParticularLaboratory() {
    const param = useParams();
    // console.log(param)
    const client_id = param.id;

    const [clinics, setClinic] = useState([]);
    const [image, setImage] = useState([]);
    const [laboratorys, setLaboratorys] = useState([]);
    const [ind_laboratory_images, setInd_laboratory_images] = useState([]);




    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/particular-laboratory/${client_id}`)
            .then(res => {
                if (res.data !== null) {
                    // console.log(res.data)
                    setClinic(res.data[0]);
                    setImage(res.data[1])
                } else {

                }
            })

    }, []);
    useEffect(() => {
        axios.get(`http://${process.env.REACT_APP_HOST}:8081/particular-laboratory/see-labtests/${client_id}`)
            .then(response => {
                // Handle response
                if (response.data !== null) {
                    setLaboratorys(response.data[0]);
                    setInd_laboratory_images(response.data[1])
                    // loadImages();
                }
                // console.log(response.data);
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }, []);
    console.log(laboratorys)
    console.log(ind_laboratory_images)


    // console.log(clinic)
    // console.log(image)

    // const clinic_name = 'Applo Clinic';
    return (
        <div>
            <div className="clinic" >
                <div className="row p-clinic" style={{ display: 'flex', backgroundColor: '#e4e4e4' }}>
                    <div className="col-7 a" >
                        {clinics.map(clinic => (
                            <div key={clinic.id}>
                                {image.map((img) => (
                                    <div key={img.id}>
                                        {parseInt(clinic.SubAdminImageId) === img.id ?
                                            <>
                                                {/* <LabCard id={lab.id} img={img.path} title={lab.name} phone={lab.phone} location={lab.city} openingtime={lab.OpeningTime} closetime={lab.CloseingTime} desc={lab.description} btntext="Book A Test Now" />
                                                < LabCard img={labimg} title="Ghose Laboratory" location="Kolkata" btntext="Order Now"/> */}
                                                <div className="col-13 m-1 p-1 mb-2 shadow " style={{ display: 'flex', backgroundColor: 'white', borderRadius: '5px' }}>
                                                    <div className="col-5  ">
                                                        <div className="clinicimage py-2">
                                                            <img className='img-particular-clinic' src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`} alt="" style={{ width: '15vw' }} />
                                                        </div>
                                                    </div>
                                                    <div className="col-7  m-1 pb-1 pt-3 px-2  ">
                                                        <div key={clinic.id} className='clinicdetail p-2 ' style={{ borderRadius: '5px' }}>
                                                            <h2>{clinic.name}</h2>
                                                            <p>Landamrk:- {clinic.landmark}</p>
                                                            <p>Location:- {clinic.Village},{clinic.P_O},{clinic.city},{clinic.district},{clinic.State},{clinic.Pin}</p>
                                                            <p>Phone No:- {clinic.phone}</p>
                                                            <p>{clinic.OpeningTime} - {clinic.CloseingTime}</p>
                                                            <hr />
                                                            <p>{clinic.description}</p>
                                                            <button type='submit' className='btn' style={{ backgroundColor: '#0cbea9' }}>View Test's</button>

                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                            : <>
                                            </>}

                                    </div>
                                ))}
                            </div>
                        ))}

                        <div className='doctor-list-clinic' style={{ textAlign: 'center' }}>
                            <h2 className='text-decoration-underline shadow font-weight-bold m-1 p-1' style={{ backgroundColor: 'white', borderRadius: '5px' }} >All Test Lab's in <span style={{ color: '#0d6efd' }}>Here</span> </h2>

                            <div className='m-2' >
                                <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                    {laboratorys.map(laboratory => (
                                        <div key={laboratory.id}>
                                            {ind_laboratory_images.map((img) => (
                                                <div key={img.id}>
                                                    {parseInt(laboratory.test_imageId) === img.id ?
                                                        <>
                                                            {/* <LabCard id={lab.id} img={img.path} title={lab.name} phone={lab.phone} location={lab.city} openingtime={lab.OpeningTime} closetime={lab.CloseingTime} desc={lab.description} btntext="Book A Test Now" />
                                                < LabCard img={labimg} title="Ghose Laboratory" location="Kolkata" btntext="Order Now"/> */}
                                                            <div className='doctor-c-l' >
                                                                <div className="row">
                                                                    <div className="col-12" >
                                                                        <div className="doctor  container shadow" style={{ display: 'flex', margin: '1rem', backgroundColor: '#dffffb', padding: '1rem', width: '90%' }}>

                                                                            <div className="deccription" style={{ display: 'flex', justifyContent: 'space-around' }} >
                                                                                <img src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`} className="card-img-top" alt="..." style={{ maxWidth: '13vw' }} />
                                                                                <div>
                                                                                    <h5 className='fs-5'>{laboratory.Test_Name} </h5>
                                                                                    <p className='fs-8'>{
                                                                                        laboratory.Test_Desc
                                                                                    }
                                                                                    </p>
                                                                                    <Link to={`/book/lab-test/${laboratory.Test_id}`} className="btn outline btn-info " style={{ fontSize: '0.9rem' }}>Book Now</Link>


                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                            </div>

                                                        </>
                                                        : <>
                                                        </>}

                                                </div>
                                            ))}
                                        </div>
                                    ))}


                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="clinics-list col-5" style={{ marginTop: '2rem' }}>
                        <h2 className='text-decoration-underline font-weight-bold shadow p-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >Best Clinics Near You  </h2>

                        <div className='m-2'>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                {clinics.map(clinic => (
                                    <div key={clinic.id}>
                                        {image.map((img) => (
                                            <div key={img.id}>
                                                {parseInt(clinic.SubAdminImageId) === img.id ?
                                                    <>
                                                        <div>
                                                            <div className="m my-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                <img src={`http://${process.env.REACT_APP_HOST}:8081/${img.path}`} alt="" style={{ height: '10vh', width: '10vw' }} />
                                                                <span className='py-1' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                                    <h6>{clinic.name}</h6>
                                                                    <p>Location:- {clinic.landmark}</p>
                                                                    <p>Phone No:- {clinic.phone}</p>                                                                    
                                                                    <Link to='/particular-clinic'> <button className='btn btn-primary'><p className='btn-text'>View Tests</p></button></Link>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </>
                                                    : <>
                                                    </>}

                                            </div>
                                        ))}
                                    </div>
                                ))}

                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
