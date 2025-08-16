
const Text = () => {
  return (
    <div className="container-lg py-5 gx-5" style={{paddingTop:"0" , maxWidth:'100%' , backgroundColor:''}} >
      {/* Top Section - Text & Image Side by Side */}
      <div className="row align-items-center mb-5 gx-5" style={{marginTop:"-80px"}}>
        <div 
          className="col-12 col-lg-7 pe-lg-5 mb-5 mb-lg-0 gx-5"
          style={{
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            minHeight: '200px', // Fixed height 
            borderRadius:'none',
            textAlign:'center'
          }}
        >
          <h1 className="" style={{textAlign:'center'}}>
  <span className="d-block typing-container">The Best way to</span>
  <span className="d-block typing-container typ">predict the future is</span>
  <span className="d-block typing-container">to invent it</span> 
</h1>
        </div>
        
        <div className="col-12 col-lg-5">
          <div 
            className="ratio ratio-1x1 h-100" // Added h-100
            style={{
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
              minHeight: '300px' // Fixed height to match
            }}
          >
            <img 
              src="./Images/kashaf.jpg" 
              alt=""
              className="object-fit-cover w-100 h-100" // Ensure full coverage
            />
          </div>
        </div>
      </div>

      {/* Bottom Section - Two Equal Boxes */}
      <div className="row gx-5" style={{backgroundColor:''}}>
        {/* About Me Box */}
         <div className="col-12 col-md-6 h-100" style={{}}>
          <div 
            className="p-4 p-lg-5 bg-light rounded-3 shadow-sm d-flex flex-column justify-content-between mb-3"
            style={{minHeight:'200px' }} // Fixed height
          >
            <div className="mb-3" style={{}}>
              <h2 className="h3 mb-4" style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '0.5px',
                textAlign: 'center' 
                
              }}>
                Get to know me
              </h2>
            </div>
            <div className="text-center" style={{}}>
              <a href="#skills" className="btn btn-primary mt-3 px-4 py-2" style={{ backgroundColor: '#bc7c9c', border: 'none' }}>
  Dive in
</a>

            </div>
          </div>
        </div>

        {/* Contact Box */}
        <div className="col-12 col-md-6 h-100" style={{}}>
          <div 
            className="p-4 p-lg-5 bg-light rounded-3 shadow-sm d-flex flex-column justify-content-between"
            style={{minHeight:'200px'}} // Fixed height
          >
            <div className="mb-3">
              <h2 className="h3 mb-4" style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '0.5px',
                textAlign: 'center' 
               
              }}>
              something to say?
              </h2>
            </div>
            <div className="text-center">
              <a href="#messagebox" className="btn btn-primary mt-3 px-4 py-2" style={{ backgroundColor: '#bc7c9c', border: 'none' }}>
  Drop it!
</a>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Text;
