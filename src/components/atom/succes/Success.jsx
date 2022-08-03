import React, { useState } from 'react';
import SuccesImg from '../../../assets/icons/success.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/esm/Button';
import './Succes.css'


const Succes = () => {
    const [lgShow1, setLgShow1] = useState(
        !!window.location.search.includes("success")
    );



    return (
        <div className='succesModal'>
            <Modal
                size="lg"
                className="succesBox"
                show={lgShow1}
                onHide={
                    () => {
                        setLgShow1(false)
                    }
                }
                aria-labelledby="modal1"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="modalSucces">
                        <img src={SuccesImg} />
                        <h3 id="succesTabrik" >TABRIKLAYMIZ !</h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body id="succesModalBody">
                    Kelajagingiz uchun muhim qadamni qo‘ydningiz. <br /> Ma’lumotlaringiz muvaffaqiyatli yuborildi. <br />
                    Operatorlarimiz sizga tez orada bog‘lanishadi
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Succes