
import Layout from "@/components/Layout";
import Head from "@/components/Head";

const Universities = () => {
  return (
    <Layout>
      <Head
        title="Universities | ScholarAI"
        description="Browse top universities around the world"
      />
      
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">Universities</h1>
        <p className="text-gray-600 mb-8">
          Browse through top universities around the world and find the perfect match for your educational journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* This would be populated with actual university data */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold mb-3">Harvard University</h2>
            <p className="text-gray-600">Cambridge, Massachusetts, USA</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold mb-3">Stanford University</h2>
            <p className="text-gray-600">Stanford, California, USA</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-xl font-semibold mb-3">MIT</h2>
            <p className="text-gray-600">Cambridge, Massachusetts, USA</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Universities;
