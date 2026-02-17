import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useMemo } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, []);
  useEffect(() => {
    if (termsAccepted) {
      if (!email) {
        setEmailError('email address is required.');
      } else if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    } else {
      setEmailError('');
    }

    if (termsAccepted && email && emailRegex.test(email)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, termsAccepted, emailRegex]);

  const handleSubmit = (event) => {
    if (!termsAccepted) {
      event.preventDefault();
      setErrorMessage('You must agree to the terms and conditions.');
    } else if (termsAccepted && !email) {
      event.preventDefault();
      setEmailError('Email is required.');
    } else if (termsAccepted && !emailRegex.test(email)) {
      event.preventDefault();
      setEmailError('Please enter a valid email.');
    } else {
      setErrorMessage('');
      setEmailError('');
      // El formulario se enviará automáticamente si no se previene el evento
    }
  };

  const handleCheckboxChange = (event) => {
    setTermsAccepted(event.target.checked);
    if (event.target.checked) {
      // Validar el correo electrónico cuando se marcan los términos
      if (!email) {
        setEmailError('Email is required.');
      } else if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email.');
      } else {
        setEmailError('');
      }
    } else {
      // Si se desmarcan los términos, limpiar errores relacionados con el correo
      setEmailError('');
      setErrorMessage('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md lg:items-end font-euclid-regular">
      {/* Título alineado a la derecha */}
      <h2 className="text-2xl font-euclid-semibold mb-2 text-right text-grayEno dark:text-white">
        Join our Newsletter
      </h2>

      {/* Formulario */}
      <form
        method="POST"
        action="https://enowinesocialclub.activehosted.com/proc.php"
        id="_form_5_"
        data-styles-version="5"
      >
        <input type="hidden" name="u" value="5" />
        <input type="hidden" name="f" value="5" />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <input
          type="hidden"
          name="or"
          value="8ec80e9288aef04bd2ab5a284fb6087b"
        />

        {/* Grupo de Email + Botón */}
        <div className="flex flex-col w-full">
          <div className="flex items-center bg-mainBone rounded-full overflow-hidden">
            <input
              type="email"
              id="email"
              name="email"
              required={termsAccepted}
              placeholder="email@example.com"
              value={email}
              onChange={handleEmailChange}
              className="flex-grow px-4 py-3 text-sm text-blackEno bg-transparent focus:outline-none"
            />
            <button
              type="submit"
              id="submitButton"
              disabled={!isFormValid}
              className={`bg-shadyGlade text-white px-5 w-auto py-3 rounded-full text-sm font-euclid-semibold transition-all lg:w-44 ${
                isFormValid
                  ? 'hover:bg-shadyHover'
                  : 'opacity-50 cursor-not-allowed'
              }`}
            >
              Subscribe
            </button>
          </div>

          <div className="h-2 my-2 flex justify-center items-right lg:justify-end">
            {emailError && (
              <p className="text-errorMessage text-sm font-euclid-medium text-right">
                {emailError}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 justify-center lg:justify-end">
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              required
              checked={termsAccepted}
              onChange={handleCheckboxChange}
              className="peer hidden"
            />
            {/* Contenedor del checkbox personalizado */}
            <div className="w-5 h-5 flex items-center justify-center border border-gray-400 bg-mainBone rounded-md transition-all duration-300 peer-checked:bg-shadyGlade peer-checked:border-shadyGlade">
              <FontAwesomeIcon icon={faCheck} className="text-mainBone" />
            </div>
          </label>

          <label
            htmlFor="terms"
            className="text-sm font-euclid-light text-[#040f13] text-right dark:text-white"
          >
            You agree to our{' '}
            <a
              href="/legal-policies/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-shadyGlade hover:underline dark:text-shadyGladeBM"
            >
              privacy policy
            </a>
            .
          </label>
        </div>

        {errorMessage && (
          <div
            id="errorMessage"
            className="text-errorMessage text-sm font-euclid-medium text-right transition-opacity duration-300"
            aria-live="polite"
          >
            {errorMessage && <span>{errorMessage}</span>}
          </div>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
