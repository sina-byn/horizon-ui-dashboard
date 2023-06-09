// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import ProfileCard from '../features/Profile/ProfileCard';
import StorageCard from '../features/Profile/StorageCard';
import ImageUpload from '../features/Profile/ImageUpload';
import Projects from '../features/Profile/Projects';
import GeneralInformation from '../features/Profile/GeneralInformation';
import Notifications from '../features/Profile/Notifications';

const Profile = () => {
  return <MainLayout title='Profile'>
    <ProfileCard />
    <StorageCard />
    <ImageUpload />
    <Projects />
    <GeneralInformation />
    <Notifications />
  </MainLayout>;
};

export default Profile;
