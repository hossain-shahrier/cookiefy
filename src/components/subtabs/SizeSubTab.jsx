/* eslint-disable react/prop-types */

const SizeSubTab = ({ tab, handleClick }) => {

    return (
        <div
            key={tab.name}
            className='tab-btn flex flex-col text-xxs gap-2 rounded-4'
            onClick={handleClick}
        >
            <p className="font-bold text-lg text-[#A15018] ">{tab.icon}</p>
            <p>{tab.name}</p>
        </div>
    )
}

export default SizeSubTab