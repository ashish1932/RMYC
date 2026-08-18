import { useState } from 'react';
import { OceanCanvas } from './components/layout/OceanCanvas';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/hero/Hero';
import { StatisticsCounter } from './components/legacy/StatisticsCounter';
import { ExperiencePanels } from './components/experience/ExperiencePanels';
import { TimelineArchive } from './components/legacy/TimelineArchive';
import { FleetViewer } from './components/fleet/FleetViewer';
import { SailingJourney } from './components/courses/SailingJourney';
import { MembershipSection } from './components/membership/MembershipSection';
import { EventDiscovery } from './components/events/EventDiscovery';
import { CorporateSailing } from './components/corporate/CorporateSailing';
import { MemberStoriesCarousel } from './components/community/MemberStoriesCarousel';
import { InstructorShowcase } from './components/instructors/InstructorShowcase';
import { VisualGallery } from './components/gallery/VisualGallery';
import { OceanPreservation } from './components/environment/OceanPreservation';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/layout/Footer';
import { MemberPortalModal } from './components/portal/MemberPortalModal';
import { MembershipFormModal } from './components/membership/MembershipFormModal';

export function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMembershipOpen, setIsMembershipOpen] = useState(false);

  const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);

  const handleOpenMembership = () => setIsMembershipOpen(true);
  const handleCloseMembership = () => setIsMembershipOpen(false);

  const handleOpenCorporate = () => {
    const el = document.getElementById('corporate');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCourse = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f4f8fa] text-slate-900 font-sans relative overflow-x-hidden selection:bg-rmyc-gold selection:text-rmyc-navy">
      {/* Ambient Water Texture Effect */}
      <OceanCanvas />

      {/* Navigation Bar */}
      <Navigation
        onOpenLogin={handleOpenLogin}
        onOpenMembership={handleOpenMembership}
      />

      {/* Main Content Layout */}
      <main className="relative z-10">
        {/* Fullscreen Hero & Journey Selector */}
        <Hero
          onOpenLogin={handleOpenLogin}
          onOpenMembership={handleOpenMembership}
          onOpenCorporate={handleOpenCorporate}
        />

        {/* Statistics & Legacy */}
        <StatisticsCounter />

        {/* The RMYC Experience (3 Interactive Panels) */}
        <ExperiencePanels onOpenMembership={handleOpenMembership} />

        {/* Heritage / 1911 Museum Timeline */}
        <TimelineArchive />

        {/* Interactive Fleet Showcase */}
        <FleetViewer onSelectCourse={handleSelectCourse} />

        {/* YAI Accredited Sailing Academy Courses */}
        <SailingJourney />

        {/* Membership Privileges & Application */}
        <MembershipSection onOpenMembershipModal={handleOpenMembership} />

        {/* Event Discovery Experience */}
        <EventDiscovery />

        {/* Corporate Sailing Experiences */}
        <CorporateSailing />

        {/* Member Testimonials & Stories */}
        <MemberStoriesCarousel />

        {/* Instructors & YAI Masters */}
        <InstructorShowcase />

        {/* Visual Gallery */}
        <VisualGallery />

        {/* Ocean & Environmental Protection */}
        <OceanPreservation />

        {/* Contact & Bay of Bengal Location Map */}
        <ContactSection onOpenMembership={handleOpenMembership} />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenLogin={handleOpenLogin}
        onOpenMembership={handleOpenMembership}
      />

      {/* Member Portal Login Modal */}
      <MemberPortalModal
        isOpen={isLoginOpen}
        onClose={handleCloseLogin}
      />

      {/* Membership Application Modal */}
      <MembershipFormModal
        isOpen={isMembershipOpen}
        onClose={handleCloseMembership}
      />
    </div>
  );
}

export default App;
