import Header from '~/components/Layout/components/Header';
import SideBar from '../components/SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container flex h-[2000px]">
                <SideBar />
                <div className="ps-[232px] mt-[60px] w-full">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
