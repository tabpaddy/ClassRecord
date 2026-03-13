import { Button } from "./ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            ClassRecord
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A comprehensive class record management system for schools and educational institutions.
            Manage students, classes, attendance, and grades all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Student Management</h3>
            <p className="text-gray-600">
              Easily manage student information, enrollment, and records.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Class Organization</h3>
            <p className="text-gray-600">
              Organize classes, assign teachers, and track class performance.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Attendance Tracking</h3>
            <p className="text-gray-600">
              Monitor attendance, generate reports, and improve engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
