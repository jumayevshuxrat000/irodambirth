import HeroSection from './components/HeroSection.jsx'
import TeaserSection from './components/TeaserSection.jsx'
import PhotoWall from './components/PhotoWall.jsx'
import MusicSection from './components/MusicSection.jsx'
import LetterSection from './components/LetterSection.jsx'
import VideoSection from './components/VideoSection.jsx'
import FinalSection from './components/FinalSection.jsx'

export default function App() {
  return (
    <div className="app">
      <HeroSection />
      <TeaserSection />
      <PhotoWall />
      <MusicSection />
      <LetterSection />
      <VideoSection />
      <FinalSection />
    </div>
  )
}
