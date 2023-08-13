import { useSnapshot } from "valtio"
import state from "../store"
import { getContrastingColor } from '../config/helpers';
// eslint-disable-next-line react/prop-types
const CustomButton = ({ title, type, customStyles, handleClick, icon }) => {
    const snap = useSnapshot(state)

    const generateStyle = (type) => {
        if (type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color),
            }
        }
        else if (type === 'outlined') {
            return {
                backgroundColor: 'transparent',
                color: snap.color,
                border: `1px solid ${snap.color}`,
                borderWidth: '1px',
            }
        }
    }
    return (
        <button className={`px-2 py-1.5 flex items-center gap-2 flex-1 ${customStyles}`} style={generateStyle(type)} onClick={handleClick}>{title}
            {icon === "right" ? (
                <div className="transform transition-transform hover:translate-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                        <g clipPath="url(#clip0_20_69)">
                            <path d="M11.8566 3.70657L16.8346 8.64196L16.8626 8.66756C16.9477 8.75192 16.9935 8.86046 17 8.97087V9.02922C16.9935 9.13963 16.9477 9.24817 16.8626 9.33253L16.8381 9.35326L11.8566 14.2935C11.6722 14.4763 11.3734 14.4763 11.1891 14.2935C11.0048 14.1107 11.0048 13.8144 11.1891 13.6316L15.4429 9.41269L0.47197 9.41306C0.211307 9.41306 0 9.20353 0 8.94505C0 8.68657 0.211307 8.47703 0.47197 8.47703L15.332 8.47666L11.1891 4.36845C11.0048 4.18567 11.0048 3.88934 11.1891 3.70657C11.3734 3.5238 11.6722 3.5238 11.8566 3.70657ZM16.5823 8.94465L11.5228 13.9626L16.5288 9.00014L16.5288 8.99833L16.5009 8.97293L16.4724 8.94465H16.5823Z" fill="#252528" />
                        </g>
                        <defs>
                            <clipPath id="clip0_20_69">
                                <rect width="17" height="17" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            ) : (<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <g clipPath="url(#clip0_20_49)">
                    <path d="M5.14344 3.70657L0.165367 8.64196L0.137417 8.66756C0.0523472 8.75192 0.00654411 8.86046 0 8.97087V9.02922C0.00654411 9.13963 0.0523472 9.24817 0.137417 9.33253L0.161922 9.35326L5.14344 14.2935C5.32775 14.4763 5.62659 14.4763 5.81091 14.2935C5.99522 14.1107 5.99522 13.8144 5.81091 13.6316L1.55707 9.41269L16.528 9.41306C16.7887 9.41306 17 9.20353 17 8.94505C17 8.68657 16.7887 8.47703 16.528 8.47703L1.66799 8.47666L5.81091 4.36845C5.99522 4.18567 5.99522 3.88934 5.81091 3.70657C5.62659 3.5238 5.32775 3.5238 5.14344 3.70657ZM0.417749 8.94465L5.47718 13.9626L0.471207 9.00014L0.471157 8.99833L0.499071 8.97293L0.527597 8.94465H0.417749Z" fill="#281C1C" />
                </g>
                <defs>
                    <clipPath id="clip0_20_49">
                        <rect width="17" height="17" fill="white" transform="matrix(-1 0 0 1 17 0.5)" />
                    </clipPath>
                </defs>
            </svg>)}
        </button>

    )

}

export { CustomButton }