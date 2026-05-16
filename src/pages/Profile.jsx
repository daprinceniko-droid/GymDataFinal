import { FrostedCard } from '../components/layout';

export default function Profile() {
  return (
    <div className="w-full overflow-hidden">
      {/* PINK HERO SECTION */}
      <div className="bg-pink-200 pt-24 pb-8 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 font-secondary drop-shadow-lg">
            My Profile
          </h1>
          <p className="text-white text-opacity-90">
            Your personalized settings and information
          </p>
        </div>
      </div>

      {/* MINT CONTENT SECTION */}
      <div className="bg-gradient-to-b from-mint-200 to-mint-300 px-4 py-12 pb-24">
        <div className="max-w-3xl mx-auto">
          <FrostedCard variant="light" className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4 font-secondary">
              Coming Soon
            </h2>
            <p className="text-white text-opacity-90 text-lg">
              Your profile page with saved data and personalization will be available soon!
            </p>
          </FrostedCard>
        </div>
      </div>
    </div>
  );
}


