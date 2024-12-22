import { Video } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function StreamEmptyState() {
  return (
    <div className="text-center py-12">
      <Video className="mx-auto h-12 w-12 text-muted-foreground" />
      <h3 className="mt-4 text-lg font-semibold">No streams yet</h3>
      <p className="mt-2 text-muted-foreground">
        Get started by creating your first stream
      </p>
      <Button asChild className="mt-4">
        <Link to="/dashboard/create-stream">Create Stream</Link>
      </Button>
    </div>
  );
}