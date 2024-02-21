import React, { useEffect, useState } from 'react'
import Modal from 'react-modal';
import AddNewAddressOfUser from './AddNewAddressOfUser';
import axiosClient from './axiosClient';


export default function ChoosePrimaryAddressByUser({ closeTheModal }) {


    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        document.body.style.overflow = 'unset';
        setIsOpen(false);
    }


    const customStyles = {
        content: {
            overflowY: 'hidden',
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const [userAddress, setUserAddress] = useState([]);
    const [address_id, setAddress_id] = useState();


    useEffect(() => {
        axiosClient.get(`/get/all/address`).then((response) => {
            setUserAddress(response.data)
        });
    }, []);


    let makePrimaryAddress = (e) => {
        e.preventDefault();
        console.log(address_id)
        axiosClient.post(`/makeprimary/address`, {address_id})
            .then(res => {
                console.log(res.data)
                if (res.data.success === true) {
                    alert("Success!!");
                    closeTheModal();
                } else {
                    alert("Error!!")
                }
            })
            .catch(err => {
                // Handle errors
                console.error(err);
            });
    }
    const handleInput = (id) => {
        setAddress_id(id);
    }

    return (
        <div style={{ width: '40vw', textAlign: 'center' }}>
            <div>
                <div>
                    <h5 style={{ fontWeight: '700' }}>Your all address</h5>
                </div>
                <div>
                    {userAddress.map(address => (
                        <div key={address.address_id} className='m-2' style={{ border: '1px solid black' }}>
                            <div className='m-1 p-2' style={{ display: 'flex' }}>
                                <input className='m-1 p-1' type="radio" onChange={(e) => handleInput(address.address_id)} name="p_address" id="p_address" />
                                <p className='m-1 p-1' style={{ fontSize: '0.9rem', fontWeight: '700' }}>{address.Village},{address.P_O},{address.City},{address.district},{address.Pin},{address.State}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <div>
                    <button className='btn btn-primary' onClick={(e) => makePrimaryAddress(e)}>Make Primary Address</button>
                </div>
                <div>
                    <button className='btn btn-warning' onClick={openModal}>Add New Address</button>
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        <AddNewAddressOfUser closeTheModal={closeModal} />
                    </Modal>
                </div>
            </div>
        </div>
    )
}
