import Home from '../views/pages/home';
import SureEksplore from '../views/pages/eksplore';
import TrashDetail from '../views/pages/trash-detail';
import Jenis from '../views/pages/jenis';
import Hasil from '../views/pages/hasil';
import AboutUs from '../views/pages/AbouUs';
import Laporan from '../views/pages/laporan';
import FinishedDetail from '../views/pages/finished-detail';
import ProofUpload from '../views/pages/Proof-Upload';

const routes = {
  '/': Home, // default page
  '/home': Home,
  '/eksplorasi': SureEksplore,
  '/trash/:id': TrashDetail,
  '/jenis': Jenis,
  '/hasil': Hasil,
  '/laporan': Laporan,
  '/aboutus': AboutUs,
  '/finished/:id': FinishedDetail,
  '/ProofUpload': ProofUpload,
};

export default routes;
