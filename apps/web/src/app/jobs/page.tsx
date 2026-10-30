'use client';

import { useState } from 'react';
import { CTABanner } from '@/components/organisms/CTABanner';
import { Footer } from '@/components/organisms/Footer';
import { Navbar } from '@/components/organisms/Navbar';
import { JobDetailCard } from './components/JobDetailCard';
import { JobsFeed, type JobSummary } from './components/JobsFeed';
import { JobsHeader } from './components/JobsHeader';

const FIGMA_JOBS: JobSummary[] = [
  {
    id: '1',
    title: 'Sales Coordinator',
    company: 'Agrius IT',
    location: 'Karachi',
    salary: 'Rs 70,000 - Rs 80,000 a month',
    type: 'Full-time',
    description:
      'We are looking for a Sales Coordinator to support the sales team with daily coordination, customer communication, documentation, and sales administration. The ideal candidate should be organized, detail-oriented, and able to coordinate effectively with customers and internal teams.',
    responsibilities: [
      'Coordinate with the sales team to support day-to-day sales activities.',
      'Prepare and maintain quotations, proposals, sales orders, invoices, and other sales documents.',
      'Follow up with customers regarding quotations, orders, payments, and delivery status.',
      'Respond to customer inquiries and provide timely updates.',
      'Coordinate with internal departments regarding order processing, delivery, and customer requirements.',
      'Maintain accurate customer and sales records in the CRM/ERP system.',
      'Prepare regular sales reports and update sales pipelines.',
      'Track sales orders and follow up on pending activities.',
      'Assist the sales team in preparing presentations, proposals, and other business documents.',
      'Coordinate meetings, appointments, and follow-ups with customers and sales representatives.',
    ],
  },
  {
    id: '2',
    title: 'Marketing Manager',
    company: 'BrightWave Solutions',
    location: 'Lahore',
    salary: 'Rs 120,000 - Rs 140,000 a month',
    type: 'Full-time',
    description: 'Lead marketing strategies, campaigns, and digital channels across Pakistan.',
    responsibilities: ['Develop annual marketing strategies', 'Manage advertising campaigns and budgets', 'Analyze campaign metrics'],
  },
  {
    id: '3',
    title: 'Graphic Designer',
    company: 'Creative Minds Studio',
    location: 'Islamabad',
    salary: 'Rs 50,000 - Rs 60,000 a month',
    type: 'Full-time',
    description: 'Design marketing collateral, social media assets, and corporate brand presentations.',
    responsibilities: ['Create visual assets in Figma, Photoshop, Illustrator', 'Collaborate with marketing teams', 'Maintain brand guidelines'],
  },
  {
    id: '4',
    title: 'Software Engineer',
    company: 'TechFlow Systems',
    location: 'Karachi',
    salary: 'Rs 90,000 - Rs 110,000 a month',
    type: 'Full-time',
    description: 'Develop full-stack web and mobile applications using modern frameworks.',
    responsibilities: ['Build scalable REST APIs and responsive UIs', 'Collaborate in agile sprints', 'Write clean unit and integration tests'],
  },
  {
    id: '5',
    title: 'HR Specialist',
    company: 'PeopleFirst HR',
    location: 'Faisalabad',
    salary: 'Rs 55,000 - Rs 65,000 a month',
    type: 'Full-time',
    description: 'Manage recruitment pipelines, onboarding, and employee records.',
    responsibilities: ['Coordinate candidate interviews', 'Administer payroll documentation', 'Enforce workplace policies'],
  },
  {
    id: '6',
    title: 'Data Analyst',
    company: 'Apex Analytics',
    location: 'Multan',
    salary: 'Rs 75,000 - Rs 85,000 a month',
    type: 'Full-time',
    description: 'Extract business insights and build operational dashboards.',
    responsibilities: ['Write SQL queries and ETL scripts', 'Build PowerBI/Tableau dashboards', 'Present reports to leadership'],
  },
  {
    id: '7',
    title: 'Content Writer',
    company: 'WordCraft Media',
    location: 'Peshawar',
    salary: 'Rs 40,000 - Rs 50,000 a month',
    type: 'Full-time',
    description: 'Draft website copy, articles, and corporate newsletters.',
    responsibilities: ['Write SEO-optimized blog posts', 'Proofread marketing communications', 'Conduct market research'],
  },
  {
    id: '8',
    title: 'Project Manager',
    company: 'Summit Build',
    location: 'Quetta',
    salary: 'Rs 130,000 - Rs 150,000 a month',
    type: 'Full-time',
    description: 'Oversee corporate and vocational infrastructure rollout milestones.',
    responsibilities: ['Manage cross-functional project deliverables', 'Track timelines and resource allocations', 'Manage client communications'],
  },
];

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState('All cities');
  const [selectedJob, setSelectedJob] = useState<JobSummary>(FIGMA_JOBS[0] as JobSummary);

  const filteredJobs = FIGMA_JOBS.filter((job) => {
    if (searchQuery && !job.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    if (selectedCity !== 'All cities' && job.location !== selectedCity) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#000000]">
      <Navbar />
      <JobsHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      <main className="py-12">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-start lg:px-8">
          <JobsFeed
            jobs={filteredJobs}
            selectedId={selectedJob.id}
            onSelect={(job) => setSelectedJob(job)}
          />
          {/* Sticky Job Details Pane for Superior UX */}
          <div className="w-full flex-1 lg:sticky lg:top-24">
            <JobDetailCard job={selectedJob} />
          </div>
        </div>
      </main>
      <CTABanner />
      <Footer />
    </div>
  );
}
