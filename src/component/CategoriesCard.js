import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosClient from './axiosClient';
export default function CategoriesCard(props) {
  const navigate = useNavigate();
  const [chooseProduct, setChooseProduct] = useState([])
  const [selectLocation, setSelectLocation] = useState()
  const Category = props.title;
  const [values, setValues] = useState({
    input: Category,
    from: 'category'
  })


  let current_pin_code;
  current_pin_code = sessionStorage.getItem('current_pin_code');

  const searchMedicne = async () => {
    if (current_pin_code === null) {
      try {
        const response = await axiosClient.post(`/search`, values);
        if (response.data !== null) {
          navigate(`/medicines/${values.input}`,
            {
              state: {
                product: response.data[0],
                image: response.data[1],
                lab: response.data[2],
                labImage: response.data[3],
                doctor: response.data[4],
                doctorImage: response.data[5],
                medicineShop: response.data[6],
                medicineShopImage: response.data[7],
                location: selectLocation
              }
            })
          setValues({
            input: ''
          });
          setChooseProduct([]);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }

    } else {
      try {
        const response = await axiosClient.post(`/search/${current_pin_code}`, values);
        if (response.data !== null) {
          navigate(`/medicines/${values.input}`,
            {
              state: {
                product: response.data[0],
                image: response.data[1],
                lab: response.data[2],
                labImage: response.data[3],
                doctor: response.data[4],
                doctorImage: response.data[5],
                medicineShop: response.data[6],
                medicineShopImage: response.data[7],
                location: selectLocation
              }
            })
          setValues({
            input: ''
          });
          setChooseProduct([]);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }

    }
  }


  // const searchMedicne = async () => {
  //   try {
  //     const response = await axiosClient.post(`/search`, values);
  //     if (response.data !== null) {
  //       navigate(`/medicines/${values.input}`,
  //         {
  //           state: {
  //             product: response.data[0],
  //             image: response.data[1],
  //             lab: response.data[2],
  //             labImage: response.data[3],
  //             doctor: response.data[4],
  //             doctorImage: response.data[5],
  //             medicineShop: response.data[6],
  //             medicineShopImage: response.data[7],
  //             location: selectLocation
  //           }
  //         })
  //       setValues({
  //         input: ''
  //       });
  //       setChooseProduct([]);
  //     } else {
  //       console.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //   }
  // }
  return (
    <div>
      <div>
        <span style={{ textDecoration: 'none' }}>
          <div className="container" >
            <div className="card">
              <img src={props.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.title} </h5>
                <p className="card-text">{props.location}</p>
                <button className="btn btn-primary" style={{ fontSize: '0.9rem' }} onClick={searchMedicne}>{props.btntext}</button>
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  )
}
