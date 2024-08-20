export async function generateStaticParams() {
  const paths = [{ id: "1" }, { id: "2" }];

  return paths.map((path) => ({
    id: path.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="relative overflow-hidden bg-slate-200">
      <div className="relative flex items-center justify-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-xl rounded-lg p-8 max-w-lg w-full text-center">
          <h1 className="text-4xl text-gray-700 mb-4">به این صفحه خوش آمدید</h1>
          <p className="text-lg text-gray-700 mb-6">
            این صفحه مربوط به لینک شماره {id} است
          </p>
        </div>
      </div>
    </div>
  );
}
