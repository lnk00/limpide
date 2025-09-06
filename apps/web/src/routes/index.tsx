import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	return <h1 className="bg-red-1000">It works!</h1>;
}
