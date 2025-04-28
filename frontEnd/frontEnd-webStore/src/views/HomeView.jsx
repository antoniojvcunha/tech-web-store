import Navbar from "../components/Navbar"; 
import HeroSlider from "../components/HeroSlider";
import CategoriesGrid from "../components/CategoriesGrid.jsx";
import BestSellersGrid from "../components/BestSellersGrid.jsx";

function HomeView() {
    return (
    <div>
        <Navbar />
        <HeroSlider />
        <CategoriesGrid />
        <BestSellersGrid />
    </div>
    );
}

export default HomeView;