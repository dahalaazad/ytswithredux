import {Link} from "react-router-dom";
import {AllMovieDisplay} from "../../pages/AllMovieDisplay";
import { Search } from "../../pages/Search";
import ytsLogo from "../../assets/svg/logo-yts.svg";

export const Nav = () => (
    <nav className="flex justify-between items-center wrapper bg-yts-dark text-light">

        <Link to={'/'} element={<AllMovieDisplay/>}>
            <div className="logo"><img src={ytsLogo} alt='imdbLogo'
                                       className='pr-md'/></div>
        </Link>

        <div className="nav-items flex items-center">
            <Link to={'/movies'} element={<AllMovieDisplay/>}>
                <div className="nav-item px-lg">Home</div>
            </Link>
            <Link to={'/'} element={<AllMovieDisplay/>}>
                <div className="nav-item px-lg">Favourite Movies</div>
            </Link>
            <div className="form-group pt-md">
{/*<Search/>*/}
            </div>
        </div>
    </nav>
)