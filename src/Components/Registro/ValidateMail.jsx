import React from 'react'

const ValidateMail = () => {
    const {validation_token} = useParams()
    
    const [validation_mail, setValidation_mail] = useState(false)

    useEffect(() => {
      const validateMail = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/verify-email/${validation_token}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await response.json();
          if (!data.ok) {
            setError(data.error);
            setLoading(false);
            return;
          }
          setValidation_mail(true);
          setLoading(false);
        } catch (err) {
          setError('Error al obtener las categorías');
          setLoading(false);
        }
      };
      validateMail();
    }, []);

  return (
    <div>ValidateMail</div>
  )
}

export default ValidateMail