import { jobs } from '../components/jobs';
import { jumboHeaderAbout } from '../components/jumboHeaderAbout';

function aboutPage() {
    jumboHeaderAbout();
    jobs();
}

export { aboutPage };