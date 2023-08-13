/* eslint-disable react/prop-types */

const ShapeSubTab = ({ tab, handleClick }) => {

    return (
        <div
            key={tab.name}
            className='tab-btn flex flex-col text-xxs gap-2 rounded-4'
            onClick={handleClick}
        >
            <img src={tab.icon} alt={tab.name} className='w-11/12 h-11/12 object-contain' />
            <p>{tab.name}</p>
        </div>
    )
}

export default ShapeSubTab