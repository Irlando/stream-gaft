import { StreamGrid } from '@/components/stream/StreamGrid';
import { StreamEmptyState } from '@/components/stream/StreamEmptyState';
import { useStreams } from '@/hooks/useStreams';
//import { id } from 'date-fns/locale';

export function MyStreamsPage() {
 
  const { streams, isLoading } = useStreams();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Streams</h1>
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : streams.length > 0 ? (
        <StreamGrid streams={streams} />
      ) : (
        <StreamEmptyState />
      )}
    </div>
  );
}