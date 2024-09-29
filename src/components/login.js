import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Hook para traducciones
import i18n from './i18n'; 

const Login = () => {
  const { t } = useTranslation(); // Hook para traducciones
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t('emailError')); // Traducción del mensaje de error
      return;
    }

    if (password.length < 8) {
      setError(t('passwordError')); // Traducción del mensaje de error
      return;
    }

    setError('');
    console.log("Login exitoso");
    window.location.href = '/home';
  };

  return (
    <div
      className="relative flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534289692684-c02577d5560d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}
    >
      {/* Botones para cambiar el idioma */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => i18n.changeLanguage('es')}
          className="mr-2 px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          Español
        </button>
        <button
          onClick={() => i18n.changeLanguage('en')}
          className="px-3 py-1 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
        >
          English
        </button>
      </div>

      <div className="w-full max-w-md p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('loginTitle')}</h2>
        <div className="mb-4">
          <label className="block text-gray-700">{t('emailLabel')}</label>
          <input
            type="email"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            placeholder={t('emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">{t('passwordLabel')}</label>
          <input
            type="password"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-indigo-500"
            placeholder={t('passwordPlaceholder')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          onClick={handleSubmit}
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600"
        >
          {t('loginButton')}
        </button>
      </div>
    </div>
  );
};

export default Login;
