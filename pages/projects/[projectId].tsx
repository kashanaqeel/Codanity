import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Tag, Star } from "lucide-react";
import { Projects } from "@/config/projects";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { projectId } = router.query;

  const project = Projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <>
        <Head>
          <title>Project Not Found - Codanity</title>
        </Head>
        <main className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <p className="text-gray-600 mb-8">The project you&apos;re looking for doesn&apos;t exist.</p>
            <Link
              href="/projects"
              className="bg-[#5128a0] hover:bg-[#3e217e] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Back to Projects
            </Link>
          </div>
        </main>
      </>
    );
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long' 
    });
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Professional":
        return "bg-blue-100 text-blue-800";
      case "Personal":
        return "bg-green-100 text-green-800";
      case "Freelance":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <Head>
        <title>{project.companyName} - Codanity Projects</title>
        <meta name="description" content={project.shortDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[#5128a0] hover:text-[#3e217e] font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden">
                  <Image
                    src={project.companyLogoImg}
                    alt={project.companyName}
                    width={600}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(project.type)}`}>
                    {project.type}
                  </span>
                  {project.category.map((cat, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#5128a0] bg-opacity-10 text-[#5128a0] text-sm font-medium rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  {project.companyName}
                </h1>

                <p className="text-gray-600 text-lg mb-6">
                  {project.shortDescription}
                </p>

                {/* Project Links */}
                <div className="flex gap-4 mb-6">
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </Link>
                  )}
                  {project.websiteLink && (
                    <Link
                      href={project.websiteLink}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-[#5128a0] hover:bg-[#3e217e] text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Visit Website
                    </Link>
                  )}
                </div>

                {/* Date Range */}
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {formatDate(project.startDate)} - {formatDate(project.endDate)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex items-center gap-2 mb-6">
              <Tag className="w-6 h-6 text-[#5128a0]" />
              <h2 className="text-2xl font-bold text-gray-900">Tech Stack</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
            <div className="space-y-4 mb-6">
              {project.descriptionDetails.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
            <ul className="space-y-2">
              {project.descriptionDetails.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-[#5128a0] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Page Information */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Screenshots</h2>
            <div className="space-y-8">
              {project.pagesInfoArr.map((page, index) => (
                <div key={index} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{page.title}</h3>
                  {page.description && (
                    <p className="text-gray-600 mb-4">{page.description}</p>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {page.imgArr.map((img, imgIndex) => (
                      <div key={imgIndex} className="relative h-48 rounded-lg overflow-hidden">
                        <Image
                          src={img}
                          alt={`${page.title} screenshot ${imgIndex + 1}`}
                          width={400}
                          height={192}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Projects */}
          <div className="text-center py-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-[#5128a0] hover:bg-[#3e217e] text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
