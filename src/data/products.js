import writingImg from '../assets/writing_2327400 1.png';
import designImg from '../assets/design-tool.png';
import cameraImg from '../assets/Camera.png';
import operationImg from '../assets/operation.png';
import portfolioImg from '../assets/portfolio.png';
import socialImg from '../assets/social-media.png';

const productsData = [
  {
    id: 1,
    name: "AI Writing Pro",
    description: "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    price: 29,
    period: "Month",
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["Unlimited AI generations", "50+ writing templates", "Grammar checker"],
    image: writingImg
  },
  {
    id: 2,
    name: "Design Templates Pack",
    description: "2000+ premium templates for social media, presentations, and marketing materials.",
    price: 49,
    period: "One-Time",
    tag: "Popular",
    tagType: "popular",
    features: ["2000+ templates", "Monthly updates", "Commercial license"],
    image: designImg
  },
  {
    id: 3,
    name: "Premium Stock Assets",
    description: "Access millions of royalty-free photos, videos, and graphics for your projects.",
    price: 19,
    period: "Month",
    tag: "New",
    tagType: "new",
    features: ["10M+ assets", "Commercial use", "No attribution"],
    image: cameraImg
  },
  {
    id: 4,
    name: "Automation Toolkit",
    description: "Automate repetitive tasks and streamline your workflow with powerful tools.",
    price: 79,
    period: "Month",
    tag: "Popular",
    tagType: "popular",
    features: ["50+ automations", "API access", "Custom workflows"],
    image: operationImg
  },
  {
    id: 5,
    name: "Resume Builder Pro",
    description: "Create professional resumes and cover letters that land interviews.",
    price: 15,
    period: "One-Time",
    tag: "New",
    tagType: "new",
    features: ["100+ templates", "ATS optimization", "Export to PDF"],
    image: portfolioImg
  },
  {
    id: 6,
    name: "Social Media Content Kit",
    description: "Complete toolkit for creating engaging social media content across all platforms.",
    price: 39,
    period: "Month",
    tag: "Best Seller",
    tagType: "best-seller",
    features: ["5000+ assets", "Scheduler included", "Analytics dashboard"],
    image: socialImg
  }
];

export default productsData;
