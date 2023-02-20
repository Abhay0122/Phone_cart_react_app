import React from 'react'

const Home = (props) => {
  // console.warn("props", props.Data);
  // console.log(props);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className='card border w-25 mt-5 shadow-lg p-3'>
        <div className='img-wrapper item'>
          <img height={200} width={340} src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=481&q=80" />
        </div>
        <div className='mt-3 mb-3 d-flex flex-column'>
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div >
          <button
            onClick={
              () => {
                props.addToCartHandler({ price: "1000", name: "i phone 11" })
              }}
            className='me-3 btn btn-success'
          >
            Add to Cart
          </button>
          <button
            onClick={
              () => {
                props.removeToCartHandler()
              }}
            className='btn btn-danger'
          >
            Remove to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home