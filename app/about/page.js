import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Get Me A Coffee</title>
        <meta name="description" content="Learn more about Get Me A Coffee, a platform that helps creators raise funds for their projects." />
      </Head>
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full space-y-8">
          <div>
            <h1 className="text-center text-4xl font-extrabold text-white">
              About Us
            </h1>
            <p className="mt-2 text-center text-lg text-white">
              Empowering creators to bring their projects to life.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
              At Get Me A Coffee, we believe in the power of creativity and innovation. Our goal is to support creators by offering a user-friendly platform that makes fundraising straightforward and accessible. We are dedicated to helping you connect with a community of backers who are passionate about your work.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-4">
              <li>User-Friendly Interface: Built with the latest technologies, our platform offers an intuitive and responsive design, ensuring a smooth experience on any device.</li>
              <li>Powerful Tools: Utilizing Next.js and Tailwind CSS, Get Me A Coffee is optimized for performance and scalability, providing you with a reliable service.</li>
              <li>Community Focused: We foster a supportive environment where creators can share their journeys, gain insights, and receive constructive feedback from peers and backers.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Technology</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our website is built using Next.js and Tailwind CSS, ensuring a fast, responsive, and visually appealing platform. These technologies allow us to deliver a seamless user experience, whether you`re browsing on a desktop, tablet, or mobile device.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Join Us</h2>
            <p className="text-lg text-gray-700">
              Be a part of a thriving community of creators and backers. Start your journey with Get Me A Coffee today and turn your creative dreams into reality. Together, we can make extraordinary things happen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

// either Static metadata
export const metadata = {
    title: "About - Get Me A Coffee",
}