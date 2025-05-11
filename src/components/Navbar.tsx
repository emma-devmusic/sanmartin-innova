import { IsoLogoBlanco } from '../assets/svg/IsoLogoBlanco';

export const Navbar = () => {
    return (
        <header className="fixed z-50 w-full">
            <nav className="bg-transparent py-2.5">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
                    <a href="#" className="flex items-center">
                        <IsoLogoBlanco className='w-10 h-10'/>
                    </a>
                </div>
            </nav>
        </header>
    );
};
