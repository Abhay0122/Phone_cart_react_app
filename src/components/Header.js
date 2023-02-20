import React from 'react'

const Header = (props) => {
    // console.warn("props", props.Data);

    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='w-75 shadow-lg p-3 rounded mt-5 d-flex justify-content-between align-items-center'>
                <h1 >I-Phone Online Shop</h1>
                <div style={{ fontSize: "3vmax", color: "green" }}>
                    <span style={{ position: "absolute", top: "8%", right: "13%", zIndex: "1" }} className='text-white bg-danger px-2 fs-5 rounded-circle'>
                        {props.Data.length}
                    </span>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
            </div>
        </div>
    )
}

export default Header