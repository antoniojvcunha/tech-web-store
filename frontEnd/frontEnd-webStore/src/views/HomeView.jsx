import Navbar from "../components/Navbar"; 
import HeroSlider from "../components/HeroSlider";
import CategoriesGrid from "../components/CategoriesGrid.jsx";

function HomeView() {
    return (
    <div>
        <Navbar />
        <HeroSlider />
        <CategoriesGrid />
    </div>
    );
}

export default HomeView;