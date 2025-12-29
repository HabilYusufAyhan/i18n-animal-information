import { useGlobalStore } from '../../../shared/store/useGlobalStore.js';
import ResultsGrid from '../../../shared/components/data-display/ResultsGrid.js';
function plantPage() {
  const { loading, data } = useGlobalStore();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 p-8">
      <ResultsGrid data={data} loading={loading} />
    </div>
  );
}
export default plantPage;
