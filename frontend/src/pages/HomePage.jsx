import Header from "../components/Header";
import ItemComponent from "../components/ItemComponent";

const HomePage = () => {
    return (
        <div className="max-h-full overflow-hidden">
            <Header />
            <div className="max-w-md m-6 flex flex-col gap-4 overflow-y-scroll">
                <ItemComponent />
                <ItemComponent type="buy"/>
                <ItemComponent type="buy"/>
                <ItemComponent type="room"/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
                <ItemComponent/>
            </div>
        </div>
    );
};

export default HomePage;
