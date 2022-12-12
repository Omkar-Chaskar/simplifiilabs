import { HiRefresh } from "react-icons/hi";
import { useEffect } from "react";
import { generateCaptcha, fonts } from "../utils/captchaWorker";
import { useFormInput } from "../contextProvider/formInputProvider";

function ContactUsForm() {
  const { state, dispatch } = useFormInput();

  useEffect(() => {
    dispatch({ type: "SET_CAPTCHA_PREVIEW", payload: generateCaptcha() });
  }, [dispatch]);

  const onSubmitHandler = () => {
    if (state.name === "") {
      dispatch({ type: "SET_ERROR", payload: "name" });
    } else if (state.email === "") {
      dispatch({ type: "SET_ERROR", payload: "email" });
    } else if (state.captchaInput === "") {
      dispatch({ type: "SET_ERROR", payload: "captcha" });
    } else if (state.captchaInput !== state.captchaPreview.join("")) {
      dispatch({ type: "SET_ERROR", payload: "correct captcha" });
    } else {
      dispatch({ type: "SET_ERROR", payload: "" });
      dispatch({ type: "CLEAR" });
      dispatch({ type: "SET_CAPTCHA_PREVIEW", payload: generateCaptcha() });
    }
  };

  return (
    <div className="row justify-content-center align-items-center card-body App">
      <form
        className="col-lg-4 col-md-7 col-sm-9 shadow-lg px-4 py-5 rounded"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler();
        }}
      >
        <div className="text-center text-decoration-underline mb-4">
          <h3 className="card-title">Contact Us</h3>
        </div>
        <div className="mb-3">
          <label htmlFor="InputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="InputName"
            placeholder="Omkar Chaskar"
            value={state.name}
            onChange={(e) =>
              dispatch({ type: "SET_NAME", payload: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="InputEmail" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="InputEmail"
            aria-describedby="emailHelp"
            placeholder="omkarchaskar1402@gmail.com"
            value={state.email}
            onChange={(e) =>
              dispatch({ type: "SET_EMAIL", payload: e.target.value })
            }
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 text-center">
          <div className="captcha-preview m-auto">
            {state.captchaPreview.map((char, index) => {
              return (
                <span
                  style={{
                    fontFamily: `${
                      fonts[Math.trunc(Math.random() * fonts.length)]
                    }`,
                    transform: `rotate(${
                      -20 + Math.trunc(Math.random() * 30)
                    }deg)`,
                  }}
                  key={index}
                >
                  {char}
                </span>
              );
            })}
          </div>
        </div>
        <div className="mb-3">
          <div className="d-flex">
            <input
              type="text"
              className="form-control"
              id="InputCaptch"
              value={state.captchaInput}
              onChange={(e) =>
                dispatch({ type: "SET_CAPTCHA_INPUT", payload: e.target.value })
              }
            />
            <button
              className="btn border btn-success"
              onClick={(e) => {
                e.preventDefault();
                dispatch({
                  type: "SET_CAPTCHA_PREVIEW",
                  payload: generateCaptcha(),
                });
              }}
            >
              <HiRefresh fill="white" />
            </button>
          </div>
          <div id="captchaHelp" className="form-text">
            Enter captcha value
          </div>
        </div>
        <div className="fw-bolder text-center text-danger">
          <span style={{ visibility: state.errorMsg ? "visible" : "hidden" }}>
            Please enter {state.errorMsg}.
          </span>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary mt-3 px-5 fw-bold">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
