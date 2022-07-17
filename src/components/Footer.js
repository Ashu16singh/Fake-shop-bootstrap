import React from 'react'

export default function Footer() {
 const footerStyle={
        background:"#212529" }

  return (
    <div className='mt-5'>
<footer>

  <div className="text-center p-3 text-white text-semibold" style={footerStyle}>
    © 2022 Copyright
    <h3 className="text-dark text-white my-1 p-1" href="/">FakeShop </h3>
  </div>

</footer>
    </div>
  )
}
