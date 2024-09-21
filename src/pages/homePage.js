// Import Components
import { jumboHeader } from "../components/jumboHeader";
import { menu } from "../components/menu";

// echo menu and jumboHeader
function homePage() {
    jumboHeader();
    menu();
}

export { homePage };