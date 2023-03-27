// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import ProfileCard from '../features/Profile/ProfileCard';
import StorageCard from '../features/Profile/StorageCard';

const Profile = () => {
  return <MainLayout title='Profile'>
    <ProfileCard />
    <StorageCard />
  </MainLayout>;
};

export default Profile;
