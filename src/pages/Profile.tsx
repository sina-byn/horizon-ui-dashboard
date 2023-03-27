// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import ProfileCard from '../features/Profile/ProfileCard';
import StorageCard from '../features/Profile/StorageCard';
import ImageUpload from '../features/Profile/ImageUpload';

const Profile = () => {
  return <MainLayout title='Profile'>
    <ProfileCard />
    <StorageCard />
    <ImageUpload />
  </MainLayout>;
};

export default Profile;
