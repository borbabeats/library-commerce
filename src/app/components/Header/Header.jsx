import { Input } from "postcss"
import CartIcon from "./CartIcon"
import FavoritoIcon from "./FavoritoIcon"
import SearchIcon from "./SearchIcon"
import UserIcon from "./UserIcon"

const Header = () => {
    return (
        <div className="container flex flex-row justify-between">
            <div className="w-100">
                <div className="flex flex-row gap-4">
                    <FavoritoIcon />
                    <CartIcon />
                </div>
            </div>
            <div>LOGO fancy</div>
            <div>
                <div className="flex flex-row gap-4">
                    <input className="z-10"/>
                    <SearchIcon />
                    <UserIcon />
                </div>
            </div>
        </div>
    )
}

export default Header