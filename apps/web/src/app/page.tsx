import { Plus_Jakarta_Sans } from 'next/font/google';
import LandingPage from './_landing/LandingPage';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function HomePage() {
  return (
    <div className={jakarta.className}>
      <LandingPage />
    </div>
  );
}
