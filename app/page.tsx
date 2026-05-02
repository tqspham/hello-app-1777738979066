import Navigation from '@/components/Navigation';
import Greeting from '@/components/Greeting';

export default function Home() {
  return (
    <>
      <Navigation />
      <main
        id="main-content"
        className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <Greeting />
      </main>
    </>
  );
}
