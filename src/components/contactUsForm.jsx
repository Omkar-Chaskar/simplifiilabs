
function ContactUsForm() {
  return (
    <div className="row justify-content-center align-items-center card-body App">
      <form className="col-lg-4 col-md-7 col-sm-9 shadow-lg px-4 py-5 rounded">
          <div className="text-center text-decoration-underline mb-4">
            <h3 classNmae="card-title">Contact Us</h3>
          </div>
          <div className="mb-3">
              <label for="InputName" className="form-label">Name</label>
              <input type="text" className="form-control" id="InputName" placeholder="Omkar Chaskar"/>
          </div>
          <div className="mb-3">
              <label for="InputEmail" className="form-label">Email address</label>
              <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="omkarchaskar1402@gmail.com"/>
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
              <div></div>
          </div>
          <div className="mb-3">
              <input type="text" className="form-control" id="InputCaptch"/>
              <div id="captchaHelp" className="form-text">Enter captcha value</div>
          </div>
          <div className="text-center">
          <button type="submit" className="btn btn-primary mt-3 px-5 fw-bold">Submit</button>
          </div>
      </form>
    </div>
  );
}

export default ContactUsForm;