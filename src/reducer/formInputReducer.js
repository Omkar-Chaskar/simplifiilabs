export function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload };

    case "SET_EMAIL":
      return { ...state, email: payload };

    case "SET_CAPTCHA_PREVIEW":
      return { ...state, captchaPreview: payload };

    case "SET_CAPTCHA_INPUT":
      return { ...state, captchaInput: payload };

    case "SET_ERROR":
      return { ...state, errorMsg: payload };

    case "SET_MODEL":
      return { ...state, model: payload };

    case "CLEAR":
      return {
        name: "",
        email: "",
        captchaInput: "",
        errorMsg: "",
        model: true,
      };

    default:
      return state;
  }
}
