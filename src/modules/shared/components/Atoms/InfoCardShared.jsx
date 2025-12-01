import ButtonShared from "./ButtonShared";

/**
 * @typedef {object} InfoCardProps
 * @property {string} title - El texto principal de la tarjeta.
 * @property {string} subtitle - El texto secundario (debajo del título).
 * @property {string} [buttonText="Ver"] - El texto del botón.
 * @property {() => void} [onButtonClick] - Función a ejecutar al hacer clic en el botón.
 */

/**
 * Componente de tarjeta genérica reutilizable para mostrar información
 * con un título, subtítulo y un botón de acción.
 * @param {InfoCardProps} props
 */

const InfoCardShared = ({
  title,
  subtitle,
  buttonText = "Ver",
  onButtonClick,
}) => {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">

      <div>
        <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <div>
        <ButtonShared
          onClick={onButtonClick}
        >
          {buttonText}
        </ButtonShared>
      </div>
    </div>
  );
};

export default InfoCardShared;
