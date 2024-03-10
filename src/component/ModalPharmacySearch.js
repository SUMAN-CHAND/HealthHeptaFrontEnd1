import React, { useState, useEffect } from 'react'
import medicines from '../img/Medicine_Delivery.png';
import {
  Link, useNavigate
} from "react-router-dom";
import axiosClient from './axiosClient';
const customStyle = {
  maxHeight: '60vh',
  maxWidth: '85vw',
  borderRadius: '5px',
  overflow: 'hidden',
  background: 'linear-gradient(rgba(250,0,0,-0.5),transparent)',
  backgroundColor: 'rgb(41 116 132)'
};
export default function ModalPharmacySearch({ closeTheModal }) {
  const [locations, setLocation] = useState([])
  const [chooseLocation, setChooseLocation] = useState([])
  const [selectLocation, setSelectLocation] = useState()
  const [products, setProducts] = useState([])
  const [chooseProduct, setChooseProduct] = useState([])
  useEffect(() => {
    axiosClient.get(`/profile-details`)
        .then(res => {
            setSelectLocation(res.data[2])
        })
},[]);
useEffect(() => {
    axiosClient.get(`/locations`)
        .then(res => {
            setLocation(res.data);
        })
}, [])
  useEffect(() => {
    axiosClient.get(`/search`)
      .then(res => {
        setProducts(res.data);
      })
  }, [])
  useEffect(() => {
    axiosClient.get(`/madicine/medicineshops`)
      .then(res => {
        setProducts(res.data);
      })
  }, [])
  const navigate = useNavigate();
  const [values, setValues] = useState({
    input: ''
  })
  const handleFilter = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    const searchword = event.target.value.toLowerCase();
    const newFilter = products.filter((value) => {
      return value.name.toLowerCase().includes(searchword);
    });
    if (searchword === "") {
      setChooseProduct([]);
    } else {
      setChooseProduct(newFilter);
    }
  };
  const searchMedicne = async () => {
    try {
      
            navigate(`/medicineshop/search/${values.input}`,
                {
                    // state: {
                    //     product: response.data[0],
                    //     image: response.data[1],
                    //     lab: response.data[2],
                    //     labImage: response.data[3],
                    //     doctor: response.data[4],
                    //     doctorImage: response.data[5],
                    //     location: selectLocation
                    // }
                })
                setValues({
                    input:''
                });
                setChooseProduct([]);

    } catch (error) {
        console.error('An error occurred:', error);
    }
}
  const handleClick = event => {
    setChooseProduct([]);
  };

  return (
    <>
      <div className="medicines container " style={customStyle}>
        <button onClick={closeTheModal} style={{ marginLeft: '95%', borderRadius: '50%' }} className='my-2 btn btn-dark close-btn'>X</button>
        <div className="searchMedicines" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div className="search-m">
            <h2 className=' text-light' style={{ textAlign: 'center' }}>Search Pharmacy  Shop Near You</h2>
            <p className=' text-light' style={{ textAlign: 'center' }}>Search the best medicines, clinic & medicine shop the city nearest to you.</p>
            <div className="search-m search-m-in-modal" style={{ display: 'flex', marginTop: '15%', marginLeft: '2rem' }}>
              <div className="dropdown me-2 dropdown-location-modal-m dropdown-toggle-modal"  >
                <select value={selectLocation} onChange={e => setSelectLocation(e.target.value)} className="btn btn-secondary dropdown-location-modal-m" aria-expanded="false" style={{ color: "black", backgroundColor: "white", width: '20vw', fontSize: '1em' }}>
                <option defaultValue={'choose your location..'} >choose your Pin Code..</option>
                  {locations.map((location, index) => (
                    <option key={index} value={location.pin_code}>{location.pin_code}</option>
                  )
                  )}
                </select>
              </div>
              <div className="search  me-2 search-location-modal-m" >
                <div style={{ display: 'flex' , marginBottom:'5px'}} >
                  <input className="form-control search-location-modal-m" name='input' onChange={handleFilter} placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" style={{ width: '22vw', fontSize: '0.9em', borderTopLeftRadius: '6px', borderTopRightRadius: '0px', borderBottomLeftRadius: '6px', borderBottomRightRadius: '0px' }} />
                  <button type="button" onClick={searchMedicne} className="btn" style={{ backgroundColor: '#febd69', color: 'black', borderTopLeftRadius: '0px', borderTopRightRadius: '6px', borderBottomLeftRadius: '0px', borderBottomRightRadius: '6px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                    </svg>
                  </button>
                </div>
                {chooseProduct.length !== 0 && (
                  <div className="inputResult" onClick={handleClick}>
                    {chooseProduct.map((product, index) => {
                      return <Link to={`/addtocart/${product.product_id}`} onClick={closeTheModal} style={{ textDecoration: 'none', color: 'black' }}><p style={{ cursor: 'pointer', padding: '0px' }} key={index}>{product.product_name}</p></Link>
                    }
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <img className='modal-img' style={{ height: '49vh', width: '33vw' }} src={medicines} alt="" />
        </div>
      </div>
    </>
  )
}
