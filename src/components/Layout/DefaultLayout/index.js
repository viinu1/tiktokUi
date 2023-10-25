import Header from '~/components/Layout/components/Header';
import SideBar from '../components/SideBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container flex gap-24">
                <SideBar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
