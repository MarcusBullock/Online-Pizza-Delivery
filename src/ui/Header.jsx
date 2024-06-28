import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

function Header() {
    return (
        <header className="border=stone-200 flex items-center justify-between border-b bg-yellow-500 px-4 py-3 uppercase sm:px-6">
            <Link
                to="/"
                className="flex items-center gap-3 text-xl tracking-widest"
            >
                {/* <div className="rounded-full bg-purple-200 p-1">🍕</div> */}
                <img src="/logo.png" alt="pizza logo" height={75} width={75} />
                Fatboy&apos;s Pizza Co.
            </Link>
            <SearchOrder />
            <Username />
        </header>
    );
}

export default Header;
