import React from 'react'
import clinic from '../img/modalclinicimg.png';
import ClinicCardForList from './clinicCardForList.js';
import DoctorCardOfList from './DoctorCardOfList';

export default function ParticularClinic() {
    const clinic_name = 'Applo Clinic';
    return (
        <div>
            <div className="clinic" >
                <div className="row p-clinic" style={{ display: 'flex', backgroundColor: '#e4e4e4' }}>
                    <div className="col-7 a" >
                        <div className="col-13 m-1 p-1 mb-2 shadow " style={{ display: 'flex', backgroundColor: 'white', borderRadius: '5px' }}>
                            <div className="col-5  ">
                                <div className="clinicimage py-2">
                                    <img className='img-particular-clinic' src={clinic} alt="" style={{ width: '15vw' }} />
                                </div>
                            </div>
                            <div className="col-7  m-1 pb-1 pt-3 px-2  ">
                                <div key={clinic.id} className='clinicdetail p-2 ' style={{ borderRadius: '5px' }}>
                                    <h2>{clinic_name}</h2>
                                    <p>Location :- ANNADA ENCLAVE, 88, PILKHANA ROAD, RANIBAGAN, BERHAMPORE, MURSHIDABAD, WEST BENGAL </p>
                                    <hr />
                                    <p>Apollo Clinic provides quality health care services for day-to-day needs with facilities for consultation, diagnostics, health checks & more, all under one roof.</p>
                                    <button type='submit' className='btn' style={{ backgroundColor: '#0cbea9' }}>View Doctor's</button>

                                </div>
                            </div>
                        </div>
                        <div className='doctor-list-clinic' style={{ textAlign: 'center' }}>
                            <h2 className='text-decoration-underline shadow font-weight-bold m-1 p-1' style={{ backgroundColor: 'white', borderRadius: '5px' }} >Best Doctor's in <span style={{ color: '#0d6efd' }}>{clinic_name}</span> </h2>

                            <div className='m-2' >
                                <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                    <DoctorCardOfList />
                                </div>
                                <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                    <DoctorCardOfList />
                                </div>
                                <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                    <DoctorCardOfList />
                                </div>
                                <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                    <DoctorCardOfList />
                                </div>
                                <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                    <DoctorCardOfList />
                                </div>
                                <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                    <DoctorCardOfList />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="clinics-list col-5" style={{ marginTop: '2rem' }}>
                        <h2 className='text-decoration-underline font-weight-bold shadow p-2'style={{ backgroundColor: 'white', borderRadius: '5px' }} >Best Clinics Near You  </h2>

                        <div className='m-2'>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                <ClinicCardForList />
                            </div>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                <ClinicCardForList />
                            </div>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                <ClinicCardForList />
                            </div>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                <ClinicCardForList />
                            </div>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                <ClinicCardForList />
                            </div>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                <ClinicCardForList />
                            </div>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                <ClinicCardForList />
                            </div>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                <ClinicCardForList />
                            </div>
                            <div className='m-2' style={{ backgroundColor: 'white', borderRadius: '5px' }} >
                                <ClinicCardForList />
                            </div>
                            
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
