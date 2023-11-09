import Header from '~/components/Layout/components/Header';
function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container px-0">
                <div className="w-full mx-auto">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
