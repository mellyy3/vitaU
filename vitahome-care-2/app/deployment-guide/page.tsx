import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Deployment Guide | VITAHOME CARE",
  description: "Learn how to deploy your VITAHOME CARE website using your Hostinger domain.",
}

export default function DeploymentGuidePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Website Deployment Guide</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn how to deploy your VITAHOME CARE website using your Hostinger domain and make future edits.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose max-w-none mb-12">
              <h2>Deploying Your Website with Vercel and Hostinger</h2>
              <p>
                This guide will walk you through the process of deploying your VITAHOME CARE website using Vercel for
                hosting and connecting it to your Hostinger domain. This approach gives you the best of both worlds:
                Vercel's powerful hosting platform for Next.js applications and your existing Hostinger domain.
              </p>
            </div>

            <div className="space-y-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                      1
                    </span>
                    Set Up a GitHub Account
                  </CardTitle>
                  <CardDescription>
                    If you don't already have one, you'll need a GitHub account to store your website code.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Go to{" "}
                      <a
                        href="https://github.com"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com
                      </a>{" "}
                      and sign up for a free account.
                    </li>
                    <li>Verify your email address to activate your account.</li>
                  </ol>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Tip:</strong> Choose a professional username as it may appear in your repository URLs.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                      2
                    </span>
                    Create a New Repository
                  </CardTitle>
                  <CardDescription>Create a repository to store your website code.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Once logged in to GitHub, click the "+" icon in the top right corner and select "New repository".
                    </li>
                    <li>Name your repository (e.g., "vitahome-care-website").</li>
                    <li>Add a description (optional).</li>
                    <li>Choose "Public" visibility (or "Private" if you prefer).</li>
                    <li>Check "Add a README file".</li>
                    <li>Click "Create repository".</li>
                  </ol>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> A public repository means anyone can see your code, but they cannot make
                      changes unless you allow them.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                      3
                    </span>
                    Set Up a Vercel Account
                  </CardTitle>
                  <CardDescription>Vercel is a platform optimized for hosting Next.js applications.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>
                      Go to{" "}
                      <a
                        href="https://vercel.com"
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        vercel.com
                      </a>{" "}
                      and sign up for a free account.
                    </li>
                    <li>Choose "Continue with GitHub" to connect your GitHub account.</li>
                    <li>Follow the prompts to authorize Vercel to access your GitHub repositories.</li>
                  </ol>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Benefit:</strong> Vercel's free tier is generous and includes everything you need for a
                      professional website.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                      4
                    </span>
                    Upload Your Website Code
                  </CardTitle>
                  <CardDescription>Get your website code into your GitHub repository.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>There are two main approaches:</p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-2">Option A: Using GitHub Desktop (Recommended for beginners)</h4>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          Download and install{" "}
                          <a
                            href="https://desktop.github.com/"
                            className="text-primary hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            GitHub Desktop
                          </a>
                          .
                        </li>
                        <li>Sign in with your GitHub account.</li>
                        <li>Clone your repository to your computer.</li>
                        <li>Copy all the website files into the repository folder on your computer.</li>
                        <li>
                          In GitHub Desktop, you'll see all the changes. Add a summary (e.g., "Initial website upload").
                        </li>
                        <li>Click "Commit to main".</li>
                        <li>Click "Push origin" to upload the files to GitHub.</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Option B: Using the GitHub Web Interface</h4>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Navigate to your repository on GitHub.</li>
                        <li>Click "Add file" &gt; "Upload files".</li>
                        <li>Drag and drop your website files or use the file selector.</li>
                        <li>Add a commit message (e.g., "Initial website upload").</li>
                        <li>Click "Commit changes".</li>
                      </ol>
                      <p className="text-sm text-gray-600 mt-2">
                        Note: This method works best for a small number of files. For a complete website, Option A is
                        recommended.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                      5
                    </span>
                    Deploy Your Website on Vercel
                  </CardTitle>
                  <CardDescription>Connect your GitHub repository to Vercel for automatic deployment.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Log in to your Vercel account.</li>
                    <li>Click "Add New..." > "Project".</li>
                    <li>Select your GitHub repository from the list.</li>
                    <li>Vercel will automatically detect that it's a Next.js project.</li>
                    <li>Keep the default settings and click "Deploy".</li>
                    <li>Wait for the deployment to complete (usually takes 1-2 minutes).</li>
                    <li>Once deployed, Vercel will provide you with a URL (e.g., vitahome-care-website.vercel.app).</li>
                  </ol>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Automatic Updates:</strong> Any changes you push to your GitHub repository will
                      automatically trigger a new deployment on Vercel.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                      6
                    </span>
                    Connect Your Hostinger Domain
                  </CardTitle>
                  <CardDescription>Point your existing Hostinger domain to your Vercel deployment.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold mb-2">In your Vercel account:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Go to your project dashboard.</li>
                    <li>Click on "Settings" > "Domains".</li>
                    <li>Enter your domain (e.g., vitahomecare.co.uk) and click "Add".</li>
                    <li>Vercel will provide you with DNS records that you need to add to your Hostinger account.</li>
                  </ol>

                  <h4 className="font-semibold mb-2 mt-6">In your Hostinger account:</h4>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>Log in to your Hostinger control panel.</li>
                    <li>Navigate to "Domains" > select your domain.</li>
                    <li>Go to "DNS / Nameservers" > "DNS records".</li>
                    <li>Add the DNS records provided by Vercel (typically an A record and a few CNAME records).</li>
                    <li>Save the changes.</li>
                  </ol>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> DNS changes can take up to 48 hours to propagate globally, but often happen
                      much faster (within a few hours).
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white">
                      7
                    </span>
                    Making Future Edits to Your Website
                  </CardTitle>
                  <CardDescription>Learn how to update your website content and design.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Option A: Using GitHub's Web Interface (For Small Changes)</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Navigate to your repository on GitHub.</li>
                      <li>Find the file you want to edit and click on it.</li>
                      <li>Click the pencil icon to edit the file.</li>
                      <li>Make your changes.</li>
                      <li>Scroll down, add a commit message describing your changes.</li>
                      <li>Click "Commit changes".</li>
                      <li>
                        Vercel will automatically detect the changes and deploy an updated version of your website.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Option B: Using a Code Editor (For Larger Changes)</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>If you used GitHub Desktop, open the repository folder on your computer.</li>
                      <li>Make changes to the files using a code editor like Visual Studio Code.</li>
                      <li>Save your changes.</li>
                      <li>Open GitHub Desktop, review your changes.</li>
                      <li>Add a summary of your changes.</li>
                      <li>Click "Commit to main".</li>
                      <li>Click "Push origin" to upload your changes to GitHub.</li>
                      <li>Vercel will automatically deploy the updated website.</li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Option C: Hire a Developer for Complex Changes</h4>
                    <p>
                      For more complex changes or new features, you might want to hire a web developer who is familiar
                      with Next.js and React. They can:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Clone your repository</li>
                      <li>Make the necessary changes</li>
                      <li>Test the changes locally</li>
                      <li>Push the changes to GitHub</li>
                      <li>Ensure the deployment is successful</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Tip:</strong> Always make a backup or create a new branch before making significant
                      changes to your website.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Need Additional Help?</h3>
              <p className="mb-4">
                If you need assistance with deploying your website or making changes, there are several resources
                available:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <a
                      href="https://vercel.com/docs"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Vercel Documentation
                    </a>{" "}
                    - Comprehensive guides for deploying and managing your website
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <a
                      href="https://docs.github.com/en"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub Documentation
                    </a>{" "}
                    - Learn how to use GitHub effectively
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <a
                      href="https://nextjs.org/docs"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Next.js Documentation
                    </a>{" "}
                    - Information about the framework your website is built on
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>
                    <a
                      href="https://support.hostinger.com/en"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hostinger Support
                    </a>{" "}
                    - For questions related to your domain and DNS settings
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-secondary hover:bg-secondary/90 text-white">
                <Link href="/contact">
                  Contact Us for Technical Support <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
