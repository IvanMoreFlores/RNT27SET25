import {useState} from 'react';

// Definimos las reglas de validación para cada campo, que pueden incluir el mínimo de caracteres
interface ValidationRules<T> {
  minLength?: Partial<Record<keyof T, number>>; // Reglas de longitud mínima para cada campo
}

export const useForm = <T extends Object>(
  initState: T,
  requiredFields: Array<keyof T> = [],
  validationRules: ValidationRules<T> = {}, // Nuevo parámetro de validación
) => {
  const [state, setState] = useState(initState);

  // Maneja el cambio de estado de cada input
  const onChange = (value: string, field: keyof T) => {
    setState(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  // Resetea el formulario al estado inicial
  const reset = () => {
    setState(initState);
  };

  // Limpia un campo específico
  const clearField = (field: keyof T) => {
    setState(prevState => ({
      ...prevState,
      [field]: initState[field], // Restablecer el valor inicial del campo específico
    }));
  };

  // Función auxiliar para comprobar si un campo es un objeto con la propiedad 'value' de tipo string
  const isFieldWithValue = (field: any): field is {value: string} => {
    return (
      field &&
      typeof field === 'object' &&
      'value' in field &&
      typeof field.value === 'string'
    );
  };

  // Verifica si el formulario es válido
  const isValid = () => {
    return requiredFields.every(field => {
      const value = state[field];

      // Si el valor es un array, verifica que no esté vacío
      if (Array.isArray(value)) {
        return value.length > 0;
      }

      // Si el valor es un objeto que tiene 'value', verifica que 'value' no esté vacío
      if (isFieldWithValue(value)) {
        const minLength = validationRules.minLength?.[field] || 0;
        return value.value.trim() !== '' && value.value.length >= minLength;
      }

      // Verificar que el campo no esté vacío si es un string
      if (typeof value === 'string') {
        const minLength = validationRules.minLength?.[field] || 0;
        return value.trim() !== '' && value.length >= minLength;
      }

      return value !== null && value !== undefined;
    });
  };

  return {
    ...state,
    form: state,
    onChange,
    reset,
    clearField, // Exponer la nueva función para limpiar un campo
    isValid,
  };
};
