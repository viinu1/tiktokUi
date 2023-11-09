import Header from '~/components/Layout/components/Header';
import SideBar from '../components/SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container flex h-[2000px]">
                <SideBar />
                <div className="ps-[232px]  mt-[60px] w-full mx-auto m-w-[420px] flex flex-col items-center">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
