import ProfileForm from './profile-form';
import classes from './user-profile.module.css';

function UserProfile() {
  //   const { data: session, status } = useSession();

  //   if (status === 'loading') {
  //     return <p className={classes.profile}>Loading...</p>;
  //   }

  // Redirect away if NOT auth

  //   if (!session) {
  //     window.location.href = '/auth';
  //   }

  const onChangePassword = async (passwordData) => {
    const response = await fetch('/api/user/change-password', {
      method: 'PATCH',
      body: JSON.stringify(passwordData),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    console.log('data: ', data);
  };

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={onChangePassword} />
    </section>
  );
}

export default UserProfile;
