import state from "../../store"
import { CustomButton } from "../CustomButton"

const Topbar = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-100">
            <div className="px-12 py-4 text-3xl font-bold">
                <h3>Cookiefy</h3>
            </div>
            <div className="list-none ">
                <li className="flex items-center justify-center md:gap-4 md:text-sm text-xs gap-3 cursor-pointer">
                    <ul>Home</ul>
                    <ul>About</ul>
                    <ul>Contact</ul>
                    <ul>FAQ</ul>
                </li>
            </div>
            <div>
                <CustomButton type='filled' icon="right" title='Save your taste' handleClick={() => state.intro = false} customStyles='w-fit px-4 py-12 text-sm' />
            </div>
        </nav>
    )
}

export default Topbar