export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6 capitalize">
        {category} Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example product cards - replace with actual data */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div
            key={item}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <div className="bg-gray-200 h-48 rounded mb-4 flex items-center justify-center">
              <span className="text-gray-500">Product Image</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {category} Product {item}
            </h3>
            <p className="text-gray-600 mb-4">
              Description for {category} product {item}
            </p>
            <p className="text-lg font-bold">${(item * 10 + 99).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
