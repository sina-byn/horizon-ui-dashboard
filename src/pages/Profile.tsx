// * layouts
import MainLayout from '../layouts/MainLayout';

// * components
import ProfileCard from '../features/Profile/ProfileCard';

const Profile = () => {
  return <MainLayout title='Profile'>
    <ProfileCard />
  </MainLayout>;
};

export default Profile;
