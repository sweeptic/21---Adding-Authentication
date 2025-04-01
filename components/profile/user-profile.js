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

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
